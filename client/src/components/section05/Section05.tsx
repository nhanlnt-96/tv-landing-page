import React, { FC } from 'react';
import { Container, Row } from 'react-bootstrap';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { section05Content } from 'configs/section05Content';
import StarsIcon from '@mui/icons-material/Stars';

import 'react-vertical-timeline-component/style.min.css';
import './Section05.scss';
import Title from 'title/Title';

const Section05: FC = () => {
  return (
    <Container className="section-05">
      <div className="section05-container">
        <Title title={'LỘ TRÌNH HỌC TOÀN DIỆN TỪ CƠ BẢN ĐẾN NÂNG CAO'} />
        <Row className="section05-content">
          <VerticalTimeline className="vertical-timeline--customer">
            {section05Content.map((val, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: '#2B2A8F',
                  color: '#fff',
                  borderRadius: '10px',
                }}
                contentArrowStyle={{
                  borderRight: '7px solid #2B2A8F',
                }}
                icon={val.icon}
                iconStyle={{ background: '#2B2A8F', color: '#fff' }}
              >
                <h3 className="vertical-timeline-element-title">{val.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {val.subtitle}
                </h4>
                <p>{val.description}</p>
              </VerticalTimelineElement>
            ))}
            <VerticalTimelineElement
              icon={<StarsIcon />}
              iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            />
          </VerticalTimeline>
        </Row>
      </div>
    </Container>
  );
};

export default Section05;
