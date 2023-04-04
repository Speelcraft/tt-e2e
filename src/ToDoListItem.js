import React from 'react';
import { Form, ListGroup } from 'react-bootstrap'

const axios = require('axios').default

export default class ToDoListItem extends React.Component {
  toggle(e) {
    axios.post(`/list/${this.props.listId}/item/${this.props.itemId}/complete/${e.target.checked}`).then((response) => {
      this.props.updateListItem(response.data)
    })
  }

  render () {
    return (
      <ListGroup.Item className='ToDoListItem'>
        <Form.Check type="checkbox" onChange={this.toggle.bind(this)} checked={this.props.item.completed} label={this.props.item.label} />
        { this.props.item.completed ? <span className='DeleteItem' onClick={this.props.deleteListItem}>[delete this item]</span> : null }
      </ListGroup.Item>
    );
  }
}
