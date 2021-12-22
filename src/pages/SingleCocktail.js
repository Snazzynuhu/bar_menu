import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../Context';
import { useParams, Link } from 'react-router-dom';
import Loading from '../components/Loading';
import './pages.style.css';
import Modal from '../components/Modal';

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";


const SingleCocktail = () => {
    const {openModal} = useGlobalContext();
    const {id} = useParams();
    const [loading, setLoading] = useState(false);
    const [cocktail, setCocktail] = useState(null);

    useEffect(()=>{
setLoading(true);
async function getCocktail(){
    try {
     const response = await fetch(`${url}${id}`);
     const data = await response.json();   
     if(data.drinks){
         const {strDrink:name, strDrinkThumb:image, strGlass:glass, strAlcoholic:info, strInstructions:instructions, strIngredient1, strIngredient2, strIngredient3} = data.drinks[0]

         const ingredients = [
             strIngredient1, strIngredient2, strIngredient3,
         ]

         const newCocktail = {name, image, info, instructions, ingredients,}
         setCocktail(newCocktail)
     }
     else{
         setCocktail(null)
     }
     setLoading(false)
    } catch (error) {
        console.log(error);
        setLoading(false)
    }
}
    getCocktail()
    },[id])
    if(loading){
        return <Loading/>
    }
    if(!cocktail){
        return <h1>No cocktail</h1>
    }
    const {name, image, info, instructions, ingredients} = cocktail;
    return (
        <section className='container'>
            <div className='image-box'>
                <img src={image} alt={name} className='image'/>
            </div>
            <article>
            <h3>{name}</h3>
            <p>info : <span>{info}</span></p>
            <p>instructions : <span>{instructions}</span></p>
            <p>ingredients : {ingredients.map((item,index)=>{
                return item && <span key={index}> {item} </span>
            })}</p>
            </article>
            <button className='order-btn' onClick={openModal}>Place Order</button>
            <Modal/>
        </section>
    )
}

export default SingleCocktail
