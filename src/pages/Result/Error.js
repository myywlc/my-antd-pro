import React, { Fragment } from 'react';
import { Button, Icon, Card } from 'antd';
import Result from '../../components/Result';
import PageHeaderWrapper from '../../components/PageHeaderWrapper';

const extra = (
  <Fragment>
    <div
      style={{
        fontSize: 16,
        color: 'rgba(0, 0, 0, 0.85)',
        fontWeight: '500',
        marginBottom: 16,
      }}
    >
      "The content you submitted has the following error:"
    </div>
    <div style={{ marginBottom: 16 }}>
      <Icon style={{ color: '#f5222d', marginRight: 8 }} type="close-circle-o" />
      "The content you submitted has the following error:"
      <a style={{ marginLeft: 16 }}>
        "The content you submitted has the following error:"
        <Icon type="right" />
      </a>
    </div>
    <div>
      <Icon style={{ color: '#f5222d', marginRight: 8 }} type="close-circle-o" />
      "The content you submitted has the following error:"
      <a style={{ marginLeft: 16 }}>
        "The content you submitted has the following error:"
        <Icon type="right" />
      </a>
    </div>
  </Fragment>
);

const actions = (
  <Button type="primary">
    "The content you submitted has the following error:"
  </Button>
);

export default () => (
  <PageHeaderWrapper>
    <Card bordered={false}>
      <Result
        type="error"
        title={'The content you submitted has the following error:'}
        description={'The content you submitted has the following error:'}
        extra={extra}
        actions={actions}
        style={{ marginTop: 48, marginBottom: 16 }}
      />
    </Card>
  </PageHeaderWrapper>
);
