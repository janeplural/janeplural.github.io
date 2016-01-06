var listTicker = function(options) {
  var defaults = {
    list: [],
    startIndex:0,
    interval: 3 * 1000,
  }   
  var options = $.extend(defaults, options);
  var listTickerInner = function(index) {
    if (options.list.length == 0) return;
    if (!index || index < 0 || index > options.list.length) index = 0;
    var value= options.list[index];
    options.trickerPanel.fadeOut("slow", function() {
      $(this).html(value).fadeIn("slow");
    });      
    var nextIndex = (index + 1) % options.list.length;
    setTimeout(function() {
      listTickerInner(nextIndex);
    }, options.interval);
  };
  listTickerInner(options.startIndex);
}
    
var feedList = new Array("jane &#x2605;", "creative", "strategic", "resident&#13; emoji princess&#13; &#x1f478;");

function init() {
	$('.button-collapse').sideNav();
  listTicker({
    list: feedList ,
    startIndex:0,
    trickerPanel: $('#intro-feed'),
    interval: 3 * 1000,
  });
}
  
// NOTHING BELOW THIS LINE
  $( document ).ready(function(){ 
  	init();
  })