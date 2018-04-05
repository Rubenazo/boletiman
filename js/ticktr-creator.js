/*
 ________      _  _______   _     
|__   _(_) ___| ||__   __|_(_)___ 
   | | | |/ __| |/ /| | |/_| / __|
   | | | | (__|   <_| |  /_| \__ \
   |_| |_|\___|_|\_/|_|_|(_) |___/
       CREATOR           |__/     


 Version: 0.0.1
  Author: Rubén D-González-R
 Website: http://ticketer.io
    Docs: http://ticketer.io/docs
    Repo: http://github.com/rubenazo/ticktr
  Issues: 

*/

$(document).ready(function() {
  
  /* Bind events */

  $(document).mousedown(function(event) {
    if (event.which == 1) {
      $('.ticktrTable td').bind('mouseover', function(){
        app.putSeat($(this));
      });
    }
  }).mouseup(function(event) {
    if (event.which == 1) {
      $('.ticktrTable td').unbind('mouseover');
    }
  });

  $('.ticktrTable').on('mousedown', 'td', function() {
    if (event.which == 1) {
      app.putSeat($(this));
    }
  });

  /* Switch drawed elements */

  $('.ticktr-element').click(function() {
    app.elementId = $(this).data('element');
  });

  $('.ticktr-rotation').click(function() {
    app.rotation = $(this).data('rotation');
  });

  $('#zones').on('click', '.ticktr-zone', function() {
    app.zoneId = $(this).data('zone');
  });

  $('.ticktr-save').click(function() {
    tinit(app.stage);
  });

  /* Initializations */

  $('.sidenav').sidenav();
  $('.collapsible').collapsible();
  $('.tabs').tabs();
  $('.fixed-action-btn').floatingActionButton();
  $('.modal').modal();

  Vue.config.devtools = true;

  var picker = document.getElementById('picker');
  function colorChanged (event) {
    var color = event.detail[0];
    picker.value = color;
    app.newZone.color = color;
  }
  picker.addEventListener('change', colorChanged) // add the event to the picker element
});
