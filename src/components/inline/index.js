import React from "react";
import { INLINE_STYLES } from "../../utils/emnu";
import StyleButton from "../styleButton";
import './index.css'

class InlineStyleControls extends React.Component {
  constructor(props) {
    super(props);
    this.ref = '';
  }

  render() {
    console.log(this.props,'打印inlinestylecontrols')
    const currentStyle = this.props.editorState.getCurrentInlineStyle();
    return (
      <div className="richEditor-controls">
        {INLINE_STYLES.map(type => (
          <StyleButton
            key={type.label}
            label={type.label}
            content={type.text}
            icon={type.icon}
            active={currentStyle.has(type.style)}
            onToggle={this.props.onToggle}
            style={type.style}
          />
        ))}
      </div>
    );
  }
}

export default InlineStyleControls;
