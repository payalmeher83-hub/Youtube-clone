import { useParams } from "react-router-dom";

function Watch() {
  const { id } = useParams();

  return (
    <div style={{ padding: "20px", width: "100%" }}>
      <iframe
        width="100%"
        height="500"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        allowFullScreen
      />
    </div>
  );
}

export default Watch;