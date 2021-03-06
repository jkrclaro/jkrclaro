Highcharts.chart('deaths-chart', {
    chart: {
        type: 'line',
        zoomType: 'x',
        panning: true,
        panKey: 'shift',
        scrollablePlotArea: {
            minWidth: 768
        }
    },
    title: {
        text: 'Confirmed deaths of COVID-19 in Ireland'
    },
    credits: {
        enabled: false
    },
    annotations: [{
        draggable: '',
        labelOptions: {
            shape: 'connector',
            justify: false,
            crop: true,
            style: {
                fontSize: '0.7em',
                textOutline: '1px'
            }
        },
    }],
    xAxis: {
        type: 'datetime',
        labels: {
            formatter: function() {
                return Highcharts.dateFormat('%b \'%y', this.value)
            }
        },
        title: {
            text: 'Date'
        },
        plotBands: PLOT_BANDS
    },
    yAxis: {
        startOnTick: true,
        endOnTick: false,
        maxPadding: 0.35,
        title: {
            text: 'Deaths'
        },
        labels: {
            format: '{value}'
        },
    },
    tooltip: {
        headerFormat: 'Date: {point.x}<br>',
        pointFormat: 'Deaths: {point.y}',
        formatter: function() {
            var lockdownStatus = '';
            var lockdowns = {
                1585353600000: 'First lockdown',
                1589760000000: 'Phase 1',
                1591574400000: 'Phase 2',
                1593388800000: 'Phase 3',
                1600128000000: 'Level 2',
                1601856000000: 'Level 3',
                1603238400000: 'Level 5',
                1606780800000: 'Level 3+',
                1608768000000: 'Level 5+',
            }
            for (var lockdown in lockdowns) {
                if (lockdown == this.x) {
                    lockdownStatus += `<br> <b>Lockdown:</b> ${lockdowns[lockdown]}</b>`
                }
            }
            return `<b>Date</b>: ${Highcharts.dateFormat('%d %b %Y', this.x)} <br> <b>Deaths</b>: ${this.y} ${lockdownStatus}`
        },
        shared: true
    },
    legend: {
        enabled: false
    },
    series: [{
        data: DEATHS,
        lineColor: Highcharts.getOptions().colors[5],
        color: Highcharts.getOptions().colors[5],
        fillOpacity: 1,
        name: 'Deaths',
        marker: {
            enabled: false
        },
        threshold: null
    }]
});