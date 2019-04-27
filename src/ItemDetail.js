import React, {Component} from 'react';



class ItemDetail extends Component {
  render(){
    return(
      <div>
        <h1>{this.props.selectedItem.name}</h1>
        <p>{this.props.selectedItem.description}</p>
      </div>

    );
  }
}
export default ItemDetail;