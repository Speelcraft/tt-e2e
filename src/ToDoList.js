import React from 'react';
import { cloneDeep } from 'lodash';
import { Card, ListGroup, Button } from 'react-bootstrap'

import ToDoListItem from './ToDoListItem.js'
import NewToDoListItem from './NewToDoListItem.js'

const axios = require('axios').default

export default class ToDoList extends React.Component {
  updateListItem(index, newItem) {
    let newList = cloneDeep(this.props.list)
    newList.items[index] = newItem
    this.props.updateList(newList)
  }

  appendListItem(newItemLabel) {
    axios.post(`/list/${this.props.listId}/add`, {label: newItemLabel} ).then((response) => {
      let newList = cloneDeep(this.props.list)
      newList.items.push(response.data)
      this.props.updateList(newList)
    })
  }

  deleteListItem(index) {
    axios.delete(`/list/${this.props.listId}/item/${index}`).then((response) => {
      let newList = cloneDeep(this.props.list)
      newList.items.splice(index, 1)
      this.props.updateList(newList)
    })
  }

  render () {
    return (
      <div className='ToDoList'>
        <Card style={{ width: '18rem' }}>
          <Card.Header>
            <Button variant="danger" size="sm" onClick={this.props.deleteList}>X</Button>
            <span className='ListHeader'>{this.props.list.name}</span>
          </Card.Header>
          <ListGroup variant="flush">
            {this.props.list.items.map((item, i) => <ToDoListItem key={i} listId={this.props.listId} itemId={i} item={item} deleteListItem={this.deleteListItem.bind(this, i)} updateListItem={this.updateListItem.bind(this, i)}/>)}
            <NewToDoListItem append={this.appendListItem.bind(this)} />
          </ListGroup>
        </Card>
      </div>
    );
  }
}
