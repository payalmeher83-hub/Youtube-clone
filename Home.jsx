import { useEffect, useState } from "react";
import axios from "../services/api";
import { API_KEY } from "../services/api";
import VideoCard from "../components/VideoCard";
import "./Home.css";

function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      const response = await axios.get(
        `/videos?part=snippet&chart=mostPopular&maxResults=20&key=${API_KEY}`
      );
      setVideos(response.data.items);
    }
    fetchVideos();
  }, []);

  return (
    <div className="home">
      {videos.map(video => (
        <VideoCard
          key={video.id}
          title={video.snippet.title}
          channel={video.snippet.channelTitle}
          image={video.snippet.thumbnails.medium.url}
        />
      ))}
    </div>
  );
}

export default Home;