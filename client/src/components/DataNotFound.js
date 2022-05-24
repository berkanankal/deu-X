import React from "react";
import Alert from "@mui/material/Alert";

const DataNotFound = ({ message }) => {
  return (
    <Alert variant="filled" severity="error" style={{ marginTop: 30 }}>
      {message}
    </Alert>
  );
};

export default DataNotFound;
