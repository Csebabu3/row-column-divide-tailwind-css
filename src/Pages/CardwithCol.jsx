import React from "react";
import Navbar from "../Component/Navbar";

function CardwithCol() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-6/12 bg-slate-300 p-4 flex justify-center items-center h-400 rounded-sm">
            <span className="text-6xl text-slate-400">600 x 400</span>
          </div>

          <div className="md:w-6/12 bg-white p-4 text-left">
            <h2 className="text-xl font-bold">Business Name or Tagline</h2>
            <p className="my-4">
              This should give you a good starting point for using the container
              class in Tailwind CSS. Feel free to customize and extend it
              according to your project's needs. This should give you a good
              starting point for using the container class in Tailwind CSS. Feel
              free to customize and extend it according to your project's needs.
            </p>
            <button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white py-2 px-4 rounded">
              Save Changes
            </button>
          </div>
        </div>
        <div className="flex flex-row mt-8 bg-slate-500 text-white justify-center">
          <h1 className="p-7">
            Here's the full and corrected version of the Navbar component using
            React and Tailwind CSS.
          </h1>
        </div>
        <div className="flex flex-row md:flex-row justify-between">
          <div class="max-w-sm rounded overflow-hidden shadow-sm mt-8  text-left border border-slate-200">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2 bg-slate-200">
              <button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white py-2 px-4 rounded">
                Save Changes
              </button>
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden shadow-sm mt-8  text-left border border-slate-200">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2 bg-slate-200">
              <button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white py-2 px-4 rounded">
                Save Changes
              </button>
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden shadow-sm mt-8  text-left border border-slate-200">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>

            <div class="px-6 pt-4 pb-2 bg-slate-200">
              <button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white py-2 px-4 rounded">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardwithCol;
