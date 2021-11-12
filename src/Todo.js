import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const Todo = () => {
  const { id } = useParams();
  const [todoData, setTodoData] = useState([]);

  React.useEffect(() => {
    const data = JSON.parse(localStorage.getItem("todoList"));
    console.log(data);
    setTodoData(data);
  }, []);

  const deleteUser = (id) => {
    let myTarget = id;
    console.log("deleted");
    let newArr = [];
    newArr = [...JSON.parse(localStorage.getItem("todoList"))];
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i].index == myTarget) {
        newArr.splice(i, 1);
        console.log("got it");
      }
    }
    let count = 0;
    newArr.map((item) => {
      item.index = count;
      count++;
    });
    localStorage.setItem("todoList", JSON.stringify(newArr));
    setTodoData(newArr);
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>ToDo Table</h1>
        <Link
          to="/user"
          className="btn btn-success mb-3"
          style={{ color: "black" }}
        >
          <b>Add ID</b>
        </Link>

        <table className="table border shadow ">
          <thead className="thead-dark">
            <tr>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todoData?.map((value, index) => {
              return (
                <tr key={value.index} id={value.index}>
                  <td>{value.index + 1}</td>
                  <td>{value?.name}</td>
                  <td>{value?.username}</td>
                  <td>{value?.email}</td>
                  <td>
                    <Link className="mr-3" to={`/user/view/${id}`}>
                      <RemoveRedEyeIcon
                        sx={{ fontSize: 28 }}
                        style={{ color: "black" }}
                      />
                    </Link>
                    <Link className="mr-3" to={`/user/edit/${id}`}>
                      <ModeEditIcon
                        sx={{ fontSize: 28 }}
                        style={{ color: "black" }}
                      />
                    </Link>
                    <button
                      className="mr-1"
                      onClick={() => deleteUser(value.index)}
                    >
                      <DeleteIcon
                        sx={{ fontSize: 28 }}
                        style={{ color: "red", background: "none" }}
                      />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Todo;
