"use client";
import { Card, List, ListItem } from "@material-tailwind/react";
import { useEffect, useState } from "react";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      const response = await fetch("/api/users");
      const usersInfo = await response.json();
      setUsers(usersInfo.data);
    };
    fetchAllUsers();
  }, []);

  return (
    <div>
      {users &&
        users.map((user) => (
          <Card
            key={user.id}
            className="mb-1"
          >
            <List>
              <ListItem>{user.name}</ListItem>
            </List>
          </Card>
        ))}
    </div>
  );
};

export default AllUsers;
