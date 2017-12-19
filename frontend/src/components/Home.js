import React from 'react';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('wtf');
  }

  componentWillUnmount() {

  }

  render() {
    let NavBarTop,
        NavBarLeft,
        Body,
        Footer;
    return (
      <section>
        I am the home page
        {NavBarTop}
        {NavBarLeft}
        {Body}
        {Footer}
      </section>
    )
  }
}
