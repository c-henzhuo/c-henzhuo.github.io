 var intDiff = parseInt(7200); //倒计时总秒数量
    function timer(intDiff) {
        window.setInterval(function() {
            var day = 0,
            	hour = 0,
                minute = 0,
                second = 0; //时间默认值     
            if (intDiff > 0) {
                day = Math.floor(intDiff / (60 * 60 * 24));
                hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
                minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
                second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
            }
            if (hour <= 9) hour = '0'+hour;
            if (minute <= 9) minute = '0' + minute;
            if (second <= 9) second = '0' + second;
            $('#day_show').html(day + "天");
            $('.hour').html('<s id="h"></s>' + hour);
            $('.minute').html('<s></s>' + minute);
            $('.second').html('<s></s>' + second);
            intDiff--;
        }, 1000);
    }

    $(function() {
        timer(intDiff);
    });