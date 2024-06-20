package com.example.productos.db;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class MySQLConnector {

    // public static void main(String[] args) {

    //     // Conexión a la base de datos
    //     try {
    //         Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/pelis24118", "root", "");

    //         // Creación de un statement para ejecutar consultas
    //         Statement statement = connection.createStatement();

    //         // Ejecución de la consulta
    //         // en resultset tengo todas las películas traidas desde mysql
    //         ResultSet resultSet = statement.executeQuery("SELECT * FROM peliculas");

    //         // Procesamiento de los resultados
    //         while (resultSet.next()) {
    //             System.out.println("id:" +  resultSet.getString("id") + " titulo: " + resultSet.getString("titulo"));
                
    //         }
    //     } catch (Exception e) {
    //         e.printStackTrace();
    //     }
    // }
    //public static Statement conectarDB(){
    public Statement conectarDB() {
        // Conexión a la base de datos
        try {
            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/cafeteria", "root", "");

            // Creación de un statement para ejecutar consultas
            Statement statement = connection.createStatement();

            return statement;

        // si en try hay algún error salta por el catch; por ej está caida la bd
        } catch (Exception e) {
            e.printStackTrace();
        }

        return null;
    }
}
