import React, { FC } from 'react';
import YouTube from '@u-wave/react-youtube';

interface Props {
  videoCode: string;
}

const VideoPlayer: FC<Props> = ({ videoCode }) => {
  return (
    <YouTube
      video={videoCode}
      width="100%"
      height="100%"
      showRelatedVideos={false}
    />
  );
};

export default VideoPlayer;
