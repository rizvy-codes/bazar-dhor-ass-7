import { IProduct } from "@/types/product";
import Link from "next/link";

const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products/${id}`,
    { next: { revalidate: 1800 } }
  );

  if (!res.ok) {
    return (
      <main className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-3">
          পণ্যটি পাওয়া যায়নি
        </h1>
        <Link
          href="/"
          className="btn bg-green-700 text-white border-none hover:bg-green-800 mt-4"
        >
          হোম পেজে ফিরে যান
        </Link>
      </main>
    );
  }

  const product: IProduct = await res.json();

  // Calculate average price from markets
  const avgPrice =
    product.markets?.length > 0
      ? (
          product.markets.reduce((sum, m) => sum + (m.min + m.max) / 2, 0) /
          product.markets.length
        ).toFixed(0)
      : product.today;

  const minPrice =
    product.markets?.length > 0
      ? Math.min(...product.markets.map((m) => m.min))
      : product.today;

  const maxPrice =
    product.markets?.length > 0
      ? Math.max(...product.markets.map((m) => m.max))
      : product.today;

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Summary Card */}
      <div className="bg-white border rounded-2xl p-6 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="text-5xl">{product.image}</div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              {product.nameBn}
            </h1>
            <p className="text-gray-500 mt-1">
              {product.categoryNameBn} • প্রতি {product.unit}
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="badge badge-outline">{product.categoryNameBn}</span>
              <span className="badge badge-outline">প্রতি {product.unit}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Price Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-white border rounded-xl p-5 text-center">
          <p className="text-sm text-gray-500">সর্বনিম্ন দাম</p>
          <p className="text-2xl font-bold text-green-700 mt-1">
            {minPrice} টাকা
          </p>
        </div>
        <div className="bg-white border rounded-xl p-5 text-center">
          <p className="text-sm text-gray-500">গড় দাম</p>
          <p className="text-2xl font-bold text-gray-800 mt-1">
            {avgPrice} টাকা
          </p>
        </div>
        <div className="bg-white border rounded-xl p-5 text-center">
          <p className="text-sm text-gray-500">সর্বোচ্চ দাম</p>
          <p className="text-2xl font-bold text-red-600 mt-1">
            {maxPrice} টাকা
          </p>
        </div>
      </div>

      {/* Market Wise Price Table */}
      <div className="bg-white border rounded-2xl p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          বাজারভিত্তিক আজকের দাম
        </h2>

        {product.markets && product.markets.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th>বাজার</th>
                  <th>বিভাগ</th>
                  <th>সর্বনিম্ন</th>
                  <th>সর্বোচ্চ</th>
                  <th>গড়</th>
                </tr>
              </thead>
              <tbody>
                {product.markets.map((market, index) => (
                  <tr key={index}>
                    <td className="font-medium">{market.market}</td>
                    <td>{market.division}</td>
                    <td>{market.min} টাকা</td>
                    <td>{market.max} টাকা</td>
                    <td className="font-semibold">
                      {((market.min + market.max) / 2).toFixed(0)} টাকা
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-500">বাজারভিত্তিক তথ্য পাওয়া যায়নি।</p>
        )}
      </div>
    </main>
  );
};

export default ProductDetailsPage;