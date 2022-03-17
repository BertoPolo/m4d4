import { Component } from "react"
import { Form } from "react-bootstrap"

class AddComment extends Component {
  state = {
    comment: {
      comment: "",
      rate: 1,
      elementId: "",
    },
  }
  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Label>Add Your Comment</Form.Label>
          <Form.Control type="text" placeholder="Write it here" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Choose your valoration</Form.Label>
          <Form.Control as="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
      </Form>
    )
  }
}

export default AddComment
