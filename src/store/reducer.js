import CatalogData from "../mockdata/сatalogData";

const defaultState = CatalogData

export const catalogReducer = (state = defaultState, action) => {
  switch (action.type){
    case 'GET_CATALOG':
      return state

    case 'ADD_NEW_CARD':
      return [...state, action.payload]

    default:
      return state
  }
}