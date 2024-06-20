package com.example.producto.model;

/**
 * Clase que representa un producto de la base de datos
 * @author full stack Java 
 */
public class Producto {
    private Integer id;
    private String title;
    private String descripcion;
    private Double precio;
    private String image;


    public Producto(Integer id, String title, String descripcion, Double precio, String image) {
        this.id = id;
        this.title = title;
        this.descripcion = descripcion;
        this.precio = precio;
        this.image = image;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Double getPrecio() {
        return precio;
    }

    public void setPrecio(Double precio) {
        this.precio = precio;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    
    
}
