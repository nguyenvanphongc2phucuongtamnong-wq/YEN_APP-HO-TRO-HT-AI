import { Question } from '../../types';

export const CHAPTER_1_QUESTIONS: Question[] = [
  // --- BÀI 1: Nhận biết dụng cụ, hoá chất. Thuyết minh khoa học (20 câu) ---
  {
    id: 'q1_1',
    lessonId: 1,
    question: 'Trong thí nghiệm quang học môn Khoa học tự nhiên 9, để tạo ra chùm sáng hẹp song song biểu diễn tia sáng, người ta thường dùng thiết bị nào?',
    options: ['Đèn pin thông thường', 'Gương cầu lồi', 'Đèn sợi đốt 12 V – 21 W kết hợp tấm chắn có khe hẹp hoặc đèn laser', 'Kính lúp phóng đại'],
    correctIndex: 2,
    explanation: 'Để tạo chùm sáng hẹp mô phỏng tia sáng trong thí nghiệm, người ta dùng đèn chiếu có khe hẹp hoặc nguồn laser chuyên dụng trong bộ quang học học sinh.',
    level: 'basic'
  },
  {
    id: 'q1_2',
    lessonId: 1,
    question: 'Dụng cụ nào sau đây dùng để đo cường độ dòng điện chạy qua một đoạn mạch?',
    options: ['Vôn kế', 'Ampe kế', 'Nhiệt kế', 'Lực kế'],
    correctIndex: 1,
    explanation: 'Ampe kế là dụng cụ chuyên dụng dùng để đo cường độ dòng điện trong mạch.',
    level: 'basic'
  },
  {
    id: 'q1_3',
    lessonId: 1,
    question: 'Khi sử dụng đồng hồ vạn năng hiện số (DMM) để đo hiệu điện thế một chiều, ta phải vặn núm xoay về thang đo nào?',
    options: ['DCV hoặc V⎓', 'ACV hoặc V~', 'DCA hoặc A⎓', 'Thang đo điện trở Ω'],
    correctIndex: 0,
    explanation: 'Ký hiệu DCV hoặc V⎓ biểu thị thang đo điện áp (hiệu điện thế) một chiều Direct Current Voltage.',
    level: 'understanding'
  },
  {
    id: 'q1_4',
    lessonId: 1,
    question: 'Để đo hiệu điện thế giữa hai đầu bóng đèn, ta mắc Vôn kế như thế nào?',
    options: ['Mắc nối tiếp với bóng đèn', 'Mắc song song với bóng đèn', 'Mắc vào bất kì vị trí nào', 'Mắc nối tiếp với nguồn điện'],
    correctIndex: 1,
    explanation: 'Vôn kế có điện trở rất lớn, luôn được mắc song song với đoạn mạch hoặc thiết bị cần đo hiệu điện thế.',
    level: 'basic'
  },
  {
    id: 'q1_5',
    lessonId: 1,
    question: 'Khi lắp ráp mạch điện thí nghiệm, thao tác nào sau đây là BẮT BUỘC để đảm bảo an toàn?',
    options: ['Bật công tắc nguồn trước rồi mới cắm dây dẫn', 'Ngắt công tắc nguồn điện trước khi cắm hoặc thay đổi linh kiện', 'Chạm tay vào các đầu dây trần để thử điện', 'Chọn thang đo ampe kế nhỏ nhất ngay từ đầu'],
    correctIndex: 1,
    explanation: 'Luôn ngắt công tắc nguồn điện trước khi thao tác nối dây hoặc tháo lắp thiết bị để tránh chập mạch hoặc giật điện.',
    level: 'basic'
  },
  {
    id: 'q1_6',
    lessonId: 1,
    question: 'Trên một vôn kế có thang chia từ 0 đến 15 V, khoảng giữa vạch 0 và vạch 1 V có 5 khoảng chia nhỏ. Độ chia nhỏ nhất (ĐCNN) của vôn kế là:',
    options: ['0.1 V', '0.2 V', '0.5 V', '1 V'],
    correctIndex: 1,
    explanation: 'ĐCNN = (1 V - 0 V) / 5 = 0.2 V.',
    level: 'understanding'
  },
  {
    id: 'q1_7',
    lessonId: 1,
    question: 'Khi thuyết minh một vấn đề khoa học, thứ tự các bước logic thường là:',
    options: ['Kết luận -> Giả thuyết -> Đặt vấn đề -> Thí nghiệm', 'Đặt vấn đề -> Giả thuyết khoa học -> Thực hiện thí nghiệm kiểm chứng -> Phân tích số liệu và kết luận', 'Làm thí nghiệm -> Báo cáo -> Tìm tài liệu -> Đặt câu hỏi', 'Thu thập kết quả -> Viết báo cáo -> Kiểm tra giả thuyết'],
    correctIndex: 1,
    explanation: 'Quy trình nghiên cứu khoa học chuẩn: Đặt vấn đề -> Đưa giả thuyết -> Lên phương án & tiến hành thực nghiệm -> Rút ra kết luận khoa học.',
    level: 'understanding'
  },
  {
    id: 'q1_8',
    lessonId: 1,
    question: 'Để tránh làm hỏng Ampe kế khi chưa biết cường độ dòng điện trong mạch khoảng bao nhiêu, ta nên:',
    options: ['Chọn thang đo nhỏ nhất trước', 'Chọn thang đo lớn nhất trước rồi giảm dần nếu cần', 'Mắc song song ampe kế với nguồn điện', 'Không cần chỉnh kim hay núm xoay'],
    correctIndex: 1,
    explanation: 'Chọn thang đo lớn nhất trước giúp bảo vệ kim và cầu chì ampe kế không bị quá tải khi dòng điện bất ngờ vượt ngưỡng.',
    level: 'advanced'
  },
  {
    id: 'q1_9',
    lessonId: 1,
    question: 'Trong thí nghiệm quang học, giá quang học thẳng có chia thang milimét dùng để:',
    options: ['Tạo ra ánh sáng màu', 'Cố định và xác định chính xác khoảng cách giữa vật, thấu kính và màn hứng ảnh', 'Làm tăng góc khúc xạ của chùm sáng', 'Giảm nhiệt độ của bóng đèn'],
    correctIndex: 1,
    explanation: 'Giá quang học giữ các dụng cụ đồng trục và giúp đọc khoảng cách d, d\' trực tiếp trên thước đo.',
    level: 'basic'
  },
  {
    id: 'q1_10',
    lessonId: 1,
    question: 'Một học sinh đo chiều dài dây dẫn 3 lần được các số đo: 50.2 cm; 50.4 cm; 50.3 cm. Giá trị trung bình của chiều dài dây là:',
    options: ['50.2 cm', '50.3 cm', '50.4 cm', '50.5 cm'],
    correctIndex: 1,
    explanation: 'L_tb = (50.2 + 50.4 + 50.3) / 3 = 150.9 / 3 = 50.3 cm.',
    level: 'basic'
  },
  {
    id: 'q1_11',
    lessonId: 1,
    question: 'Biển cảnh báo hình tam giác viền vàng, bên trong có hình tia sét màu đen biểu thị điều gì?',
    options: ['Cảnh báo chất độc ăn mòn', 'Cảnh báo nguy hiểm về điện áp cao', 'Cảnh báo nguy cơ cháy nổ', 'Cảnh báo nguồn bức xạ'],
    correctIndex: 1,
    explanation: 'Ký hiệu tia sét là biển báo nguy hiểm về điện, điện cao áp.',
    level: 'basic'
  },
  {
    id: 'q1_12',
    lessonId: 1,
    question: 'Nếu mắt đặt nhìn lệch một góc so với vạch chia trên thước đo khi đọc kết quả thì sẽ gây ra loại sai số nào?',
    options: ['Sai số hệ thống do dụng cụ', 'Sai số ngẫu nhiên do người đọc (thị sai)', 'Không gây ra sai số', 'Sai số do nhiệt độ phòng'],
    correctIndex: 1,
    explanation: 'Đặt mắt lệch gây ra góc nhìn thị sai (parallax error), thuộc sai số ngẫu nhiên do thao tác người đọc.',
    level: 'understanding'
  },
  {
    id: 'q1_13',
    lessonId: 1,
    question: 'Chất nào sau đây TUYỆT ĐỐI KHÔNG được đổ trực tiếp vào bồn rửa trong phòng thí nghiệm mà phải thu gom xử lý riêng?',
    options: ['Nước cất thừa', 'Nước muối loãng', 'Dung dịch axit đặc hoặc muối kim loại nặng', 'Nước chanh pha loãng'],
    correctIndex: 2,
    explanation: 'Hóa chất độc hại, axit đặc hoặc muối kim loại nặng làm hỏng đường ống và gây ô nhiễm môi trường nghiêm trọng.',
    level: 'basic'
  },
  {
    id: 'q1_14',
    lessonId: 1,
    question: 'Khi kết quả thí nghiệm không trùng khớp với giả thuyết ban đầu đặt ra, người nghiên cứu nên làm gì?',
    options: ['Tự ý sửa lại số liệu thí nghiệm cho khớp với giả thuyết', 'Vứt bỏ toàn bộ số liệu và dừng nghiên cứu', 'Trung thực ghi nhận số liệu, kiểm tra lại quy trình thí nghiệm hoặc điều chỉnh lại giả thuyết', 'Báo cáo rằng thí nghiệm đã thành công tốt đẹp'],
    correctIndex: 2,
    explanation: 'Tính trung thực khoa học đòi hỏi bảo lưu số liệu thực nghiệm khách quan, xem xét sai sót hoặc đặt lại giả thuyết khoa học.',
    level: 'understanding'
  },
  {
    id: 'q1_15',
    lessonId: 1,
    question: 'Khi đo điện trở bằng đồng hồ vạn năng hiện số, trước khi cắm que đo vào hai đầu điện trở, điện trở đó phải:',
    options: ['Được nối vào nguồn điện 220V', 'Được ngắt hoàn toàn khỏi mọi nguồn điện trong mạch', 'Được làm nóng lên', 'Được nhúng vào nước cất'],
    correctIndex: 1,
    explanation: 'Đo điện trở bắt buộc phải ngắt điện hoàn toàn, nếu không dòng điện ngoài sẽ làm cháy thang đo ôm của đồng hồ.',
    level: 'advanced'
  },
  {
    id: 'q1_16',
    lessonId: 1,
    question: 'Biến trở con chạy trong thí nghiệm điện học có vai trò chủ yếu là gì?',
    options: ['Làm tăng hiệu điện thế của nguồn điện', 'Điều chỉnh điện trở của mạch để thay đổi cường độ dòng điện hoặc hiệu điện thế', 'Bảo vệ nguồn điện không bị cạn pin', 'Đo dòng điện'],
    correctIndex: 1,
    explanation: 'Biến trở thay đổi trị số điện trở, qua đó điều chỉnh cường độ dòng điện qua các phần tử mạch.',
    level: 'understanding'
  },
  {
    id: 'q1_17',
    lessonId: 1,
    question: 'Để biểu diễn sự phụ thuộc của cường độ dòng điện I vào hiệu điện thế U, hình thức trình bày trực quan nhất là:',
    options: ['Một đoạn văn miêu tả', 'Bảng ghi số liệu thô', 'Đồ thị tọa độ (trục hoành U, trục tung I)', 'Một bài thơ'],
    correctIndex: 2,
    explanation: 'Đồ thị là phương tiện trực quan và chuẩn mực nhất để thể hiện quy luật định lượng trong khoa học thực nghiệm.',
    level: 'understanding'
  },
  {
    id: 'q1_18',
    lessonId: 1,
    question: 'Khi đốt đèn cồn trong phòng thí nghiệm, thao tác nào sau đây là ĐÚNG?',
    options: ['Dùng đèn cồn này để châm lửa cho đèn cồn khác', 'Dùng que diêm hoặc bật lửa để châm, khi tắt dùng nắp đậy lại', 'Dùng miệng thổi mạnh vào ngọn lửa để tắt', 'Đổ cồn trực tiếp vào đèn khi bấc đang cháy'],
    correctIndex: 1,
    explanation: 'Luôn dùng nắp đậy để ngắt oxy dập tắt đèn cồn. Không bao giờ thổi bằng miệng hay châm lửa từ đèn cồn khác vì dễ gây nổ.',
    level: 'basic'
  },
  {
    id: 'q1_19',
    lessonId: 1,
    question: 'Thuyết minh một vấn đề khoa học trước tập thể cần chú trọng yếu tố nào nhất để thuyết phục người nghe?',
    options: ['Nói thật nhanh và sử dụng nhiều từ khó hiểu', 'Dẫn chứng thực nghiệm rõ ràng, lập luận logic và hình ảnh/số liệu minh chứng cụ thể', 'Chỉ đưa ra ý kiến chủ quan của bản thân mà không cần bằng chứng', 'Trình bày thật dài dòng'],
    correctIndex: 1,
    explanation: 'Cốt lõi của thuyết minh khoa học là lập luận logic chặt chẽ dựa trên chứng cứ thực nghiệm và số liệu khách quan.',
    level: 'understanding'
  },
  {
    id: 'q1_20',
    lessonId: 1,
    question: 'Một học sinh đo đường kính sợi dây đồng bằng panme 4 lần: 1.22 mm, 1.21 mm, 1.23 mm, 1.22 mm. Kết quả đo được ghi là:',
    options: ['1.22 mm', '1.25 mm', '1.20 mm', '1.24 mm'],
    correctIndex: 0,
    explanation: 'Trung bình: (1.22 + 1.21 + 1.23 + 1.22)/4 = 4.88 / 4 = 1.22 mm.',
    level: 'understanding'
  },

  // --- BÀI 2: Động năng. Thế năng (20 câu) ---
  {
    id: 'q2_1',
    lessonId: 2,
    question: 'Động năng của một vật là dạng năng lượng mà vật có được do:',
    options: ['Vật có khối lượng lớn', 'Vật ở trên cao so với mặt đất', 'Vật đang chuyển động', 'Vật bị nén đàn hồi'],
    correctIndex: 2,
    explanation: 'Động năng là năng lượng của vật do chuyển động mà có.',
    level: 'basic'
  },
  {
    id: 'q2_2',
    lessonId: 2,
    question: 'Động năng của một vật phụ thuộc vào những yếu tố nào sau đây?',
    options: ['Khối lượng và vận tốc của vật', 'Khối lượng và độ cao của vật', 'Vận tốc và nhiệt độ của vật', 'Độ cao và thể tích của vật'],
    correctIndex: 0,
    explanation: 'Công thức W_đ = (1/2) * m * v^2, phụ thuộc vào khối lượng m và vận tốc v.',
    level: 'basic'
  },
  {
    id: 'q2_3',
    lessonId: 2,
    question: 'Nếu vận tốc của một vật tăng lên gấp đôi thì động năng của vật sẽ:',
    options: ['Tăng lên gấp đôi', 'Tăng lên gấp 4 lần', 'Không thay đổi', 'Giảm đi 2 lần'],
    correctIndex: 1,
    explanation: 'Vì động năng tỉ lệ thuận với bình phương vận tốc (v^2). Khi v tăng 2 lần thì v^2 tăng 4 lần => W_đ tăng 4 lần.',
    level: 'understanding'
  },
  {
    id: 'q2_4',
    lessonId: 2,
    question: 'Một ô tô tải nặng 2 tấn và một xe máy nặng 100 kg cùng chạy trên đường với vận tốc 40 km/h. Động năng của xe nào lớn hơn?',
    options: ['Xe máy vì nhỏ gọn hơn', 'Ô tô tải vì có khối lượng lớn hơn nhiều', 'Hai xe có động năng bằng nhau vì cùng vận tốc', 'Không so sánh được'],
    correctIndex: 1,
    explanation: 'Cùng vận tốc v, xe tải có khối lượng m = 2000 kg gấp 20 lần xe máy (100 kg) nên động năng xe tải lớn hơn 20 lần.',
    level: 'understanding'
  },
  {
    id: 'q2_5',
    lessonId: 2,
    question: 'Thế năng trọng trường của một vật phụ thuộc vào:',
    options: ['Vận tốc và khối lượng của vật', 'Khối lượng và vị trí (độ cao) của vật so với mốc chọn thế năng', 'Hình dạng và kích thước của vật', 'Chỉ phụ thuộc vào độ cao'],
    correctIndex: 1,
    explanation: 'Thế năng trọng trường W_t = m * g * h, phụ thuộc vào khối lượng m và độ cao h so với mốc thế năng.',
    level: 'basic'
  },
  {
    id: 'q2_6',
    lessonId: 2,
    question: 'Trường hợp nào sau đây vật KHÔNG có thế năng trọng trường (chọn mốc thế năng tại mặt đất)?',
    options: ['Một chiếc máy bay đang bay trên bầu trời', 'Một quả dừa đang treo trên cây cao 5 m', 'Một hòn đá nằm yên trên mặt đất', 'Một người đang đứng trên sân thượng tầng 3'],
    correctIndex: 2,
    explanation: 'Hòn đá nằm trên mặt đất có h = 0 m nên thế năng trọng trường bằng 0.',
    level: 'basic'
  },
  {
    id: 'q2_7',
    lessonId: 2,
    question: 'Một vật có khối lượng m = 2 kg đang ở độ cao h = 4 m so với mặt đất. Lấy g = 10 m/s². Thế năng trọng trường của vật là:',
    options: ['8 J', '40 J', '80 J', '16 J'],
    correctIndex: 2,
    explanation: 'W_t = m * g * h = 2 * 10 * 4 = 80 J.',
    level: 'understanding'
  },
  {
    id: 'q2_8',
    lessonId: 2,
    question: 'Một chiếc xe đồ chơi khối lượng m = 0.5 kg chuyển động với vận tốc v = 2 m/s. Động năng của xe là:',
    options: ['1 J', '2 J', '0.5 J', '4 J'],
    correctIndex: 0,
    explanation: 'W_đ = (1/2) * m * v^2 = 0.5 * 0.5 * (2^2) = 0.25 * 4 = 1 J.',
    level: 'understanding'
  },
  {
    id: 'q2_9',
    lessonId: 2,
    question: 'Khi kéo căng dây cung để chuẩn bị bắn tên, dạng năng lượng nào được tích trữ trong cánh cung?',
    options: ['Động năng', 'Thế năng đàn hồi', 'Nhiệt năng', 'Hóa năng'],
    correctIndex: 1,
    explanation: 'Cánh cung bị uốn cong biến dạng đàn hồi nên tích trữ thế năng đàn hồi.',
    level: 'basic'
  },
  {
    id: 'q2_10',
    lessonId: 2,
    question: 'Một chiếc trực thăng đang bay ngang đều ở độ cao 500 m. Trực thăng mang những dạng năng lượng nào?',
    options: ['Chỉ có động năng', 'Chỉ có thế năng', 'Cả động năng và thế năng', 'Không có năng lượng'],
    correctIndex: 2,
    explanation: 'Trực thăng đang chuyển động (có động năng) và ở độ cao 500 m (có thế năng trọng trường).',
    level: 'understanding'
  },
  {
    id: 'q2_11',
    lessonId: 2,
    question: 'Đơn vị đo của động năng và thế năng trong hệ SI là:',
    options: ['Niu-tơn (N)', 'Oát (W)', 'Jun (J)', 'Mã lực (HP)'],
    correctIndex: 2,
    explanation: 'Mọi dạng năng lượng và công trong hệ SI đều có đơn vị chuẩn là Jun (J).',
    level: 'basic'
  },
  {
    id: 'q2_12',
    lessonId: 2,
    question: 'Nếu khối lượng của một vật tăng lên gấp 3 lần và vận tốc giữ nguyên thì động năng của vật sẽ:',
    options: ['Tăng 3 lần', 'Tăng 9 lần', 'Giảm 3 lần', 'Không đổi'],
    correctIndex: 0,
    explanation: 'W_đ tỉ lệ bậc nhất với khối lượng m. Khi m tăng 3 lần thì W_đ tăng 3 lần.',
    level: 'understanding'
  },
  {
    id: 'q2_13',
    lessonId: 2,
    question: 'Một người đứng trên cầu ném một hòn bi xuống sông. Trong quá trình hòn bi rơi xuống:',
    options: ['Động năng giảm, thế năng tăng', 'Động năng tăng, thế năng giảm', 'Cả hai đại lượng đều tăng', 'Cả hai đại lượng đều giảm'],
    correctIndex: 1,
    explanation: 'Khi rơi xuống, độ cao h giảm nên thế năng giảm; vận tốc v tăng do trọng lực kéo nên động năng tăng.',
    level: 'understanding'
  },
  {
    id: 'q2_14',
    lessonId: 2,
    question: 'Thế năng trọng trường của một vật có thể nhận giá trị âm không?',
    options: ['Không bao giờ âm', 'Có thể nhận giá trị âm nếu vật nằm phía dưới mốc chọn thế năng', 'Luôn luôn âm', 'Chỉ âm khi vật chuyển động'],
    correctIndex: 1,
    explanation: 'Độ cao h mang dấu đại số so với mốc thế năng. Nếu chọn mốc thế năng ở miệng giếng thì đáy giếng có h < 0 nên W_t < 0.',
    level: 'advanced'
  },
  {
    id: 'q2_15',
    lessonId: 2,
    question: 'Một vật có khối lượng m = 1 kg có động năng bằng 32 J. Vận tốc của vật là:',
    options: ['4 m/s', '8 m/s', '16 m/s', '64 m/s'],
    correctIndex: 1,
    explanation: 'W_đ = (1/2)*m*v^2 => 32 = 0.5 * 1 * v^2 => v^2 = 64 => v = 8 m/s.',
    level: 'advanced'
  },
  {
    id: 'q2_16',
    lessonId: 2,
    question: 'Vật nào sau đây có động năng lớn nhất?',
    options: ['Vật m = 1 kg chuyển động với vận tốc v = 6 m/s', 'Vật m = 2 kg chuyển động với vận tốc v = 4 m/s', 'Vật m = 4 kg chuyển động với vận tốc v = 2 m/s', 'Vật m = 8 kg chuyển động với vận tốc v = 1 m/s'],
    correctIndex: 0,
    explanation: 'A: 0.5*1*36 = 18 J. B: 0.5*2*16 = 16 J. C: 0.5*4*4 = 8 J. D: 0.5*8*1 = 4 J. Vậy phương án A có động năng lớn nhất (18 J).',
    level: 'high'
  },
  {
    id: 'q2_17',
    lessonId: 2,
    question: 'Hiện tượng thủy triều sinh ra năng lượng nước chảy chủ yếu bắt nguồn từ dạng năng lượng nào của Mặt Trăng và Trái Đất?',
    options: ['Nhiệt năng', 'Tương tác thế năng hấp dẫn và động năng tự quay', 'Năng lượng hạt nhân', 'Năng lượng từ trường'],
    correctIndex: 1,
    explanation: 'Lực hấp dẫn của Mặt Trăng và Mặt Trời kết hợp chuyển động tự quay của Trái Đất tạo nên dao động thủy triều mang thế năng và động năng lớn.',
    level: 'advanced'
  },
  {
    id: 'q2_18',
    lessonId: 2,
    question: 'Một chiếc lò xo bị nén một đoạn 5 cm. Nếu tiếp tục nén thêm để độ biến dạng là 10 cm thì thế năng đàn hồi của lò xo sẽ:',
    options: ['Tăng gấp đôi', 'Tăng gấp 4 lần', 'Tăng gấp 8 lần', 'Không đổi'],
    correctIndex: 1,
    explanation: 'Thế năng đàn hồi tỉ lệ với bình phương độ biến dạng (x^2). Khi x tăng 2 lần (từ 5 cm lên 10 cm) thì thế năng tăng 2^2 = 4 lần.',
    level: 'high'
  },
  {
    id: 'q2_19',
    lessonId: 2,
    question: 'Tại sao khi xe chạy với tốc độ cao, khoảng cách an toàn phanh xe phải tăng lên rất nhiều lần?',
    options: ['Vì động năng xe tỉ lệ với bình phương vận tốc, công cản của phanh cần lớn hơn rất nhiều để triệt tiêu động năng', 'Vì trọng lượng của xe tăng lên', 'Vì lực ma sát giữa bánh xe và mặt đường biến mất', 'Vì lái xe bị hoa mắt'],
    correctIndex: 0,
    explanation: 'Theo định lý động năng: A_cản = W_đ = (1/2)mv^2. Khi tốc độ tăng gấp đôi thì quãng đường phanh cần thiết tăng lên gấp 4 lần.',
    level: 'advanced'
  },
  {
    id: 'q2_20',
    lessonId: 2,
    question: 'Một thùng hàng khối lượng 50 kg được cần cẩu nâng đều từ mặt đất lên sàn xe cao 1.2 m. Lấy g = 9.8 m/s². Độ tăng thế năng của thùng hàng là:',
    options: ['588 J', '600 J', '60 J', '490 J'],
    correctIndex: 0,
    explanation: 'Delta W_t = m * g * h = 50 * 9.8 * 1.2 = 588 J.',
    level: 'understanding'
  },

  // --- BÀI 3: Cơ năng (20 câu) ---
  {
    id: 'q3_1',
    lessonId: 3,
    question: 'Cơ năng của một vật được định nghĩa là:',
    options: ['Tích số giữa động năng và thế năng', 'Hiệu số giữa động năng và thế năng', 'Tổng động năng và thế năng của vật', 'Thương số giữa động năng và thế năng'],
    correctIndex: 2,
    explanation: 'Cơ năng W = W_đ + W_t là tổng đại số của động năng và thế năng của vật.',
    level: 'basic'
  },
  {
    id: 'q3_2',
    lessonId: 3,
    question: 'Trong trường hợp nào sau đây cơ năng của vật được bảo toàn?',
    options: ['Vật rơi trong không khí có lực cản lớn', 'Vật trượt trên mặt phẳng nghiêng có ma sát đáng kể', 'Vật chuyển động trong trọng trường chỉ chịu tác dụng của trọng lực (bỏ qua ma sát)', 'Chiếc lá rơi chao lượn trong gió'],
    correctIndex: 2,
    explanation: 'Cơ năng chỉ bảo toàn khi hệ không có ma sát hoặc lực cản tiêu tán năng lượng, chỉ chịu lực thế (trọng lực).',
    level: 'basic'
  },
  {
    id: 'q3_3',
    lessonId: 3,
    question: 'Khi ném một quả bóng lên thẳng đứng, tại điểm cao nhất của quỹ đạo:',
    options: ['Động năng cực đại, thế năng bằng 0', 'Thế năng cực đại, động năng bằng 0', 'Động năng bằng thế năng', 'Cả động năng và thế năng đều bằng 0'],
    correctIndex: 1,
    explanation: 'Tại điểm cao nhất, vận tốc v = 0 nên W_đ = 0, độ cao h đạt cực đại nên W_t đạt cực đại và bằng đúng cơ năng toàn phần.',
    level: 'understanding'
  },
  {
    id: 'q3_4',
    lessonId: 3,
    question: 'Một con lắc đơn dao động từ vị trí biên A sang vị trí biên B qua vị trí cân bằng O. Tại vị trí cân bằng O:',
    options: ['Thế năng cực đại', 'Động năng cực đại, thế năng cực tiểu', 'Vận tốc bằng 0', 'Cơ năng bằng 0'],
    correctIndex: 1,
    explanation: 'Tại vị trí cân bằng O (thấp nhất), thế năng cực tiểu, toàn bộ thế năng chuyển hóa thành động năng nên vận tốc và động năng đạt cực đại.',
    level: 'understanding'
  },
  {
    id: 'q3_5',
    lessonId: 3,
    question: 'Một vật có khối lượng m = 0.5 kg được thả rơi tự do từ độ cao h = 10 m (lấy g = 10 m/s²). Cơ năng của vật là:',
    options: ['5 J', '50 J', '100 J', '500 J'],
    correctIndex: 1,
    explanation: 'Tại vị trí bắt đầu thả (v=0): W = W_t = m * g * h = 0.5 * 10 * 10 = 50 J.',
    level: 'understanding'
  },
  {
    id: 'q3_6',
    lessonId: 3,
    question: 'Ở câu hỏi trên, khi vật rơi đến độ cao h = 4 m thì động năng của vật bằng bao nhiêu?',
    options: ['20 J', '30 J', '40 J', '50 J'],
    correctIndex: 1,
    explanation: 'Tại h = 4 m: W_t = 0.5 * 10 * 4 = 20 J. Do cơ năng bảo toàn (50 J): W_đ = W - W_t = 50 - 20 = 30 J.',
    level: 'advanced'
  },
  {
    id: 'q3_7',
    lessonId: 3,
    question: 'Vận tốc của vật ở câu hỏi số 5 ngay trước khi chạm đất là:',
    options: ['10 m/s', '14.14 m/s (hoặc căn 200 m/s)', '20 m/s', '100 m/s'],
    correctIndex: 1,
    explanation: 'Ngay sát đất: W_đ = (1/2)*m*v^2 = 50 J => 0.5 * 0.5 * v^2 = 50 => v^2 = 200 => v = căn(200) ≈ 14.14 m/s.',
    level: 'advanced'
  },
  {
    id: 'q3_8',
    lessonId: 3,
    question: 'Khi con lắc dao động trong không khí thực tế, sau một thời gian con lắc sẽ dừng lại. Nguyên nhân là do:',
    options: ['Cơ năng bị biến mất hoàn toàn vào hư vô', 'Cơ năng chuyển hóa dần thành nhiệt năng do ma sát với không khí', 'Trọng lực biến mất', 'Thế năng không thể biến đổi thành động năng'],
    correctIndex: 1,
    explanation: 'Theo định luật bảo toàn năng lượng, cơ năng không tự mất đi mà bị hao phí do công của lực cản không khí chuyển hóa thành nhiệt năng làm nóng vật và môi trường.',
    level: 'understanding'
  },
  {
    id: 'q3_9',
    lessonId: 3,
    question: 'Trong nhà máy thủy điện, quá trình chuyển hóa năng lượng chủ yếu để tạo ra điện năng là:',
    options: ['Quang năng -> Nhiệt năng -> Điện năng', 'Thế năng của dòng nước trên cao -> Động năng -> Cơ năng quay tuabin -> Điện năng', 'Hóa năng -> Điện năng', 'Năng lượng hạt nhân -> Điện năng'],
    correctIndex: 1,
    explanation: 'Nước ở hồ chứa trên cao có thế năng -> chảy xuống tạo động năng làm quay tuabin máy phát điện -> tạo ra điện năng.',
    level: 'understanding'
  },
  {
    id: 'q3_10',
    lessonId: 3,
    question: 'Một vật được ném thẳng đứng lên cao từ mặt đất với vận tốc v0 = 10 m/s (g = 10 m/s², bỏ qua lực cản). Độ cao cực đại mà vật đạt tới là:',
    options: ['5 m', '10 m', '20 m', '50 m'],
    correctIndex: 0,
    explanation: 'Bảo toàn cơ năng: (1/2)*m*v0^2 = m*g*h_max => h_max = v0^2 / (2g) = 10^2 / (2 * 10) = 100 / 20 = 5 m.',
    level: 'advanced'
  },
  {
    id: 'q3_11',
    lessonId: 3,
    question: 'Tại vị trí nào thì động năng của một vật rơi tự do bằng thế năng của nó (chọn mốc thế năng tại mặt đất)?',
    options: ['Ở ngay mặt đất', 'Ở vị trí có độ cao bằng một nửa độ cao cực đại (h = h_max / 2)', 'Tại điểm thả vật', 'Không có vị trí nào'],
    correctIndex: 1,
    explanation: 'Khi W_đ = W_t thì W = W_đ + W_t = 2 * W_t => m*g*h_max = 2*m*g*h => h = h_max / 2.',
    level: 'advanced'
  },
  {
    id: 'q3_12',
    lessonId: 3,
    question: 'Một người nhảy dù từ máy bay xuống đất. Trong giai đoạn dù đã bung và rơi đều với vận tốc không đổi thì cơ năng của người:',
    options: ['Được bảo toàn', 'Tăng dần', 'Giảm dần vì thế năng giảm trong khi động năng không đổi', 'Bằng 0'],
    correctIndex: 2,
    explanation: 'Rơi đều nên v không đổi => Động năng không đổi. Độ cao giảm => Thế năng giảm => Cơ năng W = W_đ + W_t giảm dần (chuyển thành nhiệt năng do lực cản không khí).',
    level: 'advanced'
  },
  {
    id: 'q3_13',
    lessonId: 3,
    question: 'Một búa máy nặng 100 kg rơi từ độ cao 2 m xuống đóng cọc móng. Cho g = 10 m/s². Cơ năng của búa máy truyền cho cọc là:',
    options: ['200 J', '1000 J', '2000 J', '4000 J'],
    correctIndex: 2,
    explanation: 'W = m * g * h = 100 * 10 * 2 = 2000 J.',
    level: 'understanding'
  },
  {
    id: 'q3_14',
    lessonId: 3,
    question: 'Thiết bị nào sau đây biến đổi thế năng đàn hồi thành động năng?',
    options: ['Khẩu súng cao su bắn hòn sỏi', 'Bóng đèn điện', 'Bàn là điện', 'Quạt trần'],
    correctIndex: 0,
    explanation: 'Dây cao su bị dãn tích thế năng đàn hồi, khi buông tay lực đàn hồi phóng viên sỏi bay đi với động năng lớn.',
    level: 'basic'
  },
  {
    id: 'q3_15',
    lessonId: 3,
    question: 'Một hòn bi khối lượng m lăn không ma sát trên máng cong từ điểm A có độ cao hA sang điểm B có độ cao hB (hB < hA). Vận tốc của hòn bi tại B là:',
    options: ['vB = căn(2*g*(hA - hB))', 'vB = căn(2*g*hA)', 'vB = 2*g*(hA - hB)', 'vB = g*(hA + hB)'],
    correctIndex: 0,
    explanation: 'Bảo toàn cơ năng: m*g*hA = m*g*hB + (1/2)*m*vB^2 => (1/2)*vB^2 = g*(hA - hB) => vB = căn(2*g*(hA - hB)).',
    level: 'high'
  },
  {
    id: 'q3_16',
    lessonId: 3,
    question: 'Một vật có cơ năng W = 100 J. Tại thời điểm động năng W_đ = 3 * W_t thì thế năng của vật bằng:',
    options: ['25 J', '50 J', '75 J', '100 J'],
    correctIndex: 0,
    explanation: 'W = W_đ + W_t = 3*W_t + W_t = 4*W_t => 100 = 4*W_t => W_t = 25 J.',
    level: 'advanced'
  },
  {
    id: 'q3_17',
    lessonId: 3,
    question: 'Trong chuyển động của tàu lượn siêu tốc (roller coaster), đoạn đường nào tàu có vận tốc lớn nhất?',
    options: ['Đỉnh đồi cao nhất', 'Điểm trũng thấp nhất của đường ray', 'Đoạn đường bắt đầu xuất phát', 'Lúc vừa lên dốc'],
    correctIndex: 1,
    explanation: 'Tại điểm trũng thấp nhất, thế năng đạt giá trị nhỏ nhất nên động năng đạt giá trị lớn nhất, nghĩa là vận tốc đạt cực đại.',
    level: 'understanding'
  },
  {
    id: 'q3_18',
    lessonId: 3,
    question: 'Khi một vật rơi trong chất lỏng nhớt và đạt vận tốc giới hạn không đổi, công của lực cản bằng:',
    options: ['0', 'Độ giảm thế năng của vật', 'Độ tăng động năng của vật', 'Bằng cơ năng'],
    correctIndex: 1,
    explanation: 'Vì v không đổi (động năng không đổi), toàn bộ độ giảm thế năng đã bị lực cản tiêu tán thành nhiệt: A_cản = Delta W_t.',
    level: 'high'
  },
  {
    id: 'q3_19',
    lessonId: 3,
    question: 'Cơ năng của một vệ tinh nhân tạo quay quanh Trái Đất theo quỹ đạo tròn bao gồm:',
    options: ['Chỉ có động năng', 'Chỉ có thế năng hấp dẫn', 'Tổng động năng và thế năng hấp dẫn của vệ tinh trong trường hấp dẫn Trái Đất', 'Năng lượng ánh sáng Mặt Trời'],
    correctIndex: 2,
    explanation: 'Vệ tinh vừa chuyển động với vận tốc cấp 1 (động năng) vừa ở độ cao hàng trăm km trong trường hấp dẫn (thế năng).',
    level: 'advanced'
  },
  {
    id: 'q3_20',
    lessonId: 3,
    question: 'Một lò xo có độ cứng k bị nén đoạn x. Khi thả ra, lò xo đẩy một viên bi khối lượng m bay ra trên mặt phẳng nằm ngang không ma sát. Vận tốc của viên bi khi rời lò xo là:',
    options: ['v = x * căn(k / m)', 'v = x * (k / m)', 'v = (1/2) * k * x^2', 'v = căn(k * m * x)'],
    correctIndex: 0,
    explanation: 'Bảo toàn cơ năng: (1/2)*k*x^2 = (1/2)*m*v^2 => v^2 = (k/m)*x^2 => v = x * căn(k/m).',
    level: 'high'
  },

  // --- BÀI 4: Công và công suất (20 câu) ---
  {
    id: 'q4_1',
    lessonId: 4,
    question: 'Trong các trường hợp sau đây, trường hợp nào có công cơ học theo định nghĩa Vật lý?',
    options: ['Một lực sĩ đang gồng mình giữ tạ nặng 100 kg đứng yên trên vai', 'Một học sinh đang ngồi suy nghĩ bài toán khó', 'Một con ngựa đang kéo xe chuyển động trên đường', 'Một người đang đẩy một bức tường bê tông nhưng tường không hề nhúc nhích'],
    correctIndex: 2,
    explanation: 'Công cơ học chỉ sinh ra khi có lực tác dụng và vật phải dịch chuyển theo phương lực. Con ngựa tác dụng lực kéo làm xe dịch chuyển quãng đường s nên có công.',
    level: 'basic'
  },
  {
    id: 'q4_2',
    lessonId: 4,
    question: 'Công thức tính công cơ học khi lực F cùng hướng với hướng chuyển dời của vật là:',
    options: ['A = F / s', 'A = F * s', 'A = F + s', 'A = m * v'],
    correctIndex: 1,
    explanation: 'Công cơ học: A = F * s, trong đó F là lực (N), s là quãng đường (m).',
    level: 'basic'
  },
  {
    id: 'q4_3',
    lessonId: 4,
    question: 'Đơn vị đo công trong hệ SI là gì?',
    options: ['Watt (W)', 'Newton (N)', 'Joule (J)', 'Kilowatt giờ (kWh)'],
    correctIndex: 2,
    explanation: 'Đơn vị chuẩn của công là Joule (J), 1 J = 1 N * m.',
    level: 'basic'
  },
  {
    id: 'q4_4',
    lessonId: 4,
    question: 'Một người tác dụng lực kéo 150 N kéo chiếc vali đi đoạn đường 20 m trên sàn ga nằm ngang. Công của người đó đã thực hiện là:',
    options: ['3000 J', '1500 J', '7.5 J', '170 J'],
    correctIndex: 0,
    explanation: 'A = F * s = 150 * 20 = 3000 J.',
    level: 'understanding'
  },
  {
    id: 'q4_5',
    lessonId: 4,
    question: 'Công suất là đại lượng đặc trưng cho:',
    options: ['Độ lớn của lực tác dụng', 'Khối lượng của vật chuyển động', 'Tốc độ thực hiện công nhanh hay chậm', 'Quãng đường vật đi được trong 1 giờ'],
    correctIndex: 2,
    explanation: 'Công suất P = A / t xác định bằng công thực hiện được trong một đơn vị thời gian, đặc trưng cho tốc độ sinh công.',
    level: 'basic'
  },
  {
    id: 'q4_6',
    lessonId: 4,
    question: 'Công thức tính công suất là:',
    options: ['P = A * t', 'P = A / t', 'P = t / A', 'P = F * t'],
    correctIndex: 1,
    explanation: 'Công suất P = A / t, với A là công (J) và t là thời gian thực hiện công (s).',
    level: 'basic'
  },
  {
    id: 'q4_7',
    lessonId: 4,
    question: '1 Oát (1 W) tương đương với:',
    options: ['1 J.s', '1 J / s', '1 N / m', '1 kg.m/s'],
    correctIndex: 1,
    explanation: '1 Watt = 1 Joule trên giây (1 J/s).',
    level: 'basic'
  },
  {
    id: 'q4_8',
    lessonId: 4,
    question: 'Một động cơ máy nâng thực hiện công 60 000 J trong thời gian 30 giây. Công suất của động cơ là:',
    options: ['200 W', '1800 kW', '2000 W (2 kW)', '180 W'],
    correctIndex: 2,
    explanation: 'P = A / t = 60000 / 30 = 2000 W = 2 kW.',
    level: 'understanding'
  },
  {
    id: 'q4_9',
    lessonId: 4,
    question: 'Mối liên hệ giữa công suất P, lực kéo F và vận tốc chuyển động đều v là:',
    options: ['P = F * v', 'P = F / v', 'P = v / F', 'P = F + v'],
    correctIndex: 0,
    explanation: 'Vì P = A / t = (F * s) / t = F * (s / t) = F * v.',
    level: 'understanding'
  },
  {
    id: 'q4_10',
    lessonId: 4,
    question: 'Một đầu máy xe lửa kéo đoàn tàu chuyển động đều với lực kéo F = 50 000 N và vận tốc v = 20 m/s. Công suất kéo của đầu máy là:',
    options: ['1000 kW', '2500 W', '100 kW', '250 kW'],
    correctIndex: 0,
    explanation: 'P = F * v = 50 000 * 20 = 1 000 000 W = 1000 kW = 1 MW.',
    level: 'understanding'
  },
  {
    id: 'q4_11',
    lessonId: 4,
    question: 'Khi một vật trượt trên mặt sàn nằm ngang, trọng lực P của vật có thực hiện công không?',
    options: ['Có thực hiện công phát động', 'Có thực hiện công cản', 'Không thực hiện công vì phương của trọng lực vuông góc với phương dịch chuyển', 'Thực hiện công cực đại'],
    correctIndex: 2,
    explanation: 'Khi phương của lực vuông góc với phương dịch chuyển (góc 90°), lực không sinh công trên phương dịch chuyển (A = 0).',
    level: 'understanding'
  },
  {
    id: 'q4_12',
    lessonId: 4,
    question: 'Lực ma sát cản trở chuyển động của một vật sinh ra loại công nào?',
    options: ['Công phát động (A > 0)', 'Công cản (công âm, A < 0)', 'Công cơ năng bảo toàn', 'Không sinh công'],
    correctIndex: 1,
    explanation: 'Lực ngược chiều chuyển động nên thực hiện công cản (mang dấu âm), làm giảm động năng của vật.',
    level: 'understanding'
  },
  {
    id: 'q4_13',
    lessonId: 4,
    question: 'Hai bạn An và Bình cùng nâng 20 viên gạch từ mặt đất lên tầng 2. An hoàn thành trong 10 phút, Bình hoàn thành trong 15 phút. So sánh công và công suất của hai bạn:',
    options: ['An thực hiện công lớn hơn', 'Bình thực hiện công lớn hơn', 'Hai bạn thực hiện công như nhau, nhưng công suất của An lớn hơn Bình', 'Hai bạn có cùng công và cùng công suất'],
    correctIndex: 2,
    explanation: 'Cùng nâng 20 viên gạch lên cùng độ cao nên công A của hai bạn bằng nhau. An làm trong thời gian ngắn hơn (t_An < t_Bình) nên công suất của An lớn hơn.',
    level: 'advanced'
  },
  {
    id: 'q4_14',
    lessonId: 4,
    question: 'Đơn vị Megawatt (MW) bằng bao nhiêu Watt?',
    options: ['1000 W', '100 000 W', '1 000 000 W (10^6 W)', '10^9 W'],
    correctIndex: 2,
    explanation: 'Tiền tố Mega (M) biểu thị 10^6 = 1 000 000.',
    level: 'basic'
  },
  {
    id: 'q4_15',
    lessonId: 4,
    question: 'Một máy bơm nước nâng được 1.5 m³ nước lên bồn cao 12 m trong thời gian 5 phút. Khối lượng riêng của nước D = 1000 kg/m³, g = 10 m/s². Công suất có ích của máy bơm là:',
    options: ['600 W', '3600 W', '60 W', '1800 W'],
    correctIndex: 0,
    explanation: 'Khối lượng nước m = D * V = 1000 * 1.5 = 1500 kg. Công cần nâng: A = m*g*h = 1500 * 10 * 12 = 180 000 J. Thời gian t = 5 * 60 = 300 s. Công suất: P = A / t = 180 000 / 300 = 600 W.',
    level: 'advanced'
  },
  {
    id: 'q4_16',
    lessonId: 4,
    question: 'Một người thợ leo cầu thang lên cao 6 m trong 12 giây. Khối lượng của người là 60 kg (g = 10 m/s²). Công suất trung bình của người đó là:',
    options: ['300 W', '3600 W', '500 W', '250 W'],
    correctIndex: 0,
    explanation: 'Trọng lượng P_tl = 60 * 10 = 600 N. Công nâng cơ thể: A = 600 * 6 = 3600 J. Công suất P = 3600 / 12 = 300 W.',
    level: 'understanding'
  },
  {
    id: 'q4_17',
    lessonId: 4,
    question: 'Mã lực (HP - Horsepower) là một đơn vị đo công suất cũ. 1 HP xấp xỉ bằng bao nhiêu Watt?',
    options: ['100 W', '500 W', 'Khoảng 746 W (hoặc 736 W theo chuẩn metric)', '1000 W'],
    correctIndex: 2,
    explanation: '1 mã lực cơ học (HP) chuẩn Anh bằng khoảng 745.7 W (~746 W), mã lực Pháp (CV) bằng 735.5 W (~736 W).',
    level: 'understanding'
  },
  {
    id: 'q4_18',
    lessonId: 4,
    question: 'Một xe máy có công suất 6 kW chạy đều trên đường bằng với vận tốc 54 km/h. Lực kéo của động cơ xe là:',
    options: ['400 N', '111 N', '324 N', '600 N'],
    correctIndex: 0,
    explanation: 'Đổi vận tốc: v = 54 km/h = 54 / 3.6 = 15 m/s. Đổi P = 6000 W. Lực kéo: F = P / v = 6000 / 15 = 400 N.',
    level: 'advanced'
  },
  {
    id: 'q4_19',
    lessonId: 4,
    question: 'Hiệu suất (H) của một máy cơ học được tính bằng công thức:',
    options: ['H = (A_toàn phần / A_có ích) * 100%', 'H = (A_có ích / A_toàn phần) * 100%', 'H = (A_hao phí / A_có ích) * 100%', 'H = (A_có ích + A_hao phí) / A_toàn phần'],
    correctIndex: 1,
    explanation: 'Hiệu suất là tỉ số phần trăm giữa công có ích thu được và tổng công toàn phần phải tiêu tốn.',
    level: 'basic'
  },
  {
    id: 'q4_20',
    lessonId: 4,
    question: 'Một palăng kéo hàng có hiệu suất H = 80%. Để thực hiện một công có ích là 1600 J thì công toàn phần mà người công nhân phải bỏ ra là:',
    options: ['1280 J', '2000 J', '1600 J', '3200 J'],
    correctIndex: 1,
    explanation: 'A_toàn phần = A_có ích / H = 1600 / 0.8 = 2000 J.',
    level: 'advanced'
  }
];
