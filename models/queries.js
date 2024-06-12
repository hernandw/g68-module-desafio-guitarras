import { pool } from "../config/db.js";

// Función para insertar datos en la base de datos

export const addGuitarQuery = async (
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
  ) => {
    try {
      const sql = {
        text: "INSERT INTO guitars  VALUES(DEFAULT, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10) returning *",
        values: [
          name,
          brand,
          model,
          body,
          color,
          pickups,
          string,
          price,
          stock,
          imageUrl,
        ],
      };


      const reponse = await pool.query(sql);
      if (reponse.rowCount > 0) {
        return reponse.rows[0];
      } else {
        return new Error("Error adding guitar");
      }
    } catch (error) {
      console.log("Error code: ", error.code + " Error message: ", error.message);
    }
  };

  export const getGuitarsQuery = async () => {
    try {
      const sql = {
        text: "SELECT * FROM guitars",
      };
  
      const response = await pool.query(sql);
      if (response.rowCount > 0) {
        
        return response.rows;
      } else {
        return new Error("Error getting guitars");
      }
    } catch (error) {
      console.log("Error code: ", error.code + " Error message: ", error.message);
    }
  };

  export const getGuitarByIdQuery = async (id) => {
    try {
      const sql = {
        text: "SELECT * FROM guitars WHERE id = $1",
        values: [id],
      };
      const response = await pool.query(sql);
      if (response.rowCount > 0) {
        return response.rows[0];
      } else {
        return new Error("Error getting guitar");
      }
    } catch (error) {
      console.log("Error code: ", error.code + " Error message: ", error.message);
    }
  };