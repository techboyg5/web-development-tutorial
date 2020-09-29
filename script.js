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

if (window.localStorage.getItem("darkmode") == "dark") {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

function dark() {
  window.localStorage.setItem("darkmode", "dark");
  document.documentElement.classList.add("dark");
}

function light() {
  window.localStorage.setItem("darkmode", "light");
  document.documentElement.classList.remove("dark");
}

if (window.top !== window.self) {
	var base = document.createElement("base");
	base.setAttribute("target", "_blank");
	document.head.appendChild("base");
	document.body.style.backgroundColor = "transparent";
}
