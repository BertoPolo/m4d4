import { ListGroup } from "react-bootstrap"
import SingleComment from "./SingleComment"

const CommentList = (comment) => {
  return (
    <>
      <ListGroup>
        {comment.map((element) => {
          return <SingleComment comment={element} />
        })}
      </ListGroup>
    </>
  )
}

export default CommentList
