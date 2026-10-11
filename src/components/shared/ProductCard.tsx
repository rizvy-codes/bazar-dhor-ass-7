import Link from "next/link";
import { IProduct } from "@/types/product";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";

interface IProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
  return (
    <Link
      href={`/product/${product.id}`}
      className="bg-white border border-gray-200 rounded-xl p-4 block hover:shadow-md transition"
    >
      <div className="flex items-center justify-between">
        <div className="text-3xl">{product.image}</div>
        <span className="text-xs text-gray-500">{product.categoryNameBn}</span>
      </div>

      <h3 className="font-bold mt-3 text-gray-800">{product.nameBn}</h3>
      <p className="text-sm text-gray-500 mt-1">প্রতি {product.unit}</p>

      <div className="flex items-center justify-between mt-4">
        <div>
          <p className="text-xs text-gray-500">আজকের দাম</p>
          <p className="font-bold text-gray-800">{product.today} টাকা</p>
        </div>

        {product.change.dir === "up" && (
          <span className="text-red-500 text-sm font-medium">
            <FaArrowTrendUp className="inline" /> {product.change.pct}%
          </span>
        )}
        {product.change.dir === "down" && (
          <span className="text-green-600 text-sm font-medium">
            <FaArrowTrendDown className="inline" /> {Math.abs(product.change.pct)}%
          </span>
        )}
        {product.change.dir === "flat" && (
          <span className="text-gray-500 text-sm">—0%</span>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;