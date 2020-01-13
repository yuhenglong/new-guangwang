$(function() {
    $('img').lazyload({ effect: 'fadeIn' });
    $('.nav-li').mouseover(function() {
        $(this).children('.ty-menu').stop(true, true).slideDown(150);
    }).mouseleave(function() {
        $(this).children('.ty-menu').stop(true, true).slideUp(150);
    });

    $('#top').on('click', function() {
        $('html,body').animate({
            scrollTop: 0
        })
    })

    var $links = $('.books ul li a')
    if (!location.hash) {
        $($links.get(0)).addClass('mask')
    } else {
        $links.each(function(it, i) {
            var a = $(i)
            if (a.attr('href') === '#' + getHash()) {
                a.addClass('mask')
            } else {
                a.removeClass('mask')
            }
        })
    }
    $links.on('click', function() {
        $links.each(function(it, i) {
            $(i).removeClass('mask')
        })
        $(this).addClass('mask')
    })

    $('#swiper').swiper({
        pagination: '#swiper .swiper-pagination',
        paginationClickable: true,
        autoplay: 3000,
        loop: true,
        nextButton: ".swiper-prev",
        prevButton: ".swiper-next"
    });


    $('#top').on('click', function() {
            $('html,body').animate({
                scrollTop: 0
            })
        })
        // 图片移入移出事件
    $(".a_img").mouseenter(function() {
        var now_index = $(this).data("index");
        $(".slide_left ul li").eq(now_index).addClass("slide_right");
    });
    $(".a_img").mouseleave(function() {
        $(".slide_left ul li").removeClass("slide_right");
    });

    $(".slide_left ul li").mouseenter(function() {
        $(this).addClass("slide_right");
    }).mouseleave(function() {
        $(".slide_left ul li").removeClass("slide_right");
    });

    $(".slide_left ul li").click(function() {
        var index = $(this).index()
        $(".change .a_img").siblings().removeClass("z_index_top");
        $(".change .a_img").eq(index).addClass("z_index_top");
    });
    // 分页功能
    $("#pagination1").pagination({
        currentPage: 1,
        totalPage: 5,
        callback: function(current) {
            $.get("./js/data.json", function(current) {
                const num = parseInt(current);
                var i = num - 1;
                var j = i + 6;
                console.log("大肥猪", i, j);
                for (i; i < j; i++) {
                    console.log(i);
                }
            })
        }
    });
})

function getHash() {
    var url = window.location.toString();
    var id = url.split("#")[1];
    return id
}