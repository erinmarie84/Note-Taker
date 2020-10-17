const express = require('express');
const APIroutes = require('./routes/APIroutes.js');
const HTMLroutes = require('./routes/HTMLroutes.js');

const app = express();
const PORT = process.env.PORT || 9000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static('public'));
app.use('/api', APIroutes);
app.use('/', HTMLroutes);

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))