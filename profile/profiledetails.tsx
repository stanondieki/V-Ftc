// components/data.tsx
import React from 'react';
import Image from 'next/image';

const DataForm = () => {
  return (
    <div className="flex justify-between bg-gray-900 p-8 rounded-lg text-white">
      <div className="flex-1 flex justify-center items-center bg-gray-800 rounded-lg">
        <Image src="/images/nw.jpg" alt="Profile" width={100} height={100} className="rounded-full object-cover" />
      </div>
      <div className="flex-2 pl-8">
        <h2 className="text-yellow-400 mb-6">Insert Data for Primary verification</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="firstName">First Name</label>
              <input 
                type="text" 
                id="firstName" 
                placeholder="Enter full name" 
                className="p-3 rounded-md bg-gray-700 text-white border border-gray-600"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName">Last Name</label>
              <input 
                type="text" 
                id="lastName" 
                placeholder="Enter last name" 
                className="p-3 rounded-md bg-gray-700 text-white border border-gray-600"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="mobile">Mobile</label>
            <input 
              type="tel" 
              id="mobile" 
              placeholder="Enter Mobile number" 
              className="p-3 rounded-md bg-gray-700 text-white border border-gray-600"
            />
          </div>
          <h3 className="text-yellow-400 mt-6">Address</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="state">State</label>
              <input 
                type="text" 
                id="state" 
                placeholder="Enter state" 
                className="p-3 rounded-md bg-gray-700 text-white border border-gray-600"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="city">City</label>
              <input 
                type="text" 
                id="city" 
                placeholder="Enter City" 
                className="p-3 rounded-md bg-gray-700 text-white border border-gray-600"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="zipCode">Zip Code</label>
              <input 
                type="text" 
                id="zipCode" 
                placeholder="Zip Code" 
                className="p-3 rounded-md bg-gray-700 text-white border border-gray-600"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="address">Street Address</label>
              <input 
                type="text" 
                id="address" 
                placeholder="Address" 
                className="p-3 rounded-md bg-gray-700 text-white border border-gray-600"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button 
              type="submit" 
              className="bg-yellow-400 text-black px-6 py-3 rounded-md hover:bg-yellow-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DataForm;
