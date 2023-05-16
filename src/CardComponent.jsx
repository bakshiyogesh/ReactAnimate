import React from 'react';
import {useRef} from 'react';
function Card(props){
    const ref=useRef(null);
    function applyStyle(){
        //ref.current.style.backgroundColor='#DBA617';
        ref.current.style.animation =".5s ease-in 2s infinite alternate slidein";
    }
    // function applyStyle(){
    //     ref.current.style.animation='none';
    // }
    return (<>
      <div className='card' ref={ref} >
        <span className='title'>{props.data[0].title}</span>
        <p>{props.data[0].text}</p>
        <button onClick={applyStyle}>Refer</button>
      </div>
    </>)
  }
export const CardComponent = ({data}) => {
  return (
    <>
    <div>
    <Card data={data} />
    </div>
</>
  )
}
