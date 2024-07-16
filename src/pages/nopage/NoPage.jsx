import React from "react";

function NotFoundPage() {
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-green-500 to-blue-600 text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-8">Oops! Page not found on Online Dukan.</p>
        <p className="text-lg mb-8">
          It seems you've navigated to an uncharted territory.
          <br />
          Let's guide you back to the heart of Online Dukan!
        </p>
        <a
          href="/"
          className="bg-white text-blue-600 py-2 px-4 rounded-full text-lg font-semibold hover:bg-blue-600 hover:text-white transition duration-300"
        >
          Explore Online Dukan
        </a>
      </div>
    </div>
  );
}

export default NotFoundPage;
