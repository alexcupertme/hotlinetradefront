// @ts-nocheck
// ** Custom Components
import Avatar from '../../../../@core/components/avatar'

// ** Third Party Components
import Chart from 'react-apexcharts'
import { MoreVertical } from 'react-feather'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

const CardTopClients = ({ colors, trackBgColor }) => {
  const employeesTasks = [
    {
      avatar: require('../../../../assets/images/portrait/small/avatar-s-9.jpg'),
      title: 'Люблю тяночку',
      subtitle: '76561198042128340',
      time: '350 000₽',
      chart: {
        type: 'radialBar',
        series: [45],
        height: 30,
        width: 30,
        options: {
          grid: {
            show: false,
            padding: {
              left: -15,
              right: -15,
              top: -12,
              bottom: -15
            }
          },
          colors: [colors.primary.main],
          plotOptions: {
            radialBar: {
              hollow: {
                size: '22%'
              },
              track: {
                background: trackBgColor
              },
              dataLabels: {
                showOn: 'always',
                name: {
                  show: false
                },
                value: {
                  show: false
                }
              }
            }
          },
          stroke: {
            lineCap: 'round'
          }
        }
      }
    },
    {
      avatar: require('../../../../assets/images/portrait/small/avatar-s-20.jpg'),
      title: 'Louisa Norton',
      subtitle: 'UI Designer',
      time: '4hr 17m',
      chart: {
        type: 'radialBar',
        series: [65],
        height: 30,
        width: 30,
        options: {
          grid: {
            show: false,
            padding: {
              left: -15,
              right: -15,
              top: -12,
              bottom: -15
            }
          },
          colors: [colors.danger.main],
          plotOptions: {
            radialBar: {
              hollow: {
                size: '22%'
              },
              track: {
                background: trackBgColor
              },
              dataLabels: {
                showOn: 'always',
                name: {
                  show: false
                },
                value: {
                  show: false
                }
              }
            }
          },
          stroke: {
            lineCap: 'round'
          }
        }
      }
    },
    {
      avatar: require('../../../../assets/images/portrait/small/avatar-s-1.jpg'),
      title: 'Jayden Duncan',
      subtitle: 'Java Developer',
      time: '12hr 8m',
      chart: {
        type: 'radialBar',
        series: [60],
        height: 30,
        width: 30,
        options: {
          grid: {
            show: false,
            padding: {
              left: -15,
              right: -15,
              top: -12,
              bottom: -15
            }
          },
          colors: [colors.success.main],
          plotOptions: {
            radialBar: {
              hollow: {
                size: '22%'
              },
              track: {
                background: trackBgColor
              },
              dataLabels: {
                showOn: 'always',
                name: {
                  show: false
                },
                value: {
                  show: false
                }
              }
            }
          },
          stroke: {
            lineCap: 'round'
          }
        }
      }
    },
    {
      avatar: require('../../../../assets/images/portrait/small/avatar-s-20.jpg'),
      title: 'Cynthia Howell',
      subtitle: 'Angular Developer',
      time: '3hr 19m',
      chart: {
        type: 'radialBar',
        series: [35],
        height: 30,
        width: 30,
        options: {
          grid: {
            show: false,
            padding: {
              left: -15,
              right: -15,
              top: -12,
              bottom: -15
            }
          },
          colors: [colors.secondary.main],
          plotOptions: {
            radialBar: {
              hollow: {
                size: '22%'
              },
              track: {
                background: trackBgColor
              },
              dataLabels: {
                showOn: 'always',
                name: {
                  show: false
                },
                value: {
                  show: false
                }
              }
            }
          },
          stroke: {
            lineCap: 'round'
          }
        }
      }
    },
    {
      avatar: require('../../../../assets/images/portrait/small/avatar-s-16.jpg'),
      title: 'Helena Payne',
      subtitle: 'Marketing',
      time: '9hr 50m',
      chart: {
        type: 'radialBar',
        series: [65],
        height: 30,
        width: 30,
        options: {
          grid: {
            show: false,
            padding: {
              left: -15,
              right: -15,
              top: -12,
              bottom: -15
            }
          },
          colors: [colors.warning.main],
          plotOptions: {
            radialBar: {
              hollow: {
                size: '22%'
              },
              track: {
                background: trackBgColor
              },
              dataLabels: {
                showOn: 'always',
                name: {
                  show: false
                },
                value: {
                  show: false
                }
              }
            }
          },
          stroke: {
            lineCap: 'round'
          }
        }
      }
    },
    {
      avatar: require('../../../../assets/images/portrait/small/avatar-s-13.jpg'),
      title: 'Troy Jensen',
      subtitle: 'iOS Developer',
      time: '4hr 48m',
      chart: {
        type: 'radialBar',
        series: [80],
        height: 30,
        width: 30,
        options: {
          grid: {
            show: false,
            padding: {
              left: -15,
              right: -15,
              top: -12,
              bottom: -15
            }
          },
          colors: [colors.primary.main],
          plotOptions: {
            radialBar: {
              hollow: {
                size: '22%'
              },
              track: {
                background: trackBgColor
              },
              dataLabels: {
                showOn: 'always',
                name: {
                  show: false
                },
                value: {
                  show: false
                }
              }
            }
          },
          stroke: {
            lineCap: 'round'
          }
        }
      }
    }
  ]

  const renderTasks = () => {
    return employeesTasks.map(task => {
      return (
        <div key={task.title} className='employee-task d-flex justify-content-between align-items-center'>
          <div className='d-flex'>
            <Avatar imgClassName='rounded' className='me-75' img={task.avatar} imgHeight='42' imgWidth='42' />
            <div className='my-auto'>
              <h6 className='mb-0'>{task.title}</h6>
              <small>{task.subtitle}</small>
            </div>
          </div>
          <div className='d-flex align-items-center'>
            <small className='text-muted me-75'>{task.time}</small>
            <Chart
              options={task.chart.options}
              series={task.chart.series}
              type={task.chart.type}
              height={task.chart.height}
              width={task.chart.width}
            />
          </div>
        </div>
      )
    })
  }

  return (
    <Card className='card-employee-task'>
      <CardHeader>
        <CardTitle tag='h4'>Топ покупателей</CardTitle>
      </CardHeader>
      <CardBody>{renderTasks()}</CardBody>
    </Card>
  )
}

export default CardTopClients
