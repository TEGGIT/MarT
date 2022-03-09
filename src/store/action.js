export const GET_CATALOG = 'GET_CATALOG'
export const ADD_NEW_CARD = 'ADD_NEW_CARD'

export const getCatalogAction = (payload) => {
  return {
    type: GET_CATALOG,
    payload
  }
}

export const addNewCardAction = (payload) => {
  return {
    type: ADD_NEW_CARD,
    payload
  }
}
