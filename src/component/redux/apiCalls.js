import axios from "axios";

let baseUrl = "http://localhost:3000";
export let fetchUSers = () => axios.get(`${baseUrl}/users`);
export let addUser = (user) => axios.post(`${baseUrl}/users`, user);
