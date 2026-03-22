import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import feedReducer from "./feedSlice";
import ConnectionsReducer from "./connectionsSlice";
import requestReducer from "./requestSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    feed: feedReducer,
    connections: ConnectionsReducer,
    requests: requestReducer,
  },
});

export default store;
