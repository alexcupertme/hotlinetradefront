//@ts-nocheck
// ** React Imports
import { useEffect, useState } from 'react'

// ** Third Party Components
import axios from 'axios'
import { Package } from 'react-feather'

// ** Custom Components
import StatsWithAreaChart from '../../../../@core/components/widgets/stats/StatsWithAreaChart'

const OrdersReceived = ({ kFormatter, warning }) => {

  const db_data = {
    orders_bar_chart: {
      title: 'Orders',
      statistics: '2,76k',
      series: [
        {
          name: '2020',
          data: [45, 85, 65, 45, 65]
        }
      ]
    },
    profit_line_chart: {
      title: 'Profit',
      statistics: '6,24k',
      series: [
        {
          data: [0, 20, 5, 30, 15, 45]
        }
      ]
    },
    subscribers_gained: {
      series: [
        {
          name: 'Subscribers',
          data: [28, 40, 36, 52, 38, 60, 55]
        }
      ],
      analyticsData: {
        subscribers: 92600
      }
    },
    revenueGenerated: {
      series: [
        {
          name: 'Revenue',
          data: [350, 275, 400, 300, 350, 300, 450]
        }
      ],
      analyticsData: {
        revenue: 97500
      }
    },
    quarterlySales: {
      series: [
        {
          name: 'Sales',
          data: [10, 15, 7, 12, 3, 16]
        }
      ],
      analyticsData: {
        sales: '36%'
      }
    },
    ordersRecevied: {
      series: [
        {
          name: 'Orders',
          data: [10, 15, 8, 15, 7, 12, 8]
        }
      ],
      analyticsData: {
        orders: 97500
      }
    },
    siteTraffic: {
      series: [
        {
          name: 'Traffic Rate',
          data: [150, 200, 125, 225, 200, 250]
        }
      ]
    },
    activeUsers: {
      series: [
        {
          name: 'Active Users',
          data: [750, 1000, 900, 1250, 1000, 1200, 1100]
        }
      ]
    },
    newsletter: {
      series: [
        {
          name: 'Newsletter',
          data: [365, 390, 365, 400, 375, 400]
        }
      ]
    }
  }

  const options = {
    chart: {
      id: 'revenue',
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    grid: {
      show: false
    },
    colors: [warning],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 2.5
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 0.9,
        opacityFrom: 0.7,
        opacityTo: 0.5,
        stops: [0, 80, 100]
      }
    },

    xaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: false
      }
    },
    tooltip: {
      x: { show: false }
    }
  }

  return (
    <StatsWithAreaChart
      icon={<Package size={21} />}
      color='warning'
      stats={kFormatter(db_data.ordersRecevied.analyticsData.orders)}
      statTitle='Orders Received'
      options={options}
      series={db_data.ordersRecevied.series}
      type='area'
    />
  )
}
export default OrdersReceived
