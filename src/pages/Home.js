import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUserStart, loadUsersStart } from "../redux/actions";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBSpinner,
  MDBBtn,
  MDBIcon,
  MDBTooltip,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.data);
  console.log("users", users);

  useEffect(() => {
    dispatch(loadUsersStart());
  }, []);

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  if (loading) {
    return (
      <MDBSpinner style={{ marginTop: "150px" }} role="status">
        <span className="visually-hidden">Loading...</span>
      </MDBSpinner>
    );
  }

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete the user ?")) {
      dispatch(deleteUserStart(id));
      toast.success("User Deleted Successfully");
    }
  };

  return (
    <div className="container" style={{ marginTop: "150px" }}>
      <MDBTable>
        <MDBTableHead dark>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone No.</th>
            <th scope="col">Address</th>
            <th scope="col">Actions</th>
          </tr>
        </MDBTableHead>

        {users &&
          users.map((item, index) => {
            // console.log("item", item);
            return (
              <MDBTableBody key={index}>
                <tr>
                  <th scope="row">{index + 1}.</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.address}</td>
                  <td>
                    <MDBBtn
                      className="m-1"
                      tag="a"
                      color="none"
                      onClick={() => deleteHandler(item.id)}
                    >
                      <MDBTooltip title="delete" tag="a">
                        <MDBIcon
                          fas
                          icon="trash"
                          style={{ color: "red" }}
                          size="lg"
                        ></MDBIcon>
                      </MDBTooltip>
                    </MDBBtn>
                    <Link to={`/editUser/${item.id}`}>
                      <MDBTooltip title="edit" tag="a">
                        <MDBIcon
                          fas
                          icon="pen"
                          style={{
                            color: "blue",
                            marginLeft: "15px",
                            marginBottom: "15px",
                          }}
                          size="lg"
                        ></MDBIcon>
                      </MDBTooltip>
                    </Link>
                    <Link to={`/userInfo/${item.id}`}>
                      <MDBTooltip title="view" tag="a">
                        <MDBIcon
                          fas
                          icon="eye"
                          style={{
                            color: "gray",
                            marginLeft: "15px",
                            marginBottom: "15px",
                          }}
                          size="lg"
                        ></MDBIcon>
                      </MDBTooltip>
                    </Link>
                  </td>
                </tr>
              </MDBTableBody>
            );
          })}
      </MDBTable>
    </div>
  );
};

export default Home;
