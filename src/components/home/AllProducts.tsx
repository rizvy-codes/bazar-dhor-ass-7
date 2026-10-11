import { IProduct } from "@/types/product";
import ProductCard from "@/components/shared/ProductCard";

interface IProps {
  products: IProduct[];
}

const AllProducts = ({ products }: IProps) => {
  return (
    <section id="সব-পণ্য" className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-2 text-gray-800">সব পণ্য</h2>
      <p className="text-sm text-gray-500 mb-4">
        মোট {products.length} টি পণ্য দেখানো হচ্ছে
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default AllProducts;