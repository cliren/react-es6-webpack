import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import Activities from '../Activities.jsx';

//TODO: FIXME: An unknown react-router errror in specs TypeError: 'undefined' is not an object (evaluating 'router.makeHref')
xdescribe('Activities', () => {

  beforeEach(() => {
  });

  it('render Activities', () => {
    var app = TestUtils.renderIntoDocument(<Activities/>);
    expect(app).not.toBe(null);
  });
});