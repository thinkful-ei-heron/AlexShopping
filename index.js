function logFood() {
  $('#js-shopping-list-form').submit(function(event) {
    let newFood = $(event.currentTarget).find('input[name="shopping-list-entry"]').val();
    $('.shopping-list').append('<li>' +
    '<span class="shopping-item shopping-item">' + newFood + '</span>' +
    '<div class="shopping-item-controls">' +
      '<button class="shopping-item-toggle">' +
        '<span class="button-label">check</span>' +
      '</button>' + ' ' +
      '<button class="shopping-item-delete">' +
        '<span class="button-label">delete</span>' +
      '</button>' +
    '</div>' +
  '</li>');
  event.preventDefault();
  });
    
  // $('.shopping-list').on('click', 'shopping-item-delete', function() {
  //   $(event.currentTarget).closest('li').remove();
  // });
  $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
    $(this).closest('li').remove();
  });

  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    $(this).closest('span').toggleClass('.shopping-item_checked');
  });
  // $('ul').on('click', '.shopping-item-toggle', function(){
  //   console.log('Turn it off');
  //   $(this).parent('span').toggleClass('shopping-item_checked shopping-item');
  // });


};
  
/*

$('.shopping-list').on('click', 'shopping-item-delete', function(event){
  $(this).closest('li').remove();  
});
// to check off the item on list
$('.shopping-list').on('click', 'shopping-item-toggle', function(event){
  $(this).closest('li').find('shopping-item').toggleClass(
      '.shopping-item_checked')}

*/
$(logFood);