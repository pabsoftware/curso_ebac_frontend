
$(document).ready(function(){
    
  


    $('form').on('submit', function(e){
        e.preventDefault();

        const tarefa = $('#nova-tarefa').val()
        //Concatenei com o + pois a form ${terefa} não esta funcionando aqui pra mim
        const novo_item_li = $('<li style="diplay:none;"> ' + tarefa + '</li> ');
        $(novo_item_li).appendTo('ul');

        const descendentes = document.querySelectorAll("ul li");

        for (var i = 0; i < descendentes.length; i++) {
            descendentes[i].addEventListener("click", function (e) {
            
            //Adicionei a opção de marcar ou desmarcar tarefa concluida para o caso de click acidental ter como reverter
            if (e.target.style.textDecoration == "line-through"){
                e.target.style.cssText = "null"
            }else {
                e.target.style.textDecoration = "line-through"
            }

            
            
        })
        }

        $('ul li').click(function(){
           
           
       
        })
       
        
    })


})