import { User, Globe, Users, DollarSign, Aperture, Truck } from 'react-feather'
// import Post from '@src/assets/custom-icons/post.png'


export const adminNavigation = [
  {
    id: 'usermanage',
    title: 'Quản lý người dùng',
    icon: <User size={20} />,
    navLink: '/home'
  },
  {
    id: 'cookiemanage',
    title: 'Quản lý Cookie',
    icon: <Globe size={20} />,
    navLink: '/second-page'
  },
  {
    id: 'customermanage',
    title: 'Quản lý khách hàng',
    icon: <Users size={20} />,
    navLink: '/third-page'
  },
]

export const shipperNavigation = [
  {
    id: 'shipperOrdermanage',
    title: 'Quản lý đơn hàng',
    icon: <User size={20} />,
    navLink: '/home'
  },
]

export const shopkeeperNavigation = [
  {
    id: 'sellcampaign',
    title: 'Bán Hàng',
    icon: <Aperture size={20} />,
    navLink: '/shopkeeper/sell-campaign'
  },
  {
    id: 'postmanage',
    title: 'Quản Lý Bài Đăng',
    icon: <DollarSign size={20} />,
    navLink: '/shopkeeper/post-manage'
  },
  {
    id: 'ordermanage',
    title: 'Quản Lý Đơn Hàng',
    icon: <Truck size={20} />,
    navLink: '/shopkeeper/order-manage'
  },
  {
    id: 'productmanage',
    title: 'Quản Lý Sản Phẩm',
    icon: <Truck size={20} />,
    navLink: '/shopkeeper/product-manage'
  }
]
