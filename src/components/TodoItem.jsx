import { useState } from "react";
import PropTypes from 'prop-types';

const TodoItem = ({ itemProp, handleChange, delTodo, setUpdate }) => {
  const [editing, setEditing] = useState(false);

  let viewMode = {};
  let editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handleEditing = () => {
    setEditing(true);
  };
  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };
  return (
    <li className="item">
      <div className={`content ${itemProp.completed ? 'checkbox' : ''}`} style={viewMode}>
      <input
        className="checkbox"
        type="checkbox"
        checked={itemProp.completed}
        onChange={() =>  handleChange(itemProp.id)}
      />
      <button onClick={handleEditing}>Edit</button>
      <button onClick={() => delTodo(itemProp.id)}>Delete</button>
      {itemProp.title}
      </div>
      <input
      type="text"
      value={itemProp.title}
      className="textInput"
      style={editMode}
      onChange={(e) => setUpdate(e.target.value, itemProp.id)}
      onKeyDown={handleUpdatedDone}
    />
    </li>
  );
};
TodoItem.propTypes = {
  itemProp: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  addTodoItem: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};
export default TodoItem;
