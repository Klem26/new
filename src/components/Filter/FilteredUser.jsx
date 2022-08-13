import React from "react";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";

function FiltredUser({ users, onToggleSubscriber }) {
  return (
    <List sx={{ width: "100%", minWidth: 360, bgcolor: "background.paper" }}>
      {users.map(({ id, name, status }) => {
        return (
          <ListItem key={id}>
            <ListItemText primary={name} />
            {status === true ? (
              <Button
                onClick={() => onToggleSubscriber(id)}
                variant="contained"
                sx={{
                  width: {
                    mobile: "105px",
                    laptop: "154px",
                  },
                  height: "37px",
                  fontSize: 14,
                  lineHeight: 16,
                  fontWeight: "medium",
                  letterSpacing: 0.01,
                  textTransform: "none",
                  borderRadius: "inherit",

                  color: "#fff",
                  bgcolor: "#5A5DF6",
                }}
              >
                Follow
              </Button>
            ) : (
              <Button
                onClick={() => onToggleSubscriber(id)}
                variant="contained"
                sx={{
                  width: { mobile: "105px", laptop: "154px" },
                  height: "37px",
                  fontSize: 14,
                  lineHeight: 16,
                  fontWeight: "medium",
                  letterSpacing: 0.01,
                  textTransform: "none",
                  borderRadius: "inherit",

                  color: "#5A5DF6",
                  bgcolor: "#fff",
                  border: "2px solid #5A5DF6",
                }}
              >
                Unfollow
              </Button>
            )}
          </ListItem>
        );
      })}
    </List>
  );
}

export default FiltredUser;
