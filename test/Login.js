import React from 'react';
import chai, { expect } from 'chai';
import {configure, mount, shallow, render} from 'enzyme';
import sinon, { spy } from 'sinon';
import Login from '../app/components/Login';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });
sinon.spy(Login.prototype, 'render');

describe('<Login/>', () => {
  it('renders without exploding', () => {
    const wrapper = shallow(<Login/>);
    expect(Login.prototype.render.calledOnce).to.equal(true);
  });
});