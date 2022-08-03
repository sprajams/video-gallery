const Comments = ({ setActiveComments }) => {
  const onClickClose = () => {
    setActiveComments(false);
  };
  return (
    <div>
      <button onClick={onClickClose}>X</button>
      <ul>
        <li>comments</li>
        <li>comments</li>
        <li>comments</li>
        <li>comments</li>
      </ul>
    </div>
  );
};

export default Comments;
