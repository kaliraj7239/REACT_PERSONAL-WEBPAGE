// import React, { useEffect, useState } from 'react';
// import './App3.css';
// import Kaliraj from './kaliraj.png'
// //import images from './data';
// import { SRLWrapper } from 'simple-react-lightbox';
// const images =[
//     { id: '1', image:'./kaliraj.png', tag: 'free' },
// 	{ id: '2', imageName: 'interest1', tag: 'new' },
// 	{ id: '3', imageName: 'img3.jpeg', tag: 'pro' },
// 	{ id: '4', imageName: 'img4.jpeg', tag: 'pro' },
// 	{ id: '5', imageName: 'img5.jpeg', tag: 'free' },
// 	{ id: '6', imageName: 'img6.jpeg', tag: 'new' },
// 	{ id: '7', imageName: 'img6.jpeg', tag: 'pro' },
// 	{ id: '8', imageName: 'img8.jpeg', tag: 'free' },
// 	{ id: '9',  imageName: 'img9.jpeg', tag: 'new' },
// 	{ id: '10', imageName: 'img10.jpeg', tag: 'new' },
// 	{ id: '11', imageName: 'img11.jpeg', tag: 'new' },
// 	{ id: '12', imageName: 'img12.jpeg', tag: 'new' },
// 	{ id: '13', imageName: 'img13.jpeg', tag: 'free' },
// 	{ id: '14', imageName: 'img14.jpeg', tag: 'pro' },
// 	{ id: '15', imageName: 'img15.jpeg', tag: 'free' },
// 	{ id: '16', imageName: 'img16.jpeg', tag: 'new' }
// ];


// const options = {
// 	// settings: {
// 	// 	overlayColor: 'rgb(25, 136, 124)',
// 	// 	autoplaySpeed: 1500,
// 	// 	transitionSpeed: 900
// 	// },
// 	// buttons: {
// 	// 	backgroundColor: 'red',
// 	// 	iconColor: 'rgba(126, 172, 139, 0.8)'
// 	// },
// 	// caption: {
// 	// 	captionColor: '#a6cfa5',
// 	// 	captionFontFamily: 'Raleway, sans-serif',
// 	// 	captionFontWeight: '300',
// 	// 	captionTextTransform: 'uppercase'
// 	// },
// 	// progressBar: {
// 	// 	height: '20px',
// 	// 	fillColor: 'blue',
// 	// 	backgroundColor: 'white'
// 	// }
// };

// export default function App3() {
// 	const [tag, setTag] = useState('all');
// 	const [filteredImages, setFilteredImages] = useState([]);

// 	useEffect(
// 		() => {
// 			tag === 'all' ? setFilteredImages(images) : setFilteredImages(images.filter(image => image.tag === tag));
// 		},
// 		[tag]
// 	);

// 	return (
// 		<div className="App">
// 			<div className="tags">
// 				<TagButton name="all" tagActive={tag === 'all' ? true : false} handleSetTag={setTag} /> /
// 				<TagButton name="new" tagActive={tag === 'new' ? true : false} handleSetTag={setTag} /> /
// 				<TagButton name="free" tagActive={tag === 'free' ? true : false} handleSetTag={setTag} /> /
// 				<TagButton name="pro" tagActive={tag === 'pro' ? true : false} handleSetTag={setTag} />
// 			</div>
// 			<SRLWrapper >
// 				<div className="container">
// 					{filteredImages.map(image => (
// 						<div key={image.id} className="image-card">
// 							<a href={`/images/${image.imageName}`}>
// 								<img className="image" src={`/images/${image.imageName}`} alt="" />
// 							</a>
// 						</div>
// 					))}
// 				</div>
// 			</SRLWrapper>
// 		</div>
// 	);
// }

// const TagButton = ({ name, handleSetTag, tagActive }) => {
// 	return (
// 		<button className={`tag ${tagActive ? 'active' : null}`} onClick={() => handleSetTag(name)}>
// 			{name.toUpperCase()}
// 		</button>
// 	);
// };

import Tabs from "./Tabs";
import Items from "./items";
import Data from "./data";
import React from 'react';
import { useState } from "react";
function App3(){
    const [data, setData] = useState(Data);
    const categoryData = Data.map((value)=>{
          return value.category
     });
    const tabsData= ["all", ...new Set(categoryData)];
    
    const filterCategory=(category) =>{
        if(category=="all"){
            setData(Data);
            return;
        }
       const filteredData =  Data.filter((value)=>{
           return value.category == category;
       })
       setData(filteredData);
    }
    return(
     <div style={{marginTop:"50px", backgroundColor:"violet"}}>
        <div className="container" >
      <div className="row">
      <div className="col-sm-1">
            </div>
            <div className="col-sm-10">
            <Tabs filterCategory={filterCategory} tabsData={tabsData}/>
            <Items data={data} />
            </div>
            <div className="col-sm-1">
                
            </div>
        </div>
           
       </div>
       </div>
    
    )
}
export default App3;