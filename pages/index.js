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
        revalidate: 1440,
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
        <title>Bookmark A Joke</title>
        <meta
          name="description"
          content="Find jokes that make your day and save them for later!"
        />
      </Head>

      {/* Hero Section */}
      <section id="hero">
        {/* Container For Image & Content */}
        <div className="container flex flex-col mx-auto p-6 lg:flex-row lg:mb-0">
          {/* Content */}
          <div className="flex flex-col space-y-10 mt-16 mb-3 ">
            <h1 className="text-2xl font-semibold text-center lg:text-4xl lg:text-left">
              Bookmark A Joke
            </h1>
            <p className="max-w-md mx-auto text-lg text-center text-gray-400 lg:text-xl lg:text-left lg:mt-0 lg:mx-0">
              A clean and simple interface to organize your favourite jokes.
              Generate a joke and save it on your account.
            </p>
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

      <div className="overflow-x-hidden">
        {/* Features Heading */}

        <section id="features">
          <div className="container mx-auto mt-16 lg:mt-36 px-6">
            <h2 className="mb-6 text-2xl lg:text-4xl font-semibold text-center">
              Laughter
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

        {/* FAQ Heading */}

        {/* Newsletter Section */}
        <section id="newsletter" className="bg-blue-600 mt-12">
          {/* Main Container */}
          <div className="max-w-lg mx-auto py-24">
            <p className="mb-6 text-lg tracking-widest text-center text-white uppercase">
              35,000+ Already Joined
            </p>
            <h2 className="px-3 mb-6 text-3xl font-semibold text-center text-white md:text-4xl"></h2>
          </div>
        </section>

        {/* Footer */}
      </div>
    </Fragment>
  );
}
