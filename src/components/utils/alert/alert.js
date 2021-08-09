import React from 'react';
import ReactDOM from 'react-dom';

const CONTAINER_STYLE = {
  "display"         : "none",
  "position"        : "absolute",
  "width"           : "100%",
  "top"             : "80px",
};

const CONTENT = {
  "display"         : "flex",
  "padding"         : "10px 16px",
  "fontSize"        : "0.875rem",
  "fontFamily"      : '"Roboto", "Helvetica", "Arial", sans-serif',
  "fontWeight"      : "400",
  "lineHeight"      : "1.43",
  "borderRadius"    : "4px",
  "letterSpacing"   : "0.01071em",
  "backgroundColor" : "rgb(189 251 189)",
  "color"           : "rgb(58 99 60)",
  "margin"          : "0px 10px"
}

const Alert = (props) => {
    if(props.error) 
    { 
      CONTENT['backgroundColor'] = "rgb(247 227 201)";
      CONTENT['color'] = "rgb(102, 60, 0)";
    }
    return ReactDOM.createPortal(
        <div id="message" style={CONTAINER_STYLE}>
          <div style={CONTENT}>
            { props.children }
          </div>
        </div>,
        document.getElementById('model_and_message')
    );
}

export default React.memo(Alert);