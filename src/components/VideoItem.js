import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
	const title = video.snippet.title;

	return (
		<div onClick={() => onVideoSelect(video)} className="video-item item">
			<div className="video-card-img">
				<img
					alt={video.snippet.title}
					className="video-thumbnail"
					src={video.snippet.thumbnails.high.url}
				/>
			</div>

			<div dangerouslySetInnerHTML={{ __html: title }} className="header"></div>
		</div>
	);
};

export default VideoItem;
