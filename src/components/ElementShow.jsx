import React from 'react'
import Element from "../components/Element";

const Recommended = ({Title}) => {
  
  const fetchData = () => {

  
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=365a153ca89400a4c6bd390fbbe93f59')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
    console.log(data);
  }

  return (
    <div className='container-trends'>
        <div className='trend-title'>
            {Title}
        </div>
        <Element/>
    </div>
  )
}

export default Recommended