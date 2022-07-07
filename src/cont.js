// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import './cont.css';
// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// export default function Cont() {
//   return (
//     <div style={{marginTop:"70px"}}>
//        <center> <h2>Contact Me</h2>
//     <p>I am from sankarankovil in Tenkasi district.<br/>currently,Iam pursuing BE computer science and engineering from Arjun College of Technology from Coimbatore.so,now am here.</p>
//     </center>
//     <Box sx={{ width: '100%' }}>
//       <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
//         <Grid item xs={6}>
//         <div class="contactt">
//   <div class="contentt">
//      </div>
//   <div class="containerr">
//     <div class="contactinfo">
//       <div class="box">
//         <div class="icon">
// <a href="https://goo.gl/maps/XKgpzdyonkqfQaju8">
//           <i class="fa fa-map-marker" aria-hidden="true"/></a></div>
//         <div class="text">
//             <h3>Address</h3>
//             <p>26a/1,First street,Idaiyankulam,<br/>Duraisamiyapuram(post),<br/>Sivagiri(taluk),<br/>Tenkasi(dist),Tamilnadu-627757</p>
         
//         </div>
//       </div>
      
//       <div class="box">
//       <div class="icon"><i class="fa fa-phone-square" aria-hidden="true"></i></div>
//       <div class="text">
//         <h3>Phone</h3>
//         <p>507-475-6094</p>
     
//     </div>
//   </div>
//   <div class="box">
//     <div class="icon"><i class="fa fa-envelope" aria-hidden="true"></i> </div>
//     <div class="text">
//       <h3>E-mail</h3>
//       <p>wrub7d78i0e@temporary-mail.net</p>
   
//   </div>
// </div>
//     </div>
//     </div>
//     </div>
//         </Grid>
//         <Grid item xs={6}>
//         <div class="contactform">
//       <form>
//         <h3>Send Message</h3>
//         <div class="inputBox">
//           <input type="text" class="name"  required=" required" pattern="[a-zA-Z]{0-20}"/>
//           <span>Full Name</span>
//         </div>
       
        
           
//             <div class="inputBox">
//               <input type="text" name=""  required=" required" pattern="[a-z0-9._%+-]+@[a-z0-9._]+\.[a-z](2,3)$"/>
//               <span>E-mail</span>
//             </div>

//             <div class="inputBox">
//               <textarea required=" required"></textarea>
              
//                 <spam>Type Your Message...</spam>
//                 </div>
//                 <div class="inputBox">
//                   <input type="submit" value="submit"/>
                  
//                 </div>
//       </form>
//     </div>
  
//         </Grid>
        
//       </Grid>
//     </Box>
//     </div>
//   );
// }


//import React from 'react';
import './App.css';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import React, { useState } from "react";
import './cont.css'
export default function Cont(){
  const [text, setText] = useState();
    return(
      <Box className='conmain' >
      <div style={{marginTop:"60px"}}>
        <center> <h3  style={{fontStyle:"inherit", color:"#00bcd4"}}>Contact Me</h3>
    <p style={{color:"white"}}>I am from sankarankovil in Tenkasi district.<br/>currently,Iam pursuing BE computer science and engineering from Arjun College of Technology from Coimbatore.so,now am here.</p>
    </center>
            <Grid container spacing={2}>
            <Grid item xs={6}>
            <div class="item"  style={{marginLeft:"350px",marginTop:'100px',color:"white"}}>
     <h3 style={{color:"#00bcd4"}}>  < LocationOnIcon></LocationOnIcon>Address</h3>
                <p>26a/1,First street,Idaiyankulam,<br/>Duraisamiyapuram(post),<br/>Sivagiri(taluk),<br/>Tenkasi(dist),Tamilnadu-627757</p>

       <h3 style={{color:"#00bcd4"}}><EmailIcon></EmailIcon>Email</h3>
       <p>kaliraj7239@gmail.com</p><br/>
       <h3 style={{color:"#00bcd4"}}><PhoneIcon></PhoneIcon>Phone</h3>
       <p>+91 8940809477</p>
       </div>
        </Grid>
        <Grid item xs={6}>
        <div style={{marginLeft:'26px',marginTop:'30px'}}>
            <Box
      sx={{
        width: 500,
        height: 700,
      
      }}
    ><br/>
      <center><h3 style={{color:"#00bcd4"}}>Message Here...</h3>

<TextField
          required
          id="outlined-required"
          label="First Name"
          validationState="invalid"
          validationText="Please enter a user name of your choice."

         placeholder='Enter your First Name...'
         
        style={{width:'350px', fontColor:"red"}}
        /><br/><br/>
<TextField
         
          id="outlined-required"
          label="Last Name"
          color='secondary'
         placeholder='Enter your Last number...'
         style={{width:'350px'}}
         required
        /><br/><br/>
        <TextField
          required
          id="outlined-required"
         
          label="Email"
         placeholder='Enter your Email id...'
         style={{width:'350px',color:"white"}}
        /><br/><br/>
                        <TextField
                        
          id="outlined-textarea"
          color='secondary'
          label="Message"
          placeholder="Write something..."
          multiline
          style={{width:'350px',height:'80px'}}
        /><br/><br/><br/>


<Button variant="contained" color="secondary" style={{width:'150px'}} >
  Submit
</Button></center>
    </Box>
  </div>
 
  
         
        </Grid>
        
    </Grid>
            </div>
            
          
            </Box>
      

        
            
            
            
    );
}