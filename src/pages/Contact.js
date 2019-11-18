import React from "react";
import {
  FormControl,
  InputLabel,
  Input,
  Button,
} from "@material-ui/core";

class Contact extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: 20,
          padding: 20
        }}
      >
        <form  action="https://formspree.io/mayypygn" method="POST" style={{ width: "50%" }}>
          <h1>Contact Form</h1>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input id="name" name="name" type="text" />
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input id="email" type="email" name="_replyto"/>
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="email">Message</InputLabel>
            <Input id="text" name="message" multiline rows={10} />
          </FormControl>

          <Button type="submit" variant="contained" color="primary" size="medium">
            Send
          </Button>
        </form>
      </div>
    );
  }
}

export default Contact;