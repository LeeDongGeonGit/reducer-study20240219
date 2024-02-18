

// 초기 상태를 정의합니다.
const initialState = {products:[{id:1,name:"핸드폰",description:"최신형 핸드폰",price:2000,category:"Electronics"},]};

// 리듀서 함수를 정의합니다.
const procuctReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload ];
    case 'DELETE':
      return  state.filter((product) => product.id !== action.payload);
      case 'UPDATE':
  return state.map((product)=>{
    if(product.id === action.payload.id){
      return action.payload;
    }
    return product;

  })
    default:
      return state.products;
  }
};


export default procuctReducer;
