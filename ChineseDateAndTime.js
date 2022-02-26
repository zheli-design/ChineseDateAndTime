function ChineseDateAndTime()
{

    var dt = new Date();
        year = dt.getFullYear(),
        month = dt.getMonth() + 1,
        day = dt.getDate(),
        week = dt.getDay(),
        today = year + "年" + month + "月" + day + "日" + " 星期" + week;

    // 处理年份

    var y = [ "〇", "一", "二", "三", "四", "五", "六", "七", "八", "九" ];

    var y1 = Math.abs(parseInt(year / 1000)),
        y2 = Math.abs(parseInt(year % 1000 / 100)),
        y3 = Math.abs(parseInt(year / 10 % 10)),
        y4 = Math.abs(parseInt(year % 10));

    y1 = y[y1];
    y2 = y[y2];
    y3 = y[y3];
    y4 = y[y4];

    // 处理月份

    var m = [ "〇", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二" ];

    month = m[month];

    // 处理日子

    var d = [
        "一", "二", "三", "四", "五", "六", "七", "八", "九",
        "十", "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九",
        "二十", "二十一", "二十二", "二十三", "二十四", "二十五", "二十六", "二十七", "二十八", "二十九",
        "三十", "三十一"
    ];

    day = d[day - 1];

    // 处理星期

    var w = [ "日", "一", "二", "三", "四", "五", "六" ];

    week = w[week];

    document.write(y1 + y2 + y3 + y4 + "年" + month + "月" + day + "日 星期" + week);

}