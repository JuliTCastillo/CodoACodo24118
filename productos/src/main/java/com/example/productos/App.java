package com.example.productos;

import com.example.productos.dao.ProductoDAO;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args ) {
        // al instanciar ProductoDAO ya establezco la conexion
        ProductoDAO productoDAO=new ProductoDAO();
        productoDAO.listarProductos();
            // Crear un nuevo producto
        Producto nuevoProducto = new Producto();
        nuevoProducto.setTitle("Frapuccino Light");
        nuevoProducto.setDescripcion("Importado de Paris, 30% menos calorias");
        nuevoProducto.setPrecio(129.99);
        nuevoProducto.setImage("https://picimage/jdneu16363;$+$+26.jpg");
        
            // CRUD
             // Agregar un producto
        dao.addProducto(nuevoProducto);
        System.out.println("Producto agregado exitosamente.");

            // Actualizar el producto
        nuevoProducto.setId(1); 
        nuevoProducto.setTitle("Producto Actualizado");
        dao.updateProducto(nuevoProducto);
        System.out.println("Producto actualizado exitosamente.");

            // Eliminar el producto
        dao.deleteProducto(1); 
        System.out.println("Producto eliminado exitosamente.");
        
        
        
    }
}
