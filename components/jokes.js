import React from 'react'
import { useState } from 'react';


export default function Jokes() {
    const [tab1Active, setTab1] = useState(true);
    const [tab2Active, setTab2] = useState(false);
    const [tab3Active, setTab3] = useState(false);
    const [panel1Active, setPanel1Active] = useState(true);
    const [panel2Active, setPanel2Active] = useState(false);
    const [panel3Active, setPanel3Active] = useState(false);
  
    const showPanel1 = (e) => {
      setTab1(true);
      setTab2(false);
      setTab3(false);
      setPanel1Active(true);
      setPanel2Active(false);
      setPanel3Active(false);
    };
  
    const showPanel2 =()=>{
      setTab1(false);
      setTab2(true);
      setTab3(false);
      setPanel1Active(false);
      setPanel2Active(true);
      setPanel3Active(false);
    }
  
    const showPanel3 =()=>{
      setTab1(false);
      setTab2(false);
      setTab3(true);
      setPanel1Active(false);
      setPanel2Active(false);
      setPanel3Active(true);
    }
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
            Simple Bookmarking
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
            Speedy Searching
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
            Easy Sharing
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
          <div className="flex justify-center md:w-1/2">
            <img
              src="images/illustration-features-tab-1.svg"
              alt=""
              className="relative z-10"
            />
          </div>
          {/* Panel Content */}
          <div className="flex flex-col space-y-8 md:w-1/2">
            <h3 className="mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left">
              Bookmark in one click
            </h3>
            <p className="max-w-md text-center text-grayishBlue md:text-left">
              Organize your bookmarks however you like. Our simple
              drag-and-drop interface gives you complete control over how
              you manage your favourite sites.
            </p>
            <div className="mx-auto md:mx-0">
              <a
                href="#"
                className="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2"
              >
                More Info
              </a>
            </div>
          </div>
        </div>

        {/* Panel 2 */}
        <div
          className={`flex flex-col ${
            panel2Active ? '' : 'hidden'
          } py-5 md:flex-row md:space-x-7 panel panel-2`}
        >
          {/* Panel Image */}
          <div className="flex justify-center md:w-1/2">
            <img
              src="images/illustration-features-tab-2.svg"
              alt=""
              className="relative z-10"
            />
          </div>
          {/* Panel Content */}
          <div className="flex flex-col space-y-8 md:w-1/2">
            <h3 className="mt-14 text-3xl font-semibold text-center md:mt-0 md:text-left">
              Intelligent search
            </h3>
            <p className="max-w-md text-center text-grayishBlue md:text-left">
              Our powerful search feature will help you find saved sites in
              no time at all. No need to trawl through all of your
              bookmarks.
            </p>
            <div className="mx-auto md:mx-0">
              <a
                href="#"
                className="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2"
              >
                More Info
              </a>
            </div>
          </div>
        </div>

        {/* Panel 3 */}
        <div
          className={`flex flex-col ${
            panel3Active ? '' : 'hidden'
          } py-5 md:flex-row md:space-x-7 panel panel-3`}
        >
          {/* Panel Image */}
          <div className="flex justify-center md:w-1/2">
            <img
              src="images/illustration-features-tab-3.svg"
              alt=""
              className="relative z-10"
            />
          </div>
          {/* Panel Content */}
          <div className="flex flex-col space-y-8 md:w-1/2">
            <h3 className="mt-14 text-3xl font-semibold text-center md:mt-0 md:text-left">
              Share your bookmarks
            </h3>
            <p className="max-w-md text-center text-grayishBlue md:text-left">
              Easily share your bookmarks and collections with others.
              Create a shareable a link that you can send at the click of a
              button.
            </p>
            <div className="mx-auto md:mx-0">
              <a
                href="#"
                className="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2"
              >
                More Info
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  )
}