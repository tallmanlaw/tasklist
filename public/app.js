$(function() {
  $('#more').on('click', function(event) {
    event.preventDefault();
    console.log("submit is working");
    const task = {
      newTask: $('#new-task').val().trim()
    };
    console.log(task, "this is the task");

    $.post('/list', task, function(res){
       listRender(res);
    });
    $('#new-task').val('');
    $('#new-task').focus();

  });
  
})

function listRender(newList) {
  $('#content').empty();
  newList.forEach((e, index)=>{
    const listTag = $('<li>');
    const checkedbox = $('<input type="checkbox"/>');
    listTag.text(e.newTask);
    const button = $('<button>');
    button.addClass('delete');
    button.attr('data-index', index);
    button.text('x');
    
    
    listTag.append(checkedbox);
    listTag.append(button);
    $('#content').append(listTag);
    
  })

  addEventListener()

}

function addEventListener(){
  $('.delete').on('click', function(){
     const deleteThis = {
       index : $(this).attr('data-index')
      }
     $.post('/delete/list', deleteThis, function(data){
        listRender(data);
     });
  });

}