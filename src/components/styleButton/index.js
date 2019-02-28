import React from "react";
import "./index.css";

class StyleButton extends React.Component {
  constructor() {
    super();
    this.onToggle = e => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }
  render() {
    let className = "RichEditor-styleButton";
    if (this.props.active) {
      className += " RichEditor-activeButton";
    }
    return (
      <span className={`defaultButton ${className}`} onMouseDown={this.onToggle} data-content={this.props.content}>
        {this.props.icon ? (
          <i className={this.props.icon} />
        ) : (
          this.props.label
        )}
      </span>
    );
  }
}

export default StyleButton;
