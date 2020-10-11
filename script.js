$( function() {
  $( "#editor-dialog" ).dialog({
    autoOpen: false,
    width: 800,
    show: {
        effect: "scale",
        duration: 200
    },
    hide: {
        effect: "scale",
        duration: 200
    },
    buttons: {
      "Close": function() {
        $( this ).dialog( "close" );
      }
    }
  });
  $( "#editor-dialog-opener" ).on( "click", function() {
    $( "#editor-dialog" ).dialog( "open" );
  });
} );

var topNavigation = document.getElementsByClassName("tutorial-nav")[0];
document.addEventListener("scroll", stickNav);
function stickNav() {
  topNavigation.style.top = window.scrollY + 'px';
}
