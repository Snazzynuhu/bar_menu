import React,{ useContext } from 'react';
import './components.style.css';
import { useGlobalContext } from '../Context';


const SearchForm = () => {
    const {setSearchTerm} = useGlobalContext();

    const searchRef = React.useRef('');

    const searchDrinks = () => {
        setSearchTerm(searchRef.current.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
    return (
        <div> 
        <form onSubmit={handleSubmit}>
            <label htmlFor='cocktail'>Search your favourite cocktail</label>
            <input type='text'  name='cocktail' placeholder='margarita' id='cocktail' ref={searchRef} onChange={searchDrinks}/>
        </form>
        </div>
    )
}

export default SearchForm
