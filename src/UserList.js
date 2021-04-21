import React, { useEffect, useState } from "react";

import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import axios from "axios";
import "./App.css";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: "#757de8",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    color: "#fff",
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const UserList = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const [users, setUsers] = useState([]);
  const result = axios.get("https://jsonplaceholder.typicode.com/users");

  useEffect(() => {
    result.then((response) => setUsers(response.data));
  }, []);
  

  return (
    <Container maxWidth="sm">
      {users.map((user) => (
        <>
          <Card className={classes.root}>
            <CardContent key={user.id}>
              <Typography color="textPrimary" gutterBottom>
                {bull} {user.name}
              </Typography>
              <Typography className={classes.title} variant="h5" component="h2">
                {user.username}
              </Typography>
              <Typography color="textSecondary">{user.email}</Typography>
            </CardContent>
            <Divider />
          </Card>
        </>
      ))}
    </Container>
  );
};

export default UserList;
