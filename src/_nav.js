import React from 'react'
import CIcon from '@coreui/icons-react'
import { NavLink } from 'react-router-dom'

const _nav = [
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-home" customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    _component: 'CNavTitle',
    anchor: 'Components',
  },
  {
    _component: 'CNavGroup',
    as: NavLink,
    anchor: 'Banners',
    to: '/to',
    icon: <CIcon name="cil-layers" customClassName="nav-icon" />,
    items: [
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Add Banner',
        to: '/addBanner',
      },
    ],
  },

  {
    _component: 'CNavGroup',
    anchor: 'Pages',
    icon: <CIcon name="cil-star" customClassName="nav-icon" />,
    items: [
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Login',
        to: '/login',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Register',
        to: '/register',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Error 404',
        to: '/404',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Error 500',
        to: '/500',
      },
    ],
  },
]

export default _nav
