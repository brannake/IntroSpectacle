import React from 'react';
import chai, { expect } from 'chai';
import {configure, mount, shallow, render} from 'enzyme';
import sinon, { spy } from 'sinon';
import {storeCurrentDate, storeCurrentMonth} from '../app/actions/action';
import Main from '../app/components/Main';
import Adapter from 'enzyme-adapter-react-15';
import $ from 'jquery';
global.$ = $;


configure({ adapter: new Adapter() });
sinon.spy(Main.prototype, 'render');

const props = {
    storeCurrentDate: storeCurrentDate,
    storeCurrentMonth: storeCurrentMonth
  };

describe('<Main/>', () => {
    it('renders without exploding', () => {
      const wrapper = shallow(<Main storeCurrentDate= {props.storeCurrentDate} storeCurrentMonth={props.storeCurrentMonth}/>);
      expect(Main.prototype.render.calledOnce).to.equal(true);
    });
  });