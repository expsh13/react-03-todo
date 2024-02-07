import { useReducer, useRef, useState } from "react";
import "./App.css";
import { reducer } from "./reducer";

export const App = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const [showModal, setShowModal] = useState(false);
  const [validation, setValidation] = useState(true);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSaveClick = () => {
    if (inputRef.current === null || inputRef.current.value.length === 0) {
      setValidation(false);
      return;
    }
    setValidation(true);
    dispatch({ type: "add", list: { title: inputRef.current.value } });
    setShowModal(false);
  };

  const handleDeleteClick = (id: number) => {
    dispatch({ type: "delete", id: id });
  };

  return (
    <>
      <div>
        <p>todo list</p>
        <ul className="list">
          {state.map((item, i) => (
            <li key={item.title} className="list-item">
              <input type="checkbox" />
              <p>{item.title}</p>
              <button onClick={() => handleDeleteClick(i)}>x</button>
            </li>
          ))}
        </ul>
        <button onClick={() => setShowModal(true)}>+</button>
      </div>
      {showModal && (
        <div className="modal">
          <p>新規登録</p>
          <input ref={inputRef} type="text" />
          {!validation && <p>タスク名を入力してください</p>}
          <div className="btn-wrap">
            <button onClick={() => handleSaveClick()}>保存</button>
            <button onClick={() => setShowModal(false)}>キャンセル</button>
          </div>
        </div>
      )}
    </>
  );
};
