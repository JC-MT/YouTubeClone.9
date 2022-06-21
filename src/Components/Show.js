import "./Show.css";
import { useParams } from "react-router-dom";
import Comment from "./Comment";
import YouTube from 'react-youtube';

const Show = ({ currentVideos }) => {
  let params = useParams();
  let selectedVideo = currentVideos.find((video) => {
    return video.id.videoId === params.id;
  });

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
      start: 0,
      end: 0,
    }
  };

  const { videoId } = selectedVideo.id

  return (
    <div>
      <h1> Please Enjoy 😎 </h1>
        <YouTube videoId={videoId} opts={opts} />
        <Comment/>
    </div>
  );
};

export default Show;
