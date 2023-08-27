import React, { useContext, useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import Header from "./Header";
import { useParams, Link } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { ThemeContext } from "../context/ThemeContext";

function SearchFeed() {
  const { themeColors } = useContext(ThemeContext);
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}&type=video`).then(
      (data) => {
        console.log("API Response:", data.items);
        setVideos(data.items);
      }
    );
  }, [searchTerm]);

  return (
    <>
      <Header />
      <div className="w-full flex flex-row flex-wrap bg-gray-800 p-2">
        {videos.length > 0 ? (
          videos.map((item, idx) => (
            <div key={idx} className="w-full md:w-1/2 lg:w-1/3 h-80 p-2">
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
          <p>No videos found for the search term.</p>
        )}
      </div>
    </>
  );
}

export default SearchFeed;
