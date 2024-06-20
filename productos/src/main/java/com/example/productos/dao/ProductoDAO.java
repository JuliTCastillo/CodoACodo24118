package com.example.productos.dao;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.sql.PreparedStatement;
import java.sql.SQLException;
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

    public void addProducto(Producto producto) throws SQLException {
        String sql = "INSERT INTO productos (title, descripcion, precio, image) VALUES (?, ?, ?, ?)";
        try (Connection conn = st.getConnection();
            PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setString(1, producto.getTitle());
            pstmt.setString(2, producto.getDescripcion());
            pstmt.setDouble(3, producto.getPrecio());
            pstmt.setString(4, producto.getImage());
            pstmt.executeUpdate();
        }
    }
    
    
     public void updateProducto(Producto producto) throws SQLException {
        String sql = "UPDATE productos SET title = ?, descripcion = ?, precio = ?, image = ? WHERE id = ?";
        try (Connection conn = st.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
             pstmt.setString(1, producto.getTitle());
             pstmt.setString(2, producto.getDescripcion());
             pstmt.setDouble(3, producto.getPrecio());
             pstmt.setString(4, producto.getImage());
             pstmt.setInt(5, producto.getId());
             pstmt.executeUpdate();
        }
    }

    public void deleteProducto(Integer id) throws SQLException {
        String sql = "DELETE FROM productos WHERE id = ?";
        try (Connection conn = st.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
             pstmt.setInt(1, id);
             pstmt.executeUpdate();
        }
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
