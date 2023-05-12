import './Show.css';
import { useParams } from 'react-router-dom';
import Comment from './Comment';
import YouTube from 'react-youtube';

type VideoParams = {
  id: string
};

const Show: Function = () => {
  const { id } = useParams<VideoParams>();

  const opts: Object = {
    height: '490',
    width: '740',
    playerVars: {
      autoplay: 1,
      start: 0,
      end: 0
    }
  };

  return (
    <div className="show-page">
      <h1> Please Enjoy 😎 </h1>
      <YouTube id={'playing-video'} videoId={id} opts={opts} />
      <Comment videoId={id} />
    </div>
  );
};

export default Show;
