const useFunction = () => {
  //add comment
  const addComment = (tree, commentId, newComment) => {
    //for root comment
    if (tree.id === commentId) {
      tree?.replies?.unshift(newComment);
      return tree;
    }

    //for nested comment
    const updatedReplies = tree?.replies?.map((e) =>
      addComment(e, commentId, newComment)
    );

    return { ...tree, replies: updatedReplies };
  };

  //delete comment
  const deleteComment = (tree, commentId) => {
    if (tree.id === commentId) {
      return tree?.replies?.filter((i) => i.id !== commentId);
    }
    //
    const updatedReplies = tree?.replies?.map((e) =>
      deleteComment(e, commentId)
    );
    return { ...tree, replies: updatedReplies };
  };
  return { addComment, deleteComment };
};

export default useFunction;
