import { Popover, Transition } from "@headlessui/react";
import { IoChevronDownOutline } from "react-icons/io5";
import { Fragment, useState } from "react";
import { showErrorToast } from "../toast/toastType";

const VehicleSelection = ({ cop, cops, setCops, loading, vehicles, error }) => {
  const [selectedVehicle, setSelectedVehicle] = useState("");

  const handleVehicleChange = (vehicleType, close) => {
    if (cops.find((cp) => cp.vehicle === vehicleType)) {
      showErrorToast("Vehicle already assigned to a different cop!");
    } else {
      setSelectedVehicle(vehicleType);
      let tempCop = cops.map((cp) => {
        if (cp.name === cop.name) {
          return {
            ...cp,
            vehicle: vehicleType,
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
      <span className="font-light text-lg">Vehicle: </span>
      <Popover>
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "text-white" : "text-white/90"}
                group inline-flex items-center rounded-md bg-gray-600 px-3 py-1 text-sm font-medium hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
            >
              {selectedVehicle ? (
                <span>{selectedVehicle}</span>
              ) : (
                <span>Select vehicle</span>
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
                      {vehicles.map((vehicle) => (
                        <div
                          key={vehicle.type}
                          onClick={() => handleVehicleChange(vehicle.type, close)}
                          className="cursor-pointer -m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-gray-500/50"
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                            <img
                              src={vehicle.image}
                              alt={vehicle.type}
                              className="rounded-md"
                            />
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium text-gray-900">
                              {vehicle.type}
                            </p>
                            <p className="text-sm text-gray-500">
                              {vehicle.description}
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
export default VehicleSelection;
