import React from 'react'

export const Button = () => {
    return (
      <div className="flex gap-5">
        <button className=" w-32 h-10 rounded-full border-2 border-red-600 text-red-600 hover:text-white hover:bg-red-600">
          Login
        </button>
        <button className="w-32 h-10 rounded-full border-2 border-red-600 bg-red-600 text-white">
          Register
        </button>
      </div>
    );
  };
  
