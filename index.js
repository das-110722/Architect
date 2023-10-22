var header =document.getElementById('header');
        var mobileMenu =document.getElementById('mobile-menu');
        var headerHeight = header.clientHeight;

        //  dong mo mobile menu
        mobileMenu.onclick = function() {
            var isClosed = header.clientHeight === headerHeight;
            if (isClosed) {
                header.style.height = 'auto';
            } else {
                header.style.height = null;
            }
}


