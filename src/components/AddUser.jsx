import React from "react";
import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import { Action } from "./utils/Action";
const AddUser = () => {
  let navigate=useNavigate()
  let { table, dispatch } = useContext(UserContext);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [mobile, setmobile] = useState("");
  const [batch, setbatch] = useState("");
  const [test, settest] = useState("")

  const handleSubmit = () => {
    let newUser = {
      id: table.length ? table[table.length - 1].id + 1 : 1,
      name,
      email,
      mobile,
      batch,
    };

    dispatch({type:Action.ADD_USER, payload:newUser})
    // const newarray = [...table];
    // newarray.push(newUser);
    // console.log(newUser);
    // console.log(newarray);
    navigate("/");
  };
  return (
    <>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Add User </h1>
            </div>
            <div className="row" >
              {/* <form action="" className="mb-3" controlId="name">
                <label>
                  Name
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={test}
                    onChange={(n) => setname(n.target.value)}
                  />
                </label>
              </form>
              <br />
              {test}
              <br /> */}
              <Form>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    onChange={(e) => setname(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Email"
                    onChange={(e) => setemail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="mobile">
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Mobile"
                    onChange={(e) => setmobile(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="batch">
                  <Form.Label>Batch</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Batch"
                    onChange={(e) => setbatch(e.target.value)}
                  />
                </Form.Group>

                <Button variant="primary" onClick={handleSubmit}>
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUser;
