import React, { Component } from 'react'

export class Newsitems extends Component {
  render() {
    let {title, description, imageurl, newsUrl}= this.props;
    return (
<div className="card" style={{width: "18rem"}}>
  <img src={!imageurl?"https://www.livemint.com/lm-img/img/2023/07/18/600x338/Capture_1689662013627_1689662024594.PNG":imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsUrl} className="btn btn-dark">Read More &rarr;</a>
  </div>
</div>

    )
  }
}

export default Newsitems