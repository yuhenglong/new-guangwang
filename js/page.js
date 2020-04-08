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
        var arr_place = [{ "place": "广州市天河区黄埔大道西100号富力盈泰广场A座1208号", "phone": "020-32547597" },
            { "place": "四川省泸州市江阳区佳乐金街1号401", "phone": "0830-8583377" },
            { "place": "江门市蓬江区万达广场写字楼B座2814", "phone": "0750-3910183" },
            { "place": "湖北武汉市江汉民生路20号世纪中心写字楼", "phone": "027-82807886" },
            { "place": "深圳福田金田路3038号现代国际大厦7楼703", "phone": "0755-82780825" },
            { "place": "四川成都市高新天府大道中段530号东方希望天祥广场B座4202", "phone": "028-65586589" },
            { "place": "湖北天门竟陵东湖路维也纳国际酒店东湖国际酒店六楼601-603室", "phone": "0728-5222818" }
        ];
        $("#add_place").html(arr_place[index].place);
        $("#p_phone").html(arr_place[index].phone);
    });

})

function getHash() {
    var url = window.location.toString();
    var id = url.split("#")[1];
    return id
}

// 请求data数据-新闻动态
function getData(num) {
    $.get("./js/data.json", function(data) {
        $("#pages").html('');
        var i = (num - 1) * 6;
        var j = i + 6;
        // 获取时间戳
        let timestamp = Date.parse(new Date());
        for (i; i < j; i++) {
            var html = `<div class="am-u-md-4 am-u-lg-4 news-content">
                            <div class="sPage">
                                <a href="./news.html?id=` + i + `&time=` + timestamp +
                `"><p><img width="338" height="180" src="` + data.dataNew[i].img + `"></p>
                                    <p class="newsTitle">` + data.dataNew[i].title + `</p>
                                    <p class="createTime">` + data.dataNew[i].time + `</p>
                                    <p class="createTime">` + data.dataNew[i].content + `</p>
                                </a>
                            </div>
                        </div>`;
            $("#pages").append(html);
        }
    })
}
// 请求data数据-重大事件,暂时放弃
function getImportData() {
    $.get("./js/data.json", function(data) {
        const len = data.dataImportant.length;
        for (let i = 0; i < len; i++) {
            const html = `<div class="swiper-slide">
                                <div class="slide_box">
                                    <h3>` + data.dataImportant[i].title + `</h3>
                                    <p class="slide_time">` + data.dataImportant[i].time + `</p>
                                    <img src="img/` + data.dataImportant[i].img + `" alt="">
                                    <p class="slide_con">` + data.dataImportant[i].content + `</p style="width:100%;">
                                </div>
                            </div>`;
            $("#swiper-wrapper-import").append(html);
        }
    })
}