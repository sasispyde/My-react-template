import React from 'react';
import { withRouter } from "react-router-dom";
const Error500 = React.lazy(() => import('../errorComponents/500/error500'));

/* To catch the error in prodction mode */
class ErrorBoundry extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };

  	// press back button to remove the error screen;
  	const { history } = this.props;
  	history.listen((location, action) => {
  	  if (this.state.errorInfo) {
  	    this.setState({
  	      errorInfo: null,
  	      error: null
  	    });
  	  }
  	});
  }
  
  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }
  
  render() {
    if (this.state.errorInfo) {
      return (
        <Error500></Error500>
      );
    }
    return this.props.children;
  }  
}

export default withRouter(ErrorBoundry);