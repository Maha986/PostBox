/* eslint-disable react/prop-types */
import { useState } from 'react';
import { BiSort } from "react-icons/bi";

const Dropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div className="relative">
      <BiSort className="text-2xl mx-3 cursor-pointer" title="Sort Posts" onClick={() => setIsOpen(!isOpen)}/>

      {isOpen && (
        <div className="absolute bg-white w-max text-center z-10  rounded-lg border-bgColor border top-6 right-6">
          {options.map((option, index) => (
            <div
              key={index}
              className={`dark:text-black border-b-2 border-bgColor p-2.5 cursor-pointer hover:bg-bgColor  text-black hover:text-white ${selectedIndex===index&&"bg-purpleLight text-white"}`}
              onClick={() => {
                selectedIndex===index?onSelect("No Filter"):onSelect(option);
                selectedIndex===index?setSelectedIndex(null):setSelectedIndex(index);
                setIsOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
