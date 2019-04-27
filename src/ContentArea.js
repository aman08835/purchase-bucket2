import React, {Component} from 'react';
import ItemList from './ItemList';
import ItemForm from './ItemForm';
import ItemDetail from './ItemDetail';

const styles = {
  ContentArea: {
    width: '100%',
    margin: '0px',
    padding: '8px',
  },
  LeftPane: {
    width: '30%',
    margin: '0px',
    padding: '8px',
    float: 'left',
  },
  RightPane: {
    width: '62%',
    margin: '0px',
    padding: '8px',
    float: 'left',
  }

}

class ContentArea extends Component {

  state = {
    items: [
      {
        name: 'Tomato',
        description: 'Buy 1 kg red tomato'
      },
      {
        name: 'Tomato2',
        description: 'Buy 2 kg red tomato'
      },
      {
        name: 'Tomato3',
        description: 'Buy 3 kg red tomato'
      },
      {
        name: 'Tomato4',
        description: 'Buy 4 kg red tomato'
      },
    ],
    selectedItem: {
      Name: 'No item selected',
      Description: 'plz select an item'
    },
  }
  onSelectItem= (item) => {
    this.setState({selectedItem: item});
  }

  
  render(){
    return(
      <div style= {styles.ContentArea}>
        <div style={styles.LeftPane}>
          <ItemList items={this.state.items} onSelectItem={this.onSelectItem}/>
        </div>
        <div style= {styles.RightPane}>
          {
            this.props.showForm 
            ? <ItemForm/>
            :<ItemDetail selectedItem={this.state.selectedItem}/> 
            
          }
        </div>

      </div>
    );
  }
}
export default ContentArea;