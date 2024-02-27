import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { showErrorToast } from "../components/toast/toastType";
import { getAllVehicles, clearErrors } from "../actions/vehicle";
import VehicleSelection from "../components/vehicle/VehicleSelection";
import { searchCriminal } from "../actions/cop";

const Vehicle = () => {
  const [validation, setValidation] = useState(false);

  const { loading, vehicles, error } = useSelector((state) => state.vehicles);

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [cops, setCops] = useState(
    location?.state
      ? location.state
      : [
          {
            name: "COP 1",
            city: "",
            vehicle: "",
            image: "https://i.ibb.co/Q8H0JGW/Cop-1.png",
          },
          {
            name: "COP 2",
            city: "",
            vehicle: "",
            image: "https://i.ibb.co/vsNz6hR/Cop-2.png",
          },
          {
            name: "COP 3",
            city: "",
            vehicle: "",
            image: "https://i.ibb.co/syXbtCv/Cop-3.png",
          },
        ]
  );

  useEffect(() => {
    dispatch(getAllVehicles());
    if (error) {
      showErrorToast(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error]);

  useEffect(() => {
    if (!cops.find((cop) => cop.vehicle === "")) {
      setValidation(true);
    }
  }, [cops]);

  return (
    <>
      <header className="px-4 pt-5 sm:px-10 xl:px-24 text-3xl md:text-4xl font-bold font-poppins">
        Vehicle Selection
      </header>
      <section className="flex flex-col justify-between h-full w-full">
        <main className="grid grid-cols-1 gap-10 py-10 sm:grid-cols-2 lg:grid-cols-3 px-4 pt-5 sm:px-10 xl:px-24">
          {cops &&
            cops.map((cop, index) => (
              <section
                key={"cop__" + index}
                className="flex flex-col gap-2 justify-evenly bg-opacity-30 pb-4 rounded-md relative"
              >
                <div className="flex flex-col items-center justify-center gap-1">
                  <div className="h-full w-full cursor-pointer transition-opacity duration-300 ease-in-out hover:opacity-90">
                    <img
                      className="mx-auto h-full w-full rounded-md"
                      src={cop.image}
                      alt={cop.name}
                    />
                  </div>
                  <div className="text-center">
                    <span className="px-1 font-medium text-gray-800 line-clamp-2 hover:text-primary">
                      {cop.name}
                    </span>
                  </div>
                </div>
                <VehicleSelection
                  cop={cop}
                  cops={cops}
                  setCops={setCops}
                  loading={loading}
                  vehicles={vehicles}
                  error={error}
                />
              </section>
            ))}
        </main>
        <footer className="flex justify-between items-center w-full px-4 py-5 sm:px-10 xl:px-24 ">
          <Link
            to={"/city"}
            className="group rounded-lg border px-5 py-4 transition-colors border-gray-300 hover:border-gray-400"
          >
            <h2 className="mb-3 text-2xl flex items-center gap-2 font-semibold font-poppins">
              <span className="inline-block transition-transform group-hover:-translate-x-1 motion-reduce:transform-none">
                <FaArrowLeft />
              </span>
              Back{" "}
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50 font-poppins">
              Select City
            </p>
          </Link>
          <button
            disabled={!validation}
            onClick={() => {
              navigate("/result", { state: cops });
            }}
            className={`${
              !validation ? "cursor-not-allowed opacity-60" : "cursor-pointer"
            } group rounded-lg border px-5 py-4 transition-colors border-gray-300 hover:border-gray-400`}
          >
            <div
              className={`mb-3 text-2xl flex items-center gap-2 font-semibold font-poppins`}
            >
              Next{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                <FaArrowRight />
              </span>
            </div>
            <p className="m-0 max-w-[30ch] text-sm opacity-50 font-poppins">
              Time to catch the criminal!
            </p>
          </button>
        </footer>
      </section>
    </>
  );
};

export default Vehicle;
