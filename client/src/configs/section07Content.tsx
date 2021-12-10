import { VIDEO_INTRO_1 } from 'configs/videoUrl';
import Intro1 from 'imgs/intro1.png';

interface ISection07Content {
  videoUrl: string;
  title: string;
  description: string;
  posterImg: any;
}

export const section07Content: ISection07Content[] = [
  {
    videoUrl: VIDEO_INTRO_1,
    title: 'MC Hoàng Linh',
    description: 'Lựa chọn Edupia để cùng con chinh phục tiếng Anh',
    posterImg: Intro1,
  },
  {
    videoUrl: VIDEO_INTRO_1,
    title: 'Nhà báo Chánh Văn',
    description:
      '"Edupia giữ chân lũ trẻ lại tốt hơn Youtube hay những game mobile"',
    posterImg: Intro1,
  },
  {
    videoUrl: VIDEO_INTRO_1,
    title: 'Hàng ngàn phụ huynh',
    description: 'Đã tin tưởng lựa chọn Edupia và cảm thấy hài lòng',
    posterImg: Intro1,
  },
];
