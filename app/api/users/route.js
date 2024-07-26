import { users } from "@/app/util/db";
import fs from "fs";
import { NextResponse } from "next/server";

// 1. All Users Data
export function GET() {
  const data = users;
  return NextResponse.json({ data }, { status: 200 });
}

export async function POST(req, res) {
  let { id, name, email, password } = await req.json();

  // Check if the data is provided
  if (!id || !name || !email || !password) {
    return NextResponse.json(
      { result: "Please fill all fields" },
      { status: 400 }
    );
  } else {
    users.push({ id, name, email, password });

    const updatedUsersArray = users;

    const updatedData = JSON.stringify(updatedUsersArray, null, 2);

    fs.writeFileSync(
      "./app/util/db.js",
      `export const users = ${updatedData};`,
      "utf-8"
    );

    return NextResponse.json({ success: "User successfully Created." });
  }
}

export async function PUT(req, res) {
  let { id, name, email, password } = await req.json();

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
