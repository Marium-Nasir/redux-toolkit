import React from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { fakeUserData } from "../api";
import "../assets/Content.css";
import Buttons from "./Buttons";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/UserSlice";
import { dltAllUsers } from "../store/slices/UserSlice";
import Userlist from "./Userlist";
const style = {
  height: "100vh",
  width: "80vw",
  mt: "2%",
  bgcolor: "black",
  opacity: "0.7",
  color: "aliceblue",
  border: "2px solid blue",
  borderRadius: "1.2rem",
};
const Content = () => {

  const dispatch = useDispatch()

  const addNewUser = (payload)=>{
    // console.log(payload);
    dispatch(addUser(payload))
  };

  const deleteAllUsers = ()=>{
    dispatch(dltAllUsers())
  }
  return (
    <>
      <div className="contentContainer">
        <Box sx={style}>
          <div className="contentHeading">
            <div>
              <h2>Manage Users</h2>
            </div>
            <div className="btn">
              <Button variant="contained"  size='large' color='success' onClick={()=>addNewUser(fakeUserData())}>Add New User</Button>
            </div>
          </div>
          <div className="userLists">
            <ul>
              <Userlist />
            </ul>
          </div>
          <div className="dltAllBtn">
          <Button variant="contained"  size='large' color='error' onClick={()=>deleteAllUsers()}>Delete All Users</Button>
          </div>
        </Box>
      </div>
    </>
  );
};

export default Content;
