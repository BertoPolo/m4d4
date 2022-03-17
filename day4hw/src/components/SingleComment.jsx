import { ListGroup } from "react-bootstrap"

const SingleComment = ({ comment }) => {
  return (
    <>
      <ListGroup.Item> {comment} </ListGroup.Item>
    </>
  )
}

export default SingleComment
