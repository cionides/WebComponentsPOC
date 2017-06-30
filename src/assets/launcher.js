function createLauncherPanel() {

    var div = document.createElement("div");

    div.setAttribute("class", "launcher-panel");
    div.appendChild(createLauncherLink(div));
    document.getElementsByTagName("body")[0].appendChild(div);

    return div;
}

function createLauncherLink(container) {
    var link = document.createElement("link");

    link.setAttribute("rel", "import");
    link.setAttribute("href", "http://127.0.0.1:4200");
    link.setAttribute("async","true");
   
    link.onload = function () {
        window.onload = function () {
      
            console.log(link.import);
            container.appendChild(link.import.querySelector('.container'));
        }

    };

    return link;
}
