import { ShoppingBag, PieChart, Send } from "ts-react-feather-icons";

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
    id: "admin",
    title: "Аналитика",
    icon: <PieChart size={20} />,
    navLink: "/admin",
  },
  {
    id: "stores",
    title: "Магазины",
    icon: <ShoppingBag size={20} />,
    navLink: "/admin/stores",
    children: [
      {
        id: "stores",
        title: "Магазины",
        icon: <ShoppingBag size={10} />,
        navLink: "/admin/stores",
      },
      {
        id: "stores",
        title: "Создать магазин",
        icon: <ShoppingBag size={10} />,
        navLink: "/admin/stores?new=true",
        externalLink: true,
      },
    ],
  },
  {
    id: "payments",
    title: "Платежные системы",
    icon: <Send size={20} />,
    navLink: "/admin/payments",
  },
  {
    id: "withdraw",
    title: "Вывод средств",
    icon: <Send size={20} />,
    navLink: "/withdraw",
  },
  {
    id: "socials",
    title: "Интеграции",
    icon: <Send size={20} />,
    navLink: "/user/settings",
  },
];
