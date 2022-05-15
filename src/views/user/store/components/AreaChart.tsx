
// ** React Imports
import { useEffect, useState } from "react";

// ** Third Party Components
import axios from "axios";
import { Package } from "react-feather";

// ** Custom Components
import StatsWithAreaChart from "../../../../@core/components/widgets/stats/StatsWithAreaChart";

const AreaChart = ({ kFormatter, warning, color, db_data}) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(db_data);
  }, []);

  const options = {
    chart: {
      id: "revenue",
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    grid: {
      show: false,
    },
    colors: [warning],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2.5,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0.35,
        opacityFrom: 0.6,
        opacityTo: 0.4,
        stops: [0, 80, 100],
      },
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    tooltip: {
      x: { show: false },
    },
  };

  return data !== null ? (
    <StatsWithAreaChart
      icon={data.keys.icon}
      color={color}
      stats={kFormatter(data.analyticsData.orders)}
      statTitle={data.keys.title}
      options={options}
      series={data.series}
      type="area"
      height="100"
    />
  ) : null;
};
export default AreaChart;
