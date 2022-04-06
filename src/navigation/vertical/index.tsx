import { Mail, Home } from 'ts-react-feather-icons'

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
    id: 'home',
    title: 'Home',
    icon: <Home size={20} />,
    navLink: '/home'
  },
  {
    id: 'secondPage',
    title: 'Second Page',
    icon: <Mail size={20} />,
    navLink: '/second-page'
  }
]
