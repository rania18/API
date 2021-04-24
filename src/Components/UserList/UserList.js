import React, { useEffect, useState } from "react";
import axios from "axios";
import Profile from "../Profile/Profile";
import "./UserList.css";

const UserList = () => {
  const [listOfUSer, setlistOfUSer] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users?fbclid=IwAR1Dh5aatMwWNmskRZOGugINTj9A2m0442mx_IZ-0yExjevtEbhyWNvktH8")
      .then(function (response) {
        setlistOfUSer(response.data);
      });
  }, []);
  console.log(listOfUSer);
  return (
    <div className="profiles">
      {listOfUSer.map((user) => (
        <Profile user={user} key={user.id} />
      ))}
    </div>
  );
};

export default UserList;
