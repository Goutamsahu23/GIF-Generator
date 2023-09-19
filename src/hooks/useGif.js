import { useState,useEffect } from 'react'
import axios from 'axios'

const url = `https://api.giphy.com/v1/gifs/random?api_key=tAztGDZSNEJjomazw5dbfsPaRusZ8tMh`

const useGif = (tag) => {
    const [gif, setGif] = useState("");
    const [loading, setLoading] = useState(false);

    async function fetchData() {
        try{
        setLoading(true);
        const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false);
        }catch(err){
            alert("network error")
        }
        
    }
    useEffect(() => {
        fetchData('car');
    }, [])

    return {gif,loading,fetchData}
}

export default useGif
