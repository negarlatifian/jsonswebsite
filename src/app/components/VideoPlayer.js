import './VideoPlayer.css';

const VideoPlayer = () => {
  return (
    <div>
      {/* <div style={{ padding: '75% 0 0 0', position: 'relative' }}>
        <iframe
          src='https://player.vimeo.com/video/880204048?badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479'
          frameborder='0'
          allow='autoplay; fullscreen; picture-in-picture'
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
          }}
          title='Baseball bat performance - compressed'
        ></iframe>
      </div>
      <script src='https://player.vimeo.com/api/player.js'></script> */}

      <iframe
        src='https://www.youtube.com/embed/oLueiDcUDnw?si=bNNPLYtUL4pdU2lO&amp;autoplay=1&start=2&disablekb=1&rel=0&enablejsapi=1&fs=0&loop=1&modestbranding=1&&mute=1&playsinline=1&color=white&iv_load_policy=3'
        className='video__iframe'
        width={753}
        height={567}
        allow='autoplay'
        frameBorder='0'
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
