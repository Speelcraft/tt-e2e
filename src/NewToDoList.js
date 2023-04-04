import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap'

export default class NewToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  appendList() {
    if(this.inputRef.current.value === '') {
      return
    }
    this.props.appendList(this.inputRef.current.value)
    this.inputRef.current.value = ''
  }

  render () {
    return (
      <InputGroup className="mb-3">
        <FormControl
          ref={this.inputRef}
          placeholder="New list"
          aria-label="New list"
        />
        <InputGroup.Append>
          <Button variant="outline-secondary" onClick={this.appendList.bind(this)}>Add</Button>
        </InputGroup.Append>
      </InputGroup>
    );
  }
}
