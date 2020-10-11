import React, { useState } from "react";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";
import { createNewURL } from "../utils/utils";
import { useClipboard } from "use-clipboard-copy";
import PinlyURLTab from "./sub_components/PinlyURLTab";

export default function MainSection() {
  const { register, handleSubmit, errors } = useForm();
  const [pinifyURLs, setPinifyURL] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [pinifyQuery, pinifyQueryRes] = useMutation(createNewURL, {
    onSuccess: (responseData, params) => {
      setPinifyURL([...pinifyURLs, responseData.pinlyURL]);
      setLoading(false);
    },
    onMutate: () => {
      setLoading(true);
    },
  });
  const onSubmit = (data) => {
    pinifyQuery({
      ...data,
    });
  };
  return (
    <div className="p-4 flex justify-center items-center">
      <div className="w-4/5 shadow-lg border-2 border-gray-200 rounded">
        <div className="flex justify-center items-center">
          <p className="text-gray-600">
            <span className="text-yellow-600 p-0 m-0">Q</span>uickly shorten
            your URLs!
          </p>
        </div>
        <div className="mt-3 px-2 mb-3">
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="mb-4">
              <input
                name="originalURL"
                ref={register({ required: true })}
                className="shadow w-full appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
              {errors.originalURL && (
                <div className="mt-1 text-orange-600 text-xs">Required</div>
              )}
            </div>
            <div className="flex justify-center items-center ">
              <button
                disabled={isLoading}
                className={`${
                  isLoading ? "opacity-75 cursor-not-allowed bg-gray-600" : ""
                } bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline `}
                type="submit"
              >
                {isLoading ? "PiniFying..." : "PiniFy"}
              </button>
            </div>
          </form>
        </div>
        <hr />
        {pinifyURLs.length > 0 && (
          <div className="flex justify-center items-center w-full flex-col">
            <div className="text-center font-bold text-sm mt-2">
              Woah! 🎉 Here is your short URL !
            </div>
            {pinifyURLs.length > 0 &&
              pinifyURLs.map((url, index) => {
                return (
                  <div
                    key={index}
                    className="w-full flex justify-center items-center"
                  >
                    <PinlyURLTab url={url} />
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
}
