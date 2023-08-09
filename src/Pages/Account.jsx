import React, { useState } from 'react';

export const Account = () => {
  return (
    <div className='h-auto w-full py-[5%] flex items-center justify-center'>
        <div className='w-10/12 h-full flex flex-col justify-center'>
            <div className='flex flex-col md:flex-row justify-between'>
            <span className='flex flex-row w-fit'> <p className='text-black'>Home / About</p> </span>
            <span className='flex flex-row w-fit'> Welcome! <p className='text-red-500 ml-4'>John Johan</p> </span>
            </div>

            <div className='w-full h-auto my-[5%] flex flex-col justify-between md:flex-row '>
                <div className='md:w-[40%] w-full h-auto md:h-1/2 flex flex-col items-center justify-center '> <DropdownMenu></DropdownMenu> </div>
                <div className='md:w-[58%] w-full flex flex-col items-center justify-center'> <EditAccount></EditAccount> </div>
            </div>
        </div>
    </div>
  )
}

export const EditAccount = () => {
  return (
    <div className="shadow-xl w-full p-6 rounded-md">
      <h2 className="text-red-500 text-2xl font-bold mb-4">Edit Your Profile</h2>

      {/* First Name and Last Name */}
      <div className="md:flex md:space-x-4">
        <div className="md:w-1/2 flex flex-col space-y-2">
          <p className="text-black">First Name</p>
          <input
            type="text"
            placeholder="First Name"
            className="w-full bg-gray-300 px-3 py-2 rounded-md"
          />
        </div>
        <div className="md:w-1/2 flex flex-col space-y-2">
          <p className="text-black">Last Name</p>
          <input
            type="text"
            placeholder="Last Name"
            className="w-full bg-gray-300 px-3 py-2 rounded-md"
          />
        </div>
      </div>

      {/* Email and Address */}
      <div className="md:flex md:space-x-4 mt-4">
        <div className="md:w-1/2 flex flex-col space-y-2">
          <p className="text-black">Email</p>
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-gray-300 px-3 py-2 rounded-md"
          />
        </div>
        <div className="md:w-1/2 flex flex-col space-y-2">
          <p className="text-black">Address</p>
          <input
            type="text"
            placeholder="Address"
            className="w-full bg-gray-300 px-3 py-2 rounded-md"
          />
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-6">Password Changes</h2>

      {/* Old Password, New Password, Confirm New Password */}
      <div className="flex flex-col space-y-2 mt-4">
        <p className="text-black">Old Password</p>
        <input
          type="password"
          placeholder="Old Password"
          className="w-full bg-gray-300 px-3 py-2 rounded-md"
        />
      </div>
      <div className="flex flex-col space-y-2 mt-4">
        <p className="text-black">New Password</p>
        <input
          type="password"
          placeholder="New Password"
          className="w-full bg-gray-300 px-3 py-2 rounded-md"
        />
      </div>
      <div className="flex flex-col space-y-2 mt-4">
        <p className="text-black">Confirm New Password</p>
        <input
          type="password"
          placeholder="Confirm New Password"
          className="w-full bg-gray-300 px-3 py-2 rounded-md"
        />
      </div>
    </div>
  );
};

export const DropdownMenu = () => {
  const [showManage, setShowManage] = useState(false);
  const [showOrders, setShowOrders] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);

  const handleManageClick = () => {
    setShowManage(!showManage);
    setShowOrders(false);
    setShowWishlist(false);
  };

  const handleOrdersClick = () => {
    setShowManage(false);
    setShowOrders(!showOrders);
    setShowWishlist(false);
  };

  const handleWishlistClick = () => {
    setShowManage(false);
    setShowOrders(false);
    setShowWishlist(!showWishlist);
  };

  return (
    <div className="w-full py-4 ">
      <div className="mb-4">
        <h2 className="cursor-pointer hover:text-red-500 font-semibold" onClick={handleManageClick}> Manage My Account </h2>
        {showManage && (
          <ul className="ml-4">
            <li>My Profile</li>
            <li>Address Book</li>
            <li>My Payment Options</li>
          </ul>
        )}
      </div>
      <div className="mb-4">
        <h2 className="cursor-pointer font-semibold hover:text-red-500" onClick={handleOrdersClick}> My Orders </h2>
        {showOrders && (
          <ul className="ml-4">
            <li>My Returns</li>
            <li>My Cancellations</li>
          </ul>
        )}
      </div>
      <div>
        <h2 className="font-semibold cursor-pointer hover:text-red-500" onClick={handleWishlistClick}> My Wishlist </h2>
        {showWishlist && (
          <ul className="ml-4">
            <li>Wishlist Items</li>
          </ul>
        )}
      </div>
    </div>
  );
};
