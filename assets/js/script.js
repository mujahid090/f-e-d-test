(function ($) {

    //dom ready start
    $(document).ready(function () {

        //on scroll add sticky class on navbar
        $(window).on('scroll', function () {
            var scroll = $(window).scrollTop();
            if (scroll > 0) {
                $('.navbar').addClass('sticky');
            } else {
                $('.navbar').removeClass('sticky');
            }
        });

        const $dropdown = $(".dropdown");
        const $dropdownToggle = $(".dropdown-toggle");
        const $dropdownMenu = $(".dropdown-menu");
        const showClass = "show";
        $(window).on("load resize", function () {
            if (this.matchMedia("(min-width: 991px)").matches) {
                $dropdown.hover(
                    function () {
                        const $this = $(this);
                        $this.addClass(showClass);
                        $this.find($dropdownToggle).attr("aria-expanded", "true");
                        $this.find($dropdownMenu).addClass(showClass);
                    },
                    function () {
                        const $this = $(this);
                        $this.removeClass(showClass);
                        $this.find($dropdownToggle).attr("aria-expanded", "false");
                        $this.find($dropdownMenu).removeClass(showClass);
                    }
                );
            } else {
                $dropdown.off("mouseenter mouseleave");
            }
        });
    });
    //dom ready end
})(jQuery);