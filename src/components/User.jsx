import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import users from "../user.js";

function AlignItemsList() {
  return (
    <List sx={{ width: "100%", minWidth: 360, bgcolor: "background.paper" }}>
      {users.map(({ id, img, alt, name, description, btn }) => {
        return (
          <>
            <ListItem
              key={id}
              alignItems="flex-start"
              sx={{ pt: "16px", pl: "20px", pb: "10px" }}
            >
              <ListItemAvatar sx={{ mt: "0px", mr: "19px" }}>
                <Avatar
                  variant="square"
                  sx={{ width: "50px", height: "50px", mt: "0px" }}
                  alt={alt}
                  src={img}
                />
              </ListItemAvatar>
              <ListItemText
                sx={{
                  width: "166px",
                  fontSize: "12px",
                  lineHeight: "17px",
                  height: "62px",
                  mt: "0",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
                primary={name}
                secondary={
                  <>
                    <Typography
                      sx={{
                        display: "inline",
                      }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    ></Typography>
                    {description}
                  </>
                }
              />
              {btn === "Follow" ? (
                <Button
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
                  {btn}
                </Button>
              ) : (
                <Button
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
                  {btn}
                </Button>
              )}
            </ListItem>
            <Divider variant="inset" component="li" sx={{ ml: "0px" }} />
          </>
        );
      })}
    </List>
  );
}

export default AlignItemsList;
