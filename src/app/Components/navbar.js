
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const pathname = usePathname();

  const workoutActive =
    pathname === "/" || pathname.startsWith("/workout");

  const planActive = pathname === "/my-plan";

  return (
    <nav className="border-b border-white/10 bg-[#0d0f10] text-white">
      <div className="mx-auto flex h-[58px] max-w-[1200px] items-center justify-between px-5">


        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logo}
            alt="FitLog logo"
            width={22}
            height={22}
          />

          <span className="text-[13px] font-bold tracking-wide">
            FITLOG
          </span>
        </Link>

      
        <div className="flex items-center gap-1">

          <Link
            href="/"
            className={`rounded-full px-5 py-2 text-xs font-medium transition ${
              workoutActive
                ? "bg-[#252d0a] text-lime-400"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={`rounded-full px-5 py-2 text-xs font-medium transition ${
              planActive
                ? "bg-[#252d0a] text-lime-400"
                : "text-gray-400 hover:text-white"
            }`}
          >
            My Plan
          </Link>

        </div>

        <div className="flex items-center gap-5">

          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-[10px] text-gray-300"
          >
            <span>Plan</span>

            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#ccff00] text-[9px] font-bold text-black">
              0
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-[10px] text-gray-400"
          >
            <span>Saved</span>

            <span className="flex h-4 w-4 items-center justify-center rounded-full border border-white/20 text-[9px] text-gray-400">
              0
            </span>
          </Link>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;
