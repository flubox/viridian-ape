var viewerHidden = false;
var toggleViewer = function () {
    var show = document.querySelector("#viewer-screen").style.display === "none";

    if (viewerHidden) {
        document.querySelector("#viewer-screen").style.position = "static";
        document.querySelector("#magic-moment").style.display   = "none";
        window.VirtualShowRoom.show();
        viewerHidden = false;
    } else {
        window.VirtualShowRoom.hide();
        document.querySelector("#viewer-screen").style.position = "fixed";
        document.querySelector("#viewer-screen").style.left     = "-100%";
        document.querySelector("#magic-moment").style.display   = "block";
        viewerHidden                                            = true;
    }
};

// toggleViewer(false);
