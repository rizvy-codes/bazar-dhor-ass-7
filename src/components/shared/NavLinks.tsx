import { ICategory } from "@/types/product";
import CategoryNav from "./CategoryNav";

const NavLinks = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/categories",
    { next: { revalidate: 3600 } }
  );
  const data: ICategory[] = await res.json();

  return <CategoryNav categories={data} />;
};

export default NavLinks;