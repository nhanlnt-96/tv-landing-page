import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import Looks4Icon from '@mui/icons-material/Looks4';

interface ISection05Content {
  title: string;
  subtitle: string;
  description: string;
  icon: any;
}

export const section05Content: ISection05Content[] = [
  {
    title: 'GIAI ĐOẠN 1',
    subtitle: 'Tiếp xúc và làm quen với tiếng Anh',
    description:
      'Làm quen các từ vựng và mẫu câu theo chủ đề quen thuộc, gần gũi  và đơn giản. Giúp con hứng thú trong các hoạt động làm quen với tiếng Anh ngay từ khi bắt đầu.',
    icon: <LooksOneIcon />,
  },
  {
    title: 'GIAI ĐOẠN 2',
    subtitle: 'Mở rộng vốn từ vựng, luyện phát âm chuẩn',
    description:
      'Mở rộng việc nghe và nhận diện, nhận biết từ vựng và thực hành mẫu câu quen thuộc với lứa tuổi. Chú trọng rèn phát âm chuẩn cho con với Gíao viên bản ngữ.',
    icon: <LooksTwoIcon />,
  },
  {
    title: 'GIAI ĐOẠN 3',
    subtitle: 'Mạnh dạn, tự tin trong giao tiếp',
    description:
      'Mạnh dạn, tự tin trong giao tiếp. Con được học sử dụng các mẫu câu giao tiếp cơ bản trong tiếng Anh và tiếp xúc với giáo viên bản ngữ trong các bài học trên hệ thống và các buổi học online trong chương trình khuyến học.',
    icon: <Looks3Icon />,
  },
  {
    title: 'GIAI ĐOẠN 4',
    subtitle:
      'Làm quen Chương trình Cambridge Pre-Starters dành cho trẻ 5-6 tuổi (lớp Lá)',
    description:
      'Con thi thử chương trình Cambridge Pre – Starters với giáo viên của Trung tâm cuối năm học.',
    icon: <Looks4Icon />,
  },
];
