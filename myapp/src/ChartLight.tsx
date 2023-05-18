import React from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import SandSignika from "highcharts/themes/sand-signika";

const ChartLight = ({ options }: { options: any }) => {
  SandSignika(Highcharts);
  Highcharts["_modules"]["Extensions/Themes/SandSignika.js"].apply();

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default ChartLight;
