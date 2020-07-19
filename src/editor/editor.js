
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
        this.state = {
            test: '',
            title: '',
            id: ''
        }
    }

    render(){
        const {classes} = this.props;

        return(
        <div className = {classes.editorContainer}>
            <ReactQuill
                val = {this.state.text}
                onChange = {this.updateBody}>
            </ReactQuill>
        </div>
        );
    }

    updateBody = async(val) =>{
        await this.setState({text: val});
        this.update();
    }

    update = debounce(() => {

    }, 1500);
}

export default withStyles(styles)(Editor);