import { IProduct } from "@/types/product";
import ProductCard from "@/components/shared/ProductCard";
import { FaArrowTrendDown } from "react-icons/fa6";

interface IProps {
  products: IProduct[];
}

const DownProducts = ({ products }: IProps) => {
  return (
    <section className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        <FaArrowTrendDown className="text-green-600 inline mr-2" />
        আজ দাম কমেছে
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.slice(0, 6).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default DownProducts;