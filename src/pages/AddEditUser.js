import React, { useState, useEffect } from "react";
import {
  MDBBtn,
  MDBValidation,
  MDBInput,
  MDBValidationItem,
} from "mdb-react-ui-kit";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  createUserStart,
  loadUsersStart,
  updateUserStart,
} from "../redux/actions";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  email: "",
  phone: "",
  address: "",
};

const AddEditUser = () => {
  const [formInput, setFormInput] = useState(initialState);
  const [editMode, setEditMode] = useState(false);
  const { users } = useSelector((state) => state.data);
  const { name, email, phone, address } = formInput;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setEditMode(true);
      let SingleUser = users.find((item) => item.id === parseInt(id));
      setFormInput({ ...SingleUser });
    } else {
      setEditMode(false);
      setFormInput({ ...initialState });
    }
  }, [id]);

  // console.log("FormInput", formInput);
  const submitHandler = (e) => {
    e.preventDefault();
    if (name && email && phone && address) {
      if (!editMode) {
        dispatch(createUserStart(formInput));
        toast.success("User Added Successfully");
        setTimeout(() => navigate("/"), 500);
      } else {
        dispatch(updateUserStart({ id, formInput }));
        setEditMode(false);
        toast.success("Updated User Successfully");
        setTimeout(() => navigate("/"), 500);
      }
    }
  };
  const onChangeInputHandler = (e) => {
    let { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  return (
    <MDBValidation
      className="row g-3"
      style={{ marginTop: "100px" }}
      noValidate
      onSubmit={submitHandler}
    >
      <p className="fs-2 fw-bold">
        {!editMode ? "Add User Details :-" : "Update User Details :-"}
      </p>
      <div
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
      >
        <MDBValidationItem feedback="Please provide a name." invalid>
          <MDBInput
            type="text"
            name="name"
            value={name || ""}
            onChange={onChangeInputHandler}
            required
            label="Name"
            invalid
          />
        </MDBValidationItem>
        <br />
        <MDBValidationItem feedback="Please provide an email." invalid>
          <MDBInput
            type="email"
            name="email"
            value={email || ""}
            onChange={onChangeInputHandler}
            required
            label="Email"
            invalid
          />
        </MDBValidationItem>
        <br />
        <MDBValidationItem feedback="Please provide a Phone No." invalid>
          <MDBInput
            type="number"
            name="phone"
            value={phone || ""}
            onChange={onChangeInputHandler}
            required
            label="Phone No."
            invalid
          />
        </MDBValidationItem>
        <br />
        <MDBValidationItem feedback="Please provide an address." invalid>
          <MDBInput
            type="text"
            name="address"
            value={address || ""}
            onChange={onChangeInputHandler}
            required
            label="Address"
            invalid
          />
        </MDBValidationItem>
      </div>
      <div className="col-12">
        <MDBBtn style={{ marginRight: "10px" }} type="submit">
          {!editMode ? "ADD" : "Update"}
        </MDBBtn>
        <MDBBtn color="danger" onClick={() => navigate("/")}>
          Go Back
        </MDBBtn>
      </div>
    </MDBValidation>
  );
};

export default AddEditUser;
