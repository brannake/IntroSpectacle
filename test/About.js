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

