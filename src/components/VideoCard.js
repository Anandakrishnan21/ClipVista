import React from "react";

function VideoCard({ video }) {
  const { snippet } = video;
  return (
    <>
        <div className="w-11/12 h-3/4 flex justify-center items-center py-4">
          <div className="w-full h-full">
            <img
              src={snippet.thumbnails.high.url}
              alt={snippet.title}
              className="object-cover w-full h-full rounded"
            />
          </div>
        </div>
        <div className="w-11/12 h-1/4 flex justify-center flex-col">
          <p className="text-sm font-semibold">{snippet.title}</p>
        </div>
    </>
  );
}

export default VideoCard;
