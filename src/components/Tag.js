import Spinner from './spinner'
import useGif from '../hooks/useGif';
import { useState } from 'react';


const Tag = () => {
    const [tag,setTag]=useState("naruto")
    const {gif,loading,fetchData}=useGif(tag);

  return (
    <div className='randomDiv'>
      <h1>Random {tag} GIF</h1>
      {loading ? (<Spinner/>):(<img className='randomImg' src={gif} width={450} alt='Random-gif'/>)}

      <input className='inputTag' type='text' name='tagName' onChange={(event)=>{
        setTag(event.target.value)
      }} value={tag}/>

      <button className='btn inputbtn' onClick={()=>{
        fetchData(tag);
      }}>Generate GIF</button>

    </div>
  )
}

export default Tag
