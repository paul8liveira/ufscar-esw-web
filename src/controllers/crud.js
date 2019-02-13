import Crud from '../models/crud';

class CrudController {        
    get(req, res, next) {        
        Crud.find({})
            .then(crud => res.send(crud))
            .catch(err => {
                return next(err);
            });
    }    
    insert(req, res, next) { 
        let crud = new Crud(req.body);        
        crud.save()
            .then(crud => res.json(crud))
            .catch(err => {
                return next(err);
            });
    }  
    update(req, res, next) {   
        Crud.findByIdAndUpdate(req.body.id, req.body, { new: true }, (err, crud) => {
            if (err) return next(err);
            return res.json(crud);
        });
    }
    delete(req, res, next) {   
        Crud.findByIdAndRemove(req.body.id, (err, crud) => {
            if (err) return next(err);
            return res.json(crud);
        });
    }              
    mock(req, res, next) { 
        let data = [];
        for(let i = 0; i < 10; i++) {
            data.push({
                name: `nome mock ${i+1}`,
                description: `descrição mock ${i+1}`
            });
        }
        
        Crud.deleteMany({})
        .then(() => {
            Crud.insertMany(data)
                .then(crud => res.json(crud))
                .catch(err => {
                    return next(err);
                });
        })
    }    
}

export default CrudController;