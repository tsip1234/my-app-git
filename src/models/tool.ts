import Category from "./category";

export default interface Tool {
  id: number;
  quantity: number;
  name: string;
  manufacturingCompany: string;
  description: string;
  image: string;
  category: Category;
}

