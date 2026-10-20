import "./App.css";
import Todo from "./Todo";
import React, { useState, useEffect } from "react";
import {
  Container,
  List,
  Paper,
  Grid,
  Button,
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import AddTodo from "./AddTodo";
import { call, signout } from "./service/ApiService";

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect는 컴포넌트가 렌더링된 후 실행되는 함수
  // 컴포넌트가 처음 렌더링될 때 서버에서 todo 데이터를 가져오는 코드
  useEffect(() => {
    call("/todo", "GET", null)
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching todo items:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);  
  // [] 매개변수의미? 페이지가 열릴 때 딱 한 번 서버에서 데이터를 가져오는 구조

  const addItem = (item) => {
    call("/todo", "POST", item).then((response) => setItems(response.data));
  };

  const editItem = (item) => {
    call("/todo", "PUT", item).then((response) => setItems(response.data));
  };

  const deleteItem = (item) => {
    call("/todo", "DELETE", item).then((response) => setItems(response.data));
  };

  let todoItems = items.length > 0 && (
    <Paper style={{ margin: 16 }}>
      <List>
        {items.map((item) => (
          <Todo
            item={item}
            key={item.id}
            editItem={editItem}
            deleteItem={deleteItem}
          />
        ))}
      </List>
    </Paper>
  );

  let navigationBar = (
    <AppBar position="static">
      <Toolbar>
        <Grid justifyContent="space-between" container>
          <Grid item>
            <Typography variant="h6">오늘의 할일</Typography>
          </Grid>
          <Grid item>
            <Button color="inherit" raised onClick={signout}>
              로그아웃
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );

  let todoListPage = (
    <div>
      {navigationBar}
      <Container maxWidth="md">
        <AddTodo addItem={addItem} />
        <div className="TodoList">{todoItems}</div>
      </Container>
    </div>
  );

  let loadingPage = <h1> 로딩중.. </h1>;
  let content = loadingPage;

  if (!loading) {
    content = todoListPage;
  }

  return <div className="App">{content}</div>;
}

export default App;
