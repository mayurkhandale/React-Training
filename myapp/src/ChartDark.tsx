import React from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import DarkUnica from "highcharts/themes/dark-unica";

const ChartDark = ({ options }: { options: any }) => {
  DarkUnica(Highcharts);
  Highcharts["_modules"]["Extensions/Themes/DarkUnica.js"].apply();

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default ChartDark;
