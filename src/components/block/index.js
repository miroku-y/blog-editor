import React from "react";

import { BLOCK_TYPES } from "../../utils/emnu";
import StyleButton from "../styleButton";
import "./index.css";

class BlockStyleControls extends React.Component {
  constructor(props) {
    super(props);
    this.selection = props.editorState.getSelection();
    this.blockType = props.editorState
      .getCurrentContent()
      .getBlockForKey(this.selection.getStartKey())
      .getType();
  }
  render() {
    return (
      <div className="richEditor-controls">
        {BLOCK_TYPES.map(type => (
          <StyleButton
            key={type.label}
            active={type.style === this.blockType}
            label={type.label}
            content={type.text}
            icon={type.icon}
            onToggle={this.props.onToggle}
            style={type.style}
          />
        ))}
      </div>
    );
  }
}
export default BlockStyleControls;
