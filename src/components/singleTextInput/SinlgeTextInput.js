import React, {useEffect} from 'react';
import './SingleTextInput.scss'

function SingleTextInput({ searchTerm, setSearchTerm, collection=[], onSubmit, placeholder = "Search by name", width="93%" }) {

    const styles = {
        "width": width
    }

    // const handleSubmit = ()=>{
    //     onSubmit([...collection, searchTerm])

    // }

    useEffect(() => {
        const keyDownHandler = event => {
          console.log('User pressed: ', event.key);
    
          if (event.key === 'Enter') {
            event.preventDefault();
    
           console.log("HANDLE SUBMIT here")
          }
        };
    
        document.addEventListener('keydown', keyDownHandler);
    
        return () => {
          document.removeEventListener('keydown', keyDownHandler);
        };
      }, []);


    return (
        <input 
            style={styles}
            className="searchBar"
            placeholder={placeholder}
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
        />
    );
}

export default SingleTextInput;