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
	document.body.innerHTML = `
		<h2>Framing Not Allowed</h2>
		<hr>
		<p>Framing of the techboyg5 Web Development Tutorial is forbidden.</p>
		<p><a href="" target="_blank">Open this page in a new window.</a></p>
		<footer class="footer">
			<p>© 2020 by techboyg5. Licensed under the MIT License.</p>
		</footer>
	`;
}

function windowPrint() {
                const template = `
                <!DOCTYPE html>
                <html lang="en">
                    <head>
                        <meta charset="utf-8">
                        <title>${document.title}</title>
                        <style>
                            body {
                                font-family: sans-serif;
                            }
                        </style>
                    </head>
                    <body>
                        <div id="print-header">
                            <h1>${document.getElementsByTagName("h1")[0].innerText}</h1>
                        </div>
                        <div id="print-content">
                            ${document.getElementById("content").innerHTML}
                        </div>
                        <div id="print-footer">
                            <p>View this page online at ${window.location.href}.</p>
                            <p>© 2020 by techboyg5. Licensed under the MIT License.</p>
                        </div>
                    </body>
                </html>
                `;
                const blob = new Blob([template], {type: 'text/html'});
                const blobUrl = URL.createObjectURL(blob);
                const iframe = document.createElement("iframe");
                iframe.style.display = "none";
                iframe.src = blobUrl;
                document.body.appendChild(iframe);
                iframe.contentWindow.print();
                iframe.remove();
                blobUrl.revokeObjectURL();
            }
