import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";
import Header from "./Header";
import SideVideo from "./SideVideo";

function VideoDetail() {
  const { id } = useParams();
  const [videoDetails, setVideoDetails] = useState(null);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetails(data.items[0]))
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  if (!videoDetails) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="w-full h-full flex flex-col md:flex-row justify-center bg-gray-800">
        <div className="w-full h-80 md:h-screen md:w-3/4 sticky top-16 p-2 flex justify-center bg-black">
          <ReactPlayer
            url={`https://youtube.com/watch?v=${id}`}
            alt="youtube"
            className="object-contain rounded"
            width="80%"
            height="90%"
            controls
          />
        </div>
        <div className="md:w-1/4 h-full flex flex-col">
          <SideVideo selectedCategory={videoDetails.snippet.categoryId} />
        </div>
      </div>
    </>
  );
}

export default VideoDetail;
