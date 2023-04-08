import UserInfo from "./userInfo";
import CreatePostWidget from "./CreatePost";
import Posts from "./Posts";

function Home() {
  return (
    <>
      <UserInfo />
      <CreatePostWidget />
      <Posts />
    </>
  );
}

export default Home;
