import "./Statistics.css";
import React from "react";
import { Col, Row, Statistic } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';


function template() {
  return (
    <div className="statistics">
      <div className="page-content">
        <h1 className="heading-main">Statistics</h1>
        <h2>Mean Stress Level Change (Post Test - Pre Test)</h2>
        <div className="backbox">
          <Row gutter={16} align="middle">
            <Col span={12} align="center">
              <Statistic
                title="Male"
                value={0.67}
                precision={2}
                valueStyle={{ color: '#3f8600', fontSize: 'xxx-large' }}
                prefix={<ArrowDownOutlined />}
                suffix="%"
              />
            </Col>
            <Col span={12} align="center">
              <Statistic
                title="Female"
                value={11.1}
                precision={2}
                valueStyle={{ color: '#3f8600', fontSize: 'xxx-large' }}
                prefix={<ArrowDownOutlined />}
                suffix="%"
              />
            </Col>
          </Row>
        </div>
        <h2>Reported Mean Perceived Restorativeness Scale Responses (Post AR Treatment)</h2>
        <div className="backbox">
          <Row gutter={16} align="middle">
            <Col span={8} align="center">
              <Statistic
                value={"63"}
                precision={1}
                valueStyle={{ color: '#3f8600', fontSize: 'xxx-large' }}
                suffix="%"
              />
            </Col>
            <Col span={8} align="center">
              <Statistic
                value={"to"}
                precision={2}
                valueStyle={{ fontSize: 'xxx-large' }}
                suffix=""
              />
            </Col>
            <Col span={8} align="center">
              <Statistic
                value={"73"}
                precision={1}
                valueStyle={{ color: '#3f8600', fontSize: 'xxx-large' }}
                suffix="%"
              />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default template;
