import React from 'react';
import { Fragment } from 'react';
import Head from 'next/head';
import { getSession } from 'next-auth/react';

// export const getServerSideProps = async (context) => {
//   const { req, res } = context;
//   const session = await getSession({ req: req });

//   if (!session) {
//     return {
//       redirect: { destination: '/', permanent: false },
//     };
//   }

//   return {
//     props: { session },
//   };
// };

export default function Faq() {
  return (
    <Fragment>
      <Head>
        <title>Frequently Asked Questions</title>
        <meta name="description" content="A list of all iportant qustions!" />
      </Head>
      {/* FAQ Heading */}
      <section id="faq" className="mt-8">
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
      <section>
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
                  What is 'Bookmark a Joke App' about
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
                  A clean and simple app to organize your favourite jokes.
                  Generate a Joke and click 'Save' to have all your favourite
                  jokes saved - bookmarked - on your profile.
                </p>
              </div>
            </div>

            {/* Tab 2 */}
            <div className="py-1 border-b outline-none group" tabindex="2">
              {/* Tab Flex Container */}
              <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
                {/* Tab Title */}
                <div className="transition duration-500 ease group-hover:text-red-500">
                  What is Laughter?
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
                  Laughter can increase your oxygen intake, which can in turn
                  stimulate your heart, lungs, and muscles. Laughing further
                  releases endorphins, the feel-good chemicals our bodies
                  produce to make us feel happy and even relieve pain or stress.
                  Use this app to get your laughter back on track unless you're
                  already there, then use it anyway :).
                </p>
              </div>
            </div>

            {/* Tab 2 */}
            <div className="py-1 border-b outline-none group" tabindex="2">
              {/* Tab Flex Container */}
              <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
                {/* Tab Title */}
                <div className="transition duration-500 ease group-hover:text-red-500">
                  Does laughing affect the heart?
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
                  When you laugh, your heart rate increases, and you take many
                  deep breaths. This mean that more oxygenated blood is
                  circulated through your body – improving your vascular
                  function. Prevents heart disease. Improved vascular function
                  and circulation can also help reduce your risk of a heart
                  disease diagnosis.
                </p>
              </div>
            </div>

            {/* Tab 3 */}
            <div className="py-1 border-b outline-none group" tabindex="3">
              {/* Tab Flex Container */}
              <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
                {/* Tab Title  */}
                <div className="transition duration-500 ease group-hover:text-red-500">
                  What happens if I laugh too hard?
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
                  About 5000 studies were reviewed t and found out that too much
                  laughter can cause fainting, asthma attacks, "protrusion of
                  abdominal hernias," headaches, incontinence, jaw dislocation,
                  and arrhythmia.
                </p>
              </div>
            </div>

            {/* Tab 4 */}
            <div className="py-1 border-b outline-none group" tabindex="4">
              {/* Tab Flex Container */}
              <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
                {/* Tab Title */}
                <div className="transition duration-500 ease group-hover:text-red-500">
                  Is your laugh genetic?
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
                  Genes you inherit may play a role in your laugh being somewhat
                  similar to your parents', but you're also growing up with them
                  and listening to them laughing, and we're a very imitative
                  species. There's no way you could drill down and say we have
                  identified that 10 percent of your laugh came from your DNA.
                </p>
              </div>
            </div>
            {/* Tab 5 */}
            <div className="py-1 border-b outline-none group" tabindex="5">
              {/* Tab Flex Container */}
              <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
                {/* Tab Title */}
                <div className="transition duration-500 ease group-hover:text-red-500">
                  Does laughing cause weight gain?
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
                  Laughter is said to reduce the levels of stress hormone known
                  as cortisol that lowers the metabolism rate and stores fat in
                  the mid-section. Laughter tends to improve your metabolism
                  naturally, which influences your body to burn more calories
                  and lose weight.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
