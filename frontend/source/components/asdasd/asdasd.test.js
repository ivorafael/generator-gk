import React from 'react'
import { mount, shallow } from 'enzyme'
import { expect } from 'chai'

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

import GkAsdasd from './asdasd'

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

describe( '<GkAsdasd/>', () => {

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  it( 'should have the className .gk-asdasd', () => {
    const rendered = shallow( <GkAsdasd /> );
    expect( rendered.is( '.gk-asdasd' ) ).to.equal( true );
  } )

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  // it( 'should have a button element', () => {
  //   const rendered = shallow( <GkAsdasd /> );
  //   expect( rendered.find( 'button' ) ).to.have.length( 1 );
  // } )

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  // it( 'should have a label property', () => {
  //   const rendered = shallow( <GkAsdasd /> );
  //   expect( rendered.props().label ).to.be.defined;
  // } )

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

} )