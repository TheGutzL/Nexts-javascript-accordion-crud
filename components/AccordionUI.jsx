"use client";
import { useState } from "react";

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import AllUsers from "./AllUsers";
import CreateUser from "./CreateUser";
import SpecificUser from "./SpecificUser";
import UpdateUser from "./UpdateUser";
import DeleteUser from "./DeleteUser";

const AccordionUI = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <section className="w-[40rem] bg-gray-100 rounded-xl p-4">
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          All Users
        </AccordionHeader>
        <AccordionBody>
          <AllUsers />
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          Search For Specific User
        </AccordionHeader>
        <AccordionBody>
          <SpecificUser />
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          Create New User
        </AccordionHeader>
        <AccordionBody>
          <CreateUser />
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4}>
        <AccordionHeader onClick={() => handleOpen(4)}>
          Update A User
        </AccordionHeader>
        <AccordionBody>
          <UpdateUser />
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5}>
        <AccordionHeader onClick={() => handleOpen(5)}>
          Delete A User
        </AccordionHeader>
        <AccordionBody>
          <DeleteUser />
        </AccordionBody>
      </Accordion>
    </section>
  );
};

export default AccordionUI;
