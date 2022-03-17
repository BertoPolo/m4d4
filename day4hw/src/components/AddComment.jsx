import { Component } from "react"
import { Form, Button } from "react-bootstrap"

class AddComment extends Component {
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
  postComment = async (e) => {
    e.preventDefault()

    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/comments", {
        method: "POST",
        body: JSON.stringify(this.state.comment),
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjA1MTBjOWRhNDBjOTAwMTVmYzhkNmEiLCJpYXQiOjE2NDc1MjIyMzUsImV4cCI6MTY0ODczMTgzNX0.mrWPCxzmzp7t1Lv9axQecZTfPC9nDqmsyQD8KbciOcg",
          "Content-Type": "application/json",
        },
      })
      if (response.ok) {
        alert("thanks for your contribution")
      } else {
        console.log(" WARNING!!!")
      }
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <Form onSubmit={this.postComment}>
        <Form.Group>
          <Form.Label>Add Your Comment</Form.Label>
          <Form.Control
            type="text"
            placeholder="Write it here"
            value={this.state.comment.comment}
            onChange={(event) =>
              this.setState({
                comment: {
                  ...this.state.comment,
                  comment: event.target.value,
                },
              })
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Choose your valoration</Form.Label>
          <Form.Control
            as="select"
            value={this.state.comment.rate}
            onChange={(event) =>
              this.setState({
                comment: {
                  ...this.state.comment,
                  rate: event.target.value,
                },
              })
            }
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant={"success"} type={"submit"}>
          Submit
        </Button>
      </Form>
    )
  }
}

export default AddComment
