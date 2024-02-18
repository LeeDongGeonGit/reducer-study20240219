export const addProduct = (product) => ({
    type: "ADD",
    payload: product
  });
  
  export const deleteProduct = (id) => ({
    type: "DELETE",
    payload: id
  });
  
  export const updateProduct = (product) => ({
    type: "UPDATE",
    payload: product
  });