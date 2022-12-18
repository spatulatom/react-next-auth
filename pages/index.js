import React from 'react';
import Link from 'next/link';
import Jokes from '../components/jokes';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function kkks() {
  const { data: session, status } = useSession();
  const router = useRouter();

  return (
    <div className="overflow-x-hidden scroll-smooth">
      {/* Hero Section */}
      <section id="hero">
        {/* Container For Image & Content */}
        <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row lg:mb-0">
          {/* Content */}
          <div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/2">
            <h1 className="text-3xl font-semibold text-center lg:text-6xl lg:text-left">
              A Simple Bookmark Manager
            </h1>
            <p className="max-w-md mx-auto text-lg text-center text-gray-400 lg:text-2xl lg:text-left lg:mt-0 lg:mx-0">
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>

            {/* Buttons Container */}
            <div className="flex items-center justify-center w-full space-x-4 lg:justify-start">
              <a
                href="#"
                className="p-4 text-sm font-semibold text-white bg-blue-600 rounded shadow-md border-2 border-softBlue md:text-base hover:bg-white hover:text-blue-500"
              >
                Get It On Chrome
              </a>
              <a
                href="#"
                className="p-4 text-sm font-semibold text-black bg-gray-300 rounded shadow-md border-2 border-gray-300 md:text-base hover:bg-white hover:text-gray-600"
              >
                Get It On Firefox
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2">
            <div className="bg-hero"></div>
            <img
              src="images/illustration-hero.svg"
              alt=""
              className="relative lg:top-24 xl:top-0 overflow-x-visible"
            />
          </div>
        </div>
      </section>

      {/* Features Heading */}
      <section id="features">
        <div className="container mx-auto mt-16 px-6">
          <h2 className="mb-6 text-4xl font-semibold text-center">Features</h2>
          <p className="max-w-md mx-auto text-center text-grayishBlue">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
      </section>

      {/* Features Tabs */}
      {status === 'authenticated' ? <Jokes /> : null}

      {/* Download Heading */}
      <section id="download">
        <div className="container mx-auto px-6">
          <h2 className="mb-6 text-3xl font-semibold text-center md:text-4xl">
            Download the extension
          </h2>
          <p className="max-w-lg mx-auto text-center text-grayishBlue">
            We've got more browsers in the pipeline. Please do let us know if
            you've got a favourite you'd like us to prioritize.
          </p>
        </div>
      </section>

      {/* Download Boxes */}
      <section id="download-boxes" className="py-32">
        {/* Boxes Container */}
        <div className="relative flex flex-col items-center container mx-auto space-y-10 px-10 md:px-6 md:space-y-0 md:space-x-7 md:flex-row">
          {/* Box 1 */}
          <div className="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
            {/* Image */}
            <div className="flex justify-center">
              <img src="images/logo-chrome.svg" alt="" />
            </div>
            {/* Text */}
            <h5 className="pt-6 text-xl font-bold">Add to Chrome</h5>
            <p className="text-gray-400">Minimum Version 62</p>

            {/* Dots */}
            <div className="bg-dots bg-repeat-x px-6 pt-6 capitalize">
              <a
                href="#"
                className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-blue-500 hover:text-softBlue hover:bg-white border-blue-500"
              >
                Add & Install Extension
              </a>
            </div>
          </div>

          {/* Box 2 */}
          <div className="w-full md:w-1/3">
            <div className="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:mt-8">
              {/* Image */}
              <div className="flex justify-center">
                <img src="images/logo-firefox.svg" alt="" />
              </div>
              {/* Text */}
              <h5 className="pt-6 text-xl font-bold">Add to Firefox</h5>
              <p className="text-gray-400">Minimum Version 55</p>

              {/* Dots */}
              <div className="bg-dots bg-repeat-x px-6 pt-6 capitalize">
                <a
                  href="#"
                  className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-blue-500 hover:text-blue-500 hover:bg-white border-softBlue"
                >
                  Add & Install Extension
                </a>
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div className="w-full md:w-1/3">
            <div className="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:mt-16">
              {/* Image */}
              <div className="flex justify-center">
                <img src="images/logo-opera.svg" alt="" />
              </div>
              {/* Text */}
              <h5 className="pt-6 text-xl font-bold">Add to Opera</h5>
              <p className="text-gray-400">Minimum Version 46</p>

              {/* Dots */}
              <div className="bg-dots bg-repeat-x px-6 pt-6 capitalize">
                <a
                  href="#"
                  className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-blue-500 hover:text-softBlue hover:bg-white border-blue-500"
                >
                  Add & Install Extension
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Heading */}
      <section id="faq">
        <div className="container mx-auto">
          <h2 className="mb-6 text-3xl font-semibold text-center md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-lg px-6 mx-auto text-center text-gray-500">
            Here are some of our FAQs. If you have any other questions you'd
            like answered please feel free to email us.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section id="faq-accordion">
        {/* Main Container */}
        <div className="container mx-auto px-6 mb-32">
          {/* Accordion Container */}
          <div className="max-w-2xl m-8 mx-auto overflow-hidden">
            {/* Tab 1 */}
            <div className="py-1 border-b outline-none group" tabindex="1">
              {/* Tab Flex Container */}
              <div className="flex items-center justify-between py-3 text-gray-500 cursor-pointer group">
                {/* Tab Title */}
                <div className="transition duration-500 ease group-hover:text-red-500">
                  What is Bookmark?
                </div>
                {/* Arrow */}
                <div className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="12"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      d="M1 1l8 8 8-8"
                    />
                  </svg>
                </div>
              </div>

              {/* Tab Inner Content */}
              <div className="overflow-hidden duration-500 group-focus:max-h-screen max-h-0 ease">
                <p className="py-2 text-justify text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat, repellat amet doloribus consequuntur eos similique
                  provident tempora voluptates iure quia fuga dicta voluptatibus
                  culpa mollitia recusandae delectus id suscipit labore?
                </p>
              </div>
            </div>

            {/* Tab 2 */}
            <div className="py-1 border-b outline-none group" tabindex="2">
              {/* Tab Flex Container */}
              <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
                {/* Tab Title */}
                <div className="transition duration-500 ease group-hover:text-red-500">
                  How can I request a new browser?
                </div>
                {/* Arrow */}
                <div className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="12"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      d="M1 1l8 8 8-8"
                    />
                  </svg>
                </div>
              </div>

              {/* Tab Inner Content */}
              <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                <p className="py-2 text-justify text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat, repellat amet doloribus consequuntur eos similique
                  provident tempora voluptates iure quia fuga dicta voluptatibus
                  culpa mollitia recusandae delectus id suscipit labore?
                </p>
              </div>
            </div>

            {/* Tab 3 */}
            <div className="py-1 border-b outline-none group" tabindex="3">
              {/* Tab Flex Container */}
              <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
                {/* Tab Title  */}
                <div className="transition duration-500 ease group-hover:text-red-500">
                  Is there a mobile app?
                </div>
                {/* Arrow */}
                <div className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="12"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      d="M1 1l8 8 8-8"
                    />
                  </svg>
                </div>
              </div>

              {/* Tab Inner Content */}
              <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                <p className="py-2 text-justify text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat, repellat amet doloribus consequuntur eos similique
                  provident tempora voluptates iure quia fuga dicta voluptatibus
                  culpa mollitia recusandae delectus id suscipit labore?
                </p>
              </div>
            </div>

            {/* Tab 4 */}
            <div className="py-1 border-b outline-none group" tabindex="4">
              {/* Tab Flex Container */}
              <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
                {/* Tab Title */}
                <div className="transition duration-500 ease group-hover:text-red-500">
                  What about other Chromium browsers
                </div>
                {/* Arrow */}
                <div className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="12"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      d="M1 1l8 8 8-8"
                    />
                  </svg>
                </div>
              </div>

              {/* Tab Inner Content */}
              <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                <p className="py-2 text-justify text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat, repellat amet doloribus consequuntur eos similique
                  provident tempora voluptates iure quia fuga dicta voluptatibus
                  culpa mollitia recusandae delectus id suscipit labore?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="bg-blue-600">
        {/* Main Container */}
        <div className="max-w-lg mx-auto py-24">
          <p className="mb-6 text-lg tracking-widest text-center text-white uppercase">
            35,000+ Already Joined
          </p>
          <h2 className="px-3 mb-6 text-3xl font-semibold text-center text-white md:text-4xl">
            Stay up-to-date with what we're doing
          </h2>

          {/* Form */}
          <form className="flex flex-col items-start justify-center max-w-2xl mx-auto space-y-6 text-base px-6 md:flex-row md:space-y-0 md:space-x-4 md:px-0">
            {/* Input & Button Container */}
            <div className="flex flex-col justify-between items-center mx-auto md:flex-row md:mx-0">
              <input
                type="text"
                className="flex-1 px-6 pt-3 pb-2 mb-4 rounded-lg border-1 border-white focus:outline-none md:mr-3 md:mb-0"
                placeholder="Enter your email address"
              />

              <input
                type="submit"
                className="inline-flex px-6 py-3 font-semibold text-center text-white duration-200 transform rounded-lg cursor-pointer focus:outline-none bg-red-500 hover:opacity-90"
                value="Contact Us"
              />
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-veryDarkBlue ">
        {/* Footer Flex Container */}
        <div className="container flex flex-col items-center justify-between mx-auto space-y-16 px-6 md:flex-row md:space-y-0">
          {/* Logo/Menu Container */}
          <div className="flex flex-col items-center justify-between space-y-8 text-lg font-light md:flex-row md:space-y-0 md:space-x-14 text-gray-300">
            <img
              src="images/logo-bookmark-footer.svg"
              alt=""
              className="mb-1"
            />

            <a href="#features" className="uppercase hover:text-red-500">
              Features
            </a>
            <a href="#download" className="uppercase hover:text-red-500">
              Download
            </a>
            <a href="#faq" className="uppercase hover:text-red-500">
              FAQ
            </a>
          </div>

          {/* Social Container */}
          <div className="flex space-x-10">
            <a href="#">
              <img
                src="images/icon-facebook.svg"
                alt=""
                className="h-6 ficon"
              />
            </a>
            <a href="#">
              <img src="images/icon-twitter.svg" alt="" className="h-6 ficon" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
