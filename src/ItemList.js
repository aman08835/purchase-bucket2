import React, {Component} from 'react';

const styles = {
  item: {
    width: 'calc(100% - 32px)',
    margin: '0px',
    padding: '16px',
    backgroundColor: 'lightgrey',
    display: 'block',
    borderBottom: '1px solid grey'
  }
}

class ItemList extends Component {
  render(){
    return(
      <div>
        {
          this.props.items.map( item =>
            <a
              href="#"
              style={styles.item}
              onClick = {()=> this.props.onSlectItem(item)}
            >
            {item.name}
            </a>

          )
        }
      </div>
    );
  }
}
export default ItemList;