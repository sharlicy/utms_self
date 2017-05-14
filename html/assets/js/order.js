$(function(){
  var winHeight = $(window).height();
  var headHeight = $("#head").height() + $("#head2").height() + $("#head2").height();
  var footHeight = $("#footer").height();
  debugger;
  var sectionHeight = $(".section").height(winHeight-headHeight-footHeight+2);

});