import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect(({ global }) => ({
  collapsed: global.collapsed,
}))
class Analysis extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.changeMenu = () => {
      const { dispatch, collapsed } = this.props;
      dispatch({
        type: 'global/change',
        payload: !collapsed,
      });
    };
  }

  render() {
    const { collapsed } = this.props;
    console.log(collapsed, 'collapsed');
    return (
      <div>123111</div>
    );
  }
}

export default Analysis;
