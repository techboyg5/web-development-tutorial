  $( function() {
    $( "#editor-dialog" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
 
    $( "#editor-dialog-opener" ).on( "click", function() {
      $( "#editor-dialog" ).dialog( "open" );
    });
  } );
