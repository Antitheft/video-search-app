import React from "react";
import VideoItem from "./VideoItem";
import "./VideoList.css";

const VideoList = ({ videos, onVideoSelect }) => {
	const renderedList = videos.map((video) => {
		return (
			<VideoItem
				className="list-items"
				key={video.id.videoId}
				onVideoSelect={onVideoSelect}
				video={video}
			/>
		);
	});

	return <div className="video-listed">{renderedList}</div>;
};

export default VideoList;
