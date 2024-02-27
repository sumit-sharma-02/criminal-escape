import { Popover, Transition } from "@headlessui/react";
import { IoChevronDownOutline } from "react-icons/io5";
import { Fragment, useState } from "react";
import { showErrorToast } from "../toast/toastType";

const CitySelection = ({ cop, cops, setCops, loading, cities, error }) => {
  const [selectedCity, setSelectedCity] = useState("");

  const handleCityChange = (cityName, close) => {
    if (cops.find((cp) => cp.city === cityName)) {
      showErrorToast("City already assigned to a different cop!");
    } else {
      setSelectedCity(cityName);
      let tempCop = cops.map((cp) => {
        if (cp.name === cop.name) {
          return {
            ...cp,
            city: cityName,
          };
        }

        return cp;
      });
      setCops(tempCop);
      close();
    }
  };

  return (
    <div className="flex justify-between items-center">
      <span className="font-light text-lg">City: </span>
      <Popover>
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "text-white" : "text-white/90"}
                group inline-flex items-center rounded-md bg-gray-600 px-3 py-1 text-sm font-medium hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
            >
              {selectedCity ? (
                <span>{selectedCity}</span>
              ) : (
                <span>Select city</span>
              )}
              <IoChevronDownOutline
                className={`${open ? "text-gray-300" : "text-gray-300/70"}
                  ml-2 h-5 w-5 transition duration-150 ease-in-out group-hover:text-gray-300/80`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-full">
                {({ close }) => (
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                    <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                      {cities.map((city) => (
                        <div
                          key={city.name}
                          onClick={() => handleCityChange(city.name, close)}
                          className="cursor-pointer -m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-gray-500/50"
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                            <img
                              src={city.image}
                              alt={city.name}
                              className="rounded-md"
                            />
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium text-gray-900">
                              {city.name} - {city.title}
                            </p>
                            <p className="text-sm text-gray-500">
                              {city.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};
export default CitySelection;
