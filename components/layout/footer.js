import React from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

export default function Footer() {
  const { data: session, status } = useSession();
  return (
    <footer className="py-16 bg-veryDarkBlue">
      {/* Footer Flex Container */}
      <div className="container flex flex-col items-center justify-between mx-auto space-y-16 px-6 md:flex-row md:space-y-0">
        {/* Logo/Menu Container */}

        <div className="flex flex-col items-center justify-between space-y-8 text-lg font-light md:flex-row md:space-y-0 md:space-x-14 text-gray-300">
          <Link href="/">
            <img
              src="images/logo-bookmark-footer.svg"
              alt=""
              className="mb-1 cursor-pointer hover: text-red-500"
            />
          </Link>
          {status === 'authenticated' && (
            <Link href="/savedJokes">
              <span
                href="#download"
                className="uppercase hover:text-red-500 cursor-pointer"
              >
                Saved Jokes
              </span>
            </Link>
          )}
          {status === 'authenticated' && (
            <Link href="/faq">
              <span
                href="#faq"
                className="uppercase hover:text-red-500 cursor-pointer"
              >
                FAQ
              </span>
            </Link>
          )}
          {status === 'authenticated' && (
            <Link href="/profile">
              <span
                href="#features"
                className="uppercase hover:text-red-500 cursor-pointer"
              >
                Profile
              </span>
            </Link>
          )}
        </div>

        {/* Social Container */}
        <div className="flex space-x-10">
          <a href="#">
            <img src="images/icon-facebook.svg" alt="" className="h-6 ficon" />
          </a>
          <a href="#">
            <img src="images/icon-twitter.svg" alt="" className="h-6 ficon" />
          </a>
        </div>
      </div>
    </footer>
  );
}
