$(document).ready(()=>{
    $("#fContacto").validate({
        debug: false,
        rules: {
            contactoNombre: {
                required: true,
                minlength: 3
            } },
        messages: {
            contactoNombre: {
                required: "true",
                minlength: "Name should be at least 3 characters"
            }},
        submitHandler: function (form) {
            alert("Creacion");
            }


        
    })

   /*  $("#fContacto").submit(()=>{

    
    setTimeout(function () {
        alert("Your Form Successfully Signed up");
         location.reload();
        }, 800);
    }) */
})