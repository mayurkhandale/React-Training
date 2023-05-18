import React from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import SandSignika from "highcharts/themes/sand-signika";
const getOptions = (type) => ({
    chart: {
      type,
      width: 500,
      height: 300,
    },
    title: {
      text: 'hgvh',
    },
    yAxis: {
      title: {
        text: 'Values',
      },
    },
    series: [
      {
        data: [1, 2, 1, 4, 3, 6],
      },
      {
        data: [2, 7, 0, 4, 6, 2],
      },
    ],
    credits: {
      enabled: false,
    },
  });
export default function Light() {
    SandSignika(Highcharts);
    Highcharts["_modules"]["Extensions/Themes/SandSignika.js"].apply();
    return (
        <div><HighchartsReact highcharts={Highcharts} options={getOptions('line')} />
            <HighchartsReact highcharts={Highcharts} options={getOptions('spline')} />
            <HighchartsReact highcharts={Highcharts} options={getOptions('area')} />
            <HighchartsReact highcharts={Highcharts} options={getOptions('areaspline')} />
            <HighchartsReact highcharts={Highcharts} options={getOptions('column')} />
            <HighchartsReact highcharts={Highcharts} options={getOptions('bar')} />
            <HighchartsReact highcharts={Highcharts} options={getOptions('pie')} />
            <HighchartsReact highcharts={Highcharts} options={getOptions('scatter')} /></div>
    )
}
