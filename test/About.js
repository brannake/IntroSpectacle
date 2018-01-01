import React from 'react';
import chai, { expect } from 'chai';
import {configure, mount, shallow, render} from 'enzyme';
import sinon, { spy } from 'sinon';
import {} from '../app/actions/action';
import About from '../app/components/About';
import Adapter from 'enzyme-adapter-react-15';
import $ from 'jquery';
global.$ = $;


configure({ adapter: new Adapter() });
sinon.spy(About.prototype, 'render');

describe('<About/>', () => {
    it('renders without exploding', () => {
      const wrapper = shallow(<About/>);
      expect(Trends.prototype.render.calledOnce).to.equal(true);
    });
  });

  function once(fn) {
    var returnValue, called = false;
	console.log(this);
    return function () {
        if (!called) {
            called = true;
            console.log(this);
            console.log(arguments);
            returnValue = fn.apply(this, arguments);
        }
        console.log(returnValue);
        return returnValue;
    };
}

function donk(arg) {
    console.log(arg);
    let arg2 = arg +1;
    return arg2
}

var honk = once(donk)(1);

honk();