import React, { useState, useEffect,useContext } from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { ThemeContext } from "../context/ThemeContext";

function Video({ selectedCategory}) {
  const [videos, setVideos] = useState(null);
  const { themeColors } = useContext(ThemeContext);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => {
        console.log('Fetched data:', data); // Log the fetched data
        setVideos(data.items);
      })
      .catch((error) => {
        console.error('Error fetching videos:', error); // Log any errors
      });
  }, [selectedCategory]);

  return (
    <>
      {videos ? (
        videos.map((item, idx) => (
          <div
            key={idx}
            className="w-full md:w-1/2 lg:w-1/3 h-80 p-2"
          >
            {item.id.videoId && (
              <Link
                to={`/video/${item.id.videoId}`}
                className={`w-full h-full bg-${themeColors.background} text-${themeColors.text} flex flex-col justify-around items-center rounded`}
              >
                <VideoCard video={item} />
              </Link>
            )}
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default Video;
