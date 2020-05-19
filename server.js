const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./src/database/index'); 
const cors = require('cors');

const port = process.env.PORT || 4500;
const user = require('./src/routes/user/user');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/user',user);

app.listen(port,()=>{
    console.log(`SERVER RUNNING ON PORT ${port} \nin ${new Date()}`);
})