import express from 'express';
import routes from './routes/router.js'
import { engine } from 'express-handlebars';
import expressFileUpload from 'express-fileupload';
const app = express();
const PORT = process.env.PORT || 3000;

//Motor de Plantilla
app.engine('hbs', engine({
    extname: '.hbs',
}));
app.set('view engine', 'hbs');
app.set('views', './views');


//Carpeta publica
app.use(express.static('public'));

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
;
app.use(expressFileUpload({
    limits: { fileSize: 900000 },
    responseOnLimit: 'El archivo es demasiado grande',
    abortOnLimit: true
}));

//Routes
app.use('/', routes)


app.listen(PORT, () => console.log(`Example app listening on port http://localhost:${PORT}`));