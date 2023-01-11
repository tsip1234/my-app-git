import Category from "./category";

export default interface Tool {
  id: number;
  numOfTool: number;
  manufacturingCompany: String;
  description: String;
  image: string;
  category: Category;
}

