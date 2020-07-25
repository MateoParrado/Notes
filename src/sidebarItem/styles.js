//style for the sidebar item
const styles = theme => ({
  listItem: {
    cursor: 'pointer',
    backgroundColor: '#000000',
    color: '#ffffff',
    draggable: 'true'
  },
  textSection: {
    maxWidth: '85%'
  },
  deleteIcon: {
    position: 'absolute',
    right: '5px',
    top: 'calc(50% - 15px)',
    color: 'white',
    '&:hover': {
      color: 'red'
    }
  },
  second:{
    color: 'rgba(255, 255, 255, .54)'
  }
});

export default styles;