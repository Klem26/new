import List from "@mui/material/List";
import User from "./User";

function AlignItemsList({ users, onToggleSubscriber }) {
  return (
    <List sx={{ width: "100%", minWidth: 360, bgcolor: "background.paper" }}>
      {users.map(({ id, img, alt, name, description, status }) => {
        return (
          <User
            key={id}
            img={img}
            alt={alt}
            name={name}
            description={description}
            status={status}
            id={id}
            onToggleSubscriber={onToggleSubscriber}
          />
        );
      })}
    </List>
  );
}

export default AlignItemsList;
