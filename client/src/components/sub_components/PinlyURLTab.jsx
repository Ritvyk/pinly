import React from "react";
import { useClipboard } from "use-clipboard-copy";

export default function PinlyURLTab({ url }) {
  const clipboard = useClipboard({ copiedTimeout: 750 });
  return (
    <>
      <div className="mt-4 mb-4 px-2 py-2 rounded border-blue-200 border-2 shadow-sm bg-blue-200 text-blue-600 w-4/5 flex justify-between items-center ">
        <a href={url === "" ? "#" : url} className="font-bold text-sm ">
          {url}
        </a>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
          onClick={() => clipboard.copy(url)}
        >
          {clipboard.copied ? "Copied" : "Copy"}
        </button>
      </div>
    </>
  );
}
