
import React from 'react';
import ReactQuill from 'react-quill';
import debounce from '../helpers';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

//main text editor class
class Editor extends React.Component {
    constructor() {
        super();
        this.state = {
            text: '',
            title: '',
            id: ''
        }
    }

    componentDidMount = () => {
        this.setState({
            text: this.props.selNote.body,
            title: this.props.selNote.title,
            id: this.props.selNote.id
        });
    }

    componentDidUpdate = () => {
        if (this.props.selNote.id !== this.state.id) {
            this.setState({
                text: this.props.selNote.body,
                title: this.props.selNote.title,
                id: this.props.selNote.id
            });
        }
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.editorContainer}>
                <BorderColorIcon className={classes.editIcon}></BorderColorIcon>
                <input
                    className={classes.titleInput}
                    placeholder='Note title...'
                    value={this.state.title ? this.state.title : ''}
                    onChange={(e) => this.updateTitle(e.target.value)}>
                </input>
                <ReactQuill
                    value={this.state.text}
                    onChange={this.updateBody}>
                </ReactQuill>
            </div>
        );
    }

    updateBody = async (val) => {
        await this.setState({ text: val });
        this.update();
    }

    updateTitle = async (txt) => {
        await this.setState({ title: txt });
        this.update();
    }

    update = debounce(() => {
        this.props.noteUpdate(this.state.id, {
            title: this.state.title,
            body: this.state.text
        });
    }, 1500);
}

export default withStyles(styles)(Editor);