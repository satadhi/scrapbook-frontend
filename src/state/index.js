import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  mode: "dark",
  user: null,
  token: null,
  posts: [],
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },

    setLogout: (state) => {
      state = initialState;
    },

    setAddFriend: (state, action) => {
      if (state.user) state.user.friends = [...state.user.friends, action.payload.friend];
    },

    setRemoveFriend: (state, action) => {
      if (state.user) state.user.friends = state.user.friends.filter((ele) => ele._id !== action.payload.friendId);
    },

    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    setCreatePost: (state, action) => {
      state.posts = [...state.posts, action.payload.post];
    },

    setUpdatePost: (state, action) => {
      const updatedPosts = state.posts.map((post) =>
        post._id === action.payload.post._id ? action.payload.post : post
      );
      state.posts = updatedPosts;
    },

    setDeletePost: (state, action) => {
      const updatedPosts = state.posts.map((post) =>
        post._id === action.payload.post._id ? action.payload.post : post
      );
      state.posts = updatedPosts;
    },
  },
});

export const {
  setLogin,
  setLogout,
  setAddFriend,
  setRemoveFriend,
  setCreatePost,
  setUpdatePost,
  setDeletePost,
  setPosts,
} = mainSlice.actions;
export default mainSlice.reducer;
