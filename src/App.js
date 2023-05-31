
import image from './image.jpg';
const App = ()=>{
  return (
    <div className='container'>

        <h1 style={{marginBottom:'0px'}}>Fantasy sports stock trading</h1>
         <div className='line'></div>
       <div className="img-container">
         <img src={image} alt="image" className='img'/>
       </div>
       
        <h2 style={{marginBottom:'2px'}}>Top Movers</h2>
              <div className='line1'></div>
       <div className="basic-info">
             
             
              <div className='short-info'>
                
             <div className='player'>
               <h4 style={{marginBottom:'2px'}}>Chameera</h4>
               <div className='line2'></div>
              <p style={{marginBottom:'0px'}}>⚾ | <span>SL</span> </p>
              <p style={{fontWeight:'10px'}}>23.6<span style={{color:'green'}}>(+23.5%)</span></p>
             </div>

             <div className='player'>
              <h4 style={{marginBottom:'2px'}}>Rishabh Pant</h4>
              <div className='line2'></div>
              <p style={{marginBottom:'0px'}}>🏏 | <span>IND</span> </p>
              <p>43.04<span style={{color:'green'}}>(+72.5%)</span></p>
             </div>

             <div className='player'>
               <h4 style={{marginBottom:'2px'}}>Venkatesh Iyer</h4>
               <div className='line2'></div>
              <p style={{marginBottom:'0px'}}>🏏 | <span>KKR</span> </p>
              <p>28.51<span style={{color:'green'}}>(+69.5%)</span></p>
             </div>

             <div className='player'>
              <h4 style={{marginBottom:'2px'}}>Jasprit Bumrah</h4>
              <div className='line2'></div>
              <p style={{marginBottom:'0px'}}>⚾ | <span>IND</span> </p>
              <p>45.99<span style={{color:'green'}}>(+34.95%)</span></p>
             </div>

             <div className='player'>
               <h4 style={{marginBottom:'2px'}}>Virat Kohli</h4>
               <div className='line2'></div>
              <p style={{marginBottom:'0px'}}>🏏 | <span>RCB</span> </p>
              <p>68.56<span style={{color:'green'}}>(+88.5%)</span></p>
             </div>

             </div>
       </div>
      <h2 style={{marginBottom:'0px'}}>All List</h2>
        <div className='line3'></div>
       <div className='major-info'>
       
        <div className='heading'>
            <div>
              <button style={{marginBottom:'0px'}} className='btn'>Trending</button>
              
            </div>
            <div >
            <button style={{marginBottom:'0px'}} className='btn'>New Players</button>
            
            </div>
            
        </div>
        <div className='last-info'>
          <div className='first-line'>
          <h4 style={{marginTop:'0px',marginBottom:'0px'}}>Devon Conway</h4>
          <h4 style={{marginTop:'5px',marginBottom:'0px'}}> 65.81</h4>
          </div>
         
         <div className='second-line'>
          <p style={{marginTop:'0px'}}>🏏 | <span>NZ</span></p>
          
          <p style={{marginTop:'0px',color:'red'}}>-0.50%</p> 
         </div>
                  
        </div>
        <div className='last-info'>
          <div className='first-line'>
            <h4 style={{marginTop:'0px',marginBottom:'0px'}}>Hardik Pandaya</h4>
            <h4 style={{marginTop:'0px',marginBottom:'0px'}}>34.81</h4>
          </div>
          <div className='second-line'>
          <p style={{marginTop:'0px'}}>🏏 | <span>IND</span></p>        
          <p style={{marginTop:'0px',color:'green'}}>+4.50%</p> 
          </div>
                   
        </div>

        <div className='last-info'>

          <div className='first-line'>
         <h4 style={{marginTop:'0px',marginBottom:'0px'}}>Rashid Khan</h4>
          <h4 style={{marginTop:'0px',marginBottom:'0px'}}>54.56</h4>
          </div>

          <div className='second-line'>
           <p style={{marginTop:'0px'}}>⚾ | <span>GT</span></p>       
          <p style={{marginTop:'0px',color:'green'}}>+0.90%</p>        
          </div>
                    
        </div>

         <div className='last-info'>

          <div className='first-line'>
         <h4 style={{marginTop:'0px',marginBottom:'0px'}}>MS Dhoni</h4>
          <h4 style={{marginTop:'0px',marginBottom:'0px'}}>34.12</h4>
          </div>

          <div className='second-line'>
           <p style={{marginTop:'0px'}}>🏏 | <span>CSK</span></p>       
          <p style={{marginTop:'0px',color:'red'}}>-5.40%</p>        
          </div>
                    
        </div>

         <div className='last-info'>

          <div className='first-line'>
         <h4 style={{marginTop:'0px',marginBottom:'0px'}}>Shubman Gill</h4>
          <h4 style={{marginTop:'0px',marginBottom:'0px'}}>84.88</h4>
          </div>

          <div className='second-line'>
           <p style={{marginTop:'0px'}}>🏏 | <span>GT</span></p>       
          <p style={{marginTop:'0px',color:'green'}}>+80.90%</p>        
          </div>
                    
        </div>
         <div className='last-info'>

          <div className='first-line'>
         <h4 style={{marginTop:'0px',marginBottom:'0px'}}>Mohd Siraj</h4>
          <h4 style={{marginTop:'0px',marginBottom:'0px'}}>74.56</h4>
          </div>

          <div className='second-line'>
           <p style={{marginTop:'0px'}}>⚾ | <span>RCB</span></p>       
          <p style={{marginTop:'0px',color:'green'}}>+70.00%</p>        
          </div>
                    
        </div>
         <div className='last-info'>

          <div className='first-line'>
         <h4 style={{marginTop:'0px',marginBottom:'0px'}}>Mark Wood</h4>
          <h4 style={{marginTop:'0px',marginBottom:'0px'}}>23.06</h4>
          </div>

          <div className='second-line'>
           <p style={{marginTop:'0px'}}>⚾ | <span>LSG</span></p>       
          <p style={{marginTop:'0px',color:'red'}}>-10.70%</p>        
          </div>
                    
        </div>
         <div className='last-info'>

          <div className='first-line'>
         <h4 style={{marginTop:'0px',marginBottom:'0px'}}>Glenn Maxwell</h4>
          <h4 style={{marginTop:'0px',marginBottom:'0px'}}>44.56</h4>
          </div>

          <div className='second-line'>
           <p style={{marginTop:'0px'}}>🏏 | <span>RCB</span></p>       
          <p style={{marginTop:'0px',color:'red'}}>-0.10%</p>        
          </div>
                    
        </div>

       </div>
    </div>
  )
}

export default App;
