import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MDBBtn } from "mdb-react-ui-kit";
import { loadUsersStart } from "../redux/actions";

const UserInfo = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.data);
  //   console.log("users", users);
  const navigate = useNavigate();
  const { id } = useParams();
  //   console.log("id", id);
  let singleUser;
  if (id) {
    singleUser = users?.find((item) => item?.id === parseInt(id));
  }
  //   console.log("single user", singleUser);
  useEffect(() => {
    if (users) {
      dispatch(loadUsersStart());
    }
  }, []);

  useEffect(() => {});
  return (
    <div style={{ marginTop: "100px" }}>
      <div
        className="row"
        style={{
          margin: "auto",
          padding: "15px",
          alignContent: "center",
          maxWidth: "450px",
        }}
      >
        <p className="col-md-12 fs-3">User Detail</p>
        <hr />
        <p className="col-md-6 fw-bold">ID:</p>
        <p className="col-md-6">{singleUser?.id}</p>
        <p className="col-md-6 fw-bold">Name:</p>
        <p className="col-md-6">{singleUser?.name}</p>
        <p className="col-md-6 fw-bold">Email:</p>
        <p className="col-md-6">{singleUser?.email}</p>
        <p className="col-md-6 fw-bold">Phone No:</p>
        <p className="col-md-6">{singleUser?.phone}</p>
        <p className="col-md-6 fw-bold">Address:</p>
        <p className="col-md-6">{singleUser?.address}</p>
      </div>
      <MDBBtn onClick={() => navigate("/")} color="danger">
        Go Back
      </MDBBtn>
    </div>
  );
};

export default UserInfo;
