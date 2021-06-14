import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@material-ui/data-grid";
import { useDemoData } from "@material-ui/x-grid-data-generator";

function App() {
  

  const [pageSize, setPageSize] = React.useState(20);
  const [userData] = useState({});

  const URL = "https://randomuser.me/api/?results=5000";
  useEffect(() => {
    axios.get("URL").then((response) => URL);
  }, []);

  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 100,
    maxColumns: 6,
  });

  const handlePageSizeChange = (params) => {
    setPageSize(params.pageSize);
  };

  return (
    <div style={{ height: 400, width: "100%" }}>
      <h2>Users List</h2>
      <h5>{userData.profileImage}</h5>
      <h5>{userData.name}</h5>
      <h5>{userData.email}</h5>
      <h5>{userData.city}</h5>
      <h5>{userData.state}</h5>
      <DataGrid
        pageSize={pageSize}
        onPageSizeChange={handlePageSizeChange}
        rowsPerPageOptions={[5, 10, 20]}
         pagination
         {...data}
      />
    </div>
  );
}

export default App;
