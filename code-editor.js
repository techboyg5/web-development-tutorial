$( function() {
  $( "#editor-dialog" ).dialog({
    autoOpen: false,
    show: {
        effect: "fade",
        duration: 200
    },
    hide: {
        effect: "fade",
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
  $( "#editor-tabs" ).tabs();
} );


function goHtml() {
  const html = document.getElementById("htmlInput").value;
  const css = document.getElementById("cssInput").value;
  const js = document.getElementById("jsInput").value;
  const template = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Editor Content</title>
        <style>
          ${css}
        </style>
      </head>
      <body>
        ${html}
        <script>
          ${js}
        <\/script>
      </body>
    </html>
  `;
  const blob = new Blob([template], {type: 'text/html'});
  document.getElementById("codeResult").src = URL.createObjectURL(blob);
}
