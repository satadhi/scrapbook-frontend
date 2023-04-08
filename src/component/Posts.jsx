import Post from "./Post";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../state";

function Posts() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3001/posts/", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      const json = await response.json();
      dispatch(setPosts({ posts: json }));
    };

    fetchData();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Post content={post.description} initialLikes={Object.keys(post.likes).length} />
      ))}
    </div>
  );
}

export default Posts;
