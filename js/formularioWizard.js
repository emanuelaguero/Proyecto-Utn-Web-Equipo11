
const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
// const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;
//Agregamos metodos letras y mail a la validacion solo letras
jQuery.validator.addMethod("letrasSolo", function (value, element) {
    return this.optional(element) || /^[a-z]+$/i.test(value);
}, "No se Aceptan numeros")
jQuery.validator.addMethod("mailSolo", function (value, element) {
    return this.optional(element) || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(value);
}, "No es una direccion de mail")

let nombre, apellido, dni, mail, telefono, servicio, tipo, comentario,precioServicio
let banderaNombre, banderaApellido, banderaDni, banderaMail, banderaTelefono, banderaServicio, banderaServicioDetalle, banderaComentario
nextBtnFirst.addEventListener("click", function (event) {
    event.preventDefault();
    nombre = document.querySelector("#nombre").value
    apellido = document.querySelector("#apellido").value
    dni = document.querySelector("#dni").value

    if (nombre === "") {
        document.querySelector("#errorNombre").textContent = "Requerido"
        document.querySelector("#nombre").style.border="2px solid red"
        banderaNombre = false
    } else if (/^[a-z]+$/i.test(nombre)) {
        document.querySelector("#errorNombre").textContent = ""
        document.querySelector("#nombre").style.border=""
        banderaNombre = true
    } else {
        document.querySelector("#errorNombre").textContent = "No ingrese Numeros"
        banderaNombre = false
    }

    if (apellido === "") {
        document.querySelector("#errorApellido").textContent = "Requerido"
        document.querySelector("#apellido").style.border="2px solid red"
        banderaApellido = false
    } else if (/^[a-zü]+$/i.test(apellido)) {
        document.querySelector("#errorApellido").textContent = ""
        document.querySelector("#apellido").style.border=""
        banderaApellido = true
    } else {
        document.querySelector("#errorApellido").textContent = "No ingrese Numeros"
        document.querySelector("#apellido").style.border="2px solid red"
        banderaApellido = false
    }
    if (dni === "") {
        document.querySelector("#errorDni").textContent = "Requerido"
        document.querySelector("#dni").style.border="2px solid red"
        banderaDni = false
    } else if (dni.length >= 7 && dni.length <= 8) {
        document.querySelector("#errorDni").textContent = ""
        document.querySelector("#dni").style.border=""
        banderaDni = true
    } else {
        document.querySelector("#errorDni").textContent = "Dni debe tener de 7 a 8 caracteres"
        document.querySelector("#dni").style.border="2px solid red"
        banderaDni = false
    }


    if (banderaNombre && banderaApellido && banderaDni) {
        event.preventDefault();
        slidePage.style.marginLeft = "-25%";
        bullet[current - 1].classList.add("active");
        progressCheck[current - 1].classList.add("active");
        progressText[current - 1].classList.add("active");
        current += 1;
        document.querySelector("#nombreResumen").innerHTML = nombre
        document.querySelector("#apellidoResumen").innerHTML = apellido
        document.querySelector("#dniResumen").innerHTML = dni


    }

});




nextBtnSec.addEventListener("click", function (event) {

    mail = document.querySelector("#mail").value
    telefono = document.querySelector("#telefono").value
    document.querySelector("#mailResumen").innerHTML = mail
    document.querySelector("#telefonoResumen").innerHTML = telefono

    event.preventDefault();
    if (mail === "") {
        document.querySelector("#errorMail").textContent = "Requerido"
        document.querySelector("#mail").style.border="2px solid red"
        banderaMail = false
    } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail)) {
        document.querySelector("#errorMail").textContent = ""
        document.querySelector("#mail").style.border=""
        banderaMail = true
    } else {
        document.querySelector("#errorMail").textContent = "No es un mail Valido"
        document.querySelector("#mail").style.border="2px solid red"
        banderaMail = false
    }
    if (telefono === "") {
        document.querySelector("#errorTelefono").textContent = "Requerido"
        document.querySelector("#telefono").style.border="2px solid red"
        banderaTelefono = false
    } else {
        document.querySelector("#errorTelefono").textContent = ""
        document.querySelector("#telefono").style.border=""
        banderaTelefono = true
    }

    if (banderaMail && banderaTelefono) {
        event.preventDefault();
        slidePage.style.marginLeft = "-50%";
        bullet[current - 1].classList.add("active");
        progressCheck[current - 1].classList.add("active");
        progressText[current - 1].classList.add("active");
        current += 1;
      
    }


});
nextBtnThird.addEventListener("click", function (event) {

    servicio = document.querySelector("#servicio").value
    tipo = document.querySelector("#tipo").value
    comentario = document.querySelector("#comentario").value
    document.querySelector("#servicioResumen").innerHTML = servicio
    document.querySelector("#tipoResumen").innerHTML = tipo
    document.querySelector("#comentarioResumen").innerHTML = comentario

    event.preventDefault();
    if (servicio === "0") {
        document.querySelector("#errorServicio").textContent = "Requerido"
        document.querySelector("#servicio").style.border="2px solid red"
        
        banderaServicio = false
    } else {
        document.querySelector("#errorServicio").textContent = ""
        document.querySelector("#servicio").style.border=""
        banderaServicio = true
    }
    if (tipo === "-") {
        document.querySelector("#errorServicioDetalle").textContent = "Requerido"
        document.querySelector("#tipo").style.border="2px solid red"
        banderaServicioDetalle = false
    } else {
        document.querySelector("#errorServicioDetalle").textContent = ""
        document.querySelector("#tipo").style.border=""
        banderaServicioDetalle = true
    }

    if (banderaServicio&&banderaServicioDetalle) {
        event.preventDefault();
        slidePage.style.marginLeft = "-75%";
        bullet[current - 1].classList.add("active");
        progressCheck[current - 1].classList.add("active");
        progressText[current - 1].classList.add("active");
        current += 1;
        
        //Se llama a la funcion calcular precio
        precioServicio=calcularPrecioServicio(servicio,tipo)
        alert(precioServicio)
       

    }

});
// submitBtn.addEventListener("click", function () {
//     bullet[current - 1].classList.add("active");
//     progressCheck[current - 1].classList.add("active");
//     progressText[current - 1].classList.add("active");
//     current += 1;
//     setTimeout(function () {
//         alert("Your Form Successfully Signed up");
//         location.reload();
//     }, 800);
// });




prevBtnSec.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "0%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;


});
prevBtnThird.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-25%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;

});
prevBtnFourth.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-50%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;



});



let option





s_ServicioTecnico = ["-", "Soporte Basico", "Soporte Medio", "Soporte Alto"]
s_Programacion = ["-", "Diseño", "Diseño+Programacion", "Diseño+Programacion+Administracion"]
s_Camaras = ["-", "Instalación", "Insta+Mantenimiento", "Inst+Manten+Administracion"]

let resultado
const llenarDetalle = () => {
    servicio = document.fCotizar.servicio[document.fCotizar.servicio.selectedIndex].value

    if (servicio !== 0) {
        resultado = eval("s_" + servicio)
        console.log("s_" + servicio)
        document.fCotizar.tipo.length = resultado.length
        for (i = 0; i < resultado.length; i++) {
            document.fCotizar.tipo.options[i].value = resultado[i]
            document.fCotizar.tipo.options[i].text = resultado[i]

        }


    } else {
        document.fCotizar.tipo.length = 1
        document.fCotizar.tipo.options[i].value = "-"
        document.fCotizar.tipo.options[i].text = "-"
    }

}
//Funcion calcular Precio servicio
const calcularPrecioServicio=(servicio,tipo)=>{
    alert("entro")
if(servicio==="ServicioTecnico"){
    if(tipo==="Soporte Basico"){
        return 5000
    }else if(tipo==="Soporte Medio"){
        return 10000
    }else{
        return 15000
    }
}

if(servicio==="Programacion"){
    if(tipo==="Diseño"){
        return 30000
    }else if(tipo==="Diseño+Programacion"){
        return 50000
    }else{
        return 80000
    }
}
if(servicio==="Camaras"){
    if(tipo==="Instalación"){
        return 20000
    }else if(tipo==="Insta+Mantenimiento"){
        return 40000
    }else{
        return 60000
    }
}
}



const descargarPdf = () => {
    
    /* FUNCION REALIZAR DESCARGA DEL PDF */

    var doc = new jsPDF("p", "mm", "a4")

    let comentarioFormat = doc.splitTextToSize("COMENTARIO: " + comentario, 300)

    // Source HTMLElement or a string containing HTML.
    var elementHTML = document.querySelector("#resumenPage");
    doc.setFontSize(30)
    doc.text("Cotizacion", 10, 20)
    doc.setFontSize(20)
    const imgData = "data:image/jpeg;base64,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anCtlEeEWZsPIfQL1/lX0qRXhvxfsri38VRXEsryW88IMQY8RkcMo/Q/jXdgqslLkT0ZtRk72OBooor2DrCiiigBa63wf8QdQ8MyLBMXutOJwYWOSnuh7fTpXJUlRUpxmrSVyXFNWZ9M6H4n0vxDbCbTrpJMjLRk4dfqtajyJGCzsqqO5OBXyrHK8Lh4XaNx0ZDg/pU1xqF5dAC4vLiVfR5C3868+WXa6PQwdDXRn04mp2MkmxLy3Z+m0SgmrWa+URwcjg+or0r4VeLNRbW00a6nkuLaVGMe87jEQM9fQ+lZVsE6cXJO9iZ0Wle57LRQKK4TEKKKKACiiigAooooAKKKKACiiigAooooAKKKKACilooASilooASilooASilooASilooASilooASilooASilooASilooASilooASilooASilooASilooASilooASilooASilooASvPvjFpouvC0d4q/PZzAkgdFbg/rivQa5f4j/8iFqv/XMf+hCtKEnGpG3cqHxI+d6KWivojvLuj6dPq+rWtjaxl5JpAuAMgDuT7AZNeieJPhBOJWuPD8iMh5NtIcEf7rensarfBf8A5DV5/wBcf617N3ry8ViZ06lonNUm1LQ+Zb/wxrWlki80u6jA/iEZZT+IrMZSnDBlPuMV9WP0NcR4m/1j1pRxkp6NFQqtnhGR6inRo0pxGjOT2RSf5V3r/wCu/Gu98IffH0raeIcY3sP2mh5LpPgTxDrBX7Pp0sUbf8tZxsXH49fwr1rwR8PbfwqTdzyfadQkXaZAMKg9FHv612Ypa8yti51Fy9DCdRsBRS0VzGYlFLRQAlFLRQAlFLRQAlFLRQAlFLRQAlFLRQAlFLRQB//Z"

    doc.addImage(imgData, 140, 10, 30, 20);
    doc.setFontSize(10)
    doc.text("DIA: " + Date(), 80, 50)
    doc.text("NOMBRE: " + nombre, 10, 50)
    doc.text("APELLIDO: " + apellido, 10, 55)
    doc.text("DNI: " + dni, 10, 60)
    doc.text("MAIL: " + mail, 10, 65)
    doc.text("TELEFONO:" + telefono, 10, 70)
    doc.text("SERVICIO: " + servicio, 10, 75)
    doc.text("TIPO: " + tipo, 10, 80)
    doc.text(comentarioFormat, 10, 85)
    doc.line(10, 170, 200, 170)
    doc.text("PRECIO EN PESOS: " + precioServicio, 120, 180)

    /* TOMO EL VALOR DEL LOCALSTORAGE */
    const ventaDolar = localStorage.getItem('ventaDolar')

    doc.text(" PRECIO EN DOLAR: " + (precioServicio/parseFloat(ventaDolar)).toFixed(2), 160, 180)
    doc.save("Cotizacion.pdf")

}





