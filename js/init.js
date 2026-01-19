/*
 * Author: matchthemes.com
 */

(function ($) {
    "use strict";

    $(document).ready(function () {
		

        /* =========================
           HOME SLIDER
        ========================= */

        var mySwiper = new Swiper('.swiper-mt', {
            direction: 'horizontal',
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            },
            navigation: {
                nextEl: '.swiper-mt-button-next',
                prevEl: '.swiper-mt-button-prev',
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            speed: 2000,
            autoplay: {
                delay: 1500,
                disableOnInteraction: false,
            },
        });

        var portfolioSlider = new Swiper('.portfolio-slider', {
            direction: 'horizontal',
            loop: true,
            navigation: {
                nextEl: '.swiper-mt-button-next',
                prevEl: '.swiper-mt-button-prev',
            },
            slidesPerView: 1,
            spaceBetween: 15,
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
            },
            speed: 1000,
            autoplay: {
                delay: 6000,
                disableOnInteraction: false,
            },
        });

        var testimonialSlider = new Swiper('.testimonial-slider', {
            direction: 'horizontal',
            loop: true,
            slidesPerView: 1,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            },
            speed: 1000,
            autoplay: {
                delay: 6000,
                disableOnInteraction: false,
            },
        });

        /* =========================
           MOBILE MENU (FIXED)
        ========================= */

        $(document).on('click', '.nav-button', function (e) {
           
            $('.mobile-menu-holder, .menu-mask').addClass('is-active');
            $('body').addClass('has-active-menu');
        });

        $(document).on('click', '.exit-mobile, .menu-mask', function (e) {
          
            $('.mobile-menu-holder, .menu-mask').removeClass('is-active');
            $('body').removeClass('has-active-menu');
        });

        $(document).on('click', '.menu-mobile > li.menu-item-has-children > a', function (e) {
        
            e.stopPropagation();

            var parent = $(this).parent();
            parent.toggleClass('menu-open');
        });

        $('.menu-mobile > li > .sub-menu > li:has(ul.sub-menu)')
            .addClass('menu-item-parent-2level');

        /* =========================
           MENU EDGE DETECTION
        ========================= */

        $(".menu-nav li").on('mouseenter mouseleave', function () {
            if ($('ul', this).length) {
                var elm = $('.sub-menu', this);
                var off = elm.offset();
                var l = off.left;
                var w = elm.outerWidth();
                var docW = $(window).width();

                if (l + w > docW) {
                    $(this).addClass('edge');
                } else {
                    $(this).removeClass('edge');
                }
            }
        });

        /* =========================
           STICKY HEADER
        ========================= */

        $(window).on('scroll', function () {
            if ($(document).scrollTop() > 1) {
                $('.main-header').addClass('nav-fixed-top');
            } else {
                $('.main-header').removeClass('nav-fixed-top');
            }
        });

        /* =========================
           FAQ
        ========================= */

        $('.faq-section').hide();
        $('.faq-title').on('click', function () {
            var content = $(this).next();

            if (content.is(':hidden')) {
                $(this).addClass('active');
                content.slideDown();
            } else {
                $(this).removeClass('active');
                content.slideUp();
            }
            return false;
        });

        /* =========================
           SCROLL TO TOP
        ========================= */

        $(".scrollup").hide();

        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 400) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });

        $('.scrolltop').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, 500, 'easeOutExpo');
        });

        /* =========================
           GALLERY
        ========================= */

        if ($('.gallery-post a').length) {
            $('.gallery-post a').simpleLightbox({
                heightRatio: 1,
                widthRatio: 0.8
            });
        }

        if ($('.blocks-gallery-item a').length) {
            $('.blocks-gallery-item a').simpleLightbox({
                heightRatio: 1,
                widthRatio: 0.8
            });
        }

        /* =========================
           PORTFOLIO FULLSCREEN
        ========================= */

        if ($('.portfolio-fs-item').length) {
            $('.portfolio-fs-item h2 a').on('mouseover', function () {
                var item = $(this).closest('.portfolio-fs-item');
                if (!item.hasClass('active')) {
                    $('.portfolio-fs-item').removeClass('active');
                    item.addClass('active');
                }
            });
        }

    });

    /* =========================
       ISOTOPE (WINDOW LOAD)
    ========================= */

    $(window).on('load', function () {

        var blogItems = $('.layout-masonry');
        var portfolioItems = $('.portfolio-layout-masonry');

        blogItems.isotope({
            itemSelector: '.blog-item-masonry',
            layoutMode: 'masonry',
        });

        portfolioItems.isotope({
            itemSelector: '.item-portfolio',
            layoutMode: 'masonry',
        });

        $('.portfolio-filter a').on('click', function () {
            $('.portfolio-filter .current').removeClass('current');
            $(this).addClass('current');

            var selector = $(this).attr('data-filter');
            portfolioItems.isotope({ filter: selector });

            return false;
        });

    });

})(jQuery);
