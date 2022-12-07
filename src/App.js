import React, { useState } from 'react';

import './App.css';

function Header() {
  return (
    <div className="header">
      <div className="header-inner">
        <span>My ToDo List</span>
        <span>React</span>
      </div>
    </div>
  );
}

function Layout(props) {
  return (
    <div className="layout">
      <Header />
      <div>{props.children}</div>
    </div>
  );
}

function ToDoList(props) {
  return (
    <div className="to-do-box">
      <div className="to-do-title">{props.list.title}</div>
      <div className="to-do-body">{props.list.body}</div>
      <button>삭제하기</button>
      <button>완료</button>
    </div>
  );
}

function App() {
  const [lists, setLists] = useState([
    { id: 0, title: '', body: '', isDone: false },
  ]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onSubmitHandler = () => {
    const newList = {
      id: lists.length + 1,
      title: title,
      body: body,
      isDone: false,
    };
    setLists([...lists, newList]);
    console.log(lists);
  };

  return (
    <Layout>
      <div className="to-do-list-wrap">
        <div className="to-do-list-form">
          <label>제목</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <label>내용</label>
          <input value={body} onChange={(e) => setBody(e.target.value)} />
          <button onClick={onSubmitHandler}>추가하기</button>
        </div>
        <div className="to-do-list-inner">
          {lists.map((list) => {
            if (list.isDone) {
              return (
                <div className="to-do-list-working">
                  <ToDoList list={list} key={list.id}></ToDoList>;
                </div>
              );
            } else {
              return (
                <div className="to-do-list-done">
                  <ToDoList list={list} key={list.id}></ToDoList>;
                </div>
              );
            }
          })}
        </div>
      </div>
    </Layout>
  );
}

export default App;
