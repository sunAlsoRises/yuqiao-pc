(function ($) {

    function bindChart(dom, dataArray, width) {
        //折线图
        var settings = {
            chart: {
                height: 178,
                width: width,
                type: 'spline'
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                labels: {
                    style: {
                        fontSize: '12px',
                        fontFamily: 'Arial, 宋体'
                    }
                },
                lineWidth: 1,
                //X轴基线宽度
                lineColor: '#d9d9d9',
                categories: dataArray.x
            },
            yAxis: {
                title: {
                    text: ''
                },
                gridLineColor: '#d9d9d9',
                labels: {
                    style: {
                        fontSize: '12px',
                        fontFamily: 'Arial, 宋体'
                    },
                    formatter: function () {
                        return this.value + '元';
                    }
                }
            },
            tooltip: {
                crosshairs: true,
                shared: true,
                borderColor: '#d9d9d9',
                style: {
                    fontSize: '12px',
                    fontFamily: 'Arial, 宋体'
                },
                valuePrefix: '',
                valueSuffix: '元/平'
            },
            plotOptions: {
                dashStyle: 'ShortDashDotDot',
                spline: {
                    lineWidth: 2,
                    marker: {
                        radius: 3,
                        lineWidth: 0
                    }
                }
            },
            exporting: {
                enabled: false
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: getSeries(dataArray)
        };

        dom.highcharts(settings);
    }
    $.fn.webChart = function(dataArray, width) {
        if (!width) {
            width = 257;
        }
        bindChart(this, dataArray, width);
    };
})(jQuery);

function getSeries(dataArray) {
    var series;
    if ($.trim(dataArray.y1).length > 0 && $.trim(dataArray.y2).length > 0) {
        series = [
        {
            name: '挂牌均价',
            color: '#4D8D1B',
            marker: {
                symbol: 'circle'
            },
            data: dataArray.y2
        },{
            name: '成交均价',
            color: '#FF6910',
            marker: {
                symbol: 'circle'
            },
            data: dataArray.y1
        }];
    } else if ($.trim(dataArray.y1).length > 0) {
        series =[{
            name: '成交均价',
            color: '#FF6910',
            marker: {
                symbol: 'circle'
            },
            data: dataArray.y1
        }];
    } else if ($.trim(dataArray.y2).length > 0) {
        series = [{
            name: '挂牌均价',
            color: '#4D8D1B',
            marker: {
                symbol: 'circle'
            },
            data: dataArray.y2
        }];
    }
    return series;
}





