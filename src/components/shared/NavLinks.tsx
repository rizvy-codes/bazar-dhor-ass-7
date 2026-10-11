
import { ICategory } from "@/types/product";
import CategoryNav from "./CategoryNav";
import { Suspense } from "react";

const NavLinks = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/categories",
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  const data: ICategory[] = await res.json();

  return (
    <Suspense
      fallback={
        <div className="w-full border-t border-gray-100 bg-white px-4 py-3">
          <p className="text-center text-sm text-gray-500">
            ক্যাটাগরি লোড হচ্ছে...
          </p>
        </div>
      }
    >
      <CategoryNav categories={data} />
    </Suspense>
  );
};

export default NavLinks;
