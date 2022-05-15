//@ts-nocheck
// ** React Imports
import { useEffect, useState } from "react";

// ** Third Party Components
import axios from "axios";
import { Package } from "react-feather";

// ** Custom Components
import StatsWithAreaChart from "../../../@core/components/widgets/stats/StatsWithAreaChart";

const StatsAreaPage = ({
  stats,
  series,
  kFormatter,
  warning,
  color,
  icon,
  statTitle,
}) => {
  const [data, setData] = useState(null);

  const db_data = {
    ordersRecevied: {
      series: [
        {
          name: "Orders",
          data: [10, 15, 8, 15, 7, 12, 8],
        },
      ],
      analyticsData: {
        orders: 97500,
      },
    },
  };

  useEffect(() => {
    setData(db_data.ordersRecevied);
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
        shadeIntensity: 0.3,
        opacityFrom: 0.7,
        opacityTo: 0.3,
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
      icon={icon}
      color={color}
      stats={stats}
      statTitle={statTitle}
      options={options}
      series={series}
      type="area"
    />
  ) : null;
};
export default StatsAreaPage;
