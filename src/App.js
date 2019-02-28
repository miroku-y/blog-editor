import React, { Component } from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import InlineStyleControls from "./components/inline";
import BlockStyleControls from "./components/block";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };

    /**Custom overrides for 'code' style */
    this.styleMap = {
      MONO: {
        backgroundColor: "rgba(0,0,0,0.5)",
        fontFamily: '"Inconsolata","Menlo","Consolas",monospace',
        fontSize: 20
      }
    };
    this.getBlockStyle = (block) =>{
      console.log(block.getType())
      switch(block.getType()){
        case 'blockquote':
          return 'RichEditor-blockquote';
        default:
          return null;
      }
    }

    /**绑定this */
    this.focus = () => {
      // console.log('eee');
      this.refs.editor.focus();
    };
  }
  onChange = editorState => {
    console.log("1213", editorState);
    this.setState({ editorState });
  };


  toggleInlineStyle = inlineStyle => {
    console.log(this);
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle)
    );
  };
  toggleBlockType = blockStyle => {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState,blockStyle))
  }
  render() {
    return (
      <div className="App">
        <div className="be-container">
          <div className="be-controlbar">
            <InlineStyleControls
              editorState={this.state.editorState}
              onToggle={this.toggleInlineStyle}
            />
            <BlockStyleControls editorState={this.state.editorState} onToggle={this.toggleBlockType}/>
          </div>
          <div className="be-content" onClick={this.focus}>
            <Editor
              editorState={this.state.editorState}
              onChange={this.onChange}
              ref="editor"
              customStyleMap={this.styleMap}
              blockStyleFn = {this.getBlockStyle}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
