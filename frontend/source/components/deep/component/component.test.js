import React from 'react'
import { mount, shallow } from 'enzyme'
import { expect } from 'chai'

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

import GkComponent from './component'

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

describe( '<GkComponent/>', () => {

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  it( 'should have the className .gk-component', () => {
    const rendered = shallow( <GkComponent /> );
    expect( rendered.is( '.gk-component' ) ).to.equal( true );
  } )

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  // it( 'should have a button element', () => {
  //   const rendered = shallow( <GkComponent /> );
  //   expect( rendered.find( 'button' ) ).to.have.length( 1 );
  // } )

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  // it( 'should have a label property', () => {
  //   const rendered = shallow( <GkComponent /> );
  //   expect( rendered.props().label ).to.be.defined;
  // } )

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

} )