import { MenuItem, BlogPost, GalleryImage } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Truffle Infused Risotto',
    description: 'Arborio rice slow-cooked with wild mushrooms and fresh black truffle shavings.',
    price: '$34',
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    name: 'Pan-Seared Scallops',
    description: 'Hokkaido scallops with pea purée, crispy pancetta, and lemon zest.',
    price: '$28',
    category: 'Appetizers',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    name: 'Wagyu Ribeye',
    description: 'A5 Wagyu beef served with roasted root vegetables and red wine reduction.',
    price: '$85',
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '4',
    name: 'Deconstructed Lemon Tart',
    description: 'Zesty lemon curd, butter shortbread crumble, and toasted meringue.',
    price: '$16',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&q=80&w=800',
    
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Secret to Perfect Risotto',
    excerpt: 'Chef Julian shares the three golden rules for achieving that creamy, velvety texture every time.',
    content: 'Full content here...',
    author: 'Chef Julian Rossi',
    date: 'April 10, 2026',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800',
    category: 'Recipe',
  },
  {
    id: '2',
    title: 'Spring Harvest: New Seasonal Menu',
    excerpt: 'Discover the fresh ingredients and vibrant flavors arriving at Lumière this season.',
    content: 'Full content here...',
    author: 'Elena Vance',
    date: 'April 5, 2026',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800',
    category: 'News',
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: '1', url: 'https://images.unsplash.com/photo-1611266374165-579c08a59cc2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Cocktail being poured', category: 'Ambiance' },
  { id: '2', url: 'https://images.unsplash.com/photo-1774509627260-4f97e8cd1af1?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Elegant dining room', category: 'Ambiance' },
  { id: '3', url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800', alt: 'Chef plating a dish', category: 'Kitchen' },
  { id: '4', url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800', alt: 'Grilled steak', category: 'Dishes' },
  { id: '5', url: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=80&w=800', alt: 'Dessert close-up', category: 'Dishes' },
  { id: '6', url: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Restaurant exterior', category: 'Ambiance' },
];
