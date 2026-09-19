export interface Category {
  id: string;
  title: string;
  productCount: number;
  image: string;
  icon: string;
}

export interface Brand {
  id: string;
  title: string;
}

export interface ProductSpecifications {
  material: string;
  usage: string;
  warranty: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  priceAfterDiscount?: number;
  quantity: number;
  sold: number;
  colors: string[];
  images: string[];
  category: {
    id: string;
    title: string;
  };
  brand: {
    id: string;
    title: string;
  };
  ratingsAverage: number;
  ratingsQuantity: number;
  specifications: ProductSpecifications;
}
