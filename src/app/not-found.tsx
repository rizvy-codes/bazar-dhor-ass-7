import Link from "next/link";
import { FiArrowLeft, FiHome, FiSearch } from "react-icons/fi";

const NotFound = () => {
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-[#f5f8f5] px-4 py-12">
      <div className="w-full max-w-lg text-center">
        <div className="relative mx-auto mb-6 flex h-44 w-44 items-center justify-center rounded-full bg-green-100 sm:h-52 sm:w-52">
          <div className="absolute inset-3 rounded-full border-2 border-dashed border-green-300" />
          <div className="text-green-700">
            <FiSearch size={68} strokeWidth={1.5} />
          </div>
          <span className="absolute -right-1 top-5 rounded-full bg-green-700 px-4 py-2 text-sm font-bold text-white shadow-md">
            404
          </span>
        </div>

        <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
          পেজটি খুঁজে পাওয়া যায়নি!
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-gray-500 sm:text-base">
          দুঃখিত! আপনি যে পেজটি খুঁজছেন সেটি সরানো হয়েছে, নাম পরিবর্তন করা
          হয়েছে অথবা ঠিকানাটি ভুল।
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="btn border-0 bg-green-700 text-white hover:bg-green-800"
          >
            <FiHome size={18} />
            হোম পেজে ফিরে যান
          </Link>
        </div>

        <p className="mt-10 text-xs text-gray-400">
          বাজার দর — আপনার নিত্যপ্রয়োজনীয় বাজারের বিশ্বস্ত ঠিকানা।
        </p>
      </div>
    </main>
  );
};

export default NotFound;