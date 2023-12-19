import { useState } from "react";
import "./Comments.css";

const Comments = ({ cData, addCommentHandler, deleteCommentHandler }) => {
  const [inputShow, setInputShow] = useState(false);
  const [txtComment, setTxtComment] = useState("");

  const addHandler = () => {
    let newComment = {
      id: Date.now(),
      text: txtComment,
      replies: [],
    };
    addCommentHandler(cData.id, newComment);
    setInputShow(false);
  };
  return (
    <div>
      <div className={`${cData.text && "comment-container"}`}>
        <h3>{cData?.text}</h3>
        {inputShow && (
          <input
            type="text"
            autoFocus
            onChange={(e) => setTxtComment(e.target.value)}
          />
        )}
        {inputShow ? (
          <div>
            <button onClick={addHandler}>Add</button>
            <button onClick={() => setInputShow(false)}>Cancel</button>
          </div>
        ) : cData.text ? (
          <>
            <div>
              <button onClick={() => setInputShow(true)}>Reply</button>
              <button onClick={() => deleteCommentHandler(cData.id)}>
                Delete
              </button>
            </div>
          </>
        ) : null}
      </div>
      <div style={{ paddingLeft: "15px" }}>
        {cData?.replies?.map((i, idx) => (
          <Comments
            key={i.id}
            cData={i}
            addCommentHandler={addCommentHandler}
            deleteCommentHandler={deleteCommentHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;
