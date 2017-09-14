import React from 'react'
import { mount, shallow } from 'enzyme'
import { expect } from 'chai'

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

import GkRawComponent from './raw-component'

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

describe( '<GkRawComponent/>', () => {

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  it( 'should have the className .gk-raw-component', () => {
    const rendered = shallow( <GkRawComponent /> );
    expect( rendered.is( '.gk-raw-component' ) ).to.equal( true );
  } )

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  // it( 'should have a button element', () => {
  //   const rendered = shallow( <GkRawComponent /> );
  //   expect( rendered.find( 'button' ) ).to.have.length( 1 );
  // } )

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  // it( 'should have a label property', () => {
  //   const rendered = shallow( <GkRawComponent /> );
  //   expect( rendered.props().label ).to.be.defined;
  // } )

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

} )