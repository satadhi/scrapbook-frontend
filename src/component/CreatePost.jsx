import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCreatePost } from "../state";

function CreatePostWidget() {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleImageChange =  (event) => {
    setImage(event.target.files[0]);
  };

  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {

    event.preventDefault();
    const formData = new FormData();
    formData.append("userId", _id);
    formData.append("description", text);

    if(image) {
      formData.append("picture", image);
      formData.append("picturePath", image.name);

    }
    
    console.log(formData);
    
    // API call
    const postRes = await fetch(`http://localhost:3001/posts`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    });
    
  const x  = await postRes.json();
  console.log("printing value of posRes -->")
  console.log(x)
    dispatch(setCreatePost({ x }));

    setText("");
    setImage(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="What's on your mind?"
        value={text}
        onChange={handleTextChange}
      />
      <div>
        <label htmlFor="image-upload">Add Image:</label>
        <input
          type="file"
          id="image-upload"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>
      <button type="submit">Post</button>
    </form>
  );
}

export default CreatePostWidget;