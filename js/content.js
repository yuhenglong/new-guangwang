var url = location.origin + '/getPage?pageNum=',
    $pages = $('#pages')

function jumpPage(context) {
    $.ajax({
        url: url + context.option.curr,
        type: 'get',
        dataType: 'json',
        success: function(res) {
            if (res.dataList.length > 0) {
                $pages.html('')
                $.each(res.dataList, function(index, item) {
                    var html = $('<div class="am-u-md-4 am-u-lg-4 news-content"><div class="sPage"><a href="content/' + item.sid + '"><p><img width="338" height="180" src="' + item.pic + '" /></p><p class="newsTitle">' + item.newsTitle + '</p><p class="createTime">' + getTime(item.createTime.substr(0,10)) + '</p></a></div></div>')
                    $pages.append(html)
                })
            }
        },
        error: function(error) {
            console.log(error)
        }
    })
}

function getTime(t){
    return (t+' ').replace(' ', '日').replace('-', '年').replace('-', '月')
}