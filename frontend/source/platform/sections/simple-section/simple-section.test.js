import React from 'react'
import { mount, shallow } from 'enzyme'
import { expect } from 'chai'

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

import GkSimpleSection from './simple-section'

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

describe( '<GkSimpleSection/>', () => {

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  it( 'should have the className .gk-simple-section', () => {
    const rendered = shallow( <GkSimpleSection /> );
    expect( rendered.is( '.gk-simple-section' ) ).to.equal( true );
  } )

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  // it( 'should have a button element', () => {
  //   const rendered = shallow( <GkSimpleSection /> );
  //   expect( rendered.find( 'button' ) ).to.have.length( 1 );
  // } )

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  // it( 'should have a label property', () => {
  //   const rendered = shallow( <GkSimpleSection /> );
  //   expect( rendered.props().label ).to.be.defined;
  // } )

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

} )