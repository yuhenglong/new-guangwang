$(function() {
    $('img.lazy').lazyload({ effect: 'fadeIn' });
    $('.nav-li').hover(function() {
        $(this)
            .find('.ty-menu')
            .stop(true, true)
            .slideDown('fast')
        $(this)
            .siblings()
            .find('.ty-menu')
            .stop(true, true)
            .slideUp('fast')
    }, function() {

        $(this)
            .find('.ty-menu')
            .stop(true, true)
            .slideUp('fast')
    })

    $('#swiper').swiper({ pagination: '#swiper .swiper-pagination', paginationClickable: true, autoplay: 3000, loop: true });
    $('#swiper2').swiper({ pagination: '#swiper2 .swiper-pagination', paginationClickable: true, autoplay: 3000, loop: true });
    $('#swiper-back').swiper({ paginationClickable: true, autoplay: 3000, loop: true, nextButton: ".swiper-prev", prevButton: ".swiper-next" })

    $('#top').on('click', function() {
        $('html,body').animate({ scrollTop: 0 })
    })
})