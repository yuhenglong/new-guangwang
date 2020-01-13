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
            getData(current);
        }
    });
})

function getHash() {
    var url = window.location.toString();
    var id = url.split("#")[1];
    return id
}

// 请求data数据
function getData(num) {
    $.get("./js/data.json", function(data) {
        $("#pages").html('');
        var i = num - 1;
        var j = i + 6;
        for (i; i < j; i++) {
            var html = `<div class="am-u-md-4 am-u-lg-4 news-content">
                            <div class="sPage">
                                <a href="javascript:void(0)">
                                    <p><img width="338" height="180" src="` + data.data[i].img + `"></p>
                                    <p class="newsTitle">` + data.data[i].title + `</p>
                                    <p class="createTime">` + data.data[i].time + i `</p>
                                    <p class="createTime">` + data.data[i].content + i `</p>
                                </a>
                            </div>
                        </div>`;
            $("#pages").append(html);
        }
    })
}