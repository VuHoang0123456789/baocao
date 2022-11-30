const express = require('express')
const path = require('path');
const handlebars  = require('express-handlebars');
const router = require('./routers/index');
const db = require('./config/db');
const app = express()
const port = 3000

//xu ly body gui len tu client
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
//connect db
db.connect();

//teamplace engine
app.engine('.hbs', handlebars.engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views',path.join(__dirname, 'resources/views' ));
router(app);

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
})
