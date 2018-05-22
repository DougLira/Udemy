import React from 'react';

import VideoListItem from './video_list_item';

const VideoList = props => {
  const videoItems = props.videos.map(video => {
    return <VideoListItem 
      onVideoSelect={props.onVideoSelect}
      key={video.etag} 
      video={video} />
  });
  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;

// ------------- Another Approach (Base Class Component) ---------------------

// import React, { Component } from 'react'

// class VideoList extends Component {

//   render() {
//     return (
//       <ul className="col-md-4 list-group">
//         {this.props.videos.length}
//       </ul>
//     );
//   };
// }

// export default VideoList;