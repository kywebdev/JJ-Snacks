import mixitup from 'mixitup';
import Chart from 'chart.js';
import Stickyfill from 'stickyfilljs';
import objectFitImages from 'object-fit-images';
import 'classlist-polyfill';
import 'nodelist-foreach-polyfill';
import 'polyfill-array-includes';



$(document).ready(function() {

    $(function () { objectFitImages() });

    /*
 *  Remodal - v1.1.1
 *  Responsive, lightweight, fast, synchronized with CSS animations, fully customizable modal window plugin with declarative configuration and hash tracking.
 *  http://vodkabears.github.io/remodal/
 *
 *  Made by Ilya Makarov
 *  Under MIT License
 */

!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(c){return b(a,c)}):"object"==typeof exports?b(a,require("jquery")):b(a,a.jQuery||a.Zepto)}(this,function(a,b){"use strict";function c(a){if(w&&"none"===a.css("animation-name")&&"none"===a.css("-webkit-animation-name")&&"none"===a.css("-moz-animation-name")&&"none"===a.css("-o-animation-name")&&"none"===a.css("-ms-animation-name"))return 0;var b,c,d,e,f=a.css("animation-duration")||a.css("-webkit-animation-duration")||a.css("-moz-animation-duration")||a.css("-o-animation-duration")||a.css("-ms-animation-duration")||"0s",g=a.css("animation-delay")||a.css("-webkit-animation-delay")||a.css("-moz-animation-delay")||a.css("-o-animation-delay")||a.css("-ms-animation-delay")||"0s",h=a.css("animation-iteration-count")||a.css("-webkit-animation-iteration-count")||a.css("-moz-animation-iteration-count")||a.css("-o-animation-iteration-count")||a.css("-ms-animation-iteration-count")||"1";for(f=f.split(", "),g=g.split(", "),h=h.split(", "),e=0,c=f.length,b=Number.NEGATIVE_INFINITY;e<c;e++)d=parseFloat(f[e])*parseInt(h[e],10)+parseFloat(g[e]),d>b&&(b=d);return b}function d(){if(b(document).height()<=b(window).height())return 0;var a,c,d=document.createElement("div"),e=document.createElement("div");return d.style.visibility="hidden",d.style.width="100px",document.body.appendChild(d),a=d.offsetWidth,d.style.overflow="scroll",e.style.width="100%",d.appendChild(e),c=e.offsetWidth,d.parentNode.removeChild(d),a-c}function e(){if(!x){var a,c,e=b("html"),f=k("is-locked");e.hasClass(f)||(c=b(document.body),a=parseInt(c.css("padding-right"),10)+d(),c.css("padding-right",a+"px"),e.addClass(f))}}function f(){if(!x){var a,c,e=b("html"),f=k("is-locked");e.hasClass(f)&&(c=b(document.body),a=parseInt(c.css("padding-right"),10)-d(),c.css("padding-right",a+"px"),e.removeClass(f))}}function g(a,b,c,d){var e=k("is",b),f=[k("is",u.CLOSING),k("is",u.OPENING),k("is",u.CLOSED),k("is",u.OPENED)].join(" ");a.$bg.removeClass(f).addClass(e),a.$overlay.removeClass(f).addClass(e),a.$wrapper.removeClass(f).addClass(e),a.$modal.removeClass(f).addClass(e),a.state=b,!c&&a.$modal.trigger({type:b,reason:d},[{reason:d}])}function h(a,d,e){var f=0,g=function(a){a.target===this&&f++},h=function(a){a.target===this&&0===--f&&(b.each(["$bg","$overlay","$wrapper","$modal"],function(a,b){e[b].off(r+" "+s)}),d())};b.each(["$bg","$overlay","$wrapper","$modal"],function(a,b){e[b].on(r,g).on(s,h)}),a(),0===c(e.$bg)&&0===c(e.$overlay)&&0===c(e.$wrapper)&&0===c(e.$modal)&&(b.each(["$bg","$overlay","$wrapper","$modal"],function(a,b){e[b].off(r+" "+s)}),d())}function i(a){a.state!==u.CLOSED&&(b.each(["$bg","$overlay","$wrapper","$modal"],function(b,c){a[c].off(r+" "+s)}),a.$bg.removeClass(a.settings.modifier),a.$overlay.removeClass(a.settings.modifier).hide(),a.$wrapper.hide(),f(),g(a,u.CLOSED,!0))}function j(a){var b,c,d,e,f={};for(a=a.replace(/\s*:\s*/g,":").replace(/\s*,\s*/g,","),b=a.split(","),e=0,c=b.length;e<c;e++)b[e]=b[e].split(":"),d=b[e][1],("string"==typeof d||d instanceof String)&&(d="true"===d||"false"!==d&&d),("string"==typeof d||d instanceof String)&&(d=isNaN(d)?d:+d),f[b[e][0]]=d;return f}function k(){for(var a=q,b=0;b<arguments.length;++b)a+="-"+arguments[b];return a}function l(){var a,c,d=location.hash.replace("#","");if(d){try{c=b('[data-remodal-id="'+d+'"]')}catch(e){}c&&c.length&&(a=b[p].lookup[c.data(p)],a&&a.settings.hashTracking&&a.open())}else n&&n.state===u.OPENED&&n.settings.hashTracking&&n.close()}function m(a,c){var d=b(document.body),e=d,f=this;f.settings=b.extend({},t,c),f.index=b[p].lookup.push(f)-1,f.state=u.CLOSED,f.$overlay=b("."+k("overlay")),null!==f.settings.appendTo&&f.settings.appendTo.length&&(e=b(f.settings.appendTo)),f.$overlay.length||(f.$overlay=b("<div>").addClass(k("overlay")+" "+k("is",u.CLOSED)).hide(),e.append(f.$overlay)),f.$bg=b("."+k("bg")).addClass(k("is",u.CLOSED)),f.$modal=a.addClass(q+" "+k("is-initialized")+" "+f.settings.modifier+" "+k("is",u.CLOSED)).attr("tabindex","-1"),f.$wrapper=b("<div>").addClass(k("wrapper")+" "+f.settings.modifier+" "+k("is",u.CLOSED)).hide().append(f.$modal),e.append(f.$wrapper),f.$wrapper.on("click."+q,'[data-remodal-action="close"]',function(a){a.preventDefault(),f.close()}),f.$wrapper.on("click."+q,'[data-remodal-action="cancel"]',function(a){a.preventDefault(),f.$modal.trigger(v.CANCELLATION),f.settings.closeOnCancel&&f.close(v.CANCELLATION)}),f.$wrapper.on("click."+q,'[data-remodal-action="confirm"]',function(a){a.preventDefault(),f.$modal.trigger(v.CONFIRMATION),f.settings.closeOnConfirm&&f.close(v.CONFIRMATION)}),f.$wrapper.on("click."+q,function(a){var c=b(a.target);c.hasClass(k("wrapper"))&&f.settings.closeOnOutsideClick&&f.close()})}var n,o,p="remodal",q=a.REMODAL_GLOBALS&&a.REMODAL_GLOBALS.NAMESPACE||p,r=b.map(["animationstart","webkitAnimationStart","MSAnimationStart","oAnimationStart"],function(a){return a+"."+q}).join(" "),s=b.map(["animationend","webkitAnimationEnd","MSAnimationEnd","oAnimationEnd"],function(a){return a+"."+q}).join(" "),t=b.extend({hashTracking:!0,closeOnConfirm:!0,closeOnCancel:!0,closeOnEscape:!0,closeOnOutsideClick:!0,modifier:"",appendTo:null},a.REMODAL_GLOBALS&&a.REMODAL_GLOBALS.DEFAULTS),u={CLOSING:"closing",CLOSED:"closed",OPENING:"opening",OPENED:"opened"},v={CONFIRMATION:"confirmation",CANCELLATION:"cancellation"},w=function(){var a=document.createElement("div").style;return void 0!==a.animationName||void 0!==a.WebkitAnimationName||void 0!==a.MozAnimationName||void 0!==a.msAnimationName||void 0!==a.OAnimationName}(),x=/iPad|iPhone|iPod/.test(navigator.platform);m.prototype.open=function(){var a,c=this;c.state!==u.OPENING&&c.state!==u.CLOSING&&(a=c.$modal.attr("data-remodal-id"),a&&c.settings.hashTracking&&(o=b(window).scrollTop(),location.hash=a),n&&n!==c&&i(n),n=c,e(),c.$bg.addClass(c.settings.modifier),c.$overlay.addClass(c.settings.modifier).show(),c.$wrapper.show().scrollTop(0),c.$modal.focus(),h(function(){g(c,u.OPENING)},function(){g(c,u.OPENED)},c))},m.prototype.close=function(a){var c=this;c.state!==u.OPENING&&c.state!==u.CLOSING&&c.state!==u.CLOSED&&(c.settings.hashTracking&&c.$modal.attr("data-remodal-id")===location.hash.substr(1)&&(location.hash="",b(window).scrollTop(o)),h(function(){g(c,u.CLOSING,!1,a)},function(){c.$bg.removeClass(c.settings.modifier),c.$overlay.removeClass(c.settings.modifier).hide(),c.$wrapper.hide(),f(),g(c,u.CLOSED,!1,a)},c))},m.prototype.getState=function(){return this.state},m.prototype.destroy=function(){var a,c=b[p].lookup;i(this),this.$wrapper.remove(),delete c[this.index],a=b.grep(c,function(a){return!!a}).length,0===a&&(this.$overlay.remove(),this.$bg.removeClass(k("is",u.CLOSING)+" "+k("is",u.OPENING)+" "+k("is",u.CLOSED)+" "+k("is",u.OPENED)))},b[p]={lookup:[]},b.fn[p]=function(a){var c,d;return this.each(function(e,f){d=b(f),null==d.data(p)?(c=new m(d,a),d.data(p,c.index),c.settings.hashTracking&&d.attr("data-remodal-id")===location.hash.substr(1)&&c.open()):c=b[p].lookup[d.data(p)]}),c},b(document).ready(function(){b(document).on("click","[data-remodal-target]",function(a){a.preventDefault();var c=a.currentTarget,d=c.getAttribute("data-remodal-target"),e=b('[data-remodal-id="'+d+'"]');b[p].lookup[e.data(p)].open()}),b(document).find("."+q).each(function(a,c){var d=b(c),e=d.data("remodal-options");e?("string"==typeof e||e instanceof String)&&(e=j(e)):e={},d[p](e)}),b(document).on("keydown."+q,function(a){n&&n.settings.closeOnEscape&&n.state===u.OPENED&&27===a.keyCode&&n.close()}),b(window).on("hashchange."+q,l)})});

    // homepage hero slider
    $('.home-hero-slider').slick({
        infinite: true,
        slidesToShow: 1,
        arrows: false,
        dots: true,
        fade: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 7000
    });

    // timeline year slider
    $('.timeline-year-slider').slick({
        slidesToShow: 5,
        infinite: true,
        arrows: true,
        draggable: false,
        responsive: [{
            breakpoint: 550,
            settings: {
                slidesToShow: 3
            }
        }]
    });

    $('.our-brands-filters').slick({
        infinite: true,
        arrows: true,
        draggable: false,
        variableWidth: true,
        slidesToShow: 5,
        responsive: [{
            breakpoint: 900,
            settings: {
                variableWidth: false,
                slidesToShow: 4
            }
        },
        {
            breakpoint: 650,
            settings: {
                variableWidth: false,
                slidesToShow: 3
            }
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 2
            }
        }]

    });

    // our brands slider
    $('.our-brands-slider').slick({
        infinite: true,
        arrows: true,
        slidesToShow: 6,
        draggable: false,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 5
            }
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    // homepage year slider
    $('.quick-links-slider').slick({
        slidesToShow: 4,
        infinite: true,
        arrows: true,
        draggable: false,
        variableWidth: true
    });

    // about timeline slider
    $('.timeline-slider').slick({
        slidesToShow: 3,
        infinite: true,
        arrows: true,
        draggable: false,
        centerMode: true,
        adaptiveHeight: true,
        swipe: false,
        responsive: [{
            breakpoint: 1001,
            settings: {
                slidesToShow: 1,
                arrows: false,
                swipe: true,
            }
        }]
    });

    // timeline slider custom arrows
    $('.corporate-timeline a[data-slide]').click(function(e) {
        e.preventDefault();
        var slideno = $(this).data('slide');
        $('.timeline-slider').slick('slickGoTo', slideno - 1);
        $('.timeline-year-slider .slick-slide').removeClass('slick-current');
        $(this).parent().addClass('slick-current');
    });
    $('.timeline-year-slider .slick-prev').on('click', function() {
        var slideno = $('.timeline-year-slider .slick-current a').data('slide');
        $('.timeline-slider').slick('slickGoTo', slideno - 1);
    });
    $('.timeline-year-slider .slick-next').on('click', function() {
        var slideno = $('.timeline-year-slider .slick-current a').data('slide');
        $('.timeline-slider').slick('slickGoTo', slideno - 1);
    });
    $('.timeline-slider .slick-prev').on('click', function() {
        var slideno = $('.timeline-slider .slick-current').data('slide');
        $('.timeline-year-slider').slick('slickGoTo', slideno - 1);
    });
    $('.timeline-slider .slick-next').on('click', function() {
        var slideno = $('.timeline-slider .slick-current').data('slide');
        $('.timeline-year-slider').slick('slickGoTo', slideno - 1);
    });
    $('.primary-page .year-next').click(function(e){
        e.preventDefault();
        $('.timeline-slider').slick('slickNext');
        var slideno = $('.timeline-slider .slick-current').data('slide');
        $('.timeline-year-slider').slick('slickGoTo', slideno - 1);
    });

    // month slider
    $('.month-slider').slick({
        slidesToShow: 4,
        infinite: true,
        arrows: true,
        draggable: false,
        asNavFor: '.employee-slider',
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 3
            },
            breakpoint: 500,
            settings: {
                slidesToShow: 2
            }
        }]
    });

    // employee slider
    $('.employee-slider').slick({
        slidesToShow: 3,
        infinite: true,
        arrows: true,
        centerMode: true,
        draggable: false,
        adaptiveHeight: true,
        asNavFor: '.month-slider',
        responsive: [{
            breakpoint: 1001,
            settings: {
                slidesToShow: 1,
                arrows: false,
                draggable: true
            }
        }]
    });

    // month slider custom arrows
    $('.employee-spotlight a[data-slide]').click(function(e) {
        e.preventDefault();
        var slideno = $(this).data('slide');
        $('.employee-slider').slick('slickGoTo', slideno - 1);
        $('.month-slider .slick-slide').removeClass('slick-current');
        $(this).parent().addClass('slick-current');
    });
    $('.month-slider .slick-next').on('click', function() {
        var slideno = $('.month-slider .slick-current a').data('slide');
        $('.employee-slider').slick('slickGoTo', slideno - 1);
    });
    $('.employee-slider .slick-prev').on('click', function() {
        var slideno = $('.employee-slider .slick-current').data('slide');
        $('.month-slider').slick('slickGoTo', slideno - 1);
    });
    $('.employee-slider .slick-next').on('click', function() {
        var slideno = $('.employee-slider .slick-current').data('slide');
        $('.month-slider').slick('slickGoTo', slideno - 1);
    });

    // our brands filtering
    var filtered = false;
    $('.our-brands-filters :radio').on('click', function () {
        $('.our-brands-slider').slick('slickUnfilter');
        $('.our-brands-slider').slick('slickFilter', $('.'+ $(this).attr("id")));
        filtered = true;
    });

    // culture slider
    $('.culture-slider').slick({
        slidesToShow: 1,
        infinite: true,
        arrows: true,
        centerMode: true,
        draggable: false,
        adaptiveHeight: true,
        responsive: [{
            breakpoint: 1001,
            settings: {
                slidesToShow: 1,
                arrows: false,
                draggable: true
            }
        }]
    });

    $(function() {
        var lastScrollTop = 0;
        var delta = 5;
        var navbarHeight = $('header').outerHeight();

        $(window).scroll(function(event) {
            var st = $(this).scrollTop();

            if (Math.abs(lastScrollTop - st) <= delta)
                return;

            if (st > lastScrollTop && st > navbarHeight) {
                $('header').addClass('nav-up');
            } else {
                $('header').removeClass('nav-up');
            }
            if ($('.search_open').hasClass('animate-up')) {
                $('header').removeClass('nav-up');
            }
            lastScrollTop = st;
        });
    });

    // open and close the mobile nav
    $('.burger a').on('click', function(e){
        e.preventDefault();
        $('.site').toggleClass('animate-left');
        $('.mobile-nav').toggleClass('is-open');
        $('.burger-icon').toggleClass('is-hidden is-visible');
        $('.close-icon').toggleClass('is-visible is-hidden');
    });
    $('.mobile-nav .close').on('click', function(e) {
        e.preventDefault();
        $('.site').toggleClass('animate-left');
        $('.mobile-nav').toggleClass('is-open');
    });

    // open and close the search panel
    $('.header-search').on('click', function(e) {
        e.preventDefault();
        $('.search_open').toggleClass('animate-up');
        $('.mobile-nav').toggleClass('animate-up');
    });
    $('.search_open .close').on('click', function(e) {
        e.preventDefault();
        $('.search_open').toggleClass('animate-up');
        $('.mobile-nav').toggleClass('animate-up');
    });

    // hide or show the search results
    $('.search-panel .btn--long').on('click', function(e) {
        e.preventDefault();
        $('.search_open').removeClass('before-results');
    });
    $('input.clear').on('click', function() {
        $('.search_open').addClass('before-results');
    });

    // touch hover effects
    $('.social-posts__img').bind('touchstart touchend', function(e) {
        $(this).toggleClass('social-hover');
    });

    // mobile footer accordions
    $('.footer-mobile h5').on('click', function() {
        $(this).parent().toggleClass('is-open');
    });

    // toggle accordions
    $('.accordion-item__title').on('click', function() {
        $(this).parent().toggleClass('is-open');
    });

    // go to page when dropdown option is selected
    $('.filter-bar__active-category select').change(function() {
        window.location = $(this).find('option:selected').val();
    });

    // news filtering
    if ($('.news-page').length) {
        var newsContainer = document.querySelector('.news-filtering');
        var newsMixer;

        if (newsContainer) {
            newsMixer = mixitup(newsContainer, {
                selectors: {
                    target: '.news__article'
                }
            });
        }
    }

    $('.news-page .filter-bar__filter-by span').on('click', function() {
        $('.news-page .filter-bar__filter-by ul').toggleClass('show-dropdown');
    });

    $(document).click(function(event) {
        if (!$(event.target).closest('.news-page .filter-bar__filter-by').length && $('.news-page .filter-bar__filter-by ul').hasClass('show-dropdown')) {
            $('.news-page .filter-bar__filter-by ul').toggleClass('show-dropdown');
        }
    });

    $('.news-page .filter-bar__filter-by button').on('click', function() {
        $('.news-page .filter-bar__filter-by ul').addClass('show-dropdown');
    });

    // resize contract manufacturing sidebar height depending on the height of the map
    var mapHeight = $('.facility-map__map .map').outerHeight();
    $('.facility-map__sidebar').css('height', mapHeight);

    function sidebarHeight(width) {
        if (width <= 985) {
            $('.facility-map__sidebar').css('height', 'auto');
            $('.state-list li').addClass('is-hidden');
            $('.state-list li:nth-child(1)').removeClass('is-hidden');
        } else {
            var mapHeight = $('.facility-map__map .map').outerHeight();
            $('.facility-map__sidebar').css('height', mapHeight);
            $('.state-list li').removeClass('is-hidden');
            $('.state-select').trigger('reset');
        }
    }
    sidebarHeight( $(window).width() );
        $(window).on('resize', function(){
            sidebarHeight( $(this).width() );
    });

    // show state that is clicked in the dropdown
    $('.state-select select').on('change', function() {
        $('.state-list li').addClass('is-hidden');
        var id = $(this).val();
        var selectedState = $('.state-list').find(`[data-id='${id}']`)
        selectedState.removeClass('is-hidden');
    });

    // sales growth chart
    var chart = document.getElementById('sales-growth');
    var ctx;
    if (chart) {
        ctx = chart.getContext("2d");
        var data = {
            labels: [],
            datasets: [{
                data: [],
                label: "Net Earnings",
                backgroundColor: "rgba(238, 47, 34, .9)",
                borderColor: "rgba(238, 47, 34, 0)",
                fill: "origin",
                lineTension: 0
            }, {
                data: [],
                label: "Stockholder's Equity",
                backgroundColor: "rgba(236, 203, 52, .9)",
                borderColor: "rgba(236, 203, 52, 0)",
                fill: "origin",
                lineTension: 0
            }, {
                data: [],
                label: "Net Sales",
                backgroundColor: "rgba(255, 255, 255, .9)",
                borderColor: "rgba(255, 255, 255, 0)",
                fill: "origin",
                lineTension: 0
            }
            ]
        };


        for(var i = 0; i<sales_growth_data.length; i++){
          data.labels.push(sales_growth_data[i].label_desktop);
          data.datasets[0].data.push(sales_growth_data[i].data_nasdaq);
          data.datasets[1].data.push(sales_growth_data[i].data_jj);
          data.datasets[2].data.push(sales_growth_data[i].data_sp);
        }

        var options = {
          maintainAspectRatio:false,
          onResize: function(chart, size) {
            if( $(chart.canvas).attr("sizeLoaded") == undefined)
              $(chart.canvas).attr("sizeLoaded", "Desktop");

            if( size.width < 768 && $(chart.canvas).attr("sizeLoaded") == "Desktop") {
              chart.data.labels = [];
              for(var i = 0; i<dividends_data.length; i++){
                chart.data.labels.push(dividends_data[i].label_mobile);
              }

              chart.options.legend.position = "top";
              chart.options.scales.xAxes[0].scaleLabel.fontSize = "22";
              chart.options.scales.xAxes[0].scaleLabel.padding = "0";
              chart.options.scales.xAxes[0].ticks.padding = 20;
              chart.options.scales.yAxes[0].scaleLabel.fontSize = "22";
              chart.options.scales.yAxes[0].scaleLabel.padding = "0";
              chart.options.scales.yAxes[0].ticks.padding = 20;
              chart.options.scales.yAxes[0].ticks.stepSize = 1200000;
              $("#sales-growth").parent().css("height", "100vw");
              chart.update();
              $(chart.canvas).attr("sizeLoaded", "Mobile");
            } else if( size.width > 768 && $(chart.canvas).attr("sizeLoaded") == "Mobile") {
              chart.data.labels = [];
              for(var i = 0; i<dividends_data.length; i++){
                chart.data.labels.push(dividends_data[i].label_desktop);
              };
              chart.options.legend.position = "right";
              chart.options.scales.xAxes[0].scaleLabel.fontSize = "28";
              chart.options.scales.xAxes[0].scaleLabel.padding = "0";
              chart.options.scales.xAxes[0].ticks.padding = 30;
              chart.options.scales.yAxes[0].scaleLabel.fontSize = "28";
              chart.options.scales.yAxes[0].scaleLabel.padding = "30";
              chart.options.scales.yAxes[0].ticks.padding = 30;
              chart.options.scales.yAxes[0].ticks.stepSize = 200000;
              $("#sales-growth").parent().css("height", "50vw");
              chart.update();
              $(chart.canvas).attr("sizeLoaded", "Desktop");
            }
          },
            legend: {
                display: true,
                position: 'right',
                fullWidth: false,
                labels: {
                    fontColor: '#fff',
                    fontFamily: "'Avenir Next LT Pro', sans-serif",
                    boxWidth: 40,
                    fontSize: 16
                }
            },
            tooltips: {
                titleFontFamily: "'Avenir Next LT Pro', sans-serif",
                titleFontSize: 16,
                bodyFontFamily: "'Avenir Next LT Pro', sans-serif",
                bodyFontSize: 16,
                bodySpacing: 7,
                callbacks: {
                    label: function(tooltipItem, data) {
                        var label = data.datasets[tooltipItem.datasetIndex].label || '';

                        if (label) {
                            label += ': $';
                        }
                        label += tooltipItem.yLabel;
                        return label;
                    }
                }
            },
            scales: {
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Years',
                        fontColor: '#fff',
                        fontFamily: "'adonis-web', serif",
                        fontSize: '28',
                        padding: 30
                    },
                    gridLines: {
                        display: false,
                        drawTicks: false,
                        color: '#fff',
                        offsetGridLines: true
                    },
                    ticks: {
                        fontColor: '#fff',
                        fontFamily: "'Avenir Next LT Pro', sans-serif",
                        fontSize: '16',
                        padding: 30
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Dollars',
                        fontColor: '#fff',
                        fontFamily: "'adonis-web', serif",
                        fontSize: '28',
                        padding: 30
                    },
                    gridLines: {
                        display: false,
                        drawTicks: false,
                        color: '#fff',
                        offsetGridLines: true
                    },
                    ticks: {
                        beginAtZero: true,
                        max: 1200000,
                        min: 0,
                        stepSize: 200000,
                        fontColor: '#fff',
                        fontFamily: "'Avenir Next LT Pro', sans-serif",
                        fontSize: '16',
                        padding: 30,
                        callback: function(value, index, values) {
                            return '$' + value;
                        }
                    }
                }]
            }
        };

        if( $(window).width() < 768 ) {
          data.labels = [];
          for(var i = 0; i<dividends_data.length; i++){
            data.labels.push(dividends_data[i].label_mobile);
          }
          options.legend.position = "top";
          options.scales.xAxes[0].scaleLabel.fontSize = "22";
          options.scales.xAxes[0].scaleLabel.padding = "0";
          options.scales.xAxes[0].ticks.padding = 20;
          options.scales.yAxes[0].scaleLabel.fontSize = "22";
          options.scales.yAxes[0].scaleLabel.padding = "0";
          options.scales.yAxes[0].ticks.padding = 20;
          options.scales.yAxes[0].ticks.stepSize = 1200000;
          $("#sales-growth").parent().css("height", "100vw");
          $("#sales-growth canvas").attr("sizeLoaded", "Mobile");
        }

        var myChart = new Chart(ctx, {
            type: 'line',
            data: data,
            options: options
        });
    }

    // dividends chart
    var chart2 = document.getElementById('dividends');
    var ctx2;
    if (chart2) {
        ctx2 = chart2.getContext("2d");
        const image = document.getElementById('source');
        ctx2.drawImage(image, 0, 0, 28, 66);

        var data = {
            labels: [],
            datasets: [{
                data: [],
                label: "J&J",
                backgroundColor: "#50c89c",
                borderColor: "rgba(255, 255, 255, 0)",
                fill: "origin",
                lineTension: 0,
                pointStyle: image
            }
            ]
        };
        for(var i = 0; i<dividends_data.length; i++){
          data.labels.push(dividends_data[i].label_desktop);
          data.datasets[0].data.push(dividends_data[i].data);
        }
        var options = {
            maintainAspectRatio:false,
            onResize:function(chart, size){
              if( $(chart.canvas).attr("sizeLoaded") == undefined)
                $(chart.canvas).attr("sizeLoaded", "Desktop");

              if( size.width < 768 && $(chart.canvas).attr("sizeLoaded") == "Desktop") {
                chart.data.labels = [];
                chart.data.datasets[0].pointStyle = [];

                for(var i = 0; i<dividends_data.length; i++){
                  chart.data.labels.push(dividends_data[i].label_mobile);
                  chart.data.datasets[0].pointStyle.push( dividends_data[i].label_mobile==""?"":image);
                }

                chart.data.datasets[0].radius = 0;
                chart.options.legend.position = "top";
                chart.options.scales.xAxes[0].scaleLabel.fontSize = "22";
                chart.options.scales.xAxes[0].scaleLabel.padding = "0";
                chart.options.scales.xAxes[0].ticks.padding = 20;
                chart.options.scales.yAxes[0].scaleLabel.fontSize = "22";
                chart.options.scales.yAxes[0].scaleLabel.padding = "0";
                chart.options.scales.yAxes[0].ticks.padding = 20;
                chart.options.scales.yAxes[0].ticks.stepSize = 2;
                $("#dividends").parent().css("height", "100vw");
                chart.update();
                $(chart.canvas).attr("sizeLoaded", "Mobile");
              } else if( size.width > 768 && $(chart.canvas).attr("sizeLoaded") == "Mobile") {
                chart.data.labels = [];

                for(var i = 0; i<dividends_data.length; i++){
                  chart.data.labels.push(dividends_data[i].label_desktop);
                }
                chart.data.datasets[0].radius = 0;
                chart.data.datasets[0].pointStyle = image;


                chart.options.legend.position = "right";
                chart.options.scales.xAxes[0].scaleLabel.fontSize = "28";
                chart.options.scales.xAxes[0].scaleLabel.padding = "0";
                chart.options.scales.xAxes[0].ticks.padding = 30;
                chart.options.scales.yAxes[0].scaleLabel.fontSize = "28";
                chart.options.scales.yAxes[0].scaleLabel.padding = "30";
                chart.options.scales.yAxes[0].ticks.padding = 30;
                chart.options.scales.yAxes[0].ticks.stepSize = 50;
                $("#dividends").parent().css("height", "50vw");
                chart.update();
                $(chart.canvas).attr("sizeLoaded", "Desktop");
              }
            },
            legend: {
                display: false,
            },
            tooltips: {
                titleFontFamily: "'Avenir Next LT Pro', sans-serif",
                titleFontSize: 16,
                bodyFontFamily: "'Avenir Next LT Pro', sans-serif",
                bodyFontSize: 16,
                callbacks: {
                    label: function(tooltipItem, data) {
                        var label = data.datasets[tooltipItem.datasetIndex].label || '';

                        if (label) {
                            label += ': $';
                        }
                        label += (tooltipItem.yLabel).toFixed(2);
                        return label;
                    }
                }
            },
            scales: {
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Years',
                        fontColor: '#fff',
                        fontFamily: "'adonis-web', serif",
                        fontSize: '28',
                        padding: 30
                    },
                    gridLines: {
                        display: false,
                        drawTicks: false,
                        color: '#50c89c',
                        offsetGridLines: true
                    },
                    ticks: {
                        fontColor: '#fff',
                        fontFamily: "'Avenir Next LT Pro', sans-serif",
                        fontSize: '16',
                        padding: 30
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Dollars per share',
                        fontColor: '#fff',
                        fontFamily: "'adonis-web', serif",
                        fontSize: '28',
                        padding: 30
                    },
                    gridLines: {
                        display: false,
                        drawTicks: false,
                        color: '#50c89c',
                        offsetGridLines: true
                    },
                    ticks: {
                        beginAtZero: true,
                        max: 2.00,
                        min: 0,
                        stepSize: 0.20,
                        fontColor: '#fff',
                        fontFamily: "'Avenir Next LT Pro', sans-serif",
                        fontSize: '16',
                        padding: 30,
                        callback: function(value, index, values) {
                            return '$' + ((value).toFixed(2));
                        }
                    }
                }]
            }
        };

        if( $(window).width() < 768 ) {

          data.labels = [];
          data.datasets[0].pointStyle = [];

          for(var i = 0; i<dividends_data.length; i++){
            data.labels.push(dividends_data[i].label_mobile);
            data.datasets[0].pointStyle.push( dividends_data[i].label_mobile==""?"":image);
          }

          data.datasets[0].radius = 0;
          options.legend.position = "top";
          options.scales.xAxes[0].scaleLabel.fontSize = "22";
          options.scales.xAxes[0].scaleLabel.padding = "0";
          options.scales.xAxes[0].ticks.padding = 20;
          options.scales.yAxes[0].scaleLabel.fontSize = "22";
          options.scales.yAxes[0].scaleLabel.padding = "0";
          options.scales.yAxes[0].ticks.padding = 20;
          options.scales.yAxes[0].ticks.stepSize = 300;
          $("#dividends").parent().css("height", "100vw");
          $("#dividends canvas").attr("sizeLoaded", "Mobile");
        }

        var myChart = new Chart(ctx2, {
            type: 'line',
            data: data,
            options: options
        });
    }

    // google map
    function initMap() {
        if( typeof google == 'undefined' )
          return;
        var jj = {
            lat: 39.931327,
            lng: -75.069521
        };
        var map = new google.maps.Map(document.getElementById('map'), {
            styles: [{
                "stylers": [{
                    "saturation": -100
                }]
            }],
            scrollwheel: false,
            streetViewControl: false,
            mapTypeControl: false,
            zoom: 17,
            center: {
                lat: 39.931327,
                lng: -75.069521
            }
        });
        var iconBase = _iconBase;
        var marker = new google.maps.Marker({
            position: jj,
            map: map,
            icon: iconBase + 'pin.png'
        });

        var contentString = '<div jstcache="33" class="poi-info-window gm-style"> <div jstcache="2"> <div jstcache="3" class="title full-width" jsan="7.title,7.full-width">J&amp;J Snack Foods Corp.</div> <div class="address"> <div jstcache="4" jsinstance="0" class="address-line full-width" jsan="7.address-line,7.full-width">6000 Central Hwy</div><div jstcache="4" jsinstance="*1" class="address-line full-width" jsan="7.address-line,7.full-width">Pennsauken Township, NJ 08109</div> </div> </div> <div jstcache="5" style="display:none"></div> <div class="view-link"> <a target="_blank" jstcache="6" href="https://maps.google.com/maps?ll=39.931327,-75.069521&amp;z=17&amp;t=m&amp;hl=en-US&amp;gl=US&amp;mapclient=apiv3&amp;cid=13012616792641133154"> <span> View on Google Maps </span> </a> </div> </div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 1000
        });
        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });
    }
    initMap();

    // back to top smooth scrolling
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': 0 + $target.offset().top + 1
        }, 1200, 'swing', function() {});
    });

    // custom scroll position for product category anchors
    function navBarHeight(width) {
        if (width <= 900) {
            $('.filter-bar__buttons__button[href^="#"]').on('click', function(e) {
                e.preventDefault();

                var target = this.hash;
                var $target = $(target);

                $('html, body').stop().animate({
                    'scrollTop': $target.offset().top - 158
                }, 1200, 'swing', function() {});
            });
        } else {
            $('.filter-bar__buttons__button[href^="#"]').on('click', function(e) {
                e.preventDefault();

                var target = this.hash;
                var $target = $(target);

                $('html, body').stop().animate({
                    'scrollTop': $target.offset().top - 113
                }, 1200, 'swing', function() {});
            });
        }
    }
    navBarHeight( $(window).width() );
        $(window).on('resize', function(){
            navBarHeight( $(this).width() );
    });

    // add active class to product categories buttons
    $('.products-page .filter-bar__buttons__button').on('click', function() {
        $('.filter-bar__buttons__button').removeClass('active');
        $(this).addClass('active');
    });

    // position: sticky polyfill
    var elements = $('.filter-bar');
    Stickyfill.add(elements);

    // filtering priority nav
    if ($('.products-page').length) {
        var container = document.querySelector('.tabs');
        var primary = container.querySelector('.-primary');
        var primaryItems = container.querySelectorAll('.-primary > li:not(.-more)');

        container.classList.add('-jsfied');
        primary.insertAdjacentHTML('beforeend', "\n<li class=\"-more\">\n<button type=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\nMore<span><img src=\""+_iconBase+"filtering-arrow.svg\" alt=\"\" /></span>\n</button>\n<ul class=\"-secondary\">\n".concat(primary.innerHTML, "\n</ul>\n</li>\n"));

        var secondary = container.querySelector('.-secondary');
        var secondaryItems = secondary.querySelectorAll('li');
        var allItems = container.querySelectorAll('li');
        var moreLi = primary.querySelector('.-more');
        var moreBtn = moreLi.querySelector('button');

        moreBtn.addEventListener('click', function (e) {
            e.preventDefault();
            container.classList.toggle('-show-secondary');
            moreBtn.setAttribute('aria-expanded', container.classList.contains('-show-secondary'));
        });

        var doAdapt = function doAdapt() {
            allItems.forEach(function (item) {
                item.classList.remove('-hidden');
            });

            var stopWidth = moreBtn.offsetWidth;
            var hiddenItems = [];
            var primaryWidth = primary.offsetWidth;

            primaryItems.forEach(function (item, i) {
                if (primaryWidth >= stopWidth + item.offsetWidth) {
                    stopWidth += item.offsetWidth;
                } else {
                    item.classList.add('-hidden');
                    hiddenItems.push(i);
                }
            });

            if (!hiddenItems.length) {
                moreLi.classList.add('-hidden');
                container.classList.remove('-show-secondary');
                moreBtn.setAttribute('aria-expanded', false);
            } else {
                secondaryItems.forEach(function (item, i) {
                    if (!hiddenItems.includes(i)) {
                        item.classList.add('-hidden');
                    }
                });
            }
        };

        doAdapt();
        window.addEventListener('resize', doAdapt);
        document.addEventListener('click', function (e) {
            var el = e.target;

            while (el) {
                if (el === secondary || el === moreBtn) {
                    return;
                }

                el = el.parentNode;
            }

            container.classList.remove('-show-secondary');
            moreBtn.setAttribute('aria-expanded', false);
        });
    }

    // display file name
    $('input[type="file"]').change(function(e){
        var fileName = e.target.files[0].name;
        $('.filename').text(fileName);
        $('#input_2_2').val(fileName);
    });

    $('<span class="btn btn--black choose-file">Choose a file</span>').appendTo('.ginput_container_fileupload');
    
    $(document).on('gform_post_render', function() {
        $('<span class="btn btn--black choose-file">Choose a file</span>').appendTo('.ginput_container_fileupload');

        $('.choose-file').on('click', function() {
            $('#input_2_1').trigger('click');
        });
        $('input[type="file"]').change(function(e){
            var fileName = e.target.files[0].name;
            $('.filename').text(fileName);
            $('#input_2_2').val(fileName);
        });
    });

    $('#gform_2').submit(function() {
        $('.filename').hide();
    });

    $('.choose-file').on('click', function() {
        $('#input_2_1').trigger('click');
    });

    // toggle the share icons
    $('.share .callout-link').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('open');
    })
    
});
