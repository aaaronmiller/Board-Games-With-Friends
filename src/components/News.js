import React, { Component } from 'react';
import { MDBContainer, MDBRow , MDBCol, MDBBtn } from 'mdbreact';
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
        // this.handlesubmit();
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

    handlesubmit(event) {
        console.log("scrape in progress");
        API.scrape()
          .then((response) => {
            console.log(response);
            window.location.reload();
            
          })
          .catch(function (error) {
            console.log(error);
          });
      }


    render() {
        return (
            <div>
                <MDBContainer>
                <br />
                <MDBRow>
                <MDBCol>
                    <div>
                        <h1 className="text-white" style= {{textAlign: "center"}}>
                            Boardgames in the News<br />
                            <MDBBtn className="text-white" color="#d50000 red accent-4" style={{ color: "white", textAlign: "center", margin: "30px", borderRadius: "30px", filter: "drop-shadow(10px 10px 9px #000000)" }} href="#" onClick={this.handlesubmit}>Scrape</MDBBtn>
                        </h1>
                        <div className="d-flex flex-row flex-wrap">
                            {this.state.newsArticles.map((data) => 
                                (<NewsCard id={data.id} key={data.id} gameTitle={data.title} summary={data.summary} image={data.image} link={data.link} />))}
                        </div>
                    </div>
                    </MDBCol>
                    </ MDBRow>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </MDBContainer>
                {/* why is this part here?
                    <Redirect to={this.state.redirectPath} />
                */}

            </div>
        )
    }

}