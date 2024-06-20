package com.example.productos;

import com.example.productos.dao.ProductoDAO;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args ) {
        
        ProductoDAO productoDAO=new ProductoDAO();
        productoDAO.listarProductos();
    }
}
