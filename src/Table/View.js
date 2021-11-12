import React, { useState } from "react";
// import { Link } from "react-router-dom";
import history from "../history";
import { useParams } from "react-router-dom";

const View = () => {
  const { id } = useParams();

  const [info, setInfo] = useState({
    name: "",
    username: "",
    email: "",
  });

  React.useEffect((id) => {
    const data = JSON.parse(localStorage.getItem("todoList"));
    console.log(data[id]);
    setInfo(data);
  }, []);

  return (
    <div className="container py-4">
      <button className="btn btn-danger" onClick={() => history.back()}>
        Back
      </button>

      <h2 className="mt-3">User Id: {id}</h2>

      <hr />
      <ul className="list-group w-50">
        <li>Name: {info.name}</li>
        <li>User Name: {info.username}</li>
        <li>Email: {info.email}</li>
      </ul>
    </div>
  );
};

export default View;
