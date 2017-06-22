var toggleViewer = function () {
    var show = document.querySelector("#root").style.display === "none";

    if(show) {
        window.VirtualShowRoom.show();
        document.querySelector("#root").style.display = "block";
        document.querySelector("#magic-moment").style.display = "none";
    } else {
        window.VirtualShowRoom.hide();
        document.querySelector("#root").style.display = "none";
        document.querySelector("#magic-moment").style.display = "block";
    }
};

// toggleViewer(false);
