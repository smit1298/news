import React from "react";
import Past from "../Past";

const CardItem = ({ post }) => {
  return (
    <div className="w-full h-[302px] lg:h-[300px] shadow-lg bg-white flex flex-col justify-between mt-4 rounded-lg">
      {/*Head*/}
      <div>
        <div className="h-16 w-[80%] mx-auto flex justify-center items-center">
          <p className="font-semibold text-[14px] text-center">{post.title}</p>
        </div>
        <hr />
        <hr />
      </div>
      {/* Card Body */}
      <div className="w-[80%] mx-auto flex justify-center items-center mt-2">
        <p className="text-[14px] text-justify text-[#747373]">
          {post.content ?? post.description}
        </p>
      </div>
      {/* Card Footer */}
      <div className="flex justify-between items-center w-[80%] mx-auto mt-2 py-6">
        <div className="flex items-center">
          <a
            className="text-[12px] lg:text-[10px] text-[#4B48FF] underline"
            href={post.url}
          >
            Read full story
          </a>
          <span className="text-[12px] flex lg:text-[10px] ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="16"
              height="16"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 32 32"
              className="mr-1"
            >
              <path
                fill="none"
                stroke="gray"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m16 2l4 10h10l-8 7l3 11l-9-7l-9 7l3-11l-8-7h10Z"
              />
            </svg>
            <p>Add to Bookmark</p>
          </span>
        </div>
        <div className="text-[12px] lg:text-[10px]">
          <Past timestamp={post.publishedAt} />
        </div>
      </div>
    </div>
  );
};

export default CardItem;
