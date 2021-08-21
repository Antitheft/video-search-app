import "./App.css";
import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
	state = { videos: [], selectedVideo: null };

	componentDidMount() {
		//When application first loads, we show a default search
		this.onTermSubmit("midsize truck");
	}

	onTermSubmit = async (term) => {
		const response = await youtube.get("/search", {
			params: {
				q: term,
			},
		});

		this.setState({
			videos: response.data.items,
		});
	};

	onVideoSelect = (video) => {
		this.setState({ selectedVideo: video });
		window.scrollTo(0, 0);
	};

	render() {
		return (
			<div className="main-container">
				<SearchBar callParentSubmit={this.onTermSubmit} />

				<div className="video-section">
					<VideoDetail video={this.state.selectedVideo} />

					<VideoList
						className="video-list"
						onVideoSelect={this.onVideoSelect}
						videos={this.state.videos}
					/>
				</div>
			</div>
		);
	}
}

export default App;
