import React from 'react';
import { NavLink } from 'react-router-dom';
import Loading from "../components/Loading";
import {
    Typography, 
    Grid, 
    Card, 
    CardActions, 
    CardContent, 
    CardMedia, 
    Button, 
    CardActionArea,
    Container
} from '@material-ui/core';
//import post from '../data/my-posts';

//import axios from "axios";

const API_URL = 'http://localhost:3001'

class Blog extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            isLoading: true,
            error: null,
        };
    }
    
    componentDidMount() {
        /*
        const url = API_URL + '/posts';
        axios.get(url)
            .then(response => response.data)
            .then((data) => {
                this.setState({ posts:data, isLoading: false })
            })
            .catch(error => this.setState({ error, isLoading: false }));
        */
        
        fetch(API_URL + '/posts')
            .then(response => response.json())
            .then(data => this.setState({ posts: data, isLoading: false }))
            .catch(error => this.setState({ error, isLoading: false }));
    }
    
    render() {

        const { posts, isLoading, error } = this.state;
        
        return (
            <div style={{ marginTop:20, marginBottom: 20 }}>

                {error ? (
                    <Grid container justify="center">
                    <p>{error.message}</p>
                    </Grid>)
                 : null}

                {!isLoading ? (

                <Grid container fluid spacing={2} justify="center">
                    {posts.map( (post, index) => (
                        <Grid item key={post.title}>
                            <Card>
                                <CardActionArea>
                                    <NavLink 
                                            exact to={ `/blog/${post.id}` } 
                                            style={{textDecoration:'none', color:'inherit'}}
                                            >
                                        <Container justify="center" maxWidth="xs" mx="auto">

                                        <CardMedia
                                            component="img"
                                            alt={`${post.image}`}
                                            image={post.image}
                                            title={post.title}
                                        />
                                        </Container>
                                        <CardContent>
                                        
                                            <Typography gutterButton variant="h5" component="h2">
                                                {post.title}

                                            </Typography>
                                            <Typography component="p">
                                                {post.excerpt}
                                            </Typography>
                                            
                                        </CardContent>
                                    </NavLink>
                                </CardActionArea>
                                <CardActions>
                                    <NavLink 
                                        exact to={ `/blog/${post.id}` } 
                                        style={{textDecoration:'none', color:'inherit'}}
                                        >
                                        <Button size="small">
                                            Leggi Tutto
                                        </Button>
                                    </NavLink>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                ) : <Loading/>}
            </div>
        )
    }
}

export default Blog;