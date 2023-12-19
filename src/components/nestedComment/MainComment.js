import { useState } from "react";
import Comments from "./comments/Comments";
import data from "./Data";
import useFunction from "./useFunction";

const MainComment = () => {
  const [cData, setCData] = useState(data);
  const { addComment, deleteComment } = useFunction();

  const addCommentHandler = (commentId, comment) => {
    const updateTree = addComment(cData, commentId, comment);
    setCData(updateTree);
  };

  const deleteCommentHandler = (commentId) => {
    const updateTree = deleteComment(cData, commentId);
    setCData(updateTree);
  };
  return (
    <Comments
      cData={cData}
      key={cData.id}
      addCommentHandler={addCommentHandler}
      deleteCommentHandler={deleteCommentHandler}
    />
  );
};

export default MainComment;
