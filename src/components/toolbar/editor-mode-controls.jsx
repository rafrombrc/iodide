import React from 'react'

import AddButton from 'material-ui-icons/Add'
import UpArrow from 'material-ui-icons/ArrowUpward'
import DownArrow from 'material-ui-icons/ArrowDownward'
import PlayButton from 'material-ui-icons/PlayArrow'
import FastForward from 'material-ui-icons/FastForward'

import EditorToolbarMenu from './editor-toolbar-menu'
import NotebookTaskButton from './notebook-task-button'

import tasks from '../../task-definitions'

export default class EditorModeControls extends React.Component {
  render() {
    return (
      <div className="editor-mode-controls" >
        <EditorToolbarMenu />
        <NotebookTaskButton task={tasks.addCellBelow}>
          <AddButton />
        </NotebookTaskButton>
        <NotebookTaskButton task={tasks.moveCellUp}>
          <UpArrow />
        </NotebookTaskButton>
        <NotebookTaskButton task={tasks.moveCellDown}>
          <DownArrow />
        </NotebookTaskButton>
        <NotebookTaskButton task={tasks.evaluateCell}>
          <PlayButton />
        </NotebookTaskButton>
        <NotebookTaskButton task={tasks.evaluateAllCells}>
          <FastForward />
        </NotebookTaskButton>
      </div>
    )
  }
}

// export default class EditorModeControls extends React.Component {
//   static propTypes = {
//     firstChild: PropTypes.bool,
//   }

//   constructor(props) {
//     super(props)
//     this.state = {
//       isDeleteNotebookDialogOpen: false,
//     }
//     this.switchDeleteNotebookDialog = this.switchDeleteNotebookDialog.bind(this)
//     this.closeDialogAndDeleteNotebook = this.closeDialogAndDeleteNotebook.bind(this)
//   }

//   switchDeleteNotebookDialog() {
//     this.setState({
//       isDeleteNotebookDialogOpen: !this.state.isDeleteNotebookDialogOpen,
//     })
//   }

//   closeDialogAndDeleteNotebook() {
//     this.setState({
//       isDeleteNotebookDialogOpen: !this.state.isDeleteNotebookDialogOpen,
//     })
//     this.props.actions.deleteNotebook(this.props.title)
//   }

//   deleteNotebook() {
//     this.switchDeleteNotebookDialog()
//   }

//   render() {
//     return (
//       <ToolbarGroup firstChild={this.props.firstChild}>
//         <EditorToolbarMenu />

//         <NotebookTaskButton task={tasks.addCellBelow}>
//           <AddButton />
//         </NotebookTaskButton>

//         <NotebookTaskButton task={tasks.moveCellUp}>
//           <UpArrow />
//         </NotebookTaskButton>
//         <NotebookTaskButton task={tasks.moveCellDown}>
//           <DownArrow />
//         </NotebookTaskButton>


//         <NotebookTaskButton task={tasks.evaluateCell}>
//           <PlayButton />
//         </NotebookTaskButton>

//         <NotebookTaskButton task={tasks.evaluateAllCells}>
//           <FastForward />
//         </NotebookTaskButton>

//       </ToolbarGroup>
//     )
//   }
// }
