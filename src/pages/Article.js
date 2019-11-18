import React from "react";
import Loading from "../components/Loading";

import { NavLink } from 'react-router-dom';
import { Grid, Typography, Box, Container } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';
import { SocialIcon } from 'react-social-icons';

//import axios from "axios";

const API_URL = 'http://localhost:3001'

//import posts from "../data/my-posts";

class Article extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        post: [],
        isLoading: true,
        error: null,
    };
}

componentDidMount(props) {

  let id = this.props.match.params.id;
    /*
    const url = API_URL + '/posts/'+ id;
    axios.get(url)
        .then(response => response.data)
        .then((data) => {
            this.setState({ post:data, isLoading: false })
        })
        .catch(error => this.setState({ error, isLoading: false }));
    */
    
    fetch(API_URL + '/posts/'+ id)
        .then(response => response.json())
        .then(data => this.setState({ post: data, isLoading: false }))
        .catch(error => this.setState({ error, isLoading: false }));
   
}

  render() {

    const { post, isLoading, error } = this.state;
    console.log(isLoading);

    if(error){
      return (
        <div style={{ marginTop:20, marginBottom: 20 }}>
          <Grid container justify="center">
            <p>{error.message}</p>
          </Grid>
        </div>
      )
    }
    if(isLoading){
      return (
        <div style={{ marginTop:20, marginBottom: 20 }}>
          <Loading/>
        </div>
      )
    }

    return (
      <div style={{ marginTop:20, marginBottom: 20 }}>
      
        <Container fluid spacing={2} justify="center" mx="auto">
          <Box container>

              <Grid item key={post.id}>
                      

                <Card>

                  <CardActionArea>
                  <Container fluid spacing={2} justify="center" maxWidth="md" mx="auto">
                    <CardMedia
                      component="img"
                      alt={`${post.image}`}
                      image={post.image}
                      title={post.title}
                    />
                  </Container>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {post.title}
                      </Typography>
                      <Typography component="p">{post.text}</Typography>
                    </CardContent>

                  </CardActionArea>

                  <CardActions>
                    <NavLink exact to="/blog" style={{ textDecoration: 'none', color: 'inherit' }}>
                      <Button size="small" color="primary">
                        Torna indietro
                      </Button>
                      
                    </NavLink>
                    <TwitterShareButton url='google.com'>
                      <SocialIcon url="https://twitter.com" size={32} round={true} />
                    </TwitterShareButton>
                    <FacebookShareButton url='google.com' >
                      <SocialIcon url="https://facebook.com" size={32} round={true} />
                    </FacebookShareButton>
                    <WhatsappShareButton url="google.com">
                      <SocialIcon url="https://whatsapp.com" size={32} round={true} />
                    </WhatsappShareButton>
                    
                  </CardActions>

                </Card>

              </Grid>

          </Box>
        </Container>
      </div>
    ) 
  }
}


export default Article;
