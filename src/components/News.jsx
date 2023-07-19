import React, { Component } from 'react'
import Newsitems from './Newsitems';

export default class News extends Component {

  "articles" = [];
  constructor() {
    super();
    console.log("heello");
    this.state = {
      articles: this.articles,
      loading: false
    }
  }

  //if you use sample json based news then comment out below async await

  async componentDidMount() {
    console.log("cdm");
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=4e5f0961b9d94002b30ae08726fb61de";
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({ articles: parsedData.articles })
  }


  render() {
    console.log("render method");
    return (
      <>

        <div className="conatiner my-3 mx-3">
          <h2 className='conatiner my-3 mx-3'>MyNewsPortal - Top Headlines</h2>
          <div className="row">
            {this.state.articles.map((element) => {
              return <div className="col-md-4 my-2">
                <Newsitems title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageurl={element.urlToImage} newsUrl={element.url} />
              </div>
            })}

          </div>
        </div>

      </>
    )
  }
}
