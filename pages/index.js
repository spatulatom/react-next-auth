import React from 'react';
import Jokes from '../components/ui/jokes';
import Head from 'next/head';
import { Fragment } from 'react';

export const getStaticProps = async () => {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };
  try {
    const res = await fetch('https://icanhazdadjoke.com', config);
    if (res.ok) {
      const data = await res.json();

      return {
        props: { joke: data.joke },
        revalidate: 600,
      };
    }
  } catch (error) {
    return {
      props: {
        err: 'Iternal server error. Try to load a different joke please!',
      },
    };
  }
};

export default function kkks(props) {


  return (
    <Fragment>
      <Head>
        <title>Bookmark Your Jokes</title>
        <meta
          name="description"
          content="Find jokes that make your day and save them for later!"
        />
      </Head>
      <div className="overflow-x-hidden">
        {/* Features Heading */}

        <section id="features">
          <div className="container mx-auto mt-16 px-6">
            <h2 className="mb-6 text-4xl font-semibold text-center">
              A Joke Manager
            </h2>
            <p className="max-w-md mx-auto text-center text-grayishBlue">
              Laughter can increase your oxygen intake, which can in turn
              stimulate your heart, lungs, and muscles. Laughing further
              releases endorphins, the feel-good chemicals our bodies produce to
              make us feel happy and even relieve pain or stress.
              <span className="font-bold">
                {' '}
                Use this app to get your laughter back on track unless you're
                already there, then use it anyway :).
              </span>
            </p>
          </div>
        </section>

        {/* Features Tabs */}
        <Jokes joke={props.joke} err={props.err} />

        {/* Hero Section */}
        <section id="hero">
          {/* Container For Image & Content */}
          <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row lg:mb-0">
            {/* Content */}
            <div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/2">
              <h1 className="text-3xl font-semibold text-center lg:text-6xl lg:text-left">
                A Joke Manager
              </h1>
              <p className="max-w-md mx-auto text-lg text-center text-gray-400 lg:text-2xl lg:text-left lg:mt-0 lg:mx-0">
                A clean and simple interface to organize your favourite jokes.
                Save favourite jokes on your account and come back any time to
                lift up your mood!
              </p>

              {/* Buttons Container */}
              <div className="flex items-center justify-center w-full space-x-4 lg:justify-start">
                <a
                  href="#"
                  className="p-4 text-sm font-semibold text-white bg-blue-600 rounded shadow-md border-2 border-softBlue md:text-base hover:bg-white hover:text-blue-500"
                >
                  Lorem Ipsum
                </a>
                <a
                  href="#"
                  className="p-4 text-sm font-semibold text-black bg-gray-300 rounded shadow-md border-2 border-gray-300 md:text-base hover:bg-white hover:text-gray-600"
                >
                  Lorem Ipsum
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

        {/* FAQ Heading */}

        {/* Newsletter Section */}
        <section id="newsletter" className="bg-blue-600 mt-12">
          {/* Main Container */}
          <div className="max-w-lg mx-auto py-24">
            <p className="mb-6 text-lg tracking-widest text-center text-white uppercase">
              35,000+ Already Joined
            </p>
            <h2 className="px-3 mb-6 text-3xl font-semibold text-center text-white md:text-4xl"></h2>

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
                  // type="submit"
                  className="inline-flex px-6 py-3 font-semibold text-center text-white duration-200 transform rounded-lg cursor-pointer focus:outline-none bg-red-500 hover:opacity-90"
                  value="Lorem Ipsum"
                />
              </div>
            </form>
          </div>
        </section>

        {/* Footer */}
      </div>
    </Fragment>
  );
}
