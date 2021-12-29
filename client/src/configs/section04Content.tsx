import Img1 from 'imgs/learning1.gif';
import Img2 from 'imgs/pronunciation.jpeg';
import Img3 from 'imgs/learning3.gif';
import Img4 from 'imgs/learning4.gif';

interface ISection04Content {
  title: string;
  content: string;
  img: any;
}

export const section04Content: ISection04Content[] = [
  {
    title: 'Hứng thú',
    content:
      'Con hứng thú học tập với phương pháp giảng dạy “Lấy trẻ làm trung tâm” và bài giảng được tích hợp game vui' +
      ' nhộn.',
    img: Img1,
  },
  {
    title: 'Phát âm',
    content:
      'Con học phát âm với giáo viên bản ngữ chuẩn, giúp con tự tin\n' +
      '                  giao tiếp.',
    img: Img2,
  },
  {
    title: 'Ghi nhớ',
    content:
      'Con ghi nhớ từ vựng nhanh nhờ phương pháp học qua hình ảnh\n' +
      '                  minh họa thực tế và vui nhộn.',
    img: Img3,
  },
  {
    title: 'Hỗ trợ',
    content:
      'Đội ngũ chuyên viên giáo vụ và giáo viên luôn sẵn sàng hỗ trợ\n' +
      '                  con học tập.',
    img: Img4,
  },
];
