$(function() {
   
    var header = $("#header");
    var introH = $("#intro").innerHeight();
    var scrollofset = $(window).scrollTop();
    
    /* fixed header */
    
    checkScroll(scrollofset);
    
    $(window).on("scroll", function() {
        scrollofset = $(this).scrollTop();
        
        checkScroll(scrollofset);
    });
    
    function checkScroll(scrollofset) {
        if( scrollofset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }
    
    /* smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();  
        
        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;
        
        
        $("html, body").animate({
            scrollTop: blockOffset
        }, 350);
        
    })
    
    /* menu nav toggle */
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();
        
        $(this).toggleClass("active");
        $("nav").toggleClass("active");
    });
    
    /* collapse */
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();
    
        var $this = $(this),
            blockId = $this.data('collapse');
        
        $this.toggleClass("active");
        
    });
    
    /* slider */
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});