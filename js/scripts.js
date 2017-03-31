//Back-End Logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings
}

Pizza.prototype.price = function() {
  var totalPrice = this.size + this.toppings * 2;
  return totalPrice;
  console.log(totalPrice);
}

//Front-End Logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var selectedSize = parseInt($("#size").val());
    var checkedToppings = $('input:checkbox[name=toppings]:checked').length;
    var userOrder = new Pizza(selectedSize, checkedToppings);
    var result = userOrder.price();
    $("#price").text(result);
    $("#output").show();
  });
});
