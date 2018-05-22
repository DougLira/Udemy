import React from 'react'

const VideoDetail = ({ video }) => {
  if (!video) return <div>Loading...</div>;
  
  const
    videoId = video.id.videoId,
    url = `https://www.youtube.com/embed/${videoId}`,
    title = video.snippet.title,
    description = video.snippet.description;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div><strong>{title}</strong></div>
        <hr/>
        <div>{description}</div>
      </div>
    </div>
  )
};

export default VideoDetail;