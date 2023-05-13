import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { useState, useContext } from 'react';
import NotificationContext from '../../store/notification-context';

function MainNavigation() {
  const [showMobile, setShowMobile] = useState(false);
  const { data: session, status } = useSession();
  const notificationCtx = useContext(NotificationContext);

  function logoutHandler() {
    signOut();
    notificationCtx.showNotification({
      title: 'Success!',
      message: 'You have been signed out. Come back again!',
      status: 'success',
    });

    handleMobileMenu();
  }

  const handleMobileMenu = () => {
    console.log('CLICK');
    setShowMobile((prev) => !prev);
  };

  return (
    <nav className="container relative bg-veryDarkBlue mx-auto px-4 min-w-full">
      {/* Flex Container For Nav Items  */}
      <div className="flex items-center justify-between my-6">
        {/* Logo */}
        <Link href="/">
          <span className="z-30 cursor-pointer">
          <img
              src="images/logo-bookmark-footer.svg"
              alt=""
              className="mb-1 cursor-pointer hover: text-red-500"
            />
            
          </span>
        </Link>

        <div className="hidden  items-center space-x-10 uppercase text-white md:flex">
          {status === 'authenticated' && (
            <Link href="/">
              <span className="tracking-widest hover:text-softRed cursor-pointer">
                Home
              </span>
            </Link>
          )}
          {session && (
            <Link href="/savedJokes">
              <span className="tracking-widest hover:text-softRed cursor-pointer">
                Bookmarked Jokes
              </span>
            </Link>
          )}
          {status === 'authenticated' && (
            <Link href="/faq">
              <span className="tracking-widest hover:text-softRed cursor-pointer">
                FAQ
              </span>
            </Link>
          )}
          {status === 'authenticated' && (
            <Link href="/profile">
              <span className="tracking-widest hover:text-softRed cursor-pointer">
                Profile
              </span>
            </Link>
          )}

          {!session && status !== 'loading' && (
            <Link href="/auth">
              <span className="px-8 py-2 text-white border-2 bg-red-400 border-softRed rounded-lg shadow-md hover:text-red-400 hover:bg-white cursor-pointer">
                Join/Login
              </span>
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
          onClick={handleMobileMenu}
          id="menu-btn"
          className={`z-30 block ${
            showMobile ? 'open' : ''
          } md:hidden focus:outline-none hamburger`}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      {/* Mobile Menu */}
      <div
        id="menu"
        className={`${
          showMobile ? 'flex' : 'hidden'
        } text-white space-y-5 fixed inset-0 z-20 flex-col items-center self-end w-full h-full m-h-screen px-6 py-1 pt-24 pb-4 tracking-widest uppercase divide-y divide-gray-500 opacity-90 bg-veryDarkBlue md:hidden`}
      >
        {status === 'authenticated' && (
          <div className="w-full py-3 text-center">
            <Link
              href="/"
              className="block hover:text-softRed "
              onClick={handleMobileMenu}
            >
              Home
            </Link>
          </div>
        )}
        {status === 'authenticated' && (
          <div className="w-full py-3 text-center">
            <Link
              href="/savedJokes"
              className="block hover:text-softRed"
              onClick={handleMobileMenu}
            >
              Bookmarked Jokes
            </Link>
          </div>
        )}
        {status === 'authenticated' && (
          <div className="w-full py-3 text-center">
            <Link
              href="/faq"
              className="block hover:text-softRed"
              onClick={handleMobileMenu}
            >
              FAQ
            </Link>
          </div>
        )}
        {status === 'authenticated' && (
          <div className="w-full py-3 text-center">
            <Link
              href="/profile"
              className="block hover:text-softRed"
              onClick={handleMobileMenu}
            >
              Profile
            </Link>
          </div>
        )}
        {!session && status !== 'loading' && (
          <div className="w-full py-3 text-center">
            <Link
              href="/auth"
              className="block hover:text-softRed"
              onClick={handleMobileMenu}
            >
              Join/Login
            </Link>
          </div>
        )}
        {status === 'authenticated' && (
          <div className="w-full py-3 text-center">
            <span
              href="/auth"
              className="block hover:text-softRed cursor-pointer"
              onClick={logoutHandler}
            >
              Logout
            </span>
          </div>
        )}
      </div>
    </nav>
  );
}

export default MainNavigation;
