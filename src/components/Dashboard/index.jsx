import React, { useContext } from 'react';
import Card from "./Card";
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';
import findIndexById from "./../utils/helper";
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../App'
import { DashboardContext } from "../context/DashboardContextComponent";
import { Action } from '../utils/Action';


function Dashboard() {
    let navigate = useNavigate();
    let {table, dispatch} = useContext(UserContext);
    let {cardData} = useContext(DashboardContext);
  
    console.log(cardData)  
    // const handleDelete = (id) => {
    //   const newTable = table.filter((item, index) => {
    //   return  item.id !== id
    //   console.log(newTable)
    // })

    // console.log(newTable)
    // setTable(newTable)
    // }
    return (
      <>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <div className="container-fluid">
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                <a
                  href="#"
                  className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                >
                  <i className="fas fa-download fa-sm text-white-50"></i> Generate
                  Report
                </a>
              </div>
  
              <div className="row">
                {cardData.map((e, i) => {
                  return <Card data={e} key={i}></Card>;
                })}
              </div>
              
  
              <div className="row">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Mobile</th>
                      <th>Batch</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {table.map((e) => {
                      return (
                        <tr key={e.id}>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.email}</td>
                        <td>{e.mobile}</td>
                        <td>{e.batch}</td>
                        <td>
                        <Button variant="primary" onClick={() => navigate(`/viewuser/${e.id}`)}>Edit</Button> 
                        &nbsp; &nbsp;
                        <Button variant="danger" onClick={() => dispatch({type:Action.DELETE_USER, payload:e.id})}>Delete</Button>
                        </td>
                      </tr>
                      )
                    })}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Dashboard;