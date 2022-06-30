import React from "react";

const PageNumbers = ({ page, handlePageChange }) => {
  return (
    <div className="my-10 w-[80%] mx-auto flex justify-end">
      <div
        className={
          page === 1
            ? "text-gray-300 cursor-pointer"
            : "cursor-pointer text-black"
        }
        onClick={() => {
          if (page !== 1) return handlePageChange(page - 1);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="16"
          height="16"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 1024 1024"
          className="mt-1"
        >
          <path
            fill="gray"
            d="m272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 0 0 0 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 0 0 0 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z"
          />
        </svg>
      </div>
      <div className="grid grid-cols-6 gap-2 mx-4">
        <div
          className={
            page === 1
              ? "flex justify-center items-center w-6 h-6 rounded-sm bg-blu text-[10px] text-white [cursor:pointer]"
              : "flex justify-center items-center w-6 h-6 rounded-sm bg-gray-300 text-[10px] [cursor:pointer]"
          }
          onClick={() => handlePageChange(1)}
        >
          1
        </div>
        <div
          className={
            page === 2
              ? "flex justify-center items-center w-6 h-6 rounded-sm bg-blu text-[10px] text-white [cursor:pointer]"
              : "flex justify-center items-center w-6 h-6 rounded-sm bg-gray-300 text-[10px] [cursor:pointer]"
          }
          onClick={() => handlePageChange(2)}
        >
          2
        </div>
        <div
          className={
            page === 3
              ? "flex justify-center items-center w-6 h-6 rounded-sm bg-blu text-[10px] text-white [cursor:pointer]"
              : "flex justify-center items-center w-6 h-6 rounded-sm bg-gray-300 text-[10px] [cursor:pointer]"
          }
          onClick={() => handlePageChange(3)}
        >
          3
        </div>
        <div
          className={
            page === 4
              ? "flex justify-center items-center w-6 h-6 rounded-sm bg-blu text-[10px] text-white [cursor:pointer]"
              : "flex justify-center items-center w-6 h-6 rounded-sm bg-gray-300 text-[10px] [cursor:pointer]"
          }
          onClick={() => handlePageChange(4)}
        >
          4
        </div>
        <div
          className={
            page === 5
              ? "flex justify-center items-center w-6 h-6 rounded-sm bg-blu text-[10px] text-white [cursor:pointer]"
              : "flex justify-center items-center w-6 h-6 rounded-sm bg-gray-300 text-[10px] [cursor:pointer]"
          }
          onClick={() => handlePageChange(5)}
        >
          5
        </div>
        <div
          className={
            page === 6
              ? "flex justify-center items-center w-6 h-6 rounded-sm bg-blu text-[10px] text-white [cursor:pointer]"
              : "flex justify-center items-center w-6 h-6 rounded-sm bg-gray-300 text-[10px] [cursor:pointer]"
          }
          onClick={() => handlePageChange(6)}
        >
          6
        </div>
      </div>
      <div
        className={
          page === 6
            ? "text-gray-400 cursor-pointer"
            : "cursor-pointer text-black"
        }
        onClick={() => {
          if (page !== 6) return handlePageChange(page + 1);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="16"
          height="16"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 1024 1024"
          className="mt-1"
        >
          <path
            fill="gray"
            d="M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512L181.7 851.1A7.98 7.98 0 0 0 188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512L485.7 851.1A7.98 7.98 0 0 0 492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z"
          />
        </svg>
      </div>
    </div>
  );
};

export default PageNumbers;
