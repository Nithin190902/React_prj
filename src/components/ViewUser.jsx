import React, { useContext, useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from "react-router-dom";
import findIndexById from "./utils/helper";
import { UserContext } from '../App';
import { Action } from "./utils/Action";

function ViewUser() {
  let navigate = useNavigate();
  let { table, dispatch } = useContext(UserContext);
  const { id } = useParams(); // Get the id from useParams
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [batch, setBatch] = useState("");

  const getData = (id) => {
    let index = findIndexById(Number(id), table);
    if (index !== -1) {
      setName(table[index].name);
      setEmail(table[index].email);
      setMobile(table[index].mobile);
      setBatch(table[index].batchId);
    } else {
      console.error(`Invalid Id: ${id}`);
      navigate("/dashboard");
    }
  };

  const handleSubmit = () => {
    let index = findIndexById(Number(id), table);
    let editedData = { id: table[index].id, name, email, mobile, batch }; // Forming the object

    dispatch({type:Action.EDIT_USER, payload:editedData})
    // let newArray = [...table]; // Deep copy
    // newArray.splice(index, 1, editedData); // Replace the old data with edited data
    // setTable(newArray);

    navigate("/");
  };

  useEffect(() => {
    if (id) {
      getData(id);
    }
  }, [id]);

  return (
    <>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Edit User</h1>
            </div>
            <div className="row">
              <Form>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="mobile">
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Mobile"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="batch">
                  <Form.Label>Batch</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Batch"
                    value={batch}
                    onChange={(e) => setBatch(e.target.value)}
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
}

export default ViewUser;