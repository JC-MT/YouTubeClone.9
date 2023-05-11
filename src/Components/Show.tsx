import './Show.css';
import { useParams } from 'react-router-dom';
import Comment from './Comment';
import YouTube from 'react-youtube';

const Show = () => {
  let params = useParams();

  const opts = {
    height: '490',
    width: '740',
    playerVars: {
      autoplay: 1,
      start: 0,
      end: 0,
    },
  };

  const { id } = params;

  return (
    <div className="show-page">
      <h1> Please Enjoy 😎 </h1>
      <YouTube id={'playing-video'} videoId={id} opts={opts} />
      <Comment videoId={id} />
    </div>
  );
};

export default Show;
