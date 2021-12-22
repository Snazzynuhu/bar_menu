import React from 'react';
import { useGlobalContext } from '../Context';
import './components.style.css';
import Loading from './Loading';
import { Link } from 'react-router-dom';


const Cocktails = () => {
const {cocktails, loading} = useGlobalContext();
if(loading){
return <Loading/>
}
if(cocktails.length < 1){
    return <h1>No cocktail matched your searched criteria</h1>
}

    return (
        <section className='cocktail-container'>
            {cocktails.map((cocktail)=>{
                const {idDrink, strAlcoholic, strDrink, strDrinkThumb, strGlass, strIngredient1} = cocktail;
                return (
                    <article key={idDrink} className='single-cocktail'>
                            <div className='cocktail-img-box'>
                                <img src={strDrinkThumb} alt='cocktail-img' className='cocktail-img'/>
                            </div>
                            <h2>{strDrink}</h2>
                            <h4>Served in : <span>{strGlass}</span> </h4>
                            <Link className='link' to={`/cocktail/${idDrink}`}>Details</Link>
                    </article>
                )
            })}
        </section>
    )
}

export default Cocktails
