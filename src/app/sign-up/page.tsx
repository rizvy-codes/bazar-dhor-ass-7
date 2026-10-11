"use client";

import { authClient } from "@/lib/auth-client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { toast } from "react-toastify";

const SignUpPage = () => {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      password: string;
    };

    const { data, error } = await authClient.signUp.email({
      ...user,
      callbackURL: "/",
    });

    if (data) {
      toast.success("সাইন আপ সফল হয়েছে!");
      window.location.href = "/";
    }
    if (error) {
      toast.error(error.message || "সাইন আপ ব্যর্থ হয়েছে");
    }
  };

  const handleGoogleSignIn = async () => {
    const { error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
    if (error) {
      toast.error(error.message);
    }
  };

  const handleGithubSignIn = async () => {
    const { error } = await authClient.signIn.social({
      provider: "github",
      callbackURL: "/",
    });
    if (error) {
      toast.error(error.message);
    }
  };

  return (
    <main className="min-h-[80vh] bg-[#f5f9f5] px-4 py-10">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-7">
          <h1 className="text-3xl font-bold text-gray-800">অ্যাকাউন্ট তৈরি করুন</h1>
          <p className="text-gray-500 mt-2">
            বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                নাম
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="আপনার পূর্ণ নাম"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-green-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ইমেইল
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="আপনার ইমেইল লিখুন"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-green-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                পাসওয়ার্ড
              </label>
              <input
                type="password"
                name="password"
                required
                minLength={8}
                placeholder="কমপক্ষে ৮ অক্ষর"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-green-600"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg py-3 font-medium transition mt-2"
            >
              অ্যাকাউন্ট তৈরি করুন
            </button>
          </form>

          <div className="flex items-center gap-3 my-5">
            <div className="h-px bg-gray-200 flex-1"></div>
            <span className="text-sm text-gray-500">অথবা</span>
            <div className="h-px bg-gray-200 flex-1"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="border border-gray-200 rounded-lg py-2.5 text-sm font-medium flex items-center justify-center gap-2 hover:bg-gray-50 transition"
            >
              <FcGoogle size={20} />
              Google
            </button>
            <button
              type="button"
              onClick={handleGithubSignIn}
              className="border border-gray-200 rounded-lg py-2.5 text-sm font-medium flex items-center justify-center gap-2 hover:bg-gray-50 transition"
            >
              <FaGithub size={20} />
              GitHub
            </button>
          </div>

          <p className="text-center text-sm text-gray-600 mt-5">
            অ্যাকাউন্ট আছে?{" "}
            <Link href="/sign-in" className="text-green-600 font-medium hover:underline">
              সাইন ইন করুন
            </Link>
          </p>
        </div>

        <Link
          href="/"
          className="block text-center text-sm text-gray-500 mt-7 hover:text-green-700"
        >
          ← হোম পেজে ফিরে যান
        </Link>
      </div>
    </main>
  );
};

export default SignUpPage;