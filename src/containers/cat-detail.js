import React, { Component } from 'react';
import { connect } from 'react-redux';

class CatDetail extends Component {
	debugger;
	render(){

		if (!this.props.cat) {
			return <div>Select a cat to get started.</div>;
		}

		return(
			<div>
				<h3>Details for: </h3>
				<div>{this.props.cat.name}</div>
				<div>
						<img src={this.props.cat.url} className="img-responsive" alt="Gato" width="500" height="500"/>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		cat: state.activeCat
	};
}

export default connect(mapStateToProps)(CatDetail);
