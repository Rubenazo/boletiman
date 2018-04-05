/*
 ________      _  _______   _     
|__   _(_) ___| ||__   __|_(_)___ 
   | | | |/ __| |/ /| | |/_| / __|
   | | | | (__|   <_| |  /_| \__ \
   |_| |_|\___|_|\_/|_|_|(_) |___/
                         |__/     


 Version: 0.0.1
  Author: Rubén D-González-R
 Website: http://ticketer.io
    Docs: http://ticketer.io/docs
    Repo: http://github.com/rubenazo/ticktr
  Issues: 

*/

function tinit(stage) {
  console.log(stage);
  var ticktr = $('#ticktr');

  ticktrTable = $('<table class="ticktrTable">');
  ticktr.append(ticktrTable);

  for (var i = 0; i < stage.length; i++) {
    ticktrTr = document.createElement('tr');
    ticktrTable.append(ticktrTr);
    for (var j = 0; j < stage[0].length; j++) {
      ticktrTd = document.createElement('td');;
      ticktrTr.appendChild(ticktrTd);
      if (!$.isEmptyObject(stage[i][j])) {
        $(ticktrTd).css({background: app.elements[stage[i][j]['element']].color});
      }
    }
  }
}
