import express from "express";
import bodyParser from "body-parser";
import routes from "./routes";
import database from "./database";
import i18n from "./middlewares/i18n";
import error from "./middlewares/errorHandler";

const app = express();

/*configureExpress que terá a tarefa de configurar o express e
retornar uma nova instância de aplicação configurada.*/
const configureExpress = () => {
    app.use(bodyParser.json());
    
    //globalização
    app.use(i18n);  

    //rotas da api
    app.use("/", routes);    

    /*ERROR HANDLING*/
    app.use(error.handler); 

    return app;
};

/*inicializar o banco antes da aplicação. A função database.connect() retorna
uma Promise, aguardo ela ser resolvida para então chamar que configura o express:*/
export default () => database.connect().then(configureExpress);
