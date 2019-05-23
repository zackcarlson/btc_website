import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import './Dropdown.css';

const uuid = require('uuid/v4');

class Dropdown extends Component{
  constructor(props){
    super(props);
    this.state = {
      listOpen: false,
      headerTitle: this.props.title,
      icon: this.props.icon
    };
    this.close = this.close.bind(this);
    this.toggleList = this.toggleList.bind(this);
    this.selectItem = this.selectItem.bind(this);
  }

  close() {
    this.setState({
      listOpen: false
    });
  }

  componentDidUpdate(){
    const { listOpen } = this.state;
    setTimeout(() => {
      if(listOpen){
        window.addEventListener('click', this.close);
      }
      else{
        window.removeEventListener('click', this.close);
      }
    }, 0);
  }

  componentWillUnmount(){
    window.removeEventListener('click', this.close);
  }

  selectItem(title, icon) {
    this.setState({
      headerTitle: title,
      listOpen: false,
      icon
    });
    this.props.onCurrencyChange(title);
  }

  toggleList() {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }));
  }

  render() {
    const { list } = this.props;
    const { listOpen, headerTitle, icon } = this.state;
    return(
      <div className='drop-down-container'>
        <div className='drop-down-header' onClick={this.toggleList}>
          <div className='drop-down-header-title'>
            {icon 
              ? <span className={icon}/> 
              : this.props.btcIcon
            }
            {headerTitle}
          </div>
          <span className='caret-container'>
            {listOpen
              ? <FontAwesome name='caret-up'/>
              : <FontAwesome name='caret-down'/>
            }
          </span>
        </div>
        {listOpen && <ul className='drop-down-list' onClick={e => e.stopPropagation()}>
          {list.map((item)=> (
            <li 
              className='drop-down-list-item'
              key={uuid()}
              onClick={() => this.selectItem(item.title, item.icon)}
            >
              {icon 
                ? <span className={item.icon}/> 
                : this.props.btcIcon
              }
              {item.title}
            </li>
          ))}
        </ul>}
      </div>
    );
  }
}

export default Dropdown;
