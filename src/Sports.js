import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import PropTypes from 'prop-types';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { db } from "../firebase";
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import { GridListTile } from '@material-ui/core';

const useStyles = theme =>({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 'auto',
    width: 'auto',
    paddingTop: '52.6%'
  },
});

    var cardStyle = {

  width: '30vw',
  transitionDuration: '0.3s',
  height: '27vw',
   boxShadow: "3px 3px 3px black",
}

var styles = {
  body: {
     backgroundImage : 'url("nature.jpg")',
     backgroundSize: "cover",
     backgroundPosition: "center",
     backgroundRepeat: "no-repeat",
 
 }
}     

class Games extends Component  {

  constructor(props) {
    super(props);

this.state = {
   gameKeys: " "
};
  }

  componentDidMount() {
    for(var i in styles.body){
      document.body.style[i] = styles.body[i];
      }

    db.getGame().on('value', (snapshot) => {
      let newStates = [];
      snapshot.forEach(function(childSnapshot) {
          newStates.push({
          value: childSnapshot.val().value,
          label: childSnapshot.val().label,
          image: childSnapshot.val().image,
          platform: childSnapshot.val().platform,
          genre: childSnapshot.val().genre,
          date: childSnapshot.val().date, 
          dlc: childSnapshot.val().dlc,
          id: childSnapshot.val().id
      });
  });
  this.setState({
      gameKeys: newStates
  });
});
  }
  componentWillUnmount(){
for(var i in styles.body){
    document.body.style[i] = null;
}
  }
  render(){
    const { classes } = this.props;

  return (
            
    <div >
      
     <GridList cols={2} cellHeight="auto" spacing='50' style={{paddingTop: '70px'}} >
      {Object.keys(this.state.gameKeys).map((key, index) => 
        <GridListTile key={key}>
        <Card style={cardStyle}>
         <CardActionArea>
         <CardMedia 
          className={classes.media}
          image={this.state.gameKeys[key].image}
          title={this.state.gameKeys[key].value}
        />
      <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
      {this.state.gameKeys[key].value}
      </Typography>
      <Typography  variant="body2" color="textSecondary" component="p" >
      <b style={{alignItems:"left"}}>Genre:</b> {' '+ this.state.gameKeys[key].genre + ' '} <br/>
      <b>Platform:</b> {' '+ this.state.gameKeys[key].platform + ' '}   <br/>      <b>Release Date: </b> {' '+ this.state.gameKeys[key].date + ' '}
      <br/> <b>DLC:</b>  {' '+ this.state.gameKeys[key].dlc}  
      </Typography>
    </CardContent>
    </CardActionArea>
    </Card>
    <br/><br/>
    </GridListTile>
    
      )}
    </GridList>
    

    </div>
  );
  }
}

Games.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(Games);