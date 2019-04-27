import React, {Component} from 'react';

const styles={
  divStyle: {
    border: "3px solid black",
    borderRadius: "3px",
    textAlign: "right",
    margin: '16px',
    padding: '16px'
  },
  BTN:{
    float: 'right'
  }
}

class ItemForm extends Component {
  render(){
    return(
      <div style = {styles.divStyle}>
        <h1>AddItem</h1>
        <form>
          <label>Name:{this.props.name}</label>
          <input type="text"/>

          <br/>

          <label>Description:{this.props.desc}</label>
          <input type="text"/>

          <br/>
          <button style= {styles.BTN}>save</button>
        </form>
      </div>
    );
  }
}
export default ItemForm;