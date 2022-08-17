/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header
      className={
        " w-full py-5 flex justify-between " +
        " border-b  text-white  bg-gray-600 border-gray-500 "
      }
    >
      <Link to="/">
        <h1
          className={
            "text-2xl font-medium  font-roboto hover:font-serif hover:font-bold" +
            " pl-4  "
          }
        >
          Developer Br
        </h1>
      </Link>
    </header>
  );
}
