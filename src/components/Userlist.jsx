import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CreateIcon from "@mui/icons-material/Create";
import { useSelector,useDispatch } from "react-redux";
import { dltUser } from "../store/slices/UserSlice";


const Userlist = () => {

  const data = useSelector((state) => {
    return state.users;
  });

  const dispatch = useDispatch();

  const deleteUser = (id)=>{
    dispatch(dltUser(id))
  }

  return (
    <>
      {data.map((elem, index) => {
        return (
          <li>
            <div className="lists">
              <div>{elem}</div>
              <div>
                <DeleteForeverIcon
                  fontSize="large"
                  sx={{ color: "red" }}
                  className="btn"
                  onClick={()=>deleteUser(index)}
                />
              </div>
            </div>
          </li>
        );
      })}
    </>
  );
};

export default Userlist;
