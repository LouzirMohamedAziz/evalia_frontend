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
    iconName: 'users',
    route: '/ui-components/badge',
  },
  {
    displayName: 'Ratings ',
    iconName: 'chart-arrows',
    route: '/ui-components/chips',
  },
  {
    displayName: 'Actors',
    iconName: 'man',
    route: '/ui-components/lists',
  },
  {
    displayName: 'Static data',
    iconName: 'chart-histogram',
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
