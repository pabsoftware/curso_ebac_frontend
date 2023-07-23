
$(document).ready(function(){

    $('#telefone').mask('(99) 00000-0000', {
        placeholder: '(00) 00000-0000'
    }) 

    $('#cpf').mask('000.000.000-00', {
        placeholder: '000.000.000-00'
    }) 

    $('#cep').mask('00000-000', {
        placeholder: '00000-000'
    }) 
     
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            }, 
            telefone:{
                required: true
            }
            
        },
        messages:{
            nome: 'Favor, escreva seu nome completo',
            email: 'Favor, informe seu melhor email',
        }
    })
  
   


})