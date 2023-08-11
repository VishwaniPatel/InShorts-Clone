import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

// For adding multiple classes
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Menu as="div" className="relative block sm:hidden text-left mt-4">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-inverted px-3 py-2 text-sm font-semibold text-inverted shadow-sm">
          Select
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-inverted"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        {/* Start: Menu items to display news categories */}
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-base shadow-lg ring-1 bg-inverted ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link to="/home">
                  <p
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-inverted",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    For You
                  </p>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link to="/top-stories">
                  <p
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-inverted",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    {" "}
                    Top Stories
                  </p>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link to="/trending">
                  <p
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-inverted",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    {" "}
                    Trending
                  </p>
                </Link>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <Link to="/saved-news">
                  <p
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-inverted",
                      "block w-full px-4 py-2 text-left text-sm"
                    )}
                  >
                    Saved News
                  </p>
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
        {/* End: Menu items */}
      </Transition>
    </Menu>
  );
}
