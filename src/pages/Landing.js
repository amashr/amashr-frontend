import React, { Component, Fragment } from 'react';
import Header from '../components/Header';
import Hero from '../layouts/Hero';
import Partnering from '../layouts/Partnering';
import Experience from '../layouts/Experience';
import Integrate from '../layouts/Integrate';

class Landing extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Hero />
        <Partnering />
        <Experience />
        <Integrate />
      </Fragment>
    );
  }
}

export default Landing;
