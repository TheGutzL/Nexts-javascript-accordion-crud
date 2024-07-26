"use client";

import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";

const DeleteUser = () => {
  const [id, setId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!id) {
      alert("Please enter ID");
      return;
    }

    try {
      const response = await fetch(`/api/users/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("User successfully deleted");
        setId("");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      alert("Something went wrong");
      return;
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex gap-4"
      >
        <div className="w-72">
          <Input
            label="Enter User Id"
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <Button type="submit">Fetch User</Button>
      </form>
    </div>
  );
};

export default DeleteUser;
