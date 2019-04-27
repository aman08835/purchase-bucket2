import React, {Component} from 'react';

const styles = {
  topBar: {
    width: '100%',
    margin: '0px',
    padding: '8px',
    backgroundColor: 'black',
    color: 'white'
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    display: 'inline-block'
  },
  addBtn: {
    float: 'right',
    marginRight: '16px',
    marginTop: '8px'
  }
}

class TopBar extends Component{
  render(){
    return(
      <div style={styles.topBar}>
        <div style={styles.logo}>Purchase Bucket</div>
        <button style={styles.addBtn}>Add</button>
      </div>
    );
  }
}
export default TopBar;