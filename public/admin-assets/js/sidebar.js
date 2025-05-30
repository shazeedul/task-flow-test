(function ($) {
  "use strict";
  var bdAdmin = {
    initialize: function () {
      this.navbarClock();
      this.inputSearch();
      this.scrollBar();
      this.dropdownScrollBar();
      this.navbarToggler();
      this.sideBar();
      this.sidebarCompact();
      this.materialRipple();
      this.fullScreen();
      this.pageloader();
    },
    navbarClock: function () {
      //nav clock
      if ($(".nav-clock")[0]) {
        var a = new Date();
        a.setDate(a.getDate()),
          setInterval(function () {
            var a = new Date().getSeconds();
            $(".time-sec").html((a < 10 ? "0" : "") + a);
          }, 1e3),
          setInterval(function () {
            var a = new Date().getMinutes();
            $(".time-min").html((a < 10 ? "0" : "") + a);
          }, 1e3),
          setInterval(function () {
            var a = new Date().getHours();
            $(".time-hours").html((a < 10 ? "0" : "") + a);
          }, 1e3);
      }
    },
    inputSearch: function () {
      //input search focus action
      $("body").on("focus", ".search__text", function () {
        $(this).closest(".search").addClass("search--focus");
      }),
        $("body").on("blur", ".search__text", function () {
          $(this).val(""), $(this).closest(".search").removeClass("search--focus");
        });
    },
    scrollBar: function () {
      $(".sidebar-body").each(function () {
        const ps = new PerfectScrollbar($(this)[0]);
      });
    },
    dropdownScrollBar: function () {
      $(".dropdown-menu-scroll").each(function () {
        const ps = new PerfectScrollbar($(this)[0]);
      });
    },
    navbarToggler: function () {
      //Navbar collapse hide
      $(".navbar-collapse .navbar-toggler").on("click", function () {
        $(".navbar-collapse").collapse("hide");
      });
    },
    sideBar: function () {
      $("#sidebarCollapse").on("click", function () {
        $(".sidebar, .navbar").toggleClass("active");
      });
      $(".overlay").on("click", function () {
        $(".sidebar").removeClass("active");
        $(".overlay").removeClass("active");
        $(".sidebar-icon-aside").removeClass("show");
        $(".sidebar-icon .nav-link").removeClass("active");
      });
      $("#sidebarCollapse").on("click", function (e) {
        e.preventDefault();
        if (window.matchMedia("(max-width: 767px)").matches) {
          $(".overlay").addClass("active");
        } else {
          $(".overlay").removeClass("active");
        }
      });
      $(".sidebar .with-sub").on("click", function (e) {
        e.preventDefault();
        $(this).parent().toggleClass("show");
        $(this).parent().siblings().removeClass("show");
      });

      var minimizeSidebar = false,
        miniSidebar = 0;

      function checkPosition(x) {
        if (x.matches) {
          // If media query matches

          if (!minimizeSidebar) {
            var minibutton = $(".sidebar-toggle-icon");
            if ($(".sidebar-mini").hasClass("sidebar-collapse")) {
              miniSidebar = 1;
              minibutton.addClass("toggled");
            }
            minibutton.on("click", function () {
              if (miniSidebar === 1) {
                $(".sidebar-mini").removeClass("sidebar-collapse");
                minibutton.removeClass("toggled");
                miniSidebar = 0;
              } else {
                $(".sidebar-mini").addClass("sidebar-collapse");
                minibutton.addClass("toggled");
                miniSidebar = 1;
              }
              $(window).resize();
            });
            minimizeSidebar = true;
          }
          $(".sidebar").hover(
            function () {
              if ($(".sidebar-mini").hasClass("sidebar-collapse")) {
                $(".sidebar-mini").addClass("sidebar-collapse_hover");
              }
            },
            function () {
              if ($(".sidebar-mini").hasClass("sidebar-collapse")) {
                $(".sidebar-mini").removeClass("sidebar-collapse_hover");
              }
            }
          );
        }
      }

      var x = window.matchMedia("(min-width: 768px)");
      checkPosition(x); // Call listener function at run time
      x.addListener(checkPosition); // Attach listener function on state changes
    },
    sidebarCompact: function () {
      if ($(".sidebar-icon .nav-link.active").length) {
        var targ = $(".sidebar-icon .nav-link.active").attr("href");
        $(targ).addClass("show");
        $(".sidebar-icon-aside").addClass("show");

        if (window.matchMedia("(min-width: 992px)").matches && window.matchMedia("(max-width: 1199px)").matches) {
          $(".sidebar-icon .nav-link.active").removeClass("active");
        }
      }
      $(".sidebar-icon .nav-link").on("click", function (e) {
        e.preventDefault();

        $(this).addClass("active");
        $(this).siblings().removeClass("active");

        $(".sidebar-icon-aside").addClass("show");

        var targ = $(this).attr("href");
        $(targ).addClass("show");
        $(targ).siblings().removeClass("show");
      });
      $(".sidebar-icon-toggle-menu").on("click", function (e) {
        e.preventDefault();

        $(".sidebar-icon .nav-link.active").removeClass("active");
        $(".sidebar-icon-aside").removeClass("show");
      });

      $(".compact .sidebar-toggle-icon").on("click", function () {
        $(".content-wrapper").toggleClass("active");
      });

      $(".sidebar-icon").each(function () {
        const ps = new PerfectScrollbar($(this)[0]);
      });

      $(".sidebar-icon-body").each(function () {
        const ps = new PerfectScrollbar($(this)[0]);
      });
    },
    materialRipple: function () {
      // Material Ripple effect
      $(".material-ripple").on("click", function (event) {
        var surface = $(this);

        // create .material-ink element if doesn't exist
        if (surface.find(".material-ink").length === 0) {
          surface.prepend("<div class='material-ink'></div>");
        }

        var ink = surface.find(".material-ink");

        // in case of quick double clicks stop the previous animation
        ink.removeClass("animate");

        // set size of .ink
        if (!ink.height() && !ink.width()) {
          // use surface's width or height whichever is larger for
          // the diameter to make a circle which can cover the entire element
          var diameter = Math.max(surface.outerWidth(), surface.outerHeight());
          ink.css({ height: diameter, width: diameter });
        }

        // get click coordinates
        // Logic:
        // click coordinates relative to page minus
        // surface's position relative to page minus
        // half of self height/width to make it controllable from the center
        var xPos = event.pageX - surface.offset().left - ink.width() / 2;
        var yPos = event.pageY - surface.offset().top - ink.height() / 2;

        var rippleColor = surface.data("ripple-color");

        //set the position and add class .animate
        ink
          .css({
            top: yPos + "px",
            left: xPos + "px",
            background: rippleColor,
          })
          .addClass("animate");
      });
    },

    fullScreen: function () {
      function toggleFullscreen(elem) {
        elem = elem || document.documentElement;
        if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
          if (elem.requestFullscreen) {
            elem.requestFullscreen();
          } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
          } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
          } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
          }
        } else {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
          }
        }
      }

      var el = document.getElementById("btnFullscreen");
      if (el) {
        el.addEventListener("click", function () {
          toggleFullscreen();
        });
      }
      $(".full-screen_icon").click(function () {
        $(this).toggleClass("typcn-arrow-move-outline");
        $(this).toggleClass("typcn-arrow-minimise-outline");
      });
    },
    pageloader: function () {
      setTimeout(function () {
        $(".page-loader-wrapper").fadeOut();
      }, 50);
    },
  };
  // Initialize
  $(document).ready(function () {
    "use strict";
    bdAdmin.initialize();
    $(".metismenu").metisMenu(); //Metismenu
  });
  $(window).on("load", function () {
    bdAdmin.pageloader();
  });
})(jQuery);
