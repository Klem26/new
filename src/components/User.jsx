import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function User({ id, img, alt, name, description, status, onToggleSubscriber }) {
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
      <Divider variant="inset" component="li" sx={{ ml: "0px" }} />
    </>
  );
}

export default User;
