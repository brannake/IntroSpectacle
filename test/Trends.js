import React from 'react';
import chai, { expect } from 'chai';
import {configure, mount, shallow, render} from 'enzyme';
import sinon, { spy } from 'sinon';
import {} from '../app/actions/action';
import Trends from '../app/components/Trends';
import Adapter from 'enzyme-adapter-react-15';
import $ from 'jquery';
global.$ = $;


configure({ adapter: new Adapter() });
sinon.spy(Trends.prototype, 'render');

describe('<Trends/>', () => {
    it('renders without exploding', () => {
      const wrapper = shallow(<Trends/>);
      expect(Trends.prototype.render.calledOnce).to.equal(true);
    });
  });