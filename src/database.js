import mongoose from 'mongoose';
import config from 'config';

mongoose.Promise = Promise;

const mongodbUrl = config.get('DATABASE.MONGO_URL');
const connect = () => mongoose.connect(mongodbUrl, { useNewUrlParser: true });

export default {
    connect
}