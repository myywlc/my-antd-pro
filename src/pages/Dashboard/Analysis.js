import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';

@connect(({ global }) => ({
  collapsed: global.collapsed,
  num: global.num,
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

  add = () => {
    const { dispatch, num } = this.props;
    dispatch({
      type: 'global/addChangeNum',
      payload: num + 1,
    });
  }

  render() {
    const { collapsed, num } = this.props;
    console.log(collapsed, 'collapsed');
    return (
      <div>
        <div>{num}</div>
        <Button type='primary' onClick={this.add}>add</Button>
      </div>
    );
  }
}

export default Analysis;
