import React, {useState} from 'react'

const Tour = ({ id, image, name, price, info,remove }) => {
  const [readmore, setReadmore] = useState(false);
  
  return (
    <main>
      <div className='single-tour'>
        <img className='tour-image' src={image} alt={image} />
        <div className='tour-head'>
          <h2>{ name}</h2>
          <h2 className='tour-price'>{ price}$</h2>
        </div>
        <div className='tour-info'>{
          readmore? info : `${info.substring(0,200)}`
        }
          <button onClick={() => setReadmore(!readmore)}> {readmore ? 'show less' : ' readmore'}</button>
          
          <button onClick={()=> remove(id)} className='btn'>Not Interested</button>
        </div>
      </div>
   </main>
  )
}

export default Tour