package com.example.productos.dao;

import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.example.productos.db.MySQLConnector;
import com.example.productos.model.Producto;

/**
 * Clase que tiene todas las consultas sql, upd, del, insert
 * sobre la tabla Productos
 */
public class ProductoDAO {
    private Statement st;

    
    public ProductoDAO() {
       //cuando creo producto dao me conecto a la db
       MySQLConnector mysql=new MySQLConnector();
       st=mysql.conectarDB();
       
    }



    public List<Producto> listarProductos() {
        try {
            // consulto a la db el lsitado de películas
            ResultSet rs=st.executeQuery("SELECT * FROM producto");
            
            // recorro cada uan de las películas
            List<Producto> listProd=new ArrayList<Producto>();
            while (rs.next()) {
                Producro producto=new Producto(rs.getInt("id"), rs.getString("title"), rs.getString("descripcion"), rs.getDouble("precio"), rs.getString("image"));
                listProd.add(producto);
                System.out.println("id:" +  rs.getString("id") + " titulo: " + rs.getString("title"));
            }

            return listProd;


        } catch (Exception e) {
            e.printStackTrace();
        }
        
        return null;
    }
    
           }
  
