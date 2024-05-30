import { createContext, useReducer, useContext } from "react"
import reducer, {initialState} from './reducer';



const StoreContext = createContext();




const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const add = (product) => {
        const updatedCart = [...state.products, product];

        getTotal(updatedCart)

        dispatch ({
            type: "add",
            payload: updatedCart
        })
    }


    const remove = (product) => {
        const updatedCart = state.products.filter((currentProduct) => currentProduct.id !== product.id)

        getTotal(updatedCart)

        dispatch ({
            type: "remove",
            payload: updatedCart
        })
    }

    
    const clearCart = () => {
        let products = []
        let amount = 0

        dispatch ({
            type: "clearCart",
            payload: products
        })
        
        dispatch ({
            type: "amount",
            payload: amount
        })
    }
    
    const increase = (product) => {
        let tempCart = state.products.map((currentProduct) => {
            if (currentProduct.id === product.id){
                return {...currentProduct, amount: currentProduct.amount + 1}
            }
            return currentProduct
        })
        
        getTotal(tempCart)
        
        dispatch ({
            type : "increase",
            payload: tempCart
        })
    }
    
    const decrease = (product) => {
        let tempCart = state.products.map((currentProduct) => {
            if (currentProduct.id === product.id){
                return {...currentProduct, amount: currentProduct.amount - 1}
            }
            return currentProduct
        })
        .filter((currentProduct) => currentProduct.amount !== 0)
        
        getTotal(tempCart)
        
        dispatch ({
            type : "decrease",
            payload: tempCart
        })
    }
    
    
    const getTotal = (products) => {
        let total = 0
        let amount = 0
        products.forEach(product => {
            total += product.price * product.amount;
            amount += product.amount
        })

        dispatch ({
            type: "total",
            payload: total
        });

        dispatch ({
            type: "amount",
            payload: amount
        });


        return {total, amount}
    }
    
return (
    <StoreContext.Provider
    value={{
            total: state.total,
            products: state.products,
            amount: state.amount,
            add,
            remove,
            clearCart,
            increase,
            decrease,
            }}
    >
        {children}
    </StoreContext.Provider>
)
}

export const useGlobalContext = () =>{
    return useContext(StoreContext);
}

export {StoreContext, AppProvider};
