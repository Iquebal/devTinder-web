import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { addFeed } from "../utils/feedSlice";
import { useSelector, useDispatch } from "react-redux";
import Usercard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch(); 

  const getFeed = async () => {
    if (feed?.length) return; // better check

    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });

      dispatch(addFeed(res.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  return (
    feed && (
      <div className="flex justify-center my-10">
        <Usercard user={feed[0]} />
      </div>
    )
  );
};

export default Feed;