import PostCard from "./PostCard";
import Loading from "./Loading";
import { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import { PostsContext } from "../contexts/PostContext";

export default function RenderPage() {
  const { posts, setPosts, isSorted, sortedPosts, isSearched, searchedPosts } =
    useContext(PostsContext);
  const [laoding, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          setLoading(false);
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const jsonResponse = await response.json();
        setPosts(jsonResponse);
        setLoading(false);
        setIsError(false);
      } catch (error) {
        setIsError(true);
        console.log("error ", error);
      }
    };

    getPosts();
  }, []);

  if (laoding) {
    return <Loading />;
  }
  return (
    <>
      <Navbar />
      <div className="mt-28 flex flex-wrap gap-4 justify-evenly">
        {isError ? (
          <p className="text-white">
            Some Error Occured while fetching Posts, please try again later
          </p>
        ) : posts.length > 0 && isSearched ? (
          searchedPosts.length > 0 ? (
            searchedPosts.map((post, index) => {
              return <PostCard post={post} key={index} />;
            })
          ) : (
            <p className="text-white">No match found</p>
          )
        ) : (
          (isSorted ? sortedPosts : posts).map((post, index) => {
            return <PostCard post={post} key={index} />;
          })
        )}
      </div>
    </>
  );
}
