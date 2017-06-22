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

var unselectProducts = function () {
    var o = document.querySelectorAll("#viewer-filter li .on");
    var l = o.length;
    var i = 0;
    for (i; i < l; i++) {
        o[i].style.display = "none";
    }

    o = document.querySelectorAll("#viewer-filter li .off");
    l = o.length;
    i = 0;
    for (i; i < l; i++) {
        o[i].style.display = "inline-block";
    }
};

var selectProduct = function (index, icon) {
    unselectProducts();
    window.VirtualShowRoom.unselectProduct();

    // The selected product must be deselected before selecting another.
    setTimeout(function () {
        if (index !== undefined) {
            window.VirtualShowRoom.selectProduct(index);
            document.querySelector(icon + ".on").style.display               = "inline-block";
            document.querySelector(icon + ".off").style.display              = "none";
            document.getElementById("mug-details").style.display             = "block";
            document.querySelector("#viewer-filter .products").style.display = "none";
        }
    }, 100);
};
