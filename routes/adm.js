const express = require('express');
const router = express.Router();
const datab = require('../config/database');
const User = require('../models/User')


const clientController = require('../controllers/admController');

/*
router.get('/', clientController.list);
router.get('/delete/:id', clientController.delete);
*/
router.get('/',(req, res) => 
    User.findAll()
    .then(clients => {
        res.render('clients',{
           clients 
        });
        
    })
        
    .catch(err => console.log(err)));

    router.get('/add', (req,res) => res.render('add'));
    // add client
    
    router.post('/add', (req,res) =>{
        const data = {
            Nombre : 'Alberto Pereira',
            Correo : 'alberto.pereira@correo.unimet.edu.ve',
            Telefono : '04123359637',
            Nacionalidad : 'Venezuela'

        }

        let { Nombre, Correo, Telefono, Nacionalidad} = data;

        User.create({
            Nombre,
            Correo,
            Telefono,
            Nacionalidad
        })
        .then(clients => res.redirect('/adm'))
        .catch(err => console.log(err))

    });




module.exports = router;