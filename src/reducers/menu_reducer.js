const menuReducer=(state=["Biryani", "Salad", "Ice Cream","cold drink","chawal"],action)=>{
   
    switch(action.type){
        case "Add_Item":
          return [...state, action.payload ]
        case "REMOVE_ITEM":
          return state.filter((item)=>{return item !== action.payload})
        default:
          return state
        
    }
}
export default menuReducer;