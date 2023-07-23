
$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault();
    })

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
            },
            cpf:{
                required: true
            },
            endereco:{
                required: true
            },
            cep:{
                required: true
            }
            
        },
        messages:{
            nome: 'Favor, escreva seu nome completo',
            email: 'Favor, informe seu melhor email',
            telefone: 'Favor, informe seu telefone',
            cpf: 'Favor informe seu CPF',
            endereco: 'Digite seu endereço completo',
            cep: 'CEP não pode ficar vazio'
        },
        submitHandler: function(form){
            alert('Parabens! Seus dados foram cadastrados com sucesso')
        },
        invalidHandler: function(){
            alert('Ops! Algo deu errado. Verifique se todos os campos estão preenchidos corretamente.')
        }
    })
  
   


})