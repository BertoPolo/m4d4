import { Component } from "react"
import CommentList from "./CommentList"
import AddComment from "./AddComment"

class CommentArea extends Component {
  state = {
    comments: [],
  }
  componentDidMount = () => {
    this.getComments()
  }

  getComments = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + this.props.id,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjA1MTBjOWRhNDBjOTAwMTVmYzhkNmEiLCJpYXQiOjE2NDc1MjIyMzUsImV4cCI6MTY0ODczMTgzNX0.mrWPCxzmzp7t1Lv9axQecZTfPC9nDqmsyQD8KbciOcg",
          },
        }
      )
      if (response.ok) {
        let data = await response.json()
        this.setState({
          comments: data,
        })
      } else {
        console.log("tronco, esto esta roto")
      }
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    return (
      <>
        <AddComment />
        <CommentList comment={this.state.comments} />
      </>
    )
  }
}

export default CommentArea
