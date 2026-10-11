
import Link from "next/link";
import NavLinks from "./NavLinks";
import UserMenu from "./UserMenu";
import CurrentDate from "./CurrentDate";

const NavBar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="navbar container mx-auto min-h-16 px-3 sm:px-4 md:px-6">
        <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
          <Link href="/" className="shrink-0">
            <div className="flex items-center gap-2">
              <span className="text-2xl sm:text-3xl">🛒</span>

              <div>
                <h1 className="text-base font-bold text-green-700 sm:text-lg md:text-xl">
                  বাজার দর
                </h1>

                <p className="truncate text-[10px] text-gray-500 sm:text-xs">
                  <CurrentDate />
                </p>
              </div>
            </div>
          </Link>
        </div>

        <div className="ml-2 flex shrink-0 items-center gap-1 sm:gap-2">
          <UserMenu />
        </div>
      </div>

      <hr className="border-gray-200" />

      <NavLinks />
    </header>
  );
};

export default NavBar;
