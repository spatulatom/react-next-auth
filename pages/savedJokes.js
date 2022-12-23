import React, { useEffect, useState, useContext } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { getSession } from 'next-auth/react';
import { connectToDatabase } from '../lib/db';

export const getServerSideProps = async (context) => {
  const { req, res } = context;
  const session = await getSession({ req: req });
  

  if (!session) {
    return {
        props: { jokes: 'no session'}
    }
  }

  const userEmail = session.user.email;

  const client = await connectToDatabase();

  const usersCollection = client.db().collection('users');

  const user = await usersCollection.findOne({ email: userEmail });

  if (!user) {
    client.close();
    return { message: 'User not found.' };
  }
  if (!user.jokes) {
    client.close();
    return { props: { jokes: [{ joke: 'No jokes yet' }] } };
  }

  client.close();
  //    why we dont have to conver from json with .json() no idea it
  // produces error
  const data = await user.jokes;

  return {
    props: { jokes: data  },
  };
};

export default function savedJokes(props) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [jokes, setJokes] = useState(props.jokes);

   if (status === 'unauthenticated') {
    router.replace('/');
  }

  useEffect(() => {
    getSavedJokes();
  }, []);

  async function getSavedJokes() {
    const response = await fetch('/api/user/saved-jokes', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    try {
      if (response.ok) {
        const data = await response.json();
        setJokes(data);
      } else {
        const data = await response.json();
        throw new Error (data.message || "Something went wrong!")
      }
    } catch (err) {
      console.log('ERR', err)
      alert(err.message);
    }
  }

 
  if (status === 'authenticated') {
    if (jokes === undefined) {
      return <p className="mx-auto mt-6 text-center text-2xl">Loading...</p>;
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
                {jokes.map((joke) => (
                  <div
                    className="py-1 border-b outline-none group"
                    tabindex="1"
                  >
                    {/* Tab Flex Container */}
                    <div className="flex items-center justify-between py-3 text-gray-500 cursor-pointer group">
                      {/* Tab Title */}
                      <div className="transition duration-500 ease group-hover:text-red-500">
                        Check this one out
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
