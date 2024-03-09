import React from 'react';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import NotificationContext from '../../store/notification-context';

export default function Jokes(props) {
  const [tab1Active, setTab1] = useState(true);
  const [tab2Active, setTab2] = useState(false);
  const [tab3Active, setTab3] = useState(false);
  const [panel1Active, setPanel1Active] = useState(true);
  const [panel2Active, setPanel2Active] = useState(false);
  const [panel3Active, setPanel3Active] = useState(false);
  const [joke, setJoke] = useState(props.joke || '');
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(props.err || null);

  const notificationCtx = useContext(NotificationContext);

  async function saveJoke() {
    notificationCtx.showNotification({
      title: 'Seving joke...',
      message:
        'Your chosen joke is currently being stored into on your account.',
      status: 'pending',
    });

    try {
      const response = await fetch('/api/user/save-jokes', {
        method: 'POST',
        body: JSON.stringify(joke),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      if (response.ok) {
        notificationCtx.showNotification({
          title: 'Success!',
          message:
            data.message ||
            'Your chosen joke was saved! See more in Saved Jokes tab!',
          status: 'success',
        });
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      notificationCtx.showNotification({
        title: 'Error!',
        message: error.message || 'Something went wrong!',
        status: 'error',
      });
    }
  }

  const getJoke = async () => {
    setIsLoading(true);
    const config = {
      headers: {
        Accept: 'application/json',
      },
    };

    axios
      .get('https://icanhazdadjoke.com', config)
      .then((res) => {
        setJoke(res.data.joke);
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        console.log('ERROR', error);
        setIsLoading(false);
        setError('Internal server error!');
      });
  };

  useEffect(() => {}, []);

  const showPanel1 = (e) => {
    setTab1(true);
    setTab2(false);
    setTab3(false);
    setPanel1Active(true);
    setPanel2Active(false);
    setPanel3Active(false);
    getJoke();
  };

  const showPanel2 = () => {
    setTab1(false);
    setTab2(true);
    setTab3(false);
    setPanel1Active(false);
    setPanel2Active(true);
    setPanel3Active(false);
    getJoke();
  };

  const showPanel3 = () => {
    setTab1(false);
    setTab2(false);
    setTab3(true);
    setPanel1Active(false);
    setPanel2Active(false);
    setPanel3Active(true);
    getJoke();
  };
  console.log('JOKE', joke);
  return (
    <section id="tabs">
      {/* abs/Panels Container */}
      <div className="container relative mx-auto my-6 mb-32 mt-12 px-6">
        <div className="bg-tabs"></div>
        {/* Tabs Flex Container */}
        <div className="flex flex-col justify-center max-w-xl mx-auto mb-6 border-b md:space-x-10 md:flex-row">
          {/* Tab 1 */}
          <div
            onClick={showPanel1}
            className="flex justify-center text-center cursor-pointer
         text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab"
            data-target="panel-1"
          >
            <div
              className={`py-5 border-b-4 ${
                tab1Active ? 'border-red-400' : ''
              }`}
              data-target="panel-1"
            >
              Simply funny
            </div>
          </div>

          {/* Tab 2 */}
          <div
            onClick={showPanel2}
            className="flex justify-center text-center cursor-pointer text-gray-600
         border-b md:border-b-0 hover:text-softRed md:w-1/3 tab"
            data-target="panel-2"
          >
            <div
              className={`py-5 border-b-4 ${
                tab2Active ? 'border-red-400' : ''
              }`}
              data-target="panel-2"
            >
              Speedy laugh
            </div>
          </div>

          {/* Tab 3 */}
          <div
            onClick={showPanel3}
            className="flex justify-center text-center cursor-pointer text-gray-600 
        border-b md:border-b-0 hover:text-softRed md:w-1/3 tab"
            data-target="panel-3"
          >
            <div
              className={`py-5 border-b-4 ${
                tab3Active ? 'border-red-400' : ''
              }`}
              data-target="panel-3"
            >
              Don't laugh challenge
            </div>
          </div>
        </div>

        {/* Tab Panels */}
        <div id="panels" className="container mx-auto">
          {/* Panel 1 */}
          <div
            className={`flex flex-col ${
              panel1Active ? '' : 'hidden'
            } py-5 md:flex-row md:space-x-7 panel panel-1`}
          >
            {/* Panel Image */}
            <div className="hidden md:flex md:justify-center md:w-1/2">
              <img
                src="images/illustration-features-tab-1.svg"
                alt=""
                className="relative"
              />
            </div>
            {/* Panel Content */}
            <div className="flex flex-col justify-between space-y-8 md:w-1/2">
              <h3 className="my-4 max-w-md text-xl font-semibold text-center md:mt-0 md:mb-0 md:text-left">
                {loading ? (
                  <div className="text-center">
                    <i class="fa-solid fa-spinner fa-spin"></i>
                  </div>
                ) : (
                  joke
                )}
              </h3>

              {error ? (
                <p className="max-w-md text-center py-4 text-white bg-red-400">
                  {error}
                </p>
              ) : null}

              {joke ? (
                <div className="mx-auto md:mx-0 ">
                  <a
                    onClick={saveJoke}
                    className="uppercase  px-24 py-4 font-normal text-lg cursor-pointer mt-4 text-white border-2 border-white rounded-lg md:inline-flex bg-veryDarkBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2"
                  >
                    Save
                  </a>
                </div>
              ) : (
                <div className="mx-auto md:mx-0 ">
                  <button
                    disabled
                    className="uppercase  px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-veryDarkBlue cursor-not-allowed"
                  >
                    Save
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Panel 2 */}
          <div
            className={`flex flex-col ${
              panel2Active ? '' : 'hidden'
            } py-5 md:flex-row md:space-x-7 panel panel-2`}
          >
            {/* Panel Image */}
            <div className="hidden md:flex md:justify-center md:w-1/2">
              <img
                src="images/illustration-features-tab-2.svg"
                alt=""
                className="relative"
              />
            </div>
            {/* Panel Content */}
            <div className="flex flex-col justify-around space-y-8 md:w-1/2">
              <h3 className="my-4 max-w-md text-xl font-semibold text-center md:mt-0 md:mb-0 md:text-left">
                {loading ? (
                  <div className="text-center">
                    <i class="fa-solid fa-spinner fa-spin"></i>
                  </div>
                ) : (
                  joke
                )}
              </h3>
              {error ? (
                <p className="max-w-md text-center py-4 text-white bg-red-400">
                  error
                </p>
              ) : null}
              {joke ? (
                <div className="mx-auto md:mx-0 ">
                  <a
                    onClick={saveJoke}
                    className="uppercase  px-24 font-normal text-lg cursor-pointer py-4 mt-4 text-white border-2 border-white rounded-lg md:inline-flex bg-veryDarkBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2"
                  >
                    Save
                  </a>
                </div>
              ) : (
                <div className="mx-auto md:mx-0 ">
                  <button
                    disabled
                    className="uppercase  px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-veryDarkBlue cursor-not-allowed"
                  >
                    Save
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Panel 3 */}
          <div
            className={`flex flex-col ${
              panel3Active ? '' : 'hidden'
            } py-5 md:flex-row md:space-x-7 panel panel-3`}
          >
            {/* Panel Image */}
            <div className="hidden md:flex md:justify-center md:w-1/2">
              <img
                src="images/illustration-features-tab-3.svg"
                alt=""
                className="relative"
              />
            </div>
            {/* Panel Content */}
            <div className="flex flex-col justify-around space-y-8 md:w-1/2">
              <h3 className="my-4 max-w-md text-xl font-semibold text-center md:mt-0 md:mb-0 md:text-left">
                {loading ? (
                  <div className="text-center">
                    <i class="fa-solid fa-spinner fa-spin"></i>
                  </div>
                ) : (
                  joke
                )}
              </h3>
              {error ? (
                <p className="max-w-md text-center py-4 text-white bg-red-400">
                  error
                </p>
              ) : null}
              {joke ? (
                <div className="mx-auto md:mx-0 ">
                  <a
                    onClick={saveJoke}
                    className="uppercase  px-24 font-normal text-lg cursor-pointer py-4 mt-4 text-white border-2 border-white rounded-lg md:inline-flex bg-veryDarkBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2"
                  >
                    Save
                  </a>
                </div>
              ) : (
                <div className="mx-auto md:mx-0 ">
                  <button
                    disabled
                    className="uppercase  px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-veryDarkBlue cursor-not-allowed"
                  >
                    Save
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
