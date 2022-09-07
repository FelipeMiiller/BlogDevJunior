import { Fragment, useState } from "react";

import { useFloating } from "@floating-ui/react-dom-interactions";

import { Popover, Transition } from "@headlessui/react";
import { Link, NavLink } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

const GET_SLIG_CATEGORY_QUERY = gql`
  query {
    categories(orderBy: nameCategory_ASC) {
      nameCategory
      slug
    }
  }
`;

interface GetSlugCategoryResponse {
  categories: {
    nameCategory: string;
    slug: string;
  }[];
}

export default function Header() {
  const { data } = useQuery<GetSlugCategoryResponse>(GET_SLIG_CATEGORY_QUERY);

  //console.log(data)

  const [open, setOpen] = useState(false);
  const { x, y, reference, floating, strategy } = useFloating({
    open,
    onOpenChange: setOpen,
  });

  return (
    <>
      <header
        className={
          " w-full min-h-[4rem] py-5 flex justify-between  " +
          " border-b  text-white  bg-gray-600 border-gray-400 "
        }
      >
        <div>
          <Link to="/">
            <h1
              className={
                "text-2xl font-medium  font-roboto  hover:font-bold" + " pl-4  "
              }
            >
              Developer Blog
            </h1>
          </Link>
        </div>

        <nav className=" flex justify-around  pr-20">
          <ul className={"flex flex-row  space-x-4 "}>
            <li>
              <button ref={reference} onClick={() => setOpen(!open)}>
                Posts
              </button>
              {open && (
                <div
                  ref={floating}
                  className={" border border-gray-400 bg-gray-600 rounded-lg  "}
                  style={{
                    position: strategy,
                    top: y ?? 0,
                    left: x ?? 0,
                  }}
                >
                  {data?.categories.map((category) => {
                    return (
                      <Link
                        to={`category/${category.slug}`}
                        className={
                          "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap   text-white" +
                          " transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-110  duration-100"
                        }
                      >
                        {category.nameCategory}
                      </Link>
                    );
                  })}
                </div>
              )}
            </li>
            <li>
              <Link to="authors">Authors</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
