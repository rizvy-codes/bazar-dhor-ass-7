"use client";

import { useState } from "react";
import { IProduct } from "@/types/product";
import ProductCard from "@/components/shared/ProductCard";

interface IProps {
  products: IProduct[];
}

const CategoryProducts = ({ products }: IProps) => {
  const [sort, setSort] = useState("default");

  const sortedProducts = [...products].sort((a, b) => {
    if (sort === "low") return a.today - b.today;
    if (sort === "high") return b.today - a.today;
    return 0;
  });

  return (
    <>
      <div className="bg-white border rounded-2xl p-4 mt-4 flex justify-end">
        <label className="flex items-center gap-2 text-sm">
          সাজান
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border rounded-lg px-3 py-2 outline-none focus:border-green-600"
          >
            <option value="default">ডিফল্ট</option>
            <option value="low">দাম: কম থেকে বেশি</option>
            <option value="high">দাম: বেশি থেকে কম</option>
          </select>
        </label>
      </div>

      <p className="text-sm text-gray-500 mt-6">
        মোট {products.length} টি পণ্য দেখানো হচ্ছে
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default CategoryProducts;