import { createAsyncThunk } from "@reduxjs/toolkit";
import { addFollowing_followers, singleUser } from "../apicalls";

export let follow_followers = createAsyncThunk(
  "user/follow",
  async ({ senderId, receiverId }) => {
    let senderUser = await singleUser(senderId);
    let receiverUser = await singleUser(receiverId);

    let updateSenderFollowing = {
      following: [...senderUser.data.following, receiverId],
    };
    let updateReceiverFollowers = {
      followers: [...receiverUser.data.followers, senderId],
    };

    console.log(updateSenderFollowing);
    console.log(updateReceiverFollowers);

    let followingList = await addFollowing_followers(
      updateSenderFollowing,
      senderId
    );
    await addFollowing_followers(updateReceiverFollowers, receiverId);
    return followingList.data;
  }
);
