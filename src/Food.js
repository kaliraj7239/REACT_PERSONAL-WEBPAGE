import * as React from 'react';
//import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
//import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './food.css';
import Food12 from './food12.jpg';
import Food10 from './food10.jpg';

import Food8 from './food8.png';
import Vehicle2 from './vehicle.jpg';
import Vehicle9 from './vehicle5.jpg';

import Vehicle3 from './vehicle1.jpg';
import Vehicle8 from './vehicle2.png';

import Vehicle5 from './vehicle4.jpg';
import Vehicle7 from './vehicle3.png';




//import Kaliraj from './kaliraj.png';


export default function ResponsiveGrid() {
  return (
 
    <Box sx={{ flexGrow: 1 }}>
         <center><h3 style={{marginTop:"50px",fontFamily:"san-serif"}}>🍮FAVOURITE FOODS🍮</h3></center>
      <Grid container  >
        
          <Grid item xs={2} sm={4} md={4} >
             <div id="Foods">

<div class="wrapper">
    <div class="container">
    <div class="row">
        <div class="col-md-6 col-lg-4">
            <div class="card mx-30">
              <img src={Food12} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">

BREAK FAST</h5>
<h6>
IDLI & DOSA</h6>
<p class="card-text">
  The plain idlis and Dosa'es are mild in taste, a condiment is considered essential. Idlis are often served with chutneys (coconut based), sambar and Medu vada. However, this varies greatly by region and personal taste, it is also often served with kaara chutney (onion based) or spicy fish curries. The dry spice mixture podi is convenient while travelling.</p>                
</div>
</div>
</div>
</div>
         </div></div>
         </div>

      </Grid>
    
      <Grid item xs={2} sm={4} md={4} >
             

<div class="wrapper">
    <div class="container">
    <div class="row">
        <div class="col-md-6 col-lg-4">
            <div class="card mx-30">
              <img src={Food10} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">
LUNCH</h5>
<h6>
Full meals</h6>
<p class="card-text">
Therefore, the simplest form of bread is vegan. However, some types include additional ingredients like sweeteners or fats — both of which can be of animal origin. For instance, some recipes may use eggs, butter, milk, or honey                
The humble egg doesn't fall into this category and is therefore included in a vegetarian eating pattern.</p>
             
</div>
</div>
</div>
</div>
         </div></div>
         

      
      </Grid>
      
      <Grid item xs={2} sm={4} md={4} >
             

             <div class="wrapper">
                 <div class="container">
                 <div class="row">
                     <div class="col-md-6 col-lg-4">
                         <div class="card mx-30">
                           <img src={Food8} class="card-img-top" alt="..."/>
                           <div class="card-body">
                             <h5 class="card-title">
             DINNER</h5>
             <h6>
             Chapati & Dosa</h6>
             <p class="card-text">
               The Chapaties and Dosa'es are mild in taste, a condiment is considered essential. Idlis are often served with chutneys (coconut based), sambar and Medu vada. However, this varies greatly by region and personal taste, it is also often served with kaara chutney (onion based) or spicy fish curries. The dry spice mixture podi is convenient while travelling.</p>                
             
             </div>
             </div>
             </div>
             </div>
                      </div></div>
                      
             
                   
                   </Grid>
                   <Grid item xs={2} sm={4} md={4} >
             

             <div class="wrapper">
                 <div class="container">
                 <div class="row">
                     <div class="col-md-6 col-lg-4">
                         <div class="card mx-30">
                           <img src={Vehicle2} class="card-img-top" alt="..."/>
                           <div class="card-body">
                             <h5 class="card-title">
                            BI CYCLE </h5>
             <h6>
             So many times</h6>
             <p class="card-text">
             “You never have the wind with you — either it is against you or you're having a good day.” “Life is like riding a bicycle – in order to keep your balance, you must keep moving.” “Don't buy upgrades, ride up grades.”.</p> 
             </div>
             </div>
             </div>
             </div>
                      </div></div>
                      
             
                   
                   </Grid>
                   <Grid item xs={2} sm={4} md={4} >
             

             <div class="wrapper">
                 <div class="container">
                 <div class="row">
                     <div class="col-md-6 col-lg-4">
                         <div class="card mx-30">
                           <img src={Vehicle3} class="card-img-top" alt="..."/>
                           <div class="card-body">
                             <h5 class="card-title">
                             CYCLE</h5>
             <h6>
             So many times</h6>
             <p class="card-text">
             Driving a 30 Ft Yellow brick with wheels full of screaming bouncing kids is so easy! Said no bus driver ever.</p>
             </div>
             </div>
             </div>
             </div>
                      </div></div>
                      
             
                   
                   </Grid>
                   <Grid item xs={2} sm={4} md={4} >
             

             <div class="wrapper">
                 <div class="container">
                 <div class="row">
                     <div class="col-md-6 col-lg-4">
                         <div class="card mx-30">
                           <img src={Vehicle8} class="card-img-top" alt="..."/>
                           <div class="card-body">
                             <h5 class="card-title">
                             BIKE</h5>
             <h6>
             So many times</h6>
             <p class="card-text">
             Driving a 30 Ft Yellow brick with wheels full of screaming bouncing kids is so easy! Said no bus driver ever.</p>
             </div>
             </div>
             </div>
             </div>
                      </div></div>
                      
             
                   
                   </Grid>
                   <Grid item xs={2} sm={4} md={4} >
             

             <div class="wrapper">
                 <div class="container">
                 <div class="row">
                     <div class="col-md-6 col-lg-4">
                         <div class="card mx-30">
                           <img src={Vehicle7} class="card-img-top" alt="..."/>
                           <div class="card-body">
                             <h5 class="card-title">
                             SCHOOL BUS</h5>
             <h6>
             So many times</h6>
             <p class="card-text">
             Driving a 30 Ft Yellow brick with wheels full of screaming bouncing kids is so easy! Said no bus driver ever.</p>
             </div>
             </div>
             </div>
             </div>
                      </div></div>
                      
             
                   
                   </Grid>
                   <Grid item xs={2} sm={4} md={4} >
             

             <div class="wrapper">
                 <div class="container">
                 <div class="row">
                     <div class="col-md-6 col-lg-4">
                         <div class="card mx-30">
                           <img src={Vehicle5} class="card-img-top" alt="..."/>
                           <div class="card-body">
                             <h5 class="card-title">
                             TRAIN</h5>
             <h6>
             So many times</h6>
             <p class="card-text">
             What is the longest train trip in the world?
                        Image result
                        The Trans–Siberian Railway which connects Moscow with the Russian far east is still the world's longest direct rail route, running for 9,259 kilometers or 5,753 miles. </p>
                          </div>
             </div>
             </div>
             </div>
                      </div></div>
                      
             
                   
                   </Grid>
                   <Grid item xs={2} sm={4} md={4} >
             

             <div class="wrapper">
                 <div class="container">
                 <div class="row">
                     <div class="col-md-6 col-lg-4">
                         <div class="card mx-30">
                           <img src={Vehicle9} class="card-img-top" alt="..."/>
                           <div class="card-body">
                             <h5 class="card-title">
             AEROPLANE</h5>
             <h6>
             So many times</h6>
             <p class="card-text">
             An airplane or aeroplane (informally plane) is a fixed-wing aircraft that is propelled forward by thrust from a jet engine, propeller, or rocket engine. Airplanes come in a variety of sizes, shapes, and wing configurations.
              </p>
            </div>
             </div>
             </div>
             </div>
                      </div></div>
                      
             
                   
                    
                                       
</Grid>
    </Grid>
    </Box>
  );
}
