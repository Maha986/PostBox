import { useContext, useEffect, useState } from "react";
import logo from "../assets/logo.png";
import Dropdown from "./Dropdown";
import { PostsContext } from "../contexts/PostContext";
import {BiSearchAlt2} from "react-icons/bi";

export default function Navbar() {

  const [selectedFilter, setSelectedFilter] = useState("");
  const {setSortedPosts, posts, setIsSorted, setIsSearched, setSearchedPosts, isSorted, sortedPosts} = useContext(PostsContext);
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  const handleSearch = (e) =>{
    setSearchValue(e.target.value);
    if(e.target.value.length===0){
      setIsSearched(false);
      return
    }
    setIsSearched(true);
    setSearchedPosts((isSorted?[...sortedPosts]:[...posts]).filter(post => post.title.toLowerCase().includes(e.target.value.toLowerCase())))
  }

  useEffect(()=>{
    if(selectedFilter==="Sort: A-Z"){
      setSortedPosts([...posts].sort((a, b) => a.title.localeCompare(b.title)));
      setIsSorted(true);
    }
    else if(selectedFilter==="Sort: Z-A"){
      setSortedPosts([...posts].sort((a, b) => b.title.localeCompare(a.title)));
      setIsSorted(true);
    }
  },[selectedFilter])

  return (
    <div className="bg-purpleLight fixed top-0 w-full flex items-center left-0">
      <img src={logo} alt="" className="h-20 m-auto my-1" />
      <div
        className={`${
          isSearchVisible ? ' opacity-100' : ' opacity-0'
        }     absolute
        top-[50px]
        right-[60px] mt-2 p-2 bg-white rounded-lg shadow-md transition-all ease-in-out duration-500`}
      >
        <input
          type="text"
          className="w-48 border border-gray-300 rounded p-1 text-black"
          placeholder="Search by Title"
          value={searchValue}
          onChange={(e)=>handleSearch(e)}
        />
      </div>
      <BiSearchAlt2 className="text-2xl mx-3 cursor-pointer" title="Search Posts" onClick={toggleSearch} />
      <Dropdown
          options={["Sort: A-Z", "Sort: Z-A"]}
          onSelect={(selectedOption) => {
            selectedOption === "No Filter"
              ? setSelectedFilter("")
              : setSelectedFilter(selectedOption);
           if (selectedOption === "No Filter") {setIsSorted(false); setSortedPosts([]);}
          }}
        />
    </div>
  );
}
