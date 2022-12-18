import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';


function MainNavigation() {
  const { data: session, status } = useSession();
  console.log('loading', session, 'session', status);

  function logoutHandler() {
    signOut();
  }

  return (
    <nav className="container relative bg-blue-500 mx-auto p-6 min-w-full">
      {/* Flex Container For Nav Items  */}
      <div className="flex items-center justify-between my-6">
        {/* Logo */}
        <Link href="/">
          <span className="z-30 cursor-pointer">
            <img src="images/logo-bookmark.svg" alt="" id="logo" />
          </span>
        </Link>

        <div className="hidden  items-center space-x-10 uppercase text-white md:flex">
          {status === 'authenticated' && (
            <Link href="/profile">
              <span className="tracking-widest hover:text-softRed cursor-pointer">
                Profile
              </span>
            </Link>
          )}
          {status === 'authenticated' && (
            <Link href="/savedJokes">
              <span className="tracking-widest hover:text-softRed cursor-pointer">
                Saved Jokes
              </span>
            </Link>
          )}
          {status === 'authenticated' && (
            <Link href="/faq">
              <span className="tracking-widest hover:text-softRed cursor-default">
              
                FAQ
              </span>
            </Link>
          )}

          {!session && status !== 'loading' && (
            <Link
              href="/auth"
              className="px-8 py-2 text-white border-2 bg-red-400 border-softRed rounded-lg shadow-md hover:text-red-400 hover:bg-white"
            >
            <span className="px-8 py-2 text-white border-2 bg-red-400 border-softRed rounded-lg shadow-md hover:text-red-400 hover:bg-white cursor-pointer"> Login </span>
            </Link>
          )}

          {status === 'authenticated' && (
            <div
              onClick={logoutHandler}
              className="px-8 py-2 text-white border-2 bg-red-400 border-softRed rounded-lg shadow-md hover:text-red-400 hover:bg-white cursor-pointer"
            >
              Logut
            </div>
          )}
        </div>

        <button
          id="menu-btn"
          className="z-30 block md:hidden focus:outline-none hamburger"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      {/* Mobile Menu */}
      <div
        id="menu"
        className="fixed inset-0 z-20 hidden flex-col items-center self-end w-full h-full m-h-screen px-6 py-1 pt-24 pb-4 tracking-widest uppercase divide-y divide-gray-500 opacity-90 bg-veryDarkBlue"
      >
        <div className="w-full py-3 text-center">
          <Link href="#features" className="block hover:text-softRed">
            Features
          </Link>
        </div>
        <div className="w-full py-3 text-center">
          <Link href="#download" className="block hover:text-softRed">
            Download
          </Link>
        </div>
        <div className="w-full py-3 text-center">
          <Link href="#faq" className="block hover:text-softRed">
            FAQ
          </Link>
        </div>
        <div className="w-full py-3 text-center">
          <Link href="#" className="block hover:text-softRed">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default MainNavigation;
