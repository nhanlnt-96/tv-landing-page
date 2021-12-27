import {FC} from 'react';
import Img1 from 'imgs/kidLearning2.png';

export const LearnSkills: FC = () => {
    return (
        <div className="lwf-container">
            <div className="section06-child-title">
                <p>Bước 2</p>
            </div>
            <div className="lwf-content section06-child-content">
                <div className="lwf-description">
                    <div className="description-container">
                        {/*<div className="description-title">*/}
                        {/*  <h6>Môi trường luyện tập không giới hạn</h6>*/}
                        {/*</div>*/}
                        <p>
                            Con thao tác các bài tập dạng game và luyện tập các nội dung trong
                            bài học. Kết quả của các bài tập con thực hiện được lưu trên hệ
                            thống LMS và được giáo viên gửi đến quý phụ huynh.
                        </p>
                    </div>
                </div>
                <div className="lwf-video">
                    <img src={Img1} alt=""/>
                </div>
            </div>
        </div>
    );
};
