import { ShoppingBag, PieChart, Send } from 'ts-react-feather-icons'

// export const Menu = () => {
//   return (
//     <ul className='pl-2'>
//       <li>Menu Item 1</li>
//       <li>Menu Item 2</li>
//     </ul>
//   )
// }


export default [
  {
    id: 'admin',
    title: 'Аналитика',
    icon: <PieChart size={20} />,
    navLink: '/admin'
  },
  {
    id: 'stores',
    title: 'Магазины',
    icon: <ShoppingBag size={20} />,
    navLink: '/admin/stores'
  },
  {
    id: 'payments',
    title: 'Платежные системы',
    icon: <Send size={20} />,
    navLink: '/admin/payments'
  }, 
]
