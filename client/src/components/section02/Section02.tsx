import React, { FC } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Diagram } from 'section02/components';

import './Section02.scss';
import { IProps } from 'model/props';

const Section02: FC<IProps> = ({ click }) => {
  return (
    <Container className="section-02">
      <Row className="section02-title">
        <p>NHỮNG LO LẮNG CỦA CHA MẸ KHI CHO TRẺ HỌC TIẾNG ANH SỚM</p>
      </Row>
      <Diagram />
      <Row className="section02-description">
        <p>
          <b>
            Một ngôn ngữ chỉ cho con một con đường nhưng hai ngôn ngữ sẽ mở ra
            cho con nhiều ngã rẽ mới mà con được quyền chọn lựa.
          </b>
          Giai đoạn 4-7 tuổi là độ tuổi vàng mà con có thể tiếp thu, học hỏi và
          bứt phá tiếng Anh một cách đáng kinh ngạc. Và bí quyết của 99% thần
          đồng tiếng Anh đều nằm ở phương pháp học phù hợp và môi trường chuẩn
          để trẻ có được nền tảng vững chắc nhất. Hãy để Edupia Kid xóa bỏ những
          lo lắng trên của ba mẹ và giúp con phát triển vượt bậc trong giai đoạn
          vàng này nhờ những phương pháp đặc biệt!
        </p>
      </Row>
      <Row className="section02-register-btn">
        <button onClick={click}>NHẬN TƯ VẤN</button>
      </Row>
    </Container>
  );
};

export default Section02;
