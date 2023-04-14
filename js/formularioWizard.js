
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
    } else if ( /\D/.test(nombre)) {
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
    } else if (/\D/.test(apellido)) {
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
       
       

    }

});




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
    doc.text("Cotización", 10, 25)
    doc.setFontSize(20)
    const imgData = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAeAB4AAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAA3AMkDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD4KoooroMgooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigB9uoa4jUjILAH86+9/wBv79k/wr4e0mXxj8MdMt7CPw8IbTxLotipAt1lQPDdBf7p3bWI46H+Fq+CbX/j5i/3x/Ov0L/aN+Ow+Bv7d2pT6pb/ANpeDNb0Sy0vxDpbjclzZyRbWO3uyZLD1+ZeNxp1k3TpRjo3KVn6RTV/J7eV79BwajKUmrpL9UtPNb+e3U8K+H3w88N6l+wV8UfF91o1rP4m03xDZ2tpqjpmaGJntgyKewO9v++jXLfCv9j7xt8UPBLeMpb/AMPeCvCG8xxa54u1IWFtOwOCEO1iRkEZIAJBAJINfVPxU+CMfwL/AGJfjRpum3a6n4V1XxBpuraDqEbb1nsZZLUx/N3K4Kk98A96b+1RL8FU+H/wUtfHUvxEXRB4Vt5NHXwaLE6e3yKJC3nnPnfczjjBXvmsubSUra3irPp7l389HoJLWMb6Wk7rr71l9918j5B+N37MPjb4D2umalraafqvh3U+LLxBoV0LuwuGwTtWTAIOASNwGQDjODXS/Db9ijx58QvAMXja91Lw34E8LXBxaal4w1L7DHdZzgp8jHBxwWAB6jI5r1vxF44+HNj+xT4v8MeB/DXxQ1Lwxeatbz2+ueK7SzNjY3Syxb0SWGT5dyg8BTkufU1n/wDBTaS+X4ieAYLXePBMfhe2OhiEf6LglvMMeOM7RFnHbZ7U23FerSX/AIDza/ku+5SSlZrs2/k0vu1+/Q848cfsN/Ej4e+BfFXi/WH0VdB0FLeX7VbXrTJqEUzhEktWVCrrk87ihHpyM4PwZ/ZP8b/Grw7feJLGTSPDfhOzcxzeIvE18LKyDjGVD4YkjPJC4HQnNe8/By48QTf8Ez/jLHqLTNoUWpWy6X527AzcW5mCZ42biDxxuL981kftfy3Vv+yv+zZbaMWXwfJozyzi3/1Dahtj378cbwTN155k96qf7tyW+sUv+3o3u/u+9ocEqlOMvOd/+3bLT7/uPIfjN+yT45+Cvhmy8T3smj+JvCV2wjj8Q+Gb4XllvPAUttVhnGASu0njOeKZ8H/2T/Gvxi8L3viqC50Xwp4PtHMcniLxVfixsS4OCqvtYtg8EgYB4znivY/2MWu5f2bf2kIdZEh8FDQN6m4z5C3+yTZszx5nEecc8R+1M/bEN1D+y/8As1Q6TuXwm2hvJKIMiFr/AGRby4HG/Jlxnnl/elJ+zunr8Nv+3ubf/wAB073Qorns/wDFf5cu3/gWvazPHfjR+yj42+CPh/TvEd/LpHiPwnqDBLfxF4avftliznOFL7VIJwcEjBxwSa639p6/+IWp/Cv4FR+LLfwyukSaCT4fXw/BKty1vthXF1uG3zPucR/Lkt61xHhXVPiz/wAM++LbHRvtknwn+2RNrOYIXt0uN0ezDupdWz5X+rI7Z619eXEelTeK/wBhhNa8r7AdKTib7plxD5IP/bTZ+NUouU4029HJeusZf0u6M3Llg6i3UZemjXX810PBdH/4J8/EO50/Spdd8QeC/BGp6qoex0PxNrf2a/uARkBYlRuT/dzkdwDXjPxM+EPin4LeO28L+MdKfTNUjKOEZg8c0bHCyRuCQynB5HcEHBBFdh+2Rda9d/tO/EU+I2nN9Hq80cSzknbbA/6OF/2fK2Y9jXtf7WbXU/7L37Nk/inzP+E0a1uBm6JNw1llPLLk8/d8rrzyfeuOrUbw3t110t6p2+62v3npYSmljoYeWuu/TRq/yfQ+X9f1HTtH1WazGjW8qoEO7O0ncgb0461n6lpdjfaM2q6YrQLEwS4tnYtszgAgntkj8/qKZ45/5Gi7/wB2L/0WtWtGVtP8H6xczZEdyFiiVuAzZ6j9T/wGvHpx9hQoVqcnzS5bq7d776N/O5+s4ur/AGpm+a5ZiqUPY0liHGSpwi6fs+Zw96MU2m1GDTbT5u9mVNee9fR9G+0i38jym8nyQQ2MLndnjPTp70sPg29aCKSaa2s/N+4lxIVY+2MHn2rTuvL+z+EfN/1eefzSsvxuZf8AhJLvzd20bfLz02YGMf565p4WtVqKFCk1DRva/wBpqyV/vMc6y7A4R4jNMfGdd81Gmlz8tr0YzcpSs3t7sFps73tYr6l4ZvdIsRdXIjRfN8rYDls4JB6YIwPWtjUrK81bxFYR37WaN5KPiMsqtHvPy8/xHJ/Sk1Rpm+H9gZyS32gbS3XbiTb+n6Yp3ib/AJGbRf8Acg/9GGudYirWV5Nc1qiul2aWh6cspwGXqUaMZ+xlLBScJS39pGcnzabr0tvoU/F3h9NMuZbiGS3W3aRUW3RyZFyuckY6cHv3FRw+Db1oIpZpraz837iXEhVj7Yx19qs6x5f/AAnw83/V+fFn8lqr43Mv/CSXfm7to2+XnpswMY/z1zXZRqYiXs6Cnry8zbV/lv8Aezw80wWUUJY7M54ZuMa7pRpxnypP3m5N8rava0YqyWu9rEGpeGb3SbIXNz5ar5vlbA2WzgkHpjBA9au+OABdaZgY/wBBT/0J6s6m0zfD+wM5Jb7Qu0t124k2/p+mKr+OP+PrTP8ArxT/ANCes8NXqV69KVRq69otNtGkdGb5bhMtyzG08HGShKOEnaWsk5xnJ30Xfsjm6KKK+jPx0WNzHIrjqpyK7/45/GzXP2gPH8/i/wAQ2un2epTW8Vs0WmRyRw7Y12qQHdznHXmvP6KJe8kn01Xz0BaXt1PYj+1V42m/Z5n+DV19gvvCrzJJFcXEcjXluqSrKsUbiQLs3r0KEgMQCBjGt8Lf2wfE/wAPPBEPgrWPD3hr4h+D7eUzWukeLdPF2lo5ycwtkbeSTg5AycYya8Hop3ve/XcVlpboexfG79qTxX8btH0vw/cWOj+FvCGlMXsvDfhu0+y2UbHPzlcnc2Ce+Bk4Ayc/Qth4t+Mfwc/Z/wDBR13wf4P+N/ww1C1W70qS906XUxpHAxDIxRfLK5K4YMAQVDDG2vhivSvhX+0l8TPgnbzW/gvxhf6LZytvezGye33d2EUqsgY9yBk4FKy5XFdXf1/rv0sO75k+2n9f5dT7G8afEjxrqn7CPxE1b4j6ZaeEIdfvLDS/Cvhu0svsEEUEUqSN5EB+YKcSNk5JCdcba+X/AIN/tceK/hH4RufB8+laD438Ezy+cfD3imy+120UhOS0YyCpJ5wcjOSACSa4H4nfGTxt8ZtWi1Lxr4kvvEF1CCsP2lwI4QcZEcagImcDO0DOOa42pV+aUn1t+CX3vr6lX9yNNdG383+ltPQ9v+Mn7W3iv4ueErbwfBpWheCPBVvL5w8PeFrL7JbSyA5DSDJLEHnHC5wcZANL8Hv2tvE/wo8HT+DbvRPD/jrwVLN9pGg+KrH7XBBJ1LRcjaSecHIzkgAkmvD6Ka91NLruS3e3lse1fGf9q7xV8YvC9l4TTS9D8GeC7OXz4vDvheyFpatJkkO4ySxGT6DPOM81znxD+PXiP4keG/h/o1/DY2EPgmx+waZcackkczKNmHkYu2XBjUgqF78V5xRSUUtV3v8APa/3A3f7rfI+pLX/AIKAeJtQs9Pfxf8AD/wD4+8QadEsVp4g8Q6KJr1dvKlmDAHBwflC889ea8U+Lnxq8WfHDxtJ4p8W6gL/AFHCxwxomyC3jU5WKNB91Rk+5ySSSc1w1FEoxl8S/p7l05yptODs1b8Njfm8YzXExmm03TpZTjLvASxwMDnPtWfq2uXmtOpuZPkT7kSDCL9B/WqFFctLB0KMlKEEmvw9D38bxFmuY05UcTiJSjJ3a2UnveVrX111vqX7vVptStrG1k8uOO1BRHAI4OOW5Pp2rpNQvtW01YYr7T7XVNqjybkxGQc9s+v5H69a4ytKy8Salp8Iigu2WMcBWUMB9Mg4rkxGD5uVUoxaV9Hdb9mtfVdT3Mn4i9hKvLG1qsZ1OX3ocstIKyUqc2oy0tyyunG2l7s3/FF1ct4Ws1vztvZ7jzfLxjaoDADHbAZf85rntS1y41O7t7lwkcsCKiGMH+Ekg8k85NVby9n1CczXMrTSnjcxz+HsKhrXC4KFCmoySb19Ped2l5HHn3EmIzTFTqUZyjTaprV3k/ZR5Yyk/wCbVt26v5mrq3iKbWIws1tarLuVjPHHiQ4BGC2enPT2FWk8ZXDQxpdWlrfPGMJJcR7mH+fbFYFFaPA4dxUHDRbeRyR4mziFepiFiHzVLc23vW2urWbXRtX8zW1TxPeaxZ/Zrnyynm+aGVSDwCAOuMYPpVbVdXm1iSB5lRTDEIV8sEfKCTzk9eapUVrTw1Glbkila9vnucOKznMcdz/Wq0p8/LzXd78l+W/pdhRRRXSeMJRuoooATdRuNFFABk0ZNFFABk0ZNFFABk0ZNFFABk0ZNFFABk0ZNFFABk0ZNFFABk0ZNFFABk0ZNFFABk0ZNFFABk0ZNFFABk0ZNFFAH//Z"
    let dia=new Date()
    doc.addImage(imgData, 150, 10, 40, 20);
    doc.setFontSize(10)
    doc.text("DIA: " + dia.toLocaleString(), 150, 50)
    doc.text("NOMBRE: " + nombre, 10, 50)
    doc.text("APELLIDO: " + apellido, 10, 55)
    doc.text("DNI: " + dni, 10, 60)
    doc.text("MAIL: " + mail, 10, 65)
    doc.text("TELEFONO:" + telefono, 10, 70)
    doc.text("SERVICIO: " + servicio, 10, 75)
    doc.text("TIPO: " + tipo, 10, 80)
    doc.text(comentarioFormat, 10, 85)
    doc.line(10, 170, 200, 170)
    doc.text("PRECIO EN PESOS: " + precioServicio, 90, 180)

    /* TOMO EL VALOR DEL LOCALSTORAGE */
    const ventaDolar = localStorage.getItem('ventaDolar')

    doc.text("PRECIO EN DOLAR: " + (precioServicio/parseFloat(ventaDolar)).toFixed(2), 140, 180)
    doc.save("Cotizacion.pdf")

}





