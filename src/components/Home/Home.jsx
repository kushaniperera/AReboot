import "./Home.css";
import React from "react";
import { Card, Carousel, Col, Image, Row } from "antd";
import Meta from "antd/lib/card/Meta";
import trees from "../../images/trees.jpg"
import bigTree from "../../images/bigtree.jpg"
import alex from "../../images/alex.jpg"
import pond from "../../images/pond.jpg"
import greenery from "../../images/greenery.jpg"

const contentStyle = {
  height: '400px',
  color: '#fff',
  lineHeight: '400px',
  textAlign: 'center',
  background: '#364d79'
};

function template() {
  return (
    <div className="Home">
      <Carousel autoplay>
        <div>
          <img src={trees} className="carousel-image" alt="Trees" />
        </div>
      </Carousel>
      <div className="page-body">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} align="middle">
          <Col span={24}>
            <h1 className="heading-main">Take control of your stress before it controls you</h1>
            <div className="main-text">
              <p><text style={{ fontWeight: "bold" }}>AReboot</text> is an application created by a team of undergraduates to tackle a problem their colleagues face everyday. The application is a novel self-help approach for stress relief that can be used on-the-go. </p>
              <p>There are innumerable stressors in our environment reinforced by our lifestyles, occupations and personal styles. It’s near impossible to avoid them all and people find themselves stressed out more and more but lack an easy outlet to relieve this stress.
              </p><p>
                Untreated stress results in reduced productivity and attention. Prolonged neglection of treatment can result in permanent repercussions such as heart disease and behavioural changes.
              </p><p>
                AReboot provides the users with a solution that can seamlessly be used in their busy lives with minimum effort.
              </p>
            </div>
          </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} align="middle">
          <Col span={24}>
            <h1>AReboot</h1>
            <div>
              <p>AReboot uses Augmented Reality to bring clinically approved treatments to your fingertips with just a simple mobile phone. Unlike most applications available in the market, AReboot doesn’t require any additional equipment other than a simple smartphone. With the use of Photoplethysmograpgy, the application monitors the stress level of users via heart-rate variability. For better treatment recommendation, AReboot uses a custom-made questionnaire to classify stress and psychological or physiological, which assists in recommending the best possible AR-enabled treatment from either Mindfulness Meditation or Progressive Muscle Relaxation.
              </p>
            </div>
          </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={8}>
            <Card
              hoverable
              style={{ height: '100%' }}
              cover={<Image alt="Alex" src={alex} />}
            >
              <Meta title="Alex" description="Progressive muscle relaxation guide" />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: '100%' }}
              cover={<Image alt="Pond" src={pond} />}
            >
              <Meta title="Pond" description="Mindfulness meditation" />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: '100%' }}
              cover={<Image alt="Tree" src={bigTree} />}
            >
              <Meta title="Forest" description="Mindfulness meditation" />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default template;
