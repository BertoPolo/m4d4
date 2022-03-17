import { Component } from "react"
import { Form } from "react-bootstrap"

class AddComment extends Component {
  postComment = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + this.props.id,
        {
          method: "POST",
          //body: JSON.stringify(myObject),  change it
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjA1MTBjOWRhNDBjOTAwMTVmYzhkNmEiLCJpYXQiOjE2NDc1MjIyMzUsImV4cCI6MTY0ODczMTgzNX0.mrWPCxzmzp7t1Lv9axQecZTfPC9nDqmsyQD8KbciOcg",
            "Content-Type": "application/json",
          },
        }
      )
      if (response.ok) {
        const data = response.json()
        console.log(data)
      } else {
        console.log(" WARNING!!!")
      }
    } catch (error) {
      console.log(error)
    }
  }
  componentDidMount = () => {
    this.postComment()
  }

  state = {
    comment: {
      comment: "",
      rate: 1,
      elementId: this.props.id,
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
