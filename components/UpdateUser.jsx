"use client";

import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";

const UpdateUser = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!id) {
      alert("Please enter ID");
      return;
    }

    const requestData = { id };
    if (name) {
      requestData.name = name;
    }
    if (email) {
      requestData.email = email;
    }
    if (password) {
      requestData.password = password;
    }

    try {
      const response = await fetch("/api/users", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        alert("User successfully updated");
        clearForm();
      } else {
        const data = await response.json();
        alert(data.result || "Something went wrong while updating user");
      }
    } catch (error) {
      alert("Something went wrong");
      return;
    }
  };

  const clearForm = () => {
    setId("");
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <Input
            label="ID"
            type="text"
            placeholder="ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <Input
            label="Name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label="Email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            className="mt-2"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
