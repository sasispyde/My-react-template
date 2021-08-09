import React from 'react';
import { connect } from 'react-redux';

import { increment, decrement, incrementByAmount,invalid } from './action/counter_action';

import { fetchPosts } from './reducer/counter_reducer';

class Reactredux extends React.Component {
	render() {
		return (
			<div>
				<h3> Count : {this.props.value}</h3>
				<button className="btn btn-primary" onClick={ () => this.props.increment() }>Increment</button>&nbsp;&nbsp;
				<button className="btn btn-primary" onClick={ () => this.props.decrement() }>Decrement</button>&nbsp;&nbsp;
				<button className="btn btn-primary" onClick={ () => this.props.incrementByAmount(10) }>Increment by value</button>&nbsp;&nbsp;
				<button className="btn btn-primary" onClick={ () => this.props.invalid() }>Invalid</button>&nbsp;&nbsp;
				<button className="btn btn-primary" onClick={ () => this.props.fetchPosts() }>Make Request</button>
				{
					/*
						Without mapDispatchToProps;

						<button className="btn btn-primary" onClick={ () => this.props.dispatch(incrementByAmount(10)) }>Increment by value</button>&nbsp;&nbsp;
						<button className="btn btn-primary" onClick={ () => this.props.dispatch(invalid()) }>Invalid</button>
					*/
				}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	// console.log("----------------");
	// console.log(state);
	return {
		value : state.value
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		decrement: () => dispatch(decrement()),
		increment: () => dispatch(increment()),
		incrementByAmount: (value) => dispatch(incrementByAmount(value)),
		invalid: () => dispatch(invalid()),
		fetchPosts: () => dispatch(fetchPosts()),
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Reactredux);