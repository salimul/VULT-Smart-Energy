
export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  specs: string[];
}

export interface Testimonial {
  id: number;
  author: string;
  role: string;
  content: string;
  avatar: string;
}
