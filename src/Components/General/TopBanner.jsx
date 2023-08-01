import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

export const Dropdown = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('English'); // Set the default selected option
  
    const options = ['English', 'Spanish', 'French']; // Update with your desired options
  
    const toggleDropdown = () => {
      setIsDropdownOpen((prevState) => !prevState);
    };
  
    const handleOptionSelect = (option) => {
      setSelectedOption(option);
      setIsDropdownOpen(false);
    };
  
    return (
      <div className="relative flex w-[15%]">
        <button
          className="text-white flex items-center justify-center py-4 px-6"
          onClick={toggleDropdown}
        >
          {selectedOption}
          <FontAwesomeIcon icon={faCaretDown} className="ml-2" />
        </button>
  
        {isDropdownOpen && (
          <ul className="absolute right-0 mt-2 bg-white border border-black">
            {options.map((option, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
export const TopBanner = () => {
  return (
    <div className='w-full px-[5%] h-auto border border-black bg-black flex flex-row justify-between'>
        <p className='text-white flex items-center justify-center text-center ml-10 py-4 w-[85%] '>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a className='mx-6 underline' href='#'>ShopNow </a> </p>
        <Dropdown></Dropdown>
    </div>
  )
}
