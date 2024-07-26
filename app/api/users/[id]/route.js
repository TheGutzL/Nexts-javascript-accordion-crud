import { users } from "@/app/util/db";
import fs from "fs";
import { NextResponse } from "next/server";

export async function GET(_, res) {
  const { id } = await res.params;
  const user = users.filter((u) => u.id === id);
  return NextResponse.json({ user, ok: true });
}

export async function POST(req, res) {
  let { name, email, password } = await req.json();
  const { id } = await res.params;

  const user = users.find((u) => u.id === id);

  if (!user) {
    return NextResponse.json({ result: "User not found" });
  }

  const { name: uName, email: uEmail, password: uPassword } = user;

  if (uName === name && uEmail === email && uPassword === password) {
    return NextResponse.json({ result: "Successfully logged in" });
  } else if (!name || !email || !password) {
    return NextResponse.json({ result: "Please fill all fields" });
  } else {
    return NextResponse.json({ result: "Invalid credentials" });
  }
}

export async function PUT(req, res) {
  let { name, email, password } = await req.json();
  const { id } = await res.params;

  const userIndex = users.findIndex((u) => u.id === id);

  if (userIndex === -1) {
    return NextResponse.json({ result: "User not found" }, { status: 404 });
  }

  if (name) {
    users[userIndex].name = name;
  }
  if (email) {
    users[userIndex].email = email;
  }
  if (password) {
    users[userIndex].password = password;
  }

  const updatedUsersArray = users;

  const updatedData = JSON.stringify(updatedUsersArray, null, 2);

  fs.writeFileSync(
    "./app/util/db.js",
    `export const users = ${updatedData};`,
    "utf-8"
  );

  return NextResponse.json({ success: "User successfully updated." });
}

export async function DELETE(req, res) {
  const { id } = await res.params;

  // Find the index of the user to delete in the users array
  const userIndex = users.findIndex((u) => u.id === id);

  if (userIndex === -1) {
    return NextResponse.json({ result: "User not found" }, { status: 404 });
  }

  // Remove
  users.splice(userIndex, 1);

  const updatedUsersArray = users;

  const updatedData = JSON.stringify(updatedUsersArray, null, 2);

  fs.writeFileSync(
    "./app/util/db.js",
    `export const users = ${updatedData};`,
    "utf-8"
  );

  return NextResponse.json({ success: "User successfully deleted." });
}
