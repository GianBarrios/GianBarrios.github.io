

import mongoose, { connect } from 'mongoose';

const dbURL = 'mongodb://localhost:27017/funsalud';

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

connect(dbURL, options)
.then(() => {
    console.log('conexion a MongoDB establecida correctamente');
})
.catch((err) => {
    console.error('error al conectar con MongoDB:', err);
})

export default mongoose;