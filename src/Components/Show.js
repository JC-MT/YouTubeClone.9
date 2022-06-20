import './Show.css';
import { useParams } from 'react-router-dom';

const Show = ({currentVideos}) => {
  let params = useParams();
  let selectedVideo = currentVideos.find((video) => {
    return video.id.videoId === params.id;
  });

  const { description, channelTitle, thumbnails, title } =
    selectedVideo.snippet;

  return (
    <div>
      <h1>Show page</h1>
      <div>
        <img src={`${thumbnails.high.url}`} alt="video thumbnail" />
        <h3>{title}</h3>
        <p>{description}</p>
        <p>by {channelTitle}</p>
      </div>
    </div>
  );
};

export default Show;
