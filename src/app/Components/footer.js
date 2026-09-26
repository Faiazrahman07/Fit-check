
import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto flex h-[58px] max-w-[1200px] items-center justify-between px-5">

        <Image
          src={logo}
          alt="FitLog logo"
          width={22}
          height={22}
          className="object-contain"
        />

        <p className="text-[9px] text-gray-500">
          © {new Date().getFullYear()} FitLog. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
