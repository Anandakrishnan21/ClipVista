import React, { useState, useEffect,useContext } from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { ThemeContext } from "../context/ThemeContext";

function SideVideo({ selectedCategory }) {
  const { themeColors } = useContext(ThemeContext);
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <>
      {videos ? (
        videos.map((item, idx) => (
          <div key={idx} className="w-full h-80 p-2">
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

export default SideVideo;
