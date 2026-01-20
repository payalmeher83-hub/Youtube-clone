import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../services/api";
import { API_KEY } from "../services/api";
import VideoCard from "../components/VideoCard";

function Search() {
  const { query } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchSearch() {
      const res = await axios.get(
        `/search?part=snippet&q=${query}&type=video&maxResults=20&key=${API_KEY}`
      );
      setVideos(res.data.items);
    }
    fetchSearch();
  }, [query]);

  return (
    <div className="home">
      {videos.map(video => (
        <VideoCard
          key={video.id.videoId}
          videoId={video.id.videoId}
          title={video.snippet.title}
          channel={video.snippet.channelTitle}
          image={video.snippet.thumbnails.medium.url}
        />
      ))}
    </div>
  );
}

export default Search;