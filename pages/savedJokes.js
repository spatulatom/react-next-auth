import React, { useEffect, useState, useContext } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { getSession } from 'next-auth/react';
import { connectToDatabase } from '../lib/db';

export const getServerSideProps = async (context) => {
  console.log('SAVED JOKES SERVER SIDE');
  const { req, res } = context;
  const session = await getSession({ req: req });

  if (!session) {
    return {
      redirect: { destination: '/', permanent: false },
    };
  }

  const userEmail = session.user.email;

  const client = await connectToDatabase();
  if (!client) {
    return {
      props: { err: 'Error connecting to the database!' },
    };
  }

  const usersCollection = client.db().collection('users');

  const user = await usersCollection.findOne({ email: userEmail });

  if (!user) {
    client.close();
    return { props: { err: 'User not found.' } };
  }
  if (user.jokes.length === 0) {
    client.close();
    return { props: { err: 'No saved jokes yet on your account.' } };
  }

  client.close();
  //    why we dont have to conver from json with .json() no idea it
  // produces error
  const data = await user.jokes;

  return {
    props: { message: data },
  };
};

export default function savedJokes(props) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [jokes, setJokes] = useState(props.message || []);
  const [error, setError] = useState(props.err || '');
  const [loading, setIsLoading] = useState(false);
  useEffect(() => {
    if (status !== 'authenticated') {
      router.replace('/');
    }
  }, [router]);

  useEffect(() => {
    getSavedJokes();
  }, []);

  async function getSavedJokes() {
    setIsLoading(true);
    const response = await fetch('/api/user/saved-jokes', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    try {
      if (response.ok) {
        setJokes(data);
        setError('');
        setIsLoading(false);
      } else {
        throw new Error(data.message || 'Something went wrong!');
      }
    } catch (err) {
      setError(err.message || 'Something went wrong with the server!');
      setIsLoading(false);
    }
  }
  if (loading && !props.message) {
    return (
      <div className="container mx-auto">
        <h2 className="mb-6 mt-8 text-3xl font-semibold text-center md:text-4xl">
          Your bookmarked jokes
        </h2>
        <p className="max-w-lg px-6 mx-auto text-center text-gray-500">
          Here are your saved jokes so you can always have a quick look at those
          that made you laugh!
        </p>

        <div className="text-center pt-12 ">
          <i class="fa-solid fa-spinner fa-2xl fa-spin"></i>
        </div>
      </div>
    );
  } else {
    if (jokes.length === 0 && error.length === 0) {
      return (
        <p className="max-w-lg px-6 py-8 mx-auto text-center text-gray-500">
          Here is a palce for your saved jokes to brighten up your day! Go to
          the home page and click 'Save' under a joke you like to have it
          bookmarked below.
        </p>
      );
    } else if (jokes.length === 0 && error.length !== 0) {
      return (
        <div className="container mx-auto">
          <h2 className="mb-6 mt-8 text-3xl font-semibold text-center md:text-4xl">
            Your bookmarked jokes
          </h2>
          <p className="max-w-lg px-6 mx-auto text-center text-gray-500">
            Here are your saved jokes so you can always have a quick look at
            those that made you laugh!
          </p>

          <p className="max-w-lg px-6 py-8 mx-auto mt-8 text-center bg-red-300 text-gray-500">
            {error}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          {/* FAQ Heading */}

          <section id="faq">
            <div className="container mx-auto">
              <h2 className="mb-6 mt-8 text-3xl font-semibold text-center md:text-4xl">
                Your bookmarked jokes
              </h2>
              <p className="max-w-lg px-6 mx-auto text-center text-gray-500">
                Here are your saved jokes so you can always have a quick look at
                those that made you laugh!
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
                {jokes.map((joke) => (
                  <div
                    className="py-1 border-b outline-none group"
                    tabindex="1"
                  >
                    {/* Tab Flex Container */}
                    <div className="flex items-center justify-between py-3 text-gray-500 cursor-pointer group">
                      {/* Tab Title */}
                      <div className="transition duration-500 ease group-hover:text-red-500">
                        Saved joke
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
                        {joke.joke}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      );
    }
  }
}
