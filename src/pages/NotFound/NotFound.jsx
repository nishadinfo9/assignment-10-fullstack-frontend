import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <main class="grid h-screen w-full place-items-center bg-gray-900">
      <div class="text-center">
        <p class=" text-5xl font-extrabold text-indigo-400">404</p>
        <h1 class="mt-4 text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
          Page not found
        </h1>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <button
            onClick={() => navigate(-1)}
            class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Go back home
          </button>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
