import React from 'react';
import { ListGroup, InputGroup, FormControl, Button } from 'react-bootstrap'

export default class NewToDoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  append() {
    if(this.inputRef.current.value === '') {
      return
    }
    this.props.append(this.inputRef.current.value)
    this.inputRef.current.value = ''
  }

  render () {
    return (
      <ListGroup.Item className='AddToDoListItem'>
        <InputGroup className="mb-3">
          <FormControl
            ref={this.inputRef}
            placeholder="New item"
            aria-label="New item"
          />
          <InputGroup.Append>
            <Button variant="outline-secondary" onClick={this.append.bind(this)}>Add</Button>
          </InputGroup.Append>
        </InputGroup>
      </ListGroup.Item>
    );
  }
}
