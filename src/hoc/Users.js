import React from "react";
import withSearch from "./withSearch";

const UserList = ({ data = [] }) => {
  return data.map(({ id }) => {
    return <div key={id}>Users</div>;
  });
};

const Users = withSearch(UserList, "user");

export default Users;
