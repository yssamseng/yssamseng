import React, { Component } from 'react'
import PersonalSite from './page/PersonalSite'
// import $ from "jquery";

export default class App extends Component {

  componentDidMount() {
    "use strict";

    //   $(function(){
    //     $('.nav-link').click(function(){
    //       $('.nav-link').each(function(a){
    //         $( this ).removeClass('active')
    //       });
    //       $( this ).addClass('active');
    //     });
    //  });

    var homeSection = '#home-section';
    var aboutSection = '#about-section';
    var resumeSection = '#resume-section';
    var servicesSection = '#services-section';
    var skillsSection = '#skills-section';
    var projectsSection = '#projects-section';
    var blogSection = '#blog-section';
    var contactSection = '#contact-section';

    $(window).scroll(function () {
      var current = $(this).scrollTop();
      var detectHeight = 320;
      //home section
      var heightHomeSection = $('#home-section').offset().top;
      var heightAboutSection = $('#about-section').offset().top - detectHeight;
      var heightResumeSection = $('#resume-section').offset().top - detectHeight;
      // var heightServicesSection = $('#services-section').offset().top - detectHeight;
      var heightSkillsSection = $('#skills-section').offset().top - detectHeight;
      var heightProjectsSection = $('#projects-section').offset().top - detectHeight;
      var heightBlogSection = $('#blog-section').offset().top - detectHeight;
      var heightContactSection = $('#contact-section').offset().top - detectHeight;

      if(current != null){
        if(current >= heightHomeSection && current < heightAboutSection){
          activeNavbar(homeSection)
        }else if(current >= heightAboutSection && current < heightResumeSection){
          activeNavbar(aboutSection)
        }else if(current >= heightResumeSection && current < heightSkillsSection){
          activeNavbar(resumeSection)
        }else if(current >= heightSkillsSection && current < heightProjectsSection){
          activeNavbar(skillsSection)
        }else if(current >= heightProjectsSection && current < heightBlogSection){
          activeNavbar(projectsSection)
        }else if(current >= heightBlogSection && current < heightContactSection){
          activeNavbar(blogSection)
        }else if(current >= heightContactSection){
          activeNavbar(contactSection)
        }
      }
    });

    var activeNavbar = function (section) {
      $('.nav-link').each(function (a) {
        $(this).removeClass('active')
      });
      $('.nav-link[href="' + section + '"]').addClass('active');
    }

    $(window).stellar({
      responsive: true,
      parallaxBackgrounds: true,
      parallaxElements: true,
      horizontalScrolling: false,
      hideDistantElements: false,
      scrollProperty: "scroll",
    });

    var fullHeight = function () {
      $(".js-fullheight").css("height", $(window).height());
      $(window).resize(function () {
        $(".js-fullheight").css("height", $(window).height());
      });
    };
    fullHeight();

    // loader
    var loader = function () {
      setTimeout(function () {
        if ($("#ftco-loader").length > 0) {
          $("#ftco-loader").removeClass("show");
        }
      }, 1);
    };
    loader();

    // Scrollax
    $.Scrollax;

    // Burger Menu
    var burgerMenu = function () {
      $("body").on("click", ".js-fh5co-nav-toggle", function (event) {
        event.preventDefault();

        if ($("#ftco-nav").is(":visible")) {
          $(this).removeClass("active");
        } else {
          $(this).addClass("active");
        }
      });
    };
    burgerMenu();

    var onePageClick = function () {
      $(document).on("click", '#ftco-nav a[href^="#"]', function (event) {
        event.preventDefault();

        var href = $.attr(this, "href");

        $("html, body").animate(
          {
            scrollTop: $($.attr(this, "href")).offset().top - 70,
          },
          500,
          function () {
            window.location.hash = href;
          }
        );
      });
    };
    // onePageClick();

    var carousel = function () {
      $(".home-slider").owlCarousel({
        loop: true,
        autoplay: true,
        margin: 0,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        nav: false,
        autoplayHoverPause: false,
        items: 1,
        navText: [
          "<span class='ion-md-arrow-back'></span>",
          "<span class='ion-chevron-right'></span>",
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
          },
        },
      });
    };
    carousel();

    $("nav .dropdown").hover(
      function () {
        var $this = $(this);
        // 	 timer;
        // clearTimeout(timer);
        $this.addClass("show");
        $this.find("> a").attr("aria-expanded", true);
        // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
        $this.find(".dropdown-menu").addClass("show");
      },
      function () {
        var $this = $(this);
        // timer;
        // timer = setTimeout(function(){
        $this.removeClass("show");
        $this.find("> a").attr("aria-expanded", false);
        // $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
        $this.find(".dropdown-menu").removeClass("show");
        // }, 100);
      }
    );

    $("#dropdown04").on("show.bs.dropdown", function () {
      console.log("show");
    });

    // scroll
    var scrollWindow = function () {
      $(window).scroll(function () {
        var $w = $(this),
          st = $w.scrollTop(),
          navbar = $(".ftco_navbar"),
          sd = $(".js-scroll-wrap");

        if (st != null) {
          if (st > 150) {
            if (!navbar.hasClass("scrolled")) {
              navbar.addClass("scrolled");
            }
          }
          if (st < 150) {
            if (navbar.hasClass("scrolled")) {
              navbar.removeClass("scrolled sleep");
            }
          }
          if (st > 350) {
            if (!navbar.hasClass("awake")) {
              navbar.addClass("awake");
            }

            if (sd.length > 0) {
              sd.addClass("sleep");
            }
          }
          if (st < 350) {
            if (navbar.hasClass("awake")) {
              navbar.removeClass("awake");
              navbar.addClass("sleep");
            }
            if (sd.length > 0) {
              sd.removeClass("sleep");
            }
          }
        }
      });
    };
    scrollWindow();

    var counter = function () {
      $("#section-counter, .hero-wrap, .ftco-counter, .ftco-about").waypoint(
        function (direction) {
          if (
            direction === "down" &&
            !$(this.element).hasClass("ftco-animated")
          ) {
            var comma_separator_number_step =
              $.animateNumber.numberStepFactories.separator(",");
            $(".number").each(function () {
              var $this = $(this),
                num = $this.data("number");
              // console.log(num);
              $this.animateNumber(
                {
                  number: num,
                  numberStep: comma_separator_number_step,
                },
                2000
              );
            });
          }
        },
        { offset: "95%" }
      );
    };
    counter();

    var contentWayPoint = function () {
      var i = 0;
      $(".ftco-animate").waypoint(
        function (direction) {
          if (
            direction === "down" &&
            !$(this.element).hasClass("ftco-animated")
          ) {
            i++;

            $(this.element).addClass("item-animate");
            setTimeout(function () {
              $("body .ftco-animate.item-animate").each(function (k) {
                var el = $(this);
                setTimeout(
                  function () {
                    var effect = el.data("animate-effect");
                    if (effect === "fadeIn") {
                      el.addClass("fadeIn ftco-animated");
                    } else if (effect === "fadeInLeft") {
                      el.addClass("fadeInLeft ftco-animated");
                    } else if (effect === "fadeInRight") {
                      el.addClass("fadeInRight ftco-animated");
                    } else {
                      el.addClass("fadeInUp ftco-animated");
                    }
                    el.removeClass("item-animate");
                  },
                  k * 50,
                  "easeInOutExpo"
                );
              });
            }, 100);
          }
        },
        { offset: "95%" }
      );
    };
    contentWayPoint();

    // magnific popup
    $(".image-popup").magnificPopup({
      type: "image",
      closeOnContentClick: true,
      closeBtnInside: false,
      fixedContentPos: true,
      mainClass: "mfp-no-margins mfp-with-zoom", // class to remove default margin from left and right side
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        verticalFit: true,
      },
      zoom: {
        enabled: true,
        duration: 300, // don't foget to change the duration also in CSS
      },
    });

    $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
      disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false,
    });
  }

  render() {
    return (
      <PersonalSite />
    )
  }
}

