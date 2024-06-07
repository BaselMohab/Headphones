
export const initialState = {
    total:  0,
    products: [],
    amount: 0,
}


const reducer = (state,action) => {
    switch(action.type){
        case "add" : {
            return {
                ...state,
                products: action.payload
            }
        }

        case "remove" : {
            return {
                ...state,
                products: action.payload
            }
        }

        case "total" : 
        return {
            ...state,
            total: action.payload,
        }

        case "clearCart" :
            return {
                ...state,
                products: action.payload,
            }

        case "removeItem" : 
        return {
            ...state,
            products : action.payload
        }
        
        case "increase" :
            return {
                ...state,
                products : action.payload
            }

        case "decrease" :
            return {
                ...state,
                products : action.payload
            }

        case "amount" : 
            return {
                ...state,
                amount: action.payload,
            }    

        default: throw Error ("Cannot Add to the total")
    }
}

export default reducer