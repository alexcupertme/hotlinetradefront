//@ts-nocheck
// ** Custom Components
import Avatar from '../../../../@core/components/avatar'

// ** Icons Imports
import * as Icon from 'react-feather'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

const CardTransactions = () => {
  const transactionsArr = [
    {
      title: 'Заработано',
      color: 'light-primary',
      subtitle: 'За все время',
      amount: '740₽',
      Icon: Icon['Pocket'],
      down: true
    },
    {
      title: 'Выведено средств',
      color: 'light-warning',
      subtitle: 'За все время',
      amount: '23₽',
      Icon: Icon['CreditCard'],
      down: true
    },
    {
      title: 'Профит с пользователя',
      color: 'light-info',
      subtitle: 'За все время',
      amount: '98₽',
      Icon: Icon['TrendingUp']
    }
  ]

  const renderTransactions = () => {
    return transactionsArr.map(item => {
      return (
        <div key={item.title} className='transaction-item'>
          <div className='d-flex'>
            <Avatar className='rounded' color={item.color} icon={<item.Icon size={18} />} />
            <div>
              <h6 className='transaction-title'>{item.title}</h6>
              <small>{item.subtitle}</small>
            </div>
          </div>
          <div className={`fw-bolder ${item.down ? 'text-danger' : 'text-success'}`}>{item.amount}</div>
        </div>
      )
    })
  }

  return (
    <Card className='card-transaction'>
      <CardHeader>
        <CardTitle tag='h4'>Транзакции</CardTitle>
        <Icon.MoreVertical size={18} className='cursor-pointer' />
      </CardHeader>
      <CardBody>{renderTransactions()}</CardBody>
    </Card>
  )
}

export default CardTransactions
