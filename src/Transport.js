
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './transport.css';
import Interest from './interest.jpg';
import Interest1 from './interest1.jpg';
import Interest2 from './interest2.jpg';
import Interest3 from './interest3.jpg';

//import Kaliraj from './kaliraj.png';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  
  
  color: theme.palette.text.secondary,
}));

export default function ColumnsGrid() {
  return (

<>
    <Box sx={{ flexGrow: 1 }} style={{paddingTop:"100",backgroundColor:""}}>
         <p class="contain" style={{fontSize:10}}><center><h4> 🏆 𝕄𝕐 𝔽𝔸𝕍𝕆𝕌ℝ𝕀𝕋𝔼 𝕊ℙ𝕆ℝ𝕋𝕊 ℙ𝕃𝔸𝕐𝔼ℝ𝕊 🏆</h4>
    </center></p>
    <br/>
      <Grid container  >
        <Grid item sm={8} align='center' style={{border:"1px solid grey",marginTop:"100px",marginLeft:"200px"}}>
       
            <div id="container">
        <div class="product-details" style={{marginLeft:"60px",marginTop:"45px",backgroundColor:"cyan"}}>
		
         	<h1>USAIN BOLT</h1>
         	<span class="hint-star star">
         		<i class="fa fa-star" aria-hidden="true"></i>
         		<i class="fa fa-star" aria-hidden="true"></i>
         		<i class="fa fa-star" aria-hidden="true"></i>
         		<i class="fa fa-star" aria-hidden="true"></i>
         		<i class="fa fa-star-o" aria-hidden="true"></i>
         	</span>
                <br/>
                <br/>
                <br/>
                <br/>
              
               
         			<p class="information">I was slowing down long before the finish and wasn't tired at all. I could have gone back to the start and done it all over again.</p>
        <div class="control">
            </div>
                    
         </div>
         
<div class="product-image">
	
	<img src={Interest} alt='' style={{height:"400px",width:"455px"}}/>
    <div class="info">
	<h2> Description</h2>
    <ul>
        <li><strong>Country : Jamaican </strong></li>
        <li><strong>DoB : 21 August 1986 (age 35) </strong></li>

        <li><strong>Field : </strong> Athletic</li>

        <li><strong>Achievements : </strong> 5+</li>
        <li><strong>Height : </strong> 1.95 m (6 ft 5 in) </li>
        <li><strong>Weight : </strong> 94 kg (207 lb)</li>
        
    </ul>
</div>
</div>
         </div>  
        </Grid>
        <Grid item sm={8} style={{border:"1px solid grey",marginTop:"50px",marginLeft:"200px"}}>
            <div id="container">
        <div class="product-details" style={{marginLeft:"60px",marginTop:"45px",backgroundColor:"cyan"}}>
            
                     <h1>MS DHONI</h1>
                     <span class="hint-star star">
                         <i class="fa fa-star" aria-hidden="true"></i>
                         <i class="fa fa-star" aria-hidden="true"></i>
                         <i class="fa fa-star" aria-hidden="true"></i>
                         <i class="fa fa-star" aria-hidden="true"></i>
                         <i class="fa fa-star" aria-hidden="true"></i>
                     </span>
                     <br/>
                <br/>
                <br/>
                <br/>
              
                
                <p class="information">"It's like having 100 kgs put over you. That's good enough to weigh you down. After that even if you put a mountain, it will not make a difference." </p>
                <div class="control">
                </div>
                </div>
                <div class="product-image">
                    
                 <img src={Interest3} style={{height:"400px",width:"455px"}}/>    
         <div class="info">
                     <h2> Description</h2>
                   
                     <ul>
                         <li><strong>Country : India </strong></li>
                         <li><strong>DoB : 	7 July 1981 (age 40) </strong></li>
                
                         <li><strong>Field : </strong> Cricket</li>
                
                         <li><strong>Achievements : </strong> 5+</li>
                         <li><strong>Height : </strong>	1.80 m (5 ft 11 in)</li>
                         <li><strong>Batting : </strong>	Right-handed</li>          
                        
                    </ul>
                 </div>
                 </div>
                <div>
                    </div>
                </div>
        </Grid>
        <Grid item sm={8} style={{border:"1px solid grey",marginTop:"50px",marginLeft:"200px"}}>
                       <div id="container">	
            
                         <div class="product-details" style={{marginLeft:"60px",marginTop:"45px",backgroundColor:"cyan"}}>
                            
                         <h1>VISWANATHAN ANAND</h1>
                         <span class="hint-star star">
                             <i class="fa fa-star" aria-hidden="true"></i>
                             <i class="fa fa-star" aria-hidden="true"></i>
                             <i class="fa fa-star" aria-hidden="true"></i>
                             <i class="fa fa-star" aria-hidden="true"></i>
                             <i class="fa fa-star-o" aria-hidden="true"></i>
                         </span>
                         <br/>
                
                <br/>
                <br/>
                <br/>
              
                                 <p class="information">“Emotions tend to get in the way of clear thinking. Whether it’s impatience, frustration,these to consume the mind results in a loss of focus and distraction from learning, and keeps you from taking the right decisions and achieving your goal.</p>        
                            
                            
                     <div class="control">
                        
                        
                        
                     </div>
                                
                    </div>
                        
                     <div class="product-image">
                    
                         <img src={Interest2}  style={{height:"400px",width:"455px"}}/>
                    
                     <div class="info">
                         <h2> Description</h2>
                         <ul>
                         <li><strong>Country : India</strong></li>
                     <li><strong>DOB     : 11 December 1969 (age 52)</strong></li>
            
                             <li><strong>Field : </strong> Chess</li>
                             <li><strong>Title : </strong> Grand master</li>
            
                             <li><strong>Achievements : </strong> 15+</li>
                            <li><strong>Awards : Padma vibhusan,Padma shri</strong> </li>
                            
            
                            
                         </ul>
                     </div>
                     </div>
                     <div>
                        </div>
                        </div>
        </Grid>
        <Grid item sm={8} style={{border:"1px solid grey",marginTop:"50px",marginLeft:"200px"}}>
            
           <div id="container">	
                
                                 <div class="product-details" style={{marginLeft:"60px",marginTop:"45px",backgroundColor:"cyan"}}>
                                    
                                 <h1>SAINA NEHWAL</h1>
                                 <span class="hint-star star">
                                     <i class="fa fa-star" aria-hidden="true"></i>
                                     <i class="fa fa-star" aria-hidden="true"></i>
                                     <i class="fa fa-star" aria-hidden="true"></i>
                                     <i class="fa fa-star" aria-hidden="true"></i>
                                     <i class="fa fa-star-o" aria-hidden="true"></i>
                                 </span>
                                 <br/>
                <br/>
                <br/>
                <br/>
              
                
                                         <p class="information">"Nehwal has achieved several milestones in badminton for India. She is the only Indian to have won at least one medal in every BWF major individual event, namely the Olympics, the BWF World Championships, and the BWF World Junior Championships."</p>                  
                                    
                             <div class="control">
                                
                               
                                
                             </div>
                                        
                             </div>
                                
                             <div class="product-image">
                                
                                 <img src={Interest1}  style={{height:"400px",width:"455px"}} />
                            
                             <div class="info">
                                 <h2> Description</h2>
                                 <ul>
                                     <li><strong>Country : India</strong></li>
                 <li><strong>DOB : 17 March 1990 (age 32)</strong></li>
                                     <li><strong>Field : </strong> Badminton</li>
                                     <li><strong>Achievements : </strong> 15++</li>
                                     <li><strong>Height : </strong>	1.65 m (5 ft 5 in) </li>
                                     <li><strong>Weight : </strong>	65 kg (143 lb</li>
                                    
                                 </ul>
                             </div>
                            
                             </div>
                           </div>
        </Grid>
      </Grid>
    </Box>
    
    <hr/>
    </>
    
     
  );
}

