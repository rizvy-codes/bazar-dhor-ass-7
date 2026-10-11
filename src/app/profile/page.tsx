"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiLogOut, FiEdit2, FiX } from "react-icons/fi";
import { toast } from "react-toastify";

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const [showEdit, setShowEdit] = useState(false);

  const handleUpdateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;

    const { error } = await authClient.updateUser({
      name: name,
    });

    if (error) {
      toast.error(error.message || "আপডেট ব্যর্থ হয়েছে");
      return;
    }

    toast.success("নাম সফলভাবে আপডেট হয়েছে!");
    setShowEdit(false);
  };

  const handleSignOut = async () => {
    const { error } = await authClient.signOut();
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("সফলভাবে লগ আউট হয়েছে!");
    setTimeout(() => {
      window.location.href = "/sign-in";
    }, 800);
  };

  if (isPending) {
    return (
      <main className="min-h-[70vh] flex items-center justify-center bg-[#f5f8f5]">
        <span className="loading loading-spinner loading-lg text-green-700"></span>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-[#f5f8f5] px-4">
        <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center max-w-sm w-full shadow-sm">
          <h1 className="text-lg font-semibold text-gray-800">
            প্রোফাইল দেখতে সাইন ইন করুন
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            আপনার অ্যাকাউন্টে প্রবেশ করে প্রোফাইল দেখুন।
          </p>
          <Link
            href="/sign-in"
            className="btn mt-5 border-0 bg-green-700 text-white hover:bg-green-800 w-full"
          >
            সাইন ইন
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f5f8f5] px-4 py-8 sm:py-12">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">আমার প্রোফাইল</h1>
          <p className="mt-1 text-sm text-gray-500">
            আপনার অ্যাকাউন্টের তথ্য পরিচালনা করুন।
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm">
          <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-4">
              {user.image ? (
                <Image
                  src={user.image}
                  alt={user.name || "Profile"}
                  width={64}
                  height={64}
                  unoptimized
                  className="h-16 w-16 rounded-full object-cover"
                />
              ) : (
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-xl font-bold text-green-800">
                  {user.name?.charAt(0) || "U"}
                </div>
              )}
              <div>
                <h2 className="font-semibold text-gray-800 text-lg">
                  {user.name}
                </h2>
                <p className="text-sm text-gray-500 mt-0.5">{user.email}</p>
              </div>
            </div>

            <button
              onClick={handleSignOut}
              className="btn btn-sm border border-red-200 bg-white text-red-600 hover:bg-red-50 w-full sm:w-auto"
            >
              <FiLogOut size={16} />
              Log Out
            </button>
          </div>
        </div>

        {/* Update Name Section */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm mt-4">
          <div className="p-5 sm:p-6">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h2 className="font-semibold text-gray-800">ব্যক্তিগত তথ্য</h2>
                <p className="mt-1 text-sm text-gray-500">
                  আপনার নাম আপডেট করুন।
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowEdit(!showEdit)}
                className="btn btn-sm border-0 bg-green-700 text-white hover:bg-green-800"
              >
                {showEdit ? <FiX size={16} /> : <FiEdit2 size={16} />}
                {showEdit ? "বন্ধ করুন" : "Edit"}
              </button>
            </div>

            {showEdit && (
              <form onSubmit={handleUpdateProfile} className="mt-5 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    নাম
                  </label>
                  <input
                    name="name"
                    type="text"
                    defaultValue={user.name || ""}
                    placeholder="আপনার নাম লিখুন"
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-green-600"
                  />
                </div>
                <button
                  type="submit"
                  className="btn w-full border-0 bg-green-700 text-white hover:bg-green-800"
                >
                  আপডেট করুন
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;