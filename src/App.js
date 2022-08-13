import React, { Component } from "react";
import TabsComponent from "./components/Tabs";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import initialUsers from "./user.json";
import UserList from "../src/components/UserList";
import Filter from "./components/Filter/Filter";
import FilteredUser from "./components/Filter/FilteredUser";
import "./App.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5A5DF6",
    },
    secondary: {
      main: "#5A5DF6",
    },
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 744,
      laptop: 1024,
      desktop: 1200,
    },
  },
});

class App extends Component {
  state = {
    users: initialUsers,
    filter: "",
  };

  toggleSubscriber = (userId) => {
    console.log(userId);
    this.setState((prevState) => ({
      users: prevState.users.map((user) => {
        if (user.id === userId) {
          return {
            ...user,
            status: !user.status,
          };
        }
        return user;
      }),
    }));
  };

  onChangeFilter = (event) => {
    this.setState({ filter: event.currentTarget.value });
  };
  render() {
    const { users, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    const filterUser = users.filter((user) => {
      return user.name.toLowerCase().includes(normalizedFilter);
    });

    return (
      <ThemeProvider theme={theme}>
        <Filter value={filter} onChange={this.onChangeFilter} />
        {filterUser.length !== 0 && filterUser.length < 3 ? (
          <FilteredUser
            users={filterUser}
            onToggleSubscriber={this.toggleSubscriber}
          />
        ) : (
          ""
        )}
        <TabsComponent>
          <UserList users={users} onToggleSubscriber={this.toggleSubscriber} />
        </TabsComponent>
      </ThemeProvider>
    );
  }
}
export default App;
