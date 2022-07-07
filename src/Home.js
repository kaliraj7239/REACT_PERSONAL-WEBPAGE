import React from "react";
import Grid from '@mui/material/Grid';
import './mystyle.css';
//import { AiOutlineUser } from "react-icons/ai";
//import {
 // Nav,
  //Navbar,
  //NavbarBrand,
  //NavbarText,
  //NavItem,
 // NavLink,
//} from "reactstrap";
import Kaliraj from'./kaliraj.png';
const Home1=()=>{
  return(
<div style={{marginTop:'10vh'}}>  
  <React.Fragment>

  
<div className="headers"  >

<Grid container spacing={2}>
<Grid  item xs={6} md={6}>
    <div class="leftside">
<h3></h3>
<h1 id="item2">KALIRAJ A</h1>
<h2 id="item3" style={{fontSize:"30px"}}>I am pursuing BE Computer Science and Engineering in Arjun College of Technology from Pollachi.</h2>

                        </div>
                        </Grid>
                        <Grid  item xs={6} md={6}>
    <div class="rightside">
        <img src={Kaliraj} alt="kali"/>
       

    </div>
    </Grid>
    </Grid>
</div>
</React.Fragment>
</div>
);
}
export default Home1;