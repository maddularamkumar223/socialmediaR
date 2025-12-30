import React, { useState } from "react";
import { imageData } from "./../imageFunction/imageConverting";
import { useDispatch } from "react-redux";
import { addPostData } from "../redux/thunk/postThunk";

const Post = () => {
  let date = new Date();
  let id = sessionStorage.getItem("id");
  let dispatch = useDispatch();
  let [postData, setPostData] = useState({
    image: "",
    caption: "",
    userId: id,
    date: date,
  });

  let handleChange = (e) => {
    let { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
  };

  let handleImage = async (e) => {
    let imageValue = e.target.files[0];
    let imageUrl = await imageData(imageValue);
    setPostData({ ...postData, image: imageUrl });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(postData);
    dispatch(addPostData(postData));
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <aside>
          <label htmlFor="">Upload Image</label>
          <input type="file" name="" id="" onChange={handleImage} />
        </aside>
        <aside>
          <label htmlFor="">Caption</label>
          <input
            type="text"
            name="caption"
            value={postData.caption}
            onChange={handleChange}
          />
        </aside>
        <aside>
          <button>Post</button>
        </aside>
      </form>
    </div>
  );
};

export default Post;
