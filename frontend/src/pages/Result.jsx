import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loader from "../components/loader/Loader";
import { resetCops, searchCriminal } from "../actions/cop";

const Result = () => {
  const [validation, setValidation] = useState(false)
  const { loading, cops, error } = useSelector((state) => state.cop);

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if(location?.state) {
        dispatch(searchCriminal(location?.state));
    }
  }, [dispatch, location])

  return (
    <div className="h-full py-auto px-10 md:px-6 xl:px-24 2xl:container 2xl:mx-auto 2xl:px-20">
      <div className="bg-white p-6 h-full md:mx-auto">
        {loading ? (
          <Loader size={"big"} />
        ) : (
          <>
            {cops && cops.success ? (
              <div className="text-center">
                <div className="h-full w-full cursor-pointer transition-opacity duration-300 ease-in-out hover:opacity-90">
                  <img
                    className="mx-auto h-full w-full rounded-md"
                    src="https://i.ibb.co/82YJDS9/Criminal.png"
                    alt="criminal"
                  />
                </div>
                <svg
                  viewBox="0 0 24 24"
                  className="mx-auto my-6 h-16 w-16 text-green-600"
                >
                  <path
                    fill="currentColor"
                    d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
                  ></path>
                </svg>
                <p className="my-2 font-semibold text-gray-600">
                  {cops.copName} captured the criminal
                  successfully!
                </p>
                <div className="py-2 text-center">
                  <button
                    onClick={() => {
                    //   dispatch(resetCops());
                      navigate("/");
                    }}
                    className="group inline-flex items-center rounded-md bg-gray-600 px-3 py-2 text-white text-sm font-medium hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                  >
                    Let's Start Again!
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <svg
                  viewBox="0 0 24 24"
                  className="mx-auto my-6 h-16 w-16 text-red-600"
                >
                  <path
                    fill="currentColor"
                    d="M12 4c-4.419 0-8 3.582-8 8s3.581 8 8 8 8-3.582 8-8-3.581-8-8-8zm3.707 10.293c.391.391.391 1.023 0 1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-2.293-2.293-2.293 2.293c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023 0-1.414l2.293-2.293-2.293-2.293c-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0l2.293 2.293 2.293-2.293c.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414l-2.293 2.293 2.293 2.293z"
                  ></path>
                </svg>
                <p className="my-2 font-semibold text-gray-600">
                  No Criminal found!
                </p>
                <div className="py-2 text-center">
                  <button
                    onClick={() => {
                    //   dispatch(resetCops());
                      navigate("/");
                    }}
                    className="group inline-flex items-center rounded-md bg-gray-600 px-3 py-2 text-white text-sm font-medium hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                  >
                    Let's Try Again!
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Result;
