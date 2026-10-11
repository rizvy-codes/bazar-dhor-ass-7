import CategoryProducts from "@/components/CategoryProducts";
import { IProduct } from "@/types/product";
import Link from "next/link";

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products?category=${slug}`,
    { next: { revalidate: 1800 } }
  );

  const products: IProduct[] = await res.json();

  // Empty state
  if (!products || products.length === 0) {
    return (
      <main className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-3">
          কোনো পণ্য পাওয়া যায়নি
        </h1>
        <p className="text-gray-500 mb-6">
          এই ক্যাটাগরিতে এখনো কোনো পণ্য নেই অথবা স্লাগটি ভুল।
        </p>
        <Link
          href="/"
          className="btn bg-green-700 text-white border-none hover:bg-green-800"
        >
          হোম পেজে ফিরে যান
        </Link>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="bg-white border rounded-2xl p-6">
        <div className="flex items-center gap-4">
          <div className="text-4xl">{products[0]?.categoryIcon}</div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              {products[0]?.categoryNameBn}
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              প্রতি পণ্যের আজকের দাম ও পরিবর্তন
            </p>
          </div>
        </div>
      </div>

      <CategoryProducts products={products} />
    </main>
  );
};

export default CategoryPage;