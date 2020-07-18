
import React from 'react';
import ReactQuill from 'react-quill';
import debounce from '../helpers';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

//main text editor class
class Editor extends React.Component{
    constructor(){
        super();
    }

    render(){
        const classes = this.props;

        return(
        <div className = {classes.editor}>
            <ReactQuill></ReactQuill>
        </div>
        );
    }
}

export default withStyles(styles)(Editor);