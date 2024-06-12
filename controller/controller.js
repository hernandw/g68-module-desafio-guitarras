import { addGuitarQuery, getGuitarsQuery, getGuitarByIdQuery, filtrosBrandsQuery,
  filtrosBodyQuery   } from "../models/queries.js";
import { v4 as uuidv4 } from "uuid";

export const home = async(req, res) => {
    res.render('inicio', {
        title: 'Home Page',
        products: await getGuitarsQuery(),
        brands: await filtrosBrandsQuery(),
        bodyTypes: await filtrosBodyQuery()
        
    })
} 

export const about = (req, res) => {
    res.render('about', {
        title: 'About Page'
    })
}

export const contact = (req, res) => {
    res.render('contact', {
        title: 'Contact Page'
    })
}

export const addGuitarForm = (req, res) => {
    res.render('addGuitar', {
        title: 'Guitar Form'
    })
}

export const addGuitar = async (req, res) => {
    try {
      const { name, brand, model, body, color, pickups, string, price, stock } =
        req.body;
      const { image } = req.files;
  
      const imageName = uuidv4().slice(0, 8);
      const imageUrl = `/uploads/${imageName}.png`;
  
      image.mv(`./public/uploads/${imageName}.png`);
  
      await addGuitarQuery(
        name,
        brand,
        model,
        body,
        color,
        pickups,
        string,
        price,
        stock,
        imageUrl
      );
      res.status(201).redirect("/");
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

  export const getGuitars = async (req, res) => {
    try {
      const response = await getGuitarsQuery();
      console.log(response);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

  export const getGuitarById = async (req, res) => {
    try {
      const guitarId = req.params.id;
      res.render('product',{
        title: 'Details Page',
        guitar: await getGuitarByIdQuery(guitarId)
      })
      
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

  export const updateGuitarForm = async (req, res) => {
    try {
      const guitarId = req.params.id;
      const guitar = await getGuitarByIdQuery(guitarId);
      res.render('updateGuitar', {
        title: 'Update Guitar Form',
        guitar
      });
    } catch (error) {
      res.status(500).send(error.message);
    }
  };