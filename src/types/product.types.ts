export type TProduct = {
  id: number;
  name: string;
  description: string;
  price: number;
  categoryId: string;
  mainImage: string;
  quantity?: number;
  max: number;
  stock: number;
  isLiked?: boolean;
  isAuthenticated?: boolean;
  gallery?: string[];
};

export type TProductsTab = {
  tabName: string;
  productIds: number[];
  id: number;
}[];
