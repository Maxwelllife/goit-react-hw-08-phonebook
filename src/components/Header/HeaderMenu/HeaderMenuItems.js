import { nanoid } from 'nanoid';
export const menuItems = [
  {
    id: nanoid(),
    to: '/',
    text: 'Home',
  },
  {
    id: nanoid(),
    to: '/contacts',
    text: 'Contacts',
  },
];
