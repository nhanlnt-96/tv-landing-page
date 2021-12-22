interface ISection12Content {
  title: string;
  price: string;
  benefit: string[];
  bonus: string[] | null;
}

export const section12Content: ISection12Content[] = [
  {
    title: 'Khóa 1 tháng',
    price: '150.000đ',
    benefit: ['04 bài học', '14 bài tập'],
    bonus: null,
  },
  {
    title: 'Khóa 3 tháng',
    price: '450.000đ',
    benefit: ['12 bài học', '42 bài tập'],
    bonus: ['Tặng 1 buổi học online với giáo viên nước ngoài'],
  },
  {
    title: 'Khóa 6 tháng',
    price: '900.000đ',
    benefit: ['24 bài học', '84 bài tập'],
    bonus: [
      'Tặng 2 buổi học online với giáo viên nước ngoài hoạc khóa học Anh văn tại Trung tâm trị giá 820.000đ',
      'Tặng thêm 1 buổi học online Kỹ năng sống',
    ],
  },
  {
    title: 'Khóa 12 tháng',
    price: '1.800.000đ',
    benefit: ['48 bài học', '168 bài tập'],
    bonus: [
      'Tặng 4 buổi học online với giáo viên nước ngoài hoặc 3 khóa học Anh văn tại Trung tâm trị giá 2.460.000đ',
      'Tặng thêm 2 buổi học online gồm: 1 buổi học Kỹ năng sống, 1 buổi học Hội họa',
    ],
  },
];
