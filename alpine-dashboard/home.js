$(document).ready(function(){
  //--  Button 1  --------
  $('#bl-button').click(function(){
    if($('#l-menu1').css('display') === 'none'){
      $('#l-menu1').show();
    }else{
      $('#l-menu1').hide();
    }
  })

  //--  Button 2  ----------

  $('#gg-button').click(function(){
    if($('#l-menu2').css('display') === 'none'){
      $('#l-menu2').show();
    }else{
      $('#l-menu2').hide();
    }
  })

  //--  Button 3  ----------

  $('#lp-button').click(function(){
    if($('#l-menu3').css('display') === 'none'){
      $('#l-menu3').show();
    }else{
      $('#l-menu3').hide();
    }
  })

  //--  Button 4  -----------

  $('#ov-button').click(function(){
    if($('#l-menu4').css('display') === 'none'){
      $('#l-menu4').show();
    }else{
      $('#l-menu4').hide();
    }
  })

//--  Route link to alpine dashboard  ------

$(".rLink").click(function(){
  event.preventDefault();
  var routeId = $(event.target).parent().attr('id');
  localStorage.setItem("routeId", routeId);
  window.location.href="index.html"
})
  //--  Self envoked closure  --------
})
