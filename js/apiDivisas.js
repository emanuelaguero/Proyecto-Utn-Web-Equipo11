window.addEventListener('load', () => {
let urlDivisas="https://www.dolarsi.com/api/api.php?type=valoresprincipales"
let venta
let nombre
const api=new XMLHttpRequest();
api.open('GET',urlDivisas,true);
api.send();
api.onreadystatechange=function(){
    if(this.status==200 && this.readyState==4){
    
        let datos=JSON.parse(this.responseText);
        let resultadoCompra=document.querySelector("#resultadoCompra")
        let resultadoVenta=document.querySelector("#resultadoVenta")
        let resultadoNombre=document.querySelector("#resultadoNombre")
        let compra
        compra=datos[1].casa.compra
        
        venta=datos[1].casa.venta
        
        nombre=datos[1].casa.nombre
        resultadoCompra.innerHTML=compra
        resultadoVenta.innerHTML=venta
        resultadoNombre.innerHTML=nombre
         /* PONGO EL VALOR EN EL LOCALSTORAGE */
        localStorage.setItem('ventaDolar',venta)
        
      
    }
}
})
