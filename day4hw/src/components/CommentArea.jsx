import { Component } from "react"
import CommentList from "./CommentList"
// import AddComment from "./AddComment"

class CommentArea extends Component {
  /* fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {
    headers: {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjA1MTBjOWRhNDBjOTAwMTVmYzhkNmEiLCJpYXQiOjE2NDc1MjIyMzUsImV4cCI6MTY0ODczMTgzNX0.mrWPCxzmzp7t1Lv9axQecZTfPC9nDqmsyQD8KbciOcg"
    }
    }) */

  state = {
    // comment :"",
  }
  render() {
    return (
      <>
        <CommentList />
        {/* comment={this. FETCHED COMMENT} */}
        {/* <AddComment /> */}
      </>
    )
  }
}

export default CommentArea
