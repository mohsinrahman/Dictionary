import React, { useState, useRef} from 'react'
import "./SearchBar.css";

export default function SearchBar() {
const [searchInput, setSearchInput] = useState("");
const [info, setInfo] = useState([]);
const inputRef = React.useRef(null)
const [error, setError] = React.useState(false)
function handleSubmit(event) {
event.preventDefault();
const value = inputRef.current.value

  if (!value) {
    setError(true)
  }

  /* if (searchInput.trim() === "") {
    console.log("Input is empty");
  } else {
    console.log("Input is not empty");
  } */
}
const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  
  const doSearch = () => {
    // declare the data fetching function
    const fetchData = async () => {
      const data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchInput}`);
      const apiWord = await data.json();
      setInfo(apiWord);
      console.log(apiWord);
    }
 
    // call the function
    fetchData()
    
      // make sure to catch any error
      .catch(console.error);
  }
  return (
    <div className='canv'>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef}
    id='country'
    className='countryClass'
   type="text"
   placeholder="Search here"
   data-testid="add-word-input"
   onChange={handleChange}
   value={searchInput} />
    <input
   type="submit"
   className='btn'
   placeholder="Find"
   data-testid="add-word-inputsubmit"
   onClick={doSearch}
   value="Find" />
  
   </form>
   {error && <p> Input field cannot be blank!</p>}



 {info.map((i, index) => { 

 
 
   if(i.phonetic != undefined){
    
   return(
<>
<h1 key={index} className='text'>{i.phonetic} </h1>
{/* {console.log(i.phonetics[1].audio)} */}
{ i.phonetics.length > 0 && i.phonetics[1].audio && (<section className='audio'>
  <p>Audio:</p>
{/*   </section><audio type="audio/mpeg" src={i.phonetics[1].audio} controls autoPlay width="100" style={{height: 20 + 'em'}}/>
 */}  
 <audio controls autoPlay muted>
  <source src={i.phonetics[1].audio} type="audio/ogg" />
  <source src={i.phonetics[1].audio} type="audio/mpeg"/>
  Your browser does not support the audio element.
  </audio>

</section>)

}

</>

   ) 
    
   
   }
})} 

    </div>
  )
}
