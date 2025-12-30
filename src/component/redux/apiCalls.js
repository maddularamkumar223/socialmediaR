import axios from "axios";

let baseUrl = "http://localhost:3000";
export let fetchUSers = () => axios.get(`${baseUrl}/users`);
export let addUser = (user) => axios.post(`${baseUrl}/users`, user);
export let singleUser = (id) => axios.get(`${baseUrl}/users/${id}`);
export let addFollowing_followers = (data, id) =>
  axios.patch(`${baseUrl}/users/${id}`, data);

export let fetchPost = () => axios.get(`${baseUrl}/posts`);
export let addPost = (post) => axios.post(`${baseUrl}/posts`, post);
