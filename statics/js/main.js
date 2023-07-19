
$('form').on('submit', function(e){
    e.preventDefault();

    const tarefa = $('#nova-tarefa').val()
    //Concatenei com o + pois a form ${terefa} não esta funcionando aqui pra mim
    const novo_item_li = $('<li style="diplay:none;"> ' + tarefa + '</li> ');
    $(novo_item_li).appendTo('ul');
})