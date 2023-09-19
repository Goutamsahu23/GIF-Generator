import Spinner from './spinner'
import useGif from '../hooks/useGif'

const Random = () => {
  const {gif,loading,fetchData}=useGif();


  return (
    <div className='randomDiv'>
      <h1>Random GIF</h1>
      {loading ? (<Spinner/>):(<img className='randomImg' src={gif} width={450} height={200} alt='Random-gif'/>)}
      <button className='btn' onClick={()=>{
        fetchData();
      }}>Generate GIF</button>
    </div>
  )
}

export default Random
