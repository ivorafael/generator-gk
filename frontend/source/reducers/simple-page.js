export default function reducer( state = {

  //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  simplePage: null,
  fetching: false,
  fetched: false,
  fetchingError: null

  //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

}, action ) {
  switch ( action.type ) {

    //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  

    case "FETCH_SIMPLE_PAGE": {
      return {
        ...state,
        simplePage: null,
        fetching: true,
        fetched: false,
        fetchingError: null
      }
    }

    //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  

    case "FETCH_SIMPLE_PAGE_SUCCESS": {
      return {
        ...state,
        simplePage: action.payload,
        fetching: false,
        fetched: true,
        fetchingError: null
      }
    }

    //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    case "FETCH_SIMPLE_PAGE_ERROR": {
      return {
        ...state,
        simplePage: null,
        fetching: false,
        fetched: false,
        fetchingError: action.payload
      }
    }

    //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  }

  return state
}