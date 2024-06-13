import React, { useReducer, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import AddUser from './components/AddUser';
import SideBar from './components/SideBar';
import ViewUser from './components/ViewUser';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { createContext } from 'react';
import DashboardContextComponent from "./../src/components/context/DashboardContextComponent"
import Dashboard from "./components/Dashboard"
import NestedExample from './components/NestedExample';
import Profile from './components/NestedExample/Profile';
import Setting from './components/NestedExample/Setting';
import Feed from './components/NestedExample/Feed';
import CreateReducer from './components/hooks/CreateReducer'
import { initialState } from './components/utils/Reducer';
import Reducer from './components/utils/Reducer'
export const UserContext = React.createContext();



function App() {
let [table, dispatch] = useReducer(Reducer, initialState)
  //  let [table, setTable] = useState([
  //   {
  //     id:1,
  //     name:'Arul',
  //     mobile:'984122222',
  //     email:'arul@gmail.com',
  //     batch:'Fita1'
  //   },
  //   {
  //     id:2,
  //     name:'Praveen',
  //     mobile:'983333333',
  //     email:'praveen@gmail.com',
  //     batch:'Fita2'
  //   },

  //   {
  //     id:3,
  //     name:'prathap',
  //     mobile:'9841534214',
  //     email:'prathap@gmail.com',
  //     batch:'Fita3'
  //   },
  //   {
  //     id:4,
  //     name:'tharnika',
  //     mobile:'984166666',
  //     email:'tharnika@gmail.com',
  //     batch:'Fita4'
  //   },
  //   {
  //     id:5,
  //     name:'suriya',
  //     mobile:'984178656892',
  //     email:'suriya@gmail.com',
  //     batch:'Fita5'
  //   },

  // ])

  console.log(table)
   return (
    <>
    <div id="wrapper">
    <UserContext.Provider value={{table, dispatch}}>
    <BrowserRouter>
      <SideBar></SideBar>
        <Routes>
          <Route path="/" element={
            <DashboardContextComponent>
              <Dashboard></Dashboard>
            </DashboardContextComponent>
          }></Route>
          <Route path="/adduser" element={<AddUser></AddUser>}></Route>
          <Route path="/viewuser/:id" element={<ViewUser></ViewUser>} ></Route>
          <Route path='/nested-example' element={<NestedExample></NestedExample>} >
          <Route path='profile' element={<Profile></Profile>} ></Route>
          <Route path='setting' element={<Setting></Setting>} ></Route>
          <Route path='feed' element={<Feed></Feed>} ></Route>
          </Route>
          <Route path='/hooks/createReducer' element={<CreateReducer></CreateReducer>} ></Route>
          <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
        </Routes>
      </BrowserRouter>
      </UserContext.Provider>
    </div>
      
      
    </>
    
  )
}

export default App
