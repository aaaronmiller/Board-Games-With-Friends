import React, { Component } from 'react';
import { MDBContainer } from 'mdbreact';
import NewsCard from "./NewsCard";
import API from '../utils/API';


export default class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newsArticles: [],
            redirectPath: "/news",
            isLoggedIn: sessionStorage.getItem("isLoggedIn")
        };
    }
    componentDidMount = () => {
        this.renderRedirect();
        this.loadNewsArticles();
    }
    loadNewsArticles = () => {
        API.getNews ()
            .then((Response) => {
                this.setState(
                    {
                        newsArticles: Response.data
                    }
                )
                console.log(Response);
                console.log(this.state.newsArticles);

            })
            .catch(function (error) {
                console.log(error)
            });

    }

    render() {
        return (
            <div>
                <MDBContainer>
                    <div>
                        <h1 className="text-white">
                            Boardgames in the News
                        </h1>
                        <div className="d-flex flex-row flex-wrap">
                            {this.state.newsArticles.map((data) => 
                                (<NewsCard key={data.id} gameTitle={data.title} summary={data.summary} image={data.image} link={data.link} />))}
                        </div>
                    </div>
                </MDBContainer>
                {/* why is this part here?
                    <Redirect to={this.state.redirectPath} />
                */}
            </div>
        )
    }

}