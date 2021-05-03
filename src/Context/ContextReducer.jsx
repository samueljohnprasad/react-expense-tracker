// reducer is a function that takes in the old state and an action => return new state

const ContextReducer=(state ,action )=>{
    let transactions;
      switch(action.type){
          case 'DELETE_TRANSACTION' :
            transactions =state.filter((t)=>{
                console.log("delete",action.payload)
              return t.id!==action.payload
           })
           return transactions;
            case 'ADD_TRANSACTION' :
                transactions=[action.payload,...state];
                return transactions;
         
         default: 
            return state;
      }

}

export default ContextReducer