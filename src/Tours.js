import React from 'react'
import Tour from './Tour'

const Tours = ({data , remove}) => {
  return (
    <section>
      <div className='title'>
        <h2 >Our Tours</h2>
      </div>
      <div className='underline'></div>
      <div>
        {data.map((tour) => {
          return <Tour key={tour.id} {...tour} remove ={remove} />
        })}
      </div>
  </section>
  )
}

export default Tours


