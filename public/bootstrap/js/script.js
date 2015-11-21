$(document).ready(function () {
	$('.owl-carousel-images').owlCarousel({
        items:1,
        merge:true,
        loop:true,
        center:true,
        dots: false,
        responsive:{
            480:{
                items:2
            },
            600:{
                items:4
            }
        },
        margin: 36,
        nav: true,
        navText: ["",""],
        navContainer: ".img.navigation"
    })	


    $('.owl-carousel-video').owlCarousel({
        items:1,
        merge:true,
        loop:true,
        video:true,
        lazyLoad:true,
        center:true,
        dots: false,
        responsive:{
            480:{
                items:2
            },
            600:{
                items:4
            }
        },
        margin: 80,
        nav: true,
        navText: ["",""],
        navContainer: ".vid.navigation"
    })	
});