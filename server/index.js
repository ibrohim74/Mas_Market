require('dotenv').config()
const express = require('express');
const sequelize = require('./db');
const models = require('./moduls/moduls');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const router = require('./routes/index');
const errorHandling = require('./middleware/ErrorHandlingMiddleware')
const PORT =process.env.PORT || 5000;
const app = express();
const path = require('path')

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname,"static")))
app.use(fileUpload({}))
app.use('/api' , router)
// error funktsiyasi
app.use(errorHandling)
const start = async ()=>{
    try {
        await sequelize.authenticate();
        await sequelize.sync()
        app.listen(PORT, ()=>console.log('server started '+PORT))
    }catch (e) {
        console.log(e)
    }
}
start()

