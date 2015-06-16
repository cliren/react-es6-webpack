import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import AppContainer from '../AppContainer.jsx';

//TODO: FIXME: An unknown react-router errror in specs TypeError: 'undefined' is not an object (evaluating 'router.makeHref')
xdescribe('App', () => {

  beforeEach(() => {
  });

  it('render app', () => {
    var app = TestUtils.renderIntoDocument(<AppContainer/>);

    expect(app).not.toBe(null);
  });
});