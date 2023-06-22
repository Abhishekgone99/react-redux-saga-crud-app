import React from "react";
import { MDBTypography } from "mdb-react-ui-kit";

const About = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <MDBTypography note noteColor="primary">
        This is full CRUD application made with the help of React JS. We have
        used redux as state management library. And we have used redux-saga to
        perfom asynchronous functions which can be done with reduc-thunk i.e all
        the CRUD operations. we have used JSON server for storing the data and
        we have used react-router-dom dor navigation. we have used MDBootstrap 5
        for to build components like navbar,table, button ,form etc in this
        application
      </MDBTypography>
      ;
    </div>
  );
};

export default About;
