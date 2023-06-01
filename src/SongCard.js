// this mirrors the HornedBeast.js file

import React from "react";
import Card from "react-bootstrap/Card";
import './SongCard.css'

class SongCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [],
      // artist: this.state.artist
    }
  }

  render() {
return (
      <>

    <Card className='Artist'>
      <Card.Body>
        <Card.Img src={this.props.image}></Card.Img>
        <Card.Title>Song: {this.props.title}</Card.Title>
        <Card.Title>Album: {this.props.album}</Card.Title>
        <Card.Title>Artist: {this.props.name}</Card.Title>
        <Card.Text onClick={() => this.props.addFavorite(this.props.artist)}>:heart:</Card.Text>
      </Card.Body>
      </Card>
      </>
    )
  }
}
    
export default SongCard;
// export default withAuth0(SongCard);
