// ** React Imports
import { useEffect, useState } from "react";

// ** Third Party Components
import axios from "axios";
import { Users } from "react-feather";

// ** Custom Components
import StatsWithAreaChart from "../../../../@core/components/widgets/stats/StatsWithAreaChart";

const SubscribersGained = ({ kFormatter }) => {
  // ** State
  const [data, setData] = useState(null);

  const db_data = {
    subscribers_gained: {
      series: [
        {
          name: "Subscribers",
          data: [28, 40, 36, 52, 38, 60, 55],
        },
      ],
      analyticsData: {
        subscribers: 92600,
      },
    },
  };

  useEffect(() => {
    setData(db_data.subscribers_gained)
  }, []);

  return data !== null ? (
    <StatsWithAreaChart
      icon={<Users size={21} />}
      color="primary"
      stats={kFormatter(data.analyticsData.subscribers)}
      statTitle="Зарегистрировано"
      series={data.series}
      type="area"
    />
  ) : null;
};

export default SubscribersGained;
