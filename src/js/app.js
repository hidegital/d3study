var data01 = function() {  //simpledata barchart
    d3.json('data/data.json', function (data) {

        nv.addGraph(function () {
            var chart = nv.models.multiBarChart()
                .x(function (d) {
                    return d.label
                })
                .y(function (d) {
                    return d.value
                })
                .margin({top: 30, right: 20, bottom: 50, left: 100})
                .showControls(false);

            chart.yAxis.tickFormat(d3.format(',.2f'));
            //d3.format(',.2f')これoptionかな

            d3.select('#chart1 svg').datum(data).call(chart);
            d3.select('#chart1 svg').transition().duration(500).call(chart);
            //これアニメーション

            return chart;
        });
    });
};

var data02 = function() { //複雑 ラインチャート
    d3.json('data/lineData.json', function (data) {
        nv.addGraph(function() {
            var chart = nv.models.cumulativeLineChart()
                .x(function(d) { return d[0] })
                .y(function(d) { return d[1]/100 })
                //.margin({top: 30, right: 20, bottom: 50, left: 100})
                .color(d3.scale.category10().range())
                //.useInteractiveGuideline(true);

            chart.xAxis
                .tickValues([1078030800000,1122782400000,1167541200000,1251691200000])
                .tickFormat(function(d) {
                    return d3.time.format('%x')(new Date(d))
                });

            chart.yAxis
                .tickFormat(d3.format(',.1%'));

            d3.select('#chart2 svg').datum(data).call(chart);
            return chart;
        });
    });
};

var data03 = function() {  //simpledata pieチャート
    d3.json('data/pieData.json', function (data) {

        nv.addGraph(function() {
            var chart = nv.models.pieChart()
                .x(function(d) { return d.label })
                .y(function(d) { return d.value })
                .showLabels(true);

            d3.select("#chart3 svg")
                .datum(data)
                .transition().duration(350)
                .call(chart);

            return chart;
        });

        //Donut chart example
        nv.addGraph(function() {
            var chart = nv.models.pieChart()
                    .x(function(d) { return d.label })
                    .y(function(d) { return d.value })
                    .showLabels(true)     //Display pie labels
                    .labelThreshold(.05)  //Configure the minimum slice size for labels to show up
                    .labelType("percent") //Configure what type of data to show in the label. Can be "key", "value" or "percent"
                    .donut(true)          //Turn on Donut mode. Makes pie chart look tasty!
                    .donutRatio(0.35)     //Configure how big you want the donut hole size to be.
                ;

            d3.select("#chart4 svg")
                .datum(data)
                .transition().duration(350)
                .call(chart);

            return chart;
        });
    });
};

data01();
data02();
data03();


