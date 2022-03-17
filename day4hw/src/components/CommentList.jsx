import { ListGroup } from "react-bootstrap"
import SingleComment from "./SingleComment"

const CommentList = ({ comment }) => {
  return (
    <>
      <ListGroup>
        {comment.map((element, index) => {
          return <SingleComment key={index} comment={element.comment} />
        })}
      </ListGroup>
    </>
  )
}

export default CommentList
