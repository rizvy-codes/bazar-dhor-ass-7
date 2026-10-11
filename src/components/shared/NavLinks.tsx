import Link from "next/link";
import { ICategory } from "@/types/product";

const NavLinks = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/categories",
    { next: { revalidate: 3600 } }
  );
  const data: ICategory[] = await res.json();

  return (
    <nav className="w-full border-t border-gray-100 bg-white">
      <div className="scrollbar-hide flex w-full items-center justify-start gap-5 overflow-x-auto px-4 py-3 sm:justify-center sm:gap-6 sm:px-5 md:gap-8">
        {data.map((category) => (
          <Link
            key={category.id}
            href={`/category/${category.slug}`}
            className="shrink-0 whitespace-nowrap text-xs font-medium text-gray-700 transition-colors hover:text-green-700 sm:text-sm"
          >
            {category.icon} {category.nameBn}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavLinks;