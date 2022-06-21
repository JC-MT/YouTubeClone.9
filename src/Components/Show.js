import "./Show.css";
import { useParams } from "react-router-dom";
import Comment from "./Comment";
import YouTube from 'react-youtube';

const Show = ({ currentVideos }) => {
  let params = useParams();
  let selectedVideo = currentVideos.find((video) => {
    return video.id.videoId === params.id;
  });

  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  const opts = {
    height: '390',
    width: '640',
  };

  const { videoId } = selectedVideo.id

  return (
    <div>
      <h1> Please Enjoy 😎 </h1>
        <YouTube videoId={videoId} opts={opts} onReady={_onReady} />
        <Comment/>
    </div>
  );
};

export default Show;
