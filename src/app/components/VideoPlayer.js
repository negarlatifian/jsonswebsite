import './VideoPlayer.css';

const VideoPlayer = () => {
  return (
    <div>
      <iframe
        src='https://www.youtube.com/embed/oLueiDcUDnw?si=bNNPLYtUL4pdU2lO&amp;autoplay=1&start=2&controls=0&disablekb=1&rel=0&enablejsapi=1&fs=0&loop=1&modestbranding=1&&mute=1&playsinline=1&color=white&iv_load_policy=3'
        className='video__iframe'
        width={700}
        height={450}
        allow='autoplay'
        frameBorder='0'
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
