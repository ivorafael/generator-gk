import React from 'react'
import { mount, shallow } from 'enzyme'
import { expect } from 'chai'

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

import GkModule from './module'

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

describe( '<GkModule/>', () => {

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  it( 'should have the className .gk-module', () => {
    const rendered = shallow( <GkModule /> );
    expect( rendered.is( '.gk-module' ) ).to.equal( true );
  } )

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  // it( 'should have a button element', () => {
  //   const rendered = shallow( <GkModule /> );
  //   expect( rendered.find( 'button' ) ).to.have.length( 1 );
  // } )

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  // it( 'should have a label property', () => {
  //   const rendered = shallow( <GkModule /> );
  //   expect( rendered.props().label ).to.be.defined;
  // } )

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

} )