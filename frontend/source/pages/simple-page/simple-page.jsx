import React from 'react'
import { connect } from 'react-redux'

import store from '../../store'

import './simple-page.scss'
import GkPage from '../page'

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

@connect(( store ) => {
  return {
  }
} )

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export default class GkSimplePage extends GkPage {

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  constructor( props ) {
    super( props );
    this.displayName = 'GkSimplePage';
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  render() {
    return (

      <div className={`gk-simple-page gk-page ${ this.state.beforeEnter ? 'gk-page--before-enter' : '' }`}>
      </div>

    );
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

}