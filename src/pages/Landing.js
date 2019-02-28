import React, { Component, Fragment } from 'react';
import Header from '../components/Header';
import Hero from '../layouts/Hero';
import Partnering from '../layouts/Partnering';
import Experience from '../layouts/Experience';

class Landing extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Hero />
        <Partnering />
        <Experience />
      </Fragment>
    );
  }
}

export default Landing;
