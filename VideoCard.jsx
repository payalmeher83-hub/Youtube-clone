import { useNavigate } from "react-router-dom";
import "./VideoCard.css";

function VideoCard({ title, channel, image, videoId }) {
  const navigate = useNavigate();

  return (
    <div className="videoCard" onClick={() => navigate(`/watch/${videoId}`)}>
      <img src={image} alt="" loading="lazy" />
      <h4>{title}</h4>
      <p>{channel}</p>
    </div>
  );
}

export default VideoCard;