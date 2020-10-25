import React, { Fragment } from 'react';
import { Button, Row, Col, Icon, Steps, Card } from 'antd';
import Result from '@/components/Result';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

const { Step } = Steps;

const desc1 = (
  <div
    style={{
      fontSize: 12,
      color: 'rgba(0, 0, 0, 0.45)',
      position: 'relative',
      left: 42,
      textAlign: 'left',
    }}
  >
    <div style={{ margin: '8px 0 4px' }}>
      111
      <Icon style={{ marginLeft: 8 }} type="dingding-o" />
    </div>
    <div>2016-12-12 12:32</div>
  </div>
);

const desc2 = (
  <div style={{ fontSize: 12, position: 'relative', left: 42, textAlign: 'left' }}>
    <div style={{ margin: '8px 0 4px' }}>
      111
      <Icon type="dingding-o" style={{ color: '#00A0E9', marginLeft: 8 }} />
    </div>
    <div>
      <a href="">
        111
      </a>
    </div>
  </div>
);

const extra = (
  <Fragment>
    <div
      style={{
        fontSize: 16,
        color: 'rgba(0, 0, 0, 0.85)',
        fontWeight: '500',
        marginBottom: 20,
      }}
    >
      111
    </div>
    <Row style={{ marginBottom: 16 }}>
      <Col xs={24} sm={12} md={12} lg={12} xl={6}>
        <span style={{ color: 'rgba(0, 0, 0, 0.85)' }}>
          111
        </span>
        23421
      </Col>
      <Col xs={24} sm={12} md={12} lg={12} xl={6}>
        <span style={{ color: 'rgba(0, 0, 0, 0.85)' }}>
          111
        </span>
        111
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={12}>
        <span style={{ color: 'rgba(0, 0, 0, 0.85)' }}>
          111
        </span>
        2016-12-12 ~ 2017-12-12
      </Col>
    </Row>
    <Steps style={{ marginLeft: -42, width: 'calc(100% + 84px)' }} progressDot current={1}>
      <Step
        title={
          <span style={{ fontSize: 14 }}>
            111
          </span>
        }
        description={desc1}
      />
      <Step
        title={
          <span style={{ fontSize: 14 }}>
            111
          </span>
        }
        description={desc2}
      />
      <Step
        title={
          <span style={{ fontSize: 14 }}>
            111
          </span>
        }
      />
      <Step
        title={
          <span style={{ fontSize: 14 }}>
            111
          </span>
        }
      />
    </Steps>
  </Fragment>
);

const actions = (
  <Fragment>
    <Button type="primary">
      111
    </Button>
    <Button>
      111
    </Button>
    <Button>
      111
    </Button>
  </Fragment>
);

export default () => (
  <PageHeaderWrapper>
    <Card bordered={false}>
      <Result
        type="success"
        title={111}
        description={111}
        extra={extra}
        actions={actions}
        style={{ marginTop: 48, marginBottom: 16 }}
      />
    </Card>
  </PageHeaderWrapper>
);
