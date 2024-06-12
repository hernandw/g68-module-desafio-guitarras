import express from 'express';
import { home, about, contact, addGuitarForm, addGuitar, getGuitars, getGuitarById } from '../controller/controller.js';
const router = express.Router()

router.get('/', home)

router.get('/about', about)

router.get('/contact', contact)

router.get('/addGuitar', addGuitarForm)

router.post('/guitars/add', addGuitar)

router.get('/guitars', getGuitars)

router.get('/guitar/:id', getGuitarById)

router.get('*', (req, res)=>{
res.send('404 - page not found')
})


export default router