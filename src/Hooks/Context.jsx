import React, { useContext } from 'react';

const AppContext = React.createContext();
const AppProvider =({children})=>{
    const handleNextBtn=()=>{
        const items=document.querySelectorAll('.item');
        document.querySelector('.slide').appendChild(items[0]);
    }
    const handlePrevBtn=()=>{
        const items=document.querySelectorAll('.item');
        document.querySelector('.slide').prepend(items[items.length - 1]);
    }
    return(
        <>
            <AppContext.Provider value={{handleNextBtn,handlePrevBtn}}>
                {children}
            </AppContext.Provider>
        </>
    );
}
const useGlobalContext = ()=>{
    return useContext(AppContext);
}
export {AppContext,AppProvider,useGlobalContext};