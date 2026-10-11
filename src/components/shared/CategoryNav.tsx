
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense } from "react";
import { ICategory } from "@/types/product";

const CategoryNavContent = ({
  categories,
}: {
  categories: ICategory[];
}) => {
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
                  ? "border-b-2 border-green-700 pb-1 text-green-700"
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

const CategoryNav = ({
  categories,
}: {
  categories: ICategory[];
}) => {
  return (
    <Suspense
      fallback={
        <nav className="w-full border-t border-gray-100 bg-white px-4 py-3">
          <p className="text-center text-sm text-gray-500">
            ক্যাটাগরি লোড হচ্ছে...
          </p>
        </nav>
      }
    >
      <CategoryNavContent categories={categories} />
    </Suspense>
  );
};

export default CategoryNav;
