import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
	state = { term: "" };

	onInputChange = (event) => {
		this.setState({ term: event.target.value });
	};

	onFormSubmit = (event) => {
		event.preventDefault();

		this.props.callParentSubmit(this.state.term);
	};

	render() {
		return (
			<div className="search-bar">
				<form onSubmit={this.onFormSubmit}>
					<div className="field">
						<input
							type="text"
							placeholder="Search for videos.."
							className="search-bar-input"
							value={this.state.term}
							onChange={this.onInputChange}
						/>
						<button type="submit" className="search-button">
							<i className="fas fa-search"></i>
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
