
import Image from "next/image";
import Link from "next/link";
import bannerLogo from "@/assets/banner.png";

const Banner = () => {
  return (
    <section className="bg-[#0c0d0f] px-5 py-9 text-white sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-[924px] overflow-hidden rounded-xl border border-[#262930] bg-[#16181e] md:grid-cols-[1.35fr_0.65fr]">

     
        <div className="flex flex-col items-start justify-center px-10 py-14 sm:px-12 md:py-16">

          <p className="mb-5 text-[10px] font-extrabold uppercase tracking-[0.08em] text-lime-400">
            Workout Library
          </p>
<h1 className="font-[var(--font-oswald)] text-4xl font-black uppercase leading-[0.9] tracking-[-0.040em] sm:text-5xl lg:text-[3.2rem]">
  Train with intent. Log
  <br />
  every set.
</h1>
    <p className="mt-5 max-w-[465px] text-sm leading-5 text-[#9ca0aa]">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <Link
            href="#library"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-lime-400 px-5 py-3 text-[10px] font-extrabold uppercase tracking-tight text-black transition hover:bg-lime-300"
          >
            Browse Workouts
            <span className="text-sm font-bold">↓</span>
          </Link>
        </div>

      
        <div className="relative flex min-h-[270px] items-center justify-center px-8 py-7 md:min-h-full md:px-4">
          <Image
            src={bannerLogo}
            alt="Athlete training on a rowing machine"
            priority
            className="h-auto w-full max-w-[290px] object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;
