import Student from 'imgs/student.png';
import Books from 'imgs/books.png';
import Talking from 'imgs/talking.png';
import ClassRoom from 'imgs/classroom.png';
import CustomerService from 'imgs/customer-service.png';
import StudyFee from 'imgs/charge.png';
import Graduated from 'imgs/graduated.png';
import ELearning from 'imgs/elearning.png';

interface IDiagramContent {
  content: string;
  icon: any;
}

export const diagramContent: IDiagramContent[] = [
  {
    content:
      'Hệ thống bài giảng hấp dẫn và các bài tập dạng game sinh động, hấp dẫn.',
    icon: ELearning,
  },
  {
    content:
      'Bám sát Chương trình Làm quen Tiếng Anh Mầm non theo thông tư số 50/2020/TT-BGDĐT của Bộ Giáo dục và Đào tạo.',
    icon: Books,
  },
  {
    content:
      'Chương trình được xây dựng nhằm hướng tới hình thành, phát triển năng lực giao tiếp bằng Tiếng Anh theo nhu cầu và khả năng của con; góp phần chuẩn bị tốt hơn cho con học tiếng Anh ở bậc Tiểu học.',
    icon: Talking,
  },
  {
    content:
      'Trung tâm Ngoại ngữ Tân Văn chuyên giảng dạy Chương trình Làm quen Tiếng Anh Mầm non trên 27 năm tại hơn 300 trường Mầm non trong Thành phố Hồ Chí Minh.',
    icon: ClassRoom,
  },
  {
    content:
      'Có đội ngũ chuyên viên Giáo vụ và giáo viên hỗ trợ con học tập 24/7.',
    icon: CustomerService,
  },
  {
    content: 'Học phí hợp lý, hỗ trợ Phụ huynh mùa dịch.',
    icon: StudyFee,
  },
  {
    content:
      'Có nhiều chương trình khuyến học hỗ trợ việc học Tiếng Anh cho con.',
    icon: Graduated,
  },
  {
    content: 'Học ngay tại nhà, mọi lúc và mọi nơi.',
    icon: Student,
  },
];
