import Test1 from 'imgs/bg.jpg';
import Test2 from 'imgs/bg1.jpg';
import Test3 from 'imgs/bg2.jpeg';
import Test4 from 'imgs/bg3.png';

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
    img: Test1,
  },
  {
    title: 'Phát âm',
    content:
      'Con học phát âm với giáo viên bản ngữ chuẩn, giúp con tự tin\n' +
      '                  giao tiếp.',
    img: Test2,
  },
  {
    title: 'Ghi nhớ',
    content:
      'Con ghi nhớ từ vựng nhanh nhờ phương pháp học qua hình ảnh\n' +
      '                  minh họa thực tế và vui nhộn.',
    img: Test3,
  },
  {
    title: 'Hỗ trợ',
    content:
      'Đội ngũ chuyên viên giáo vụ và giáo viên luôn sẵn sàng hỗ trợ\n' +
      '                  con học tập.',
    img: Test4,
  },
];
