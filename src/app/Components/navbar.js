
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/assets/logo.png";
import { Fitcontext } from "@/context/fitcontext";
import { useContext } from "react";

const Navbar = () => {
  const pathname = usePathname();
    const { add,save } = useContext(Fitcontext);

  const workoutActive =
    pathname === "/" || pathname.startsWith("/workout");

  const planActive = pathname === "/My-plan";

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
            href="/My-plan"
            className={`rounded-full px-5 py-2 text-xs font-medium transition ${
              planActive
                ? "bg-[#252d0a] text-lime-400"
                : "text-gray-400 hover:text-white"
            }`}
          >
            My Plan
          </Link>

        </div>
<div className="flex items-center gap-7">


  <Link
    href="/My-plan?tab=today"
    className="flex items-center gap-2 text-sm text-gray-300"
  >
    <span>Plan</span>

    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-lime-400 text-xs font-bold text-black">
      {add.length}
    </span>
  </Link>


  <Link
    href="/My-plan?tab=saved"
    className="flex items-center gap-2 text-sm text-gray-400"
  >
    <span>Saved</span>

    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-700 text-xs text-gray-300">
      {save.length}
    </span>
  </Link>
</div>
      </div>
    </nav>
  );
};

export default Navbar;
