$( function() {
  $( "#editor-dialog" ).dialog({
    autoOpen: false,
    width: 600,
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


var topNavigation = document.getElementsByClassName("tutorial-nav")[0];
document.addEventListener("scroll", stickNav);
function stickNav() {
  topNavigation.style.top = window.scrollY + 'px';
}



    $(function() {
        $.contextMenu({
            selector: '.content-container', 
            callback: function(key, options) {
              document.execCommand(key);
            },
            items: {
              "copy": {name: "Copy", icon: "copy"}
            }
        });
        $.contextMenu({
            selector: 'textarea', 
            callback: function(key, options) {
              document.execCommand(key);
            },
            items: {
              "cut": {name: "Cut", icon: "cut"},
              "copy": {name: "Copy", icon: "copy"}
            }
        });
    });

function dark() {
  window.localStorage.setItem("darkmode", "dark");
  document.documentElement.classList.add("dark");
}

function light() {
  window.localStorage.setItem("darkmode", "light");
  document.documentElement.classList.remove("dark");
}
