$('#vegan').on("click", function() {
  $('.grid').isotope({
   itemSelector: '.grid-item',
   filter: '.vegan'
  });
});

$('#veg').on("click", function() {
  $('.grid').isotope({
       itemSelector: '.grid-item',
   filter: '.veg'
  });
});

$('#gf').on("click", function() {
     itemSelector: '.grid-item',
  $('.grid').isotope({
   filter: '.gf'
  });
});

$('#all').on("click", function() {
  $('.grid').isotope({
   filter: '*'
  });
});
