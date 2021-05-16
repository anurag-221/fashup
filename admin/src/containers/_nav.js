import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Admins',
    route: '/admins',
    icon: <CIcon name="cib-staticman" customClasses="c-sidebar-nav-icon"/>,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Admin',
        to: '/admins/admin1',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Add Admin',
        to: '/admins/add-admin',
      },
                ]
  } ,  
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Vendors',
    route: '/vendors',
    icon: 'cib-staticman',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Vendors',
        to: '/vendors/vendors',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Add Vendor',
        to: '/vendors/add-vendor',
      },
                ]
  },  
  {
    _tag: 'CSidebarNavItem',
    name: 'Customers',
    route: '/customers',
    icon: 'cib-staticman',
    to: '/customers/customers',
  }, 
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Products',
    route: '/products',
    icon: 'cib-staticman',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Products',
        to: '/products/products',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Add Product',
        to: '/products/add-product',
      },
                ]
    
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Orders',
    route: '/orders',
    icon: 'cib-staticman',
    to: '/orders/orders',
  }   

];
export default _nav;
