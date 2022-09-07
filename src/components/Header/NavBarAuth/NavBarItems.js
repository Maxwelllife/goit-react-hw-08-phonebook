import { nanoid } from 'nanoid';
export const navItems = [
  {
    id: nanoid(),
    to: '/register',
    text: 'Registration',
  },
  {
    id: nanoid(),
    to: '/login',
    text: 'Login',
  },
];
