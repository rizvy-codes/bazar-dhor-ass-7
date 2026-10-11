"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ICategory } from "@/types/product";

const CategoryNav = ({ categories }: { categories: ICategory[] }) => {
  const pathname = usePathname();

  return (
    <nav className="w-full border-t border-gray-100 bg-white">
      <div className="flex w-full items-center justify-start gap-5 overflow-x-auto px-4 py-3 sm:justify-center sm:gap-6 sm:px-5 md:gap-8">
        {categories.map((category) => {
          const href = `/category/${category.slug}`;
          const active = pathname === href;

          return (
            <Link
              key={category.id}
              href={href}
              className={`shrink-0 whitespace-nowrap text-xs font-medium transition-colors sm:text-sm ${
                active
                  ? "text-green-700 border-b-2 border-green-700 pb-1"
                  : "text-gray-700 hover:text-green-700"
              }`}
            >
              {category.icon} {category.nameBn}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default CategoryNav;