/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const PostsContext = createContext();

export const PostaProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
  const [isSorted, setIsSorted] = useState(false);
  const [sortedPosts, setSortedPosts] = useState([]);
  const [searchedPosts, setSearchedPosts] = useState([]);

  return (
    <PostsContext.Provider value={{ posts, setPosts, isSearched, setIsSearched, isSorted, setIsSorted, sortedPosts, setSortedPosts, searchedPosts, setSearchedPosts }}>
      {children}
    </PostsContext.Provider>
  );
};