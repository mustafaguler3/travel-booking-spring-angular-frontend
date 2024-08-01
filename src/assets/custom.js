(function ($) {
    "use strict";

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 10) { $('.navbar-area').addClass("is-sticky"); }
        else { $('.navbar-area').removeClass("is-sticky"); }
    });

    $(function () {
        $(window).on('scroll', function () {
            var scrolled = $(window).scrollTop();
            if (scrolled > 600) $('.go-top').addClass('active'); if (scrolled < 600) $('.go-top').removeClass('active');
        });

        $('.go-top').on('click', function () { $("html, body").animate({ scrollTop: "0" }, 500); });
    });

    jQuery('.mean-menu').meanmenu({
        meanScreenWidth: "1199"
    });

    $(".others-option-for-responsive .dot-menu").on("click", function () { $(".others-option-for-responsive .container .container").toggleClass("active"); });
    $(".others-options .search-box").on("click", function () { $(".search-overlay").toggleClass("search-overlay-active"); });
    $(".search-overlay-close").on("click", function () { $(".search-overlay").removeClass("search-overlay-active"); });
    $(".language-option").each(function () {
        var each = $(this)
        each.find(".lang-name").html(each.find(".language-dropdown-menu a:nth-child(1)").text());
        var allOptions = $(".language-dropdown-menu").children('a');
        each.find(".language-dropdown-menu").on("click", "a", function () {
            allOptions.removeClass('selected'); $(this).addClass('selected');
            $(this).closest(".language-option").find(".lang-name").html($(this).text());
        });
    })

    // wow js 
    new WOW().init();

    // Banner Slider
    $('.home_two_banner_slider_wrapper').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 4000,
        animateOut: 'slideOutLeft',
        dots: false,
        nav: true,
        navText: ["<i class='fas fa-arrow-left'></i>", "<i class=' fas fa-arrow-right' ></i>"],
        responsive: {
            0: {
                items: 1
            },
            360: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    // home six banner slider
    $('.home_six_banner_slider_wrapper').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 4000,
        animateOut: 'slideOutLeft',
        dots: true,
        nav: true,
        navText: ["<i class='fas fa-arrow-up'></i>", "<i class=' fas fa-arrow-down' ></i>"],
        responsive: {
            0: {
                items: 1
            },
            360: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

     // Banner ten Slider
     $('.home_ten_banner_slider_wrapper').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            360: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    // Service Slider
    $('.promotional_tour_slider').owlCarousel({
        loop: true,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        smartSpeed: 1000,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4
            }
        }
    });

    // Trending Slider
    $('.Trending_tour_slider').owlCarousel({
        loop: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        smartSpeed: 1000,
        margin: 10,
        nav: true,
        navText: ["<i class='fas fa-arrow-left'></i>", "<i class=' fas fa-arrow-right' ></i>"],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4
            }
        }
    });
    // Popular Hotels Slider
    $('.Popular_hotels_slider').owlCarousel({
        loop: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        smartSpeed: 1000,
        margin: 10,
        nav: true,
        navText: ["<i class='fas fa-arrow-left'></i>", "<i class=' fas fa-arrow-right' ></i>"],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4
            }
        }
    });
    // Home TWo Client Slider
    $('.home_two_client_slider').owlCarousel({
        loop: true,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        smartSpeed: 1000,
        margin: 0,
        nav: false,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            992: {
                items: 1,
            },
            1200: {
                items: 1
            }
        }
    });
    // three_offer_slider
        $('.three_offer_slider').owlCarousel({
        loop: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        nav: true,
        navText: ["<i class='fas fa-arrow-left'></i>", "<i class=' fas fa-arrow-right' ></i>"],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4
            }
        }
    });
    // Best Offer
        $('.best_offers_four_item_slider').owlCarousel({
        loop: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        nav: true,
        navText: ["<i class='fas fa-arrow-left'></i>", "<i class=' fas fa-arrow-right' ></i>"],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4
            }
        }
    });
    // Tour Type Slider
        $('.tour_type_slider').owlCarousel({
        loop: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        nav: true,
        navText: ["<i class='fas fa-arrow-left'></i>", "<i class=' fas fa-arrow-right' ></i>"],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 5
            }
        }
    });
    // Home Four Popular Slider 
        $('.popular_tours_four_slider').owlCarousel({
        loop: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        nav: true,
        navText: ["<i class='fas fa-arrow-left'></i>", "<i class=' fas fa-arrow-right' ></i>"],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1399: {
                items: 3
            },
            1400: {
                items: 4
            }
        }
    });
    // Home Four Top Details Slider 
        $('.top_details_four_slider').owlCarousel({
        loop: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        nav: true,
        navText: ["<i class='fas fa-arrow-left'></i>", "<i class=' fas fa-arrow-right' ></i>"],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 2,
            },
            1399: {
                items: 2
            },
            1400: {
                items: 3
            }
        }
    });
    // Home Four Testimonials Slider 
        $('.testimonials_slider_four_wrapper').owlCarousel({
        loop: true,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        nav: false,
        navText: ["<i class='fas fa-arrow-left'></i>", "<i class=' fas fa-arrow-right' ></i>"],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            992: {
                items: 1,
            },
            1399: {
                items: 1,
            },
            1400: {
                items: 1
            }
        }
    });
    // partner_slider_area Slider
    $('.partner_slider_area').owlCarousel({
        loop: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        smartSpeed: 1000,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 2,
            },
            768: {
                items: 4,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 8
            }
        }
    });
    // partner_slider_area_twelve Slider
    $('.partner_slider_area_twelve').owlCarousel({
        loop: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        smartSpeed: 1000,
        margin: 10,
        nav: true,
        navText: ["<i class='fas fa-arrow-left'></i>", "<i class=' fas fa-arrow-right' ></i>"],
        responsive: {
            0: {
                items: 2,
            },
            768: {
                items: 4,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 8
            }
        }
    });
// Home-five nearby destination slider 
    $('.destination_five_slider').owlCarousel({
        loop: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        nav: true,
        navText: ["<i class='fas fa-arrow-left'></i>", "<i class=' fas fa-arrow-right' ></i>"],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1399: {
                items: 3
            },
            1400: {
                items: 4
            }
        }
    });
// Home-six top tour slider 
    $('.top_tour_six_slider').owlCarousel({
        loop: true,
        dots: true,
        autoplayHoverPause: true,
        autoplay: false,
        smartSpeed: 1000,
        margin: 30,
        nav: false,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1399: {
                items: 3
            },
            1400: {
                items: 4
            }
        }
    });
// Home-eleven top tour slider 
    $('.top_tour_eleven_slider').owlCarousel({
        loop: true,
        dots: true,
        autoplayHoverPause: true,
        autoplay: false,
        smartSpeed: 1000,
        margin: 30,
        nav: false,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1399: {
                items: 3
            },
            1400: {
                items: 4
            }
        }
    });
// Home-six news slider 
    $('.home_six_news_slider_wrapper').owlCarousel({
        loop: true,
        dots: true,
        autoplayHoverPause: true,
        autoplay: false,
        smartSpeed: 1000,
        margin: 30,
        nav: false,
        responsive: {
            0: {
                items: 1,
            },
            800: {
                items: 2,
            },
            1200: {
                items: 3,
            }
        }
    });
// home six testimonial area 

    $('.testimonial-slider-wrapper').owlCarousel({
        loop: true,
        autoplayHoverPause: true,
        autoplay: false,
        smartSpeed: 1000,
        dots: true,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            }
        }
    });

    // home seven trending tour area 
    $('.trending_tour_seven_slider').owlCarousel({
        loop: true,
        dots: true,
        autoplayHoverPause: true,
        autoplay: false,
        smartSpeed: 1000,
        margin: 30,
        nav: false,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1399: {
                items: 3
            },
            1400: {
                items: 4
            }
        }
    });

    //  home seven client feedback slider

    $('.client_feedback_slider').owlCarousel({
        loop: true,
        autoplayHoverPause: true,
        autoplay: false,
        smartSpeed: 1000,
        dots: true,
        margin: 30,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            800: {
                items: 2,
            },
            1200: {
                items: 3,
            }
        }
    });

    // home eight popular destination slider
        $('.popular_tours_eight_slider').owlCarousel({
            loop: true,
            dots: false,
            autoplayHoverPause: true,
            autoplay: true,
            smartSpeed: 1000,
            margin: 30,
            nav: true,
            navText: ["<i class='fas fa-arrow-left'></i>", "<i class=' fas fa-arrow-right' ></i>"],
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                992: {
                    items: 3,
                },
                1399: {
                    items: 3
                },
                1400: {
                    items: 4
                }
            }
        });
    // home ten country slider
        $('.country_slider_wrapper').owlCarousel({
            loop: true,
            dots: true,
            autoplayHoverPause: true,
            autoplay: true,
            smartSpeed: 1000,
            margin: 30,
            nav: false,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                992: {
                    items: 3,
                },
                1399: {
                    items: 3
                },
                1400: {
                    items: 4
                }
            }
        });
    // home ten immigration_slider
        $('.immigration_slider_wrapper').owlCarousel({
            loop: true,
            dots: true,
            autoplayHoverPause: true,
            autoplay: true,
            smartSpeed: 1000,
            margin: 30,
            nav: false,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                992: {
                    items: 3,
                },
                1399: {
                    items: 3
                },
                1400: {
                    items: 4
                }
            }
        });

          //home eleven testimonial Slider
    $('.testimonial_eleven_slider_wrapper').owlCarousel({
        loop: true,
        autoplayHoverPause: true,
        autoplay: true,
        smartSpeed: 1000,
        dots: false,
        nav: true,
        responsiveClass: true,
        navText: [
            "<i class='fas fa-arrow-left'></i>",
            "<i class='fas fa-arrow-right'></i>"
        ],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            }
        }
    });
    // testimonial_thirteen_slider_wrapper
    $('.testimonial_thirteen_slider_wrapper').owlCarousel({
        loop: true,
        autoplayHoverPause: true,
        autoplay: true,
        smartSpeed: 1000,
        dots: false,
        nav: true,
        responsiveClass: true,
        navText: [
            "<i class='fas fa-arrow-left'></i>",
            "<i class='fas fa-arrow-right'></i>"
        ],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            }
        }
    });

    // home twelve country slider
    $('.top_country_slider_wrapper').owlCarousel({
        loop: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        nav: true,
        navText: [
            "<i class='fas fa-arrow-left'></i>",
            "<i class='fas fa-arrow-right'></i>"
        ],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1399: {
                items: 4,
            },
            1400: {
                items: 6
            }
        }
    });
    // home fourteen tour category slider
    $('.tour_category_fourteen_slider').owlCarousel({
        loop: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        smartSpeed: 1000,
        margin: 10,
        nav: true,
        navText: ["<i class='fas fa-arrow-left'></i>", "<i class=' fas fa-arrow-right' ></i>"],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4
            }
        }
    });

    // Slider For category pages / filter price
    if (typeof noUiSlider === 'object') {
        var priceSlider = document.getElementById('price-slider');

        // Check if #price-slider elem is exists if not return
        // to prevent error logs
        if (priceSlider == null) return;

        noUiSlider.create(priceSlider, {
            start: [0, 750],
            connect: true,
            step: 50,
            margin: 200,
            range: {
                'min': 0,
                'max': 1000
            },
            tooltips: true,
            format: wNumb({
                decimals: 0,
                prefix: '$'
            })
        });
    }

}(jQuery));

$(document).ready(function () {
    $('#dashboard_dropdowns').on('click', (function () {
        $('#show_dropdown_item').slideToggle("slow");
    })
    )
});

// OTP Input
document.querySelectorAll(".otSc").forEach(function (otpEl) {
    otpEl.addEventListener("keyup", backSp);
    otpEl.addEventListener("keypress", function () {
        var nexEl = this.nextElementSibling;
        nexEl.focus();
    });
})
function backSp(backKey) {
    if (backKey.keyCode == 8) {
        var prev = this.previousElementSibling.focus()
    }
}

jQuery(window).on('load', function () { jQuery(".preloader").fadeOut(500); });