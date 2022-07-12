let listarProducto=[];
let listarCarro =[];
let curso;


class Producto{
    constructor(nombre, precio, stock) {
        this.precio = precio;
        this.stock = stock;
        this.nombre = nombre;
    }
}
class Carrito{
  constructor(nombre, precio) {
      this.precio = precio;
      this.nombre = nombre;
  }
}
let j=0;
listarProducto[j++]= new Producto("Java",2000);
listarProducto[j++]= new Producto("Spring",1500);
listarProducto[j++]= new Producto("Angular",3000);


function seleccionCarrito(curso) {
  switch (curso) {
    case 0:
      if (listarProducto[curso].stock < 1) {
        alert("no hay curso disponible");  
      } else {
        
        agregarCarrito(listarProducto[curso],listarCarro);

        alert("Curso agregado al carrito");
        console.log("Curso agregado al carrito");
      }
      console.log(listarCarro);
  
    
      break;
    case 1:
      if (listarProducto[curso].stock < 1) {
        alert("No hay más vacantes en el curso");  
      } else {
        
        agregarCarrito(listarProducto[curso],listarCarro);
        
        alert("Curso agregado al carrito");
        console.log("Curso agregado al carrito");
      }
      console.log(listarCarro);
      
      break;
    case 2:
      
      if (listarProducto[curso].stock < 1) {
        alert("No hay más vacantes en el curso");  
      } else {
        
        agregarCarrito(listarProducto[curso],listarCarro);
        
        alert("Curso agregado al carrito");
        console.log("Curso agregado al carrito");
      }
      console.log(listarCarro);
      
      break;
    default:
        alert("error de producto")
      break;
  }
}

function agregarCarrito(objeto,listarCarro) {

  let n =objeto.nombre
  let p =objeto.precio;
  const a = new Carrito(n,p);
  listarCarro.push(a);
}

function calculaCompra(){
  let monto=0;
    for (let index = 0; index < listarCarro.length; index++) {
      monto+= listarCarro[index].precio;
    }
    return monto;
}

function finalizar() {

    console.log("Los productos del carrito son:");
    for (let index = 0; index < listarCarro.length; index++) {
      console.log("-"+listarCarro[index].nombre)
    } 
    alert(`El total de la comptra es: $${(calculaCompra().toFixed(2))}`);  
}
function reiniciar(){
    
    listarCarro =[];
    console.log("------------------------------");
   
}
