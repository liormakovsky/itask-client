import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import TasksList from "./TasksList";
import Profile from "./Profile";
import Protected from "./Protected";
import Header from "./Header";

function App() {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <Header />;
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/Register" element={<Register />}></Route>
            <Route
              path="/tasks-list"
              element={
                <Protected
                  Cmp={() => {
                    return (
                      <>
                        <TasksList />
                      </>
                    );
                  }}
                />
              }
            ></Route>
            <Route
              path="/profile"
              element={
                <Protected
                  Cmp={() => {
                    return (
                      <>
                        <Profile />
                      </>
                    );
                  }}
                />
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
