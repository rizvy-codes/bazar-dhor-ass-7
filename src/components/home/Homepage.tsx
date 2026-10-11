import Hero from "./Hero";
import UpProducts from "./UpProducts";
import DownProducts from "./DownProducts";
import AllProducts from "./AllProducts";
import { IProduct } from "@/types/product";

const HomePage = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
    { next: { revalidate: 1800 } }
  );
  const products: IProduct[] = await res.json();

  const upProducts = products.filter(
    (product) => product.change.dir === "up"
  );
  const downProducts = products.filter(
    (product) => product.change.dir === "down"
  );

  return (
    <main>
      <Hero />
      <UpProducts products={upProducts} />
      <DownProducts products={downProducts} />
      <AllProducts products={products} />
    </main>
  );
};

export default HomePage;