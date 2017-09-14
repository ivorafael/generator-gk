import { simpleInstance, secureInstance } from '../../utilities/ajax'
import Env from '../../utilities/env'

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export function fetchSimplePage() {
  return function ( dispatch ) {
    dispatch( { type: 'FETCH_SIMPLE_PAGE' } )

    return simpleInstance.get( Env.getUrl( '/endpoint' ) ).then( ( response ) => {

      dispatch( { type: 'FETCH_SIMPLE_PAGE_SUCCESS', payload: response.data } );
      return response;

    }).catch(( error ) => {

      dispatch( { type: 'FETCH_SIMPLE_PAGE_ERROR', payload: error } );
      return Promise.reject( error );

    })
  }
}

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  