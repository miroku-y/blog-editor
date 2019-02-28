const INLINE_STYLES = [
  {label:'Bold',style:'BOLD',text:'加粗',icon:'yd-bold'},
  {label:'Italic',style:'ITALIC',text:'斜体',icon:'yd-italic'},
  {label:'Underline',style:'UNDERLINE',text:'下划线',icon:'yd-underline'},
  {label:'M',style:'MONO',text:'等宽字体'}
];

const BLOCK_TYPES =[
  {label:'H1',style:'header-one',text:'标题1'},
  {label:'H2',style:'header-two',text:'标题2'},
  {label:'H3',style:'header-three',text:'标题3'},
  {label:'H4',style:'header-four',text:'标题4'},
  {label:'H5',style:'header-five',text:'标题5'},
  {label:'H6',style:'header-six',text:'标题6'},
  {label:'Blockquote',style:'blockquote',text:'引用',icon:'yd-quote'},
  {label:'UL',style:'unordered-list-item',text:'无序列表',icon:'yd-list'},
  {label:'OL',style:'ordered-list-item',text:'有序列表',icon:'yd-list-number'},
  {label:'Code Block',style:'code-block',text:'代码块',icon:'yd-code'},
]
module.exports ={
  INLINE_STYLES,
  BLOCK_TYPES
}