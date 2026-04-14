export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'Appetizers' | 'Main Course' | 'Desserts' | 'Wines';
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: 'Recipe' | 'Chef\'s Special' | 'News';
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  category: 'Dishes' | 'Ambiance' | 'Kitchen';
}
