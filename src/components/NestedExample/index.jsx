import React from "react";
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link, Outlet } from "react-router-dom";

function NestedExample() {
  return (
    <>
     <Container>
     <Nav
        activeKey=""
      >
        <Nav.Item>
          <Link to='/nested-example/profile'>Profile</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to='/nested-example/settings'>Settings</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to='/nested-example/feed'>Feed</Link>
        </Nav.Item>
      </Nav>

      
      <div>
        <Outlet/>
      </div>
     </Container>
      
    </>
  );
}

export default NestedExample;
