import React from 'react';

export default function ProfileCardTailwind() {
  return (
    <div className="w-[300px] bg-gray-100 border border-gray-200 rounded-lg text-center p-4">
      <img
        src="https://via.placeholder.com/100"
        alt="avatar"
        className="w-[100px] h-[100px] rounded-full mx-auto"
      />
      <h2 className="text-xl font-bold text-black mt-4">Matti Meikäläinen</h2>
      <p className="text-sm text-gray-600 mb-4">
        Full-stack developer, passionate about coding and coffee
      </p>
      <button className="bg-blue-600 text-white w-[120px] rounded-md py-2 mb-5">
        Contact Me
      </button>
    </div>
  );
}