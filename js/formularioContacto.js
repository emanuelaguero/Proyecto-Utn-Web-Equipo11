$(document).ready(() => {
    $("#fContacto").validate({
        debug: false,
        rules: {
            nombreContacto: {
                required: true,
               
            },
            emailContacto: {
                required: true,
                email:true
            },
            dniContacto: {
                required: true,
                minlength: 7,
                maxlength: 8
            },
            asuntoContacto: {
                required: true,
                
            },
            comentarioContacto: {
                required: true,
              
            }
        },
        messages: {
            nombreContacto: {
                required: "Campo Requerido",
            },
            emailContacto: {
                required: "Campo Requerido",
                email: "Direccion de Mail Invalido"
            },
            dniContacto: {
                required: "Campo Requerido",
                minlength: "El DNI tiene de 7 o 8 caracteres",
                maxlength:"El DNI tiene de 7 o 8 caracteres"
            },
            asuntoContacto: {
                required: "Campo Requerido",
                
            },
            comentarioContacto: {
                required: "Campo Requerido",
              
            }
        },
       
        submitHandler: function (form, e) {
            e.preventDefault()
            setTimeout(() => {
                $(".alert").toggleClass('in show')
            }, 300);
            setTimeout(() => {
                $(".alert").hide()
            }, 800);
            
        }



    })

    /*  $("#fContacto").submit(()=>{
 
     
     setTimeout(function () {
         alert("Your Form Successfully Signed up");
          location.reload();
         }, 800);
     }) */
})