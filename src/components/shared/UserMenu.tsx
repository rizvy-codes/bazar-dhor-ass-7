"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";

const UserMenu = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

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
    return <div className="h-10 w-24 animate-pulse rounded-lg bg-gray-100" />;
  }

  return (
    <div className="flex items-center gap-2 sm:gap-3 text-sm">
      {user ? (
        <>
          <Link href="/profile" className="flex items-center gap-2">
            {user.image ? (
              <Image
                src={user.image}
                alt={user.name || "Profile"}
                width={40}
                height={40}
                className="h-9 w-9 sm:h-10 sm:w-10 rounded-full object-cover"
                unoptimized
              />
            ) : (
              <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-green-100 text-base font-bold text-green-700">
                {user.name?.charAt(0) || "U"}
              </div>
            )}
            <span className="hidden sm:inline max-w-28 truncate font-semibold text-gray-800">
              {user.name}
            </span>
          </Link>
          <button
            onClick={handleSignOut}
            className="rounded-lg bg-red-500 px-3 py-2 text-white text-xs sm:text-sm transition hover:bg-red-600"
          >
            Log Out
          </button>
        </>
      ) : (
        <div className="flex items-center gap-2">
          <Link
            href="/sign-in"
            className="rounded-lg border border-gray-300 px-3 py-2 font-medium text-gray-700 transition hover:bg-gray-100 text-xs sm:text-sm"
          >
            সাইন ইন
          </Link>
          <Link
            href="/sign-up"
            className="rounded-lg bg-green-600 px-3 py-2 font-medium text-white transition hover:bg-green-700 text-xs sm:text-sm"
          >
            সাইন আপ
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserMenu;