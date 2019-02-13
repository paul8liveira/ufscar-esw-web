import i18nMongooseError from 'mongoose-i18n-error';
let mongooseErrorHandler = new i18nMongooseError();

module.exports = {
    handler: mongooseErrorHandler.handler(function(err, req, res, next) {
        res.status(err.status || 500).json(err);
    })
}