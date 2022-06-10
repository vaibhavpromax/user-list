import axios from "axios";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import UserCard from "../UserCard/UserCard";
import "./Users.css";

const Users = () => {
  let pageNumber = 1;
  const fetchUser = () => {
    axios
      .get(`https://randomuser.me/api/?page=${pageNumber}&results=10`)
      .then((res) => {
        console.log(res.data.results);
        setUserData((prev) => {
          return [...prev, ...res.data.results];
        });
      })
      .catch((err) => console.log("oopsie" + err));
  };

  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetchUser();
  }, []);

  const fetchMoreUser = () => {
    pageNumber++;
    setTimeout(() => {
      fetchUser();
    }, 1000);
  };

  return (
    <div>
      <InfiniteScroll
        dataLength={userData.length}
        loader={<h4>Loading...</h4>}
        className="users"
        next={fetchMoreUser}
        endMessage="You have reached the end"
        hasMore={true}
      >
        {userData.map((user) => {
          const name =
            user.name.title + " " + user.name.first + " " + user.name.last;
          return (
            <UserCard
              key={user.id.value}
              name={name}
              location={user.location.city}
              image={user.picture.thumbnail}
            />
          );
        })}
      </InfiniteScroll>
    </div>
  );
};

export default Users;
