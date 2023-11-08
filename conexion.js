let mysql = require("mysql");

let conexion =  mysql.createConnection({
  host: "localhost", 
  database: "stechcolombia",
  user: "root",
  password: "" 
})

 conexion.connect(function(error){
  if(error){
    throw error;
  }else{
    console.log("conexion exitosa");
  }
});

//conexion.end();//

const categoria_productos = "SELECT * FROM productos";

conexion.query(categoria_productos,function(error,lista){
  if(error){
    throw error;  
  }else{
    console.log(lista[0]);
  }
})

conexion.end();