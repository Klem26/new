import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

const Filter = ({ value, onChange }) => {
  const [isError, setIsError] = useState(false);

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        {isError ? (
          <h3> Error! Please try again later</h3>
        ) : (
          <div>
            <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static">
                <Toolbar>
                  <SearchIcon />
                  <InputBase
                    color="secondary"
                    type="text"
                    placeholder="search"
                    value={value}
                    onChange={onChange}
                  />
                </Toolbar>
              </AppBar>
            </Box>
          </div>
        )}
      </Box>
    </div>
  );
};
export default Filter;
