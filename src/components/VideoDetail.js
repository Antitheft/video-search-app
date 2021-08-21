import React from "react";
import "./VideoDetail.css";

const VideoDetail = ({ video }) => {
	if (!video) {
		return <div></div>;
	}

	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

	return (
		<div className="selected-card">
			<div className="selected-card-player">
				<iframe
					className="selected-player"
					frameBorder="0"
					title="video player"
					src={videoSrc}
				/>
			</div>
			<div className="selected-card-info">
				<h4 className="vid-title">{video.snippet.title}</h4>
				<p className="vid-info">{video.snippet.description}</p>
			</div>
		</div>
	);
};

export default VideoDetail;
