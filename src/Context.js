import React,{useState, useContext, useEffect} from "react";
const AppContext = React.createContext();
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";


const AppProvider = ({children})=>{
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('a');
    const [cocktails, setCocktails] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal=()=>{
        setIsModalOpen(true)
    }
    const closeModal=()=>{
        setIsModalOpen(false)
    }

const fetchData =  async()=>{
    setLoading(true)
   try {
        const res = await fetch(`${url}${searchTerm}`);
    const data = await res.json();
    const drinks = data.drinks;
    if(drinks){
        setCocktails(drinks)
    }
    else{
        setCocktails([])
    }
    setLoading(false);
} catch (error) {
    console.log(error);
    setLoading(false);
   }
};

useEffect(()=>{
    fetchData();
},[searchTerm])


    return <AppContext.Provider value={{
        loading,
        cocktails,
        setSearchTerm,
        isModalOpen,
        openModal,
        closeModal
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext =()=>{
    return useContext(AppContext)
};

export {AppContext, AppProvider};