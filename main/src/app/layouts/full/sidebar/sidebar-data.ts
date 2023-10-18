import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Evalia',
  },
  {
    displayName: 'Dashboard',
    iconName: 'layout-dashboard',
    route: '/dashboard',
  },
  // {
  //   navCap: 'Ui Components',
  // },
  {
    displayName: 'Users & Accounts',
    iconName: 'rosette',
    route: '/ui-components/badge',
  },
  {
    displayName: 'Ratings ',
    iconName: 'poker-chip',
    route: '/ui-components/chips',
  },
  {
    displayName: 'Actors',
    iconName: 'list',
    route: '/ui-components/lists',
  },
  {
    displayName: 'Static data',
    iconName: 'layout-navbar-expand',
    route: '/ui-components/menu',
  },
  // {
  //   displayName: 'Tooltips',
  //   iconName: 'tooltip',
  //   route: '/ui-components/tooltips',
  // },
//  // {
//   //   navCap: 'Auth',
//   // },
//   {
//     displayName: 'Login',
//     iconName: 'lock',
//     route: '/authentication/login',
//   },
//   {
//     displayName: 'Register',
//     iconName: 'user-plus',
//     route: '/authentication/register',
//   },
  // {
  //   navCap: 'Extra',
  // },
  // {
  //   displayName: 'Icons',
  //   iconName: 'mood-smile',
  //   route: '/extra/icons',
  // },
  // {
  //   displayName: 'Sample Page',
  //   iconName: 'aperture',
  //   route: '/extra/sample-page',
  // },
];
