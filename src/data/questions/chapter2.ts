import { Question } from '../../types';

export const CHAPTER_2_QUESTIONS: Question[] = [
  // --- BÀI 5: Khúc xạ ánh sáng (20 câu) ---
  {
    id: 'q5_1',
    lessonId: 5,
    question: 'Hiện tượng khúc xạ ánh sáng là hiện tượng:',
    options: ['Tia sáng bị hắt trở lại môi trường trong suốt cũ khi gặp mặt phân cách', 'Tia sáng bị gãy khúc tại mặt phân cách khi truyền xiên góc từ môi trường trong suốt này sang môi trường trong suốt khác', 'Tia sáng bị chia thành nhiều màu sắc rực rỡ', 'Tia sáng bị hấp thụ hoàn toàn'],
    correctIndex: 1,
    explanation: 'Khúc xạ ánh sáng là hiện tượng tia sáng bị đổi phương đột ngột (gãy khúc) tại mặt phân cách khi truyền xiên qua 2 môi trường trong suốt khác nhau.',
    level: 'basic'
  },
  {
    id: 'q5_2',
    lessonId: 5,
    question: 'Tia khúc xạ nằm trong mặt phẳng nào?',
    options: ['Mặt phẳng phân cách', 'Mặt phẳng tới', 'Mặt phẳng vuông góc với tia tới', 'Bất kì mặt phẳng nào'],
    correctIndex: 1,
    explanation: 'Định luật khúc xạ: Tia khúc xạ luôn nằm trong mặt phẳng tới và ở phía bên kia pháp tuyến so với tia tới.',
    level: 'basic'
  },
  {
    id: 'q5_3',
    lessonId: 5,
    question: 'Khi tia sáng truyền từ không khí vào nước (n1 < n2) với góc tới i > 0°, mối quan hệ giữa góc tới i và góc khúc xạ r là:',
    options: ['r > i', 'r < i', 'r = i', 'r = 2i'],
    correctIndex: 1,
    explanation: 'Từ môi trường chiết quang kém sang môi trường chiết quang hơn, tia sáng bị bẻ gập lại gần pháp tuyến nên r < i.',
    level: 'understanding'
  },
  {
    id: 'q5_4',
    lessonId: 5,
    question: 'Khi chiếu tia sáng vuông góc với mặt phân cách giữa hai môi trường trong suốt (góc tới i = 0°) thì góc khúc xạ r bằng:',
    options: ['0° (tia sáng truyền thẳng không bị đổi hướng)', '90°', '45°', '180°'],
    correctIndex: 0,
    explanation: 'Khi chiếu vuông góc (i = 0°), chùm sáng truyền thẳng qua mặt phân cách mà không bị đổi phương.',
    level: 'basic'
  },
  {
    id: 'q5_5',
    lessonId: 5,
    question: 'Hệ thức nào sau đây diễn tả đúng định luật khúc xạ ánh sáng (định luật Snell)?',
    options: ['n1 * sin i = n2 * sin r', 'n1 * sin r = n2 * sin i', 'sin i + sin r = n1 / n2', 'n1 * i = n2 * r'],
    correctIndex: 0,
    explanation: 'Định luật Snell: n1 * sin i = n2 * sin r.',
    level: 'basic'
  },
  {
    id: 'q5_6',
    lessonId: 5,
    question: 'Chiết suất tuyệt đối của chân không quy ước bằng bao nhiêu?',
    options: ['0', '1', '1.33', 'Vô cùng'],
    correctIndex: 1,
    explanation: 'Chiết suất chân không quy ước n = 1, của không khí xấp xỉ 1 (1.00029).',
    level: 'basic'
  },
  {
    id: 'q5_7',
    lessonId: 5,
    question: 'Một tia sáng chiếu từ không khí vào thủy tinh với góc tới i = 60°. Biết chiết suất của thủy tinh n = căn(3) ≈ 1.732. Góc khúc xạ r là:',
    options: ['30°', '45°', '60°', '90°'],
    correctIndex: 0,
    explanation: 'sin r = (n1 * sin i) / n2 = (1 * sin 60°) / căn(3) = (căn(3)/2) / căn(3) = 1/2 => r = 30°.',
    level: 'advanced'
  },
  {
    id: 'q5_8',
    lessonId: 5,
    question: 'Hiện tượng nhìn xuống đáy bể bơi thấy đáy dường như cạn hơn so với độ sâu thực tế là do:',
    options: ['Hiện tượng phản xạ toàn phần', 'Hiện tượng khúc xạ ánh sáng từ nước ra không khí tạo ảnh ảo nâng cao lên', 'Nước có màu xanh', 'Mắt người bị ảo giác quang học'],
    correctIndex: 1,
    explanation: 'Tia sáng từ đáy bể truyền ra không khí bị khúc xạ xa pháp tuyến, mắt nhìn theo đường kéo dài thấy đáy nâng lên một đoạn h\' ≈ h / n.',
    level: 'understanding'
  },
  {
    id: 'q5_9',
    lessonId: 5,
    question: 'Khi góc tới i tăng dần từ 10° lên 60° thì góc khúc xạ r sẽ:',
    options: ['Giảm dần', 'Tăng dần', 'Không thay đổi', 'Bằng 0'],
    correctIndex: 1,
    explanation: 'Góc tới i và góc khúc xạ r luôn đồng biến: khi i tăng thì r tăng, khi i giảm thì r giảm.',
    level: 'understanding'
  },
  {
    id: 'q5_10',
    lessonId: 5,
    question: 'Vận tốc ánh sáng trong chân không là c = 3.10^8 m/s. Trong nước có chiết suất n = 4/3, vận tốc truyền ánh sáng là:',
    options: ['2.25 . 10^8 m/s', '4.0 . 10^8 m/s', '3.0 . 10^8 m/s', '1.5 . 10^8 m/s'],
    correctIndex: 0,
    explanation: 'v = c / n = 3.10^8 / (4/3) = 2.25 . 10^8 m/s.',
    level: 'advanced'
  },
  {
    id: 'q5_11',
    lessonId: 5,
    question: 'Chiếu tia sáng từ nước (n = 1.33) ra không khí với góc tới i = 30°. Góc khúc xạ r sẽ:',
    options: ['Nhỏ hơn 30°', 'Lớn hơn 30°', 'Bằng 30°', 'Bằng 0°'],
    correctIndex: 1,
    explanation: 'Truyền từ môi trường chiết quang hơn sang kém hơn (n1 > n2), tia khúc xạ bị lệch xa pháp tuyến nên r > i.',
    level: 'understanding'
  },
  {
    id: 'q5_12',
    lessonId: 5,
    question: 'Pháp tuyến tại điểm tới là đường thẳng như thế nào so với mặt phân cách?',
    options: ['Song song với mặt phân cách', 'Trùng với mặt phân cách', 'Vuông góc với mặt phân cách tại điểm tới', 'Tạo với mặt phân cách góc 45°'],
    correctIndex: 2,
    explanation: 'Pháp tuyến (kí hiệu NN\') luôn là đường thẳng vuông góc với mặt phân cách tại điểm tới I.',
    level: 'basic'
  },
  {
    id: 'q5_13',
    lessonId: 5,
    question: 'Chiết suất tỉ đối n21 giữa môi trường 2 và môi trường 1 được tính bằng:',
    options: ['n21 = n2 / n1', 'n21 = n1 / n2', 'n21 = n1 * n2', 'n21 = n2 - n1'],
    correctIndex: 0,
    explanation: 'n21 = n2 / n1 là chiết suất tỉ đối của môi trường 2 đối với môi trường 1.',
    level: 'understanding'
  },
  {
    id: 'q5_14',
    lessonId: 5,
    question: 'Chiết suất tuyệt đối của mọi môi trường trong suốt (như nước, thủy tinh, kim cương) luôn:',
    options: ['Nhỏ hơn 1', 'Bằng 1', 'Lớn hơn 1', 'Có thể âm'],
    correctIndex: 2,
    explanation: 'Vì vận tốc ánh sáng trong mọi môi trường luôn nhỏ hơn vận tốc trong chân không (v < c), nên n = c / v > 1.',
    level: 'understanding'
  },
  {
    id: 'q5_15',
    lessonId: 5,
    question: 'Khi chiếu tia sáng từ không khí vào một bản mặt song song bằng thủy tinh, tia ló ra ngoài không khí sẽ:',
    options: ['Vuông góc với tia tới', 'Song song với tia tới nhưng bị dời một đoạn', 'Bị phản xạ ngược lại nguồn', 'Hội tụ tại một điểm'],
    correctIndex: 1,
    explanation: 'Qua 2 lần khúc xạ ở 2 mặt song song, tia ló truyền cùng góc ban đầu nên song song với phương tia tới (bị tịnh tiến dời ngang).',
    level: 'advanced'
  },
  {
    id: 'q5_16',
    lessonId: 5,
    question: 'Góc tới i được xác định là góc giữa:',
    options: ['Tia tới và mặt phân cách', 'Tia tới và pháp tuyến tại điểm tới', 'Tia tới và tia phản xạ', 'Tia tới và tia khúc xạ'],
    correctIndex: 1,
    explanation: 'Góc tới i được tính từ tia tới SI đến pháp tuyến IN.',
    level: 'basic'
  },
  {
    id: 'q5_17',
    lessonId: 5,
    question: 'Một người đứng trên bờ nhìn con cá dưới nước trong veo. Để đâm trúng con cá bằng mũi lao, người đó cần nhắm:',
    options: ['Đúng vào vị trí nhìn thấy con cá', 'Chếch phía trên vị trí nhìn thấy con cá một chút', 'Chếch phía dưới vị trí nhìn thấy con cá một chút', 'Nhắm thẳng vào bóng của con cá'],
    correctIndex: 2,
    explanation: 'Do khúc xạ, ảnh của con cá mà mắt thấy là ảnh ảo nằm cao hơn vị trí thực của con cá. Cần nhắm xuống dưới ảnh ảo mới trúng.',
    level: 'advanced'
  },
  {
    id: 'q5_18',
    lessonId: 5,
    question: 'Chiếu tia sáng từ không khí vào nước với góc tới i = 45°. Biết sin 45° = 0.707 và chiết suất nước n = 1.33. Giá trị sin của góc khúc xạ r là:',
    options: ['0.531', '0.707', '0.940', '0.353'],
    correctIndex: 0,
    explanation: 'sin r = (1 * sin 45°) / 1.33 = 0.707 / 1.33 ≈ 0.531 (ứng với r ≈ 32°).',
    level: 'understanding'
  },
  {
    id: 'q5_19',
    lessonId: 5,
    question: 'Khi ánh sáng truyền qua mặt phân cách, đại lượng nào sau đây KHÔNG THAY ĐỔI?',
    options: ['Vận tốc truyền sáng', 'Bước sóng ánh sáng', 'Tần số của ánh sáng', 'Phương truyền của tia sáng (nếu chiếu xiên)'],
    correctIndex: 2,
    explanation: 'Tần số ánh sáng phụ thuộc nguồn phát nên không đổi khi truyền qua các môi trường.',
    level: 'high'
  },
  {
    id: 'q5_20',
    lessonId: 5,
    question: 'Kim cương lấp lánh rực rỡ dưới ánh sáng mặt trời chủ yếu là nhờ:',
    options: ['Kim cương tự phát ra ánh sáng', 'Kim cương có chiết suất rất lớn (n ≈ 2.42) và các mặt giác cắt làm tăng khả năng phản xạ toàn phần bên trong', 'Kim cương hút ánh sáng', 'Kim cương có tính phóng xạ'],
    correctIndex: 1,
    explanation: 'Chiết suất kim cương rất cao (n ≈ 2.42) khiến góc giới hạn rất nhỏ (~24.4°), ánh sáng vào bên trong bị phản xạ toàn phần nhiều lần trước khi ló ra.',
    level: 'advanced'
  },

  // --- BÀI 6: Phản xạ toàn phần (20 câu) ---
  {
    id: 'q6_1',
    lessonId: 6,
    question: 'Hiện tượng phản xạ toàn phần là hiện tượng:',
    options: ['Toàn bộ tia sáng bị khúc xạ sang môi trường thứ hai', 'Toàn bộ tia sáng tới bị phản xạ trở lại môi trường ban đầu tại mặt phân cách', 'Tia sáng bị phân tách thành 7 màu', 'Ánh sáng bị chặn lại bởi vật cản'],
    correctIndex: 1,
    explanation: 'Phản xạ toàn phần là hiện tượng không còn tia khúc xạ, toàn bộ năng lượng tia tới bị phản xạ ngược lại môi trường 1.',
    level: 'basic'
  },
  {
    id: 'q6_2',
    lessonId: 6,
    question: 'Điều kiện CẦN ĐỦ để xảy ra hiện tượng phản xạ toàn phần là:',
    options: ['Ánh sáng truyền từ môi trường kém chiết quang sang môi trường chiết quang hơn và i < ith', 'Ánh sáng truyền từ môi trường chiết quang hơn sang môi trường kém chiết quang hơn (n1 > n2) và góc tới i ≥ ith', 'Ánh sáng truyền qua chân không', 'Chỉ cần góc tới i = 90°'],
    correctIndex: 1,
    explanation: 'Hai điều kiện: 1) n1 > n2; 2) Góc tới i ≥ ith (góc giới hạn phản xạ toàn phần).',
    level: 'basic'
  },
  {
    id: 'q6_3',
    lessonId: 6,
    question: 'Công thức tính góc giới hạn phản xạ toàn phần ith là:',
    options: ['sin ith = n1 / n2', 'sin ith = n2 / n1 (với n1 > n2)', 'tan ith = n1 * n2', 'cos ith = n2 / n1'],
    correctIndex: 1,
    explanation: 'sin ith = n2 / n1 (vì sin ≤ 1 nên bắt buộc n2 < n1).',
    level: 'basic'
  },
  {
    id: 'q6_4',
    lessonId: 6,
    question: 'Chiếu tia sáng từ thủy tinh (n1 = 1.5) ra không khí (n2 = 1). Góc giới hạn phản xạ toàn phần ith xấp xỉ bằng:',
    options: ['41.8°', '48.6°', '60°', '30°'],
    correctIndex: 0,
    explanation: 'sin ith = 1 / 1.5 = 2/3 ≈ 0.667 => ith ≈ 41.8° (khoảng 41°48\').',
    level: 'understanding'
  },
  {
    id: 'q6_5',
    lessonId: 6,
    question: 'Chiếu tia sáng từ nước (n1 = 4/3) ra không khí (n2 = 1) với góc tới i = 50°. Hiện tượng gì sẽ xảy ra?',
    options: ['Chỉ có tia khúc xạ', 'Chỉ có hiện tượng phản xạ toàn phần (không có tia khúc xạ)', 'Vừa có tia khúc xạ vừa có tia phản xạ', 'Tia sáng bị tắt ngấm'],
    correctIndex: 1,
    explanation: 'ith của nước ra không khí là arcsin(3/4) ≈ 48.6°. Vì i = 50° > ith nên xảy ra phản xạ toàn phần.',
    level: 'understanding'
  },
  {
    id: 'q6_6',
    lessonId: 6,
    question: 'Nếu chiếu tia sáng từ không khí vào nước thì có thể xảy ra hiện tượng phản xạ toàn phần không?',
    options: ['Có thể xảy ra nếu góc tới lớn hơn 60°', 'Không bao giờ xảy ra vì ánh sáng truyền từ môi trường chiết quang kém sang môi trường chiết quang hơn (n1 < n2)', 'Xảy ra khi góc tới i = 90°', 'Luôn xảy ra với mọi góc tới'],
    correctIndex: 1,
    explanation: 'Không khí có n1 = 1 < n2 = 1.33 của nước, vi phạm điều kiện tiên quyết n1 > n2 nên không bao giờ có phản xạ toàn phần.',
    level: 'understanding'
  },
  {
    id: 'q6_7',
    lessonId: 6,
    question: 'Ứng dụng quan trọng nhất của hiện tượng phản xạ toàn phần trong công nghệ thông tin hiện đại là:',
    options: ['Màn hình tivi LED', 'Cáp quang truyền dữ liệu internet tốc độ cao', 'Ăng-ten chảo parabol', 'Ổ cứng máy tính'],
    correctIndex: 1,
    explanation: 'Cáp quang gồm lõi thủy tinh trong suốt có chiết suất lớn hơn vỏ bọc, tín hiệu ánh sáng phản xạ toàn phần liên tục bên trong lõi giúp truyền dữ liệu đi xa với tốc độ ánh sáng.',
    level: 'basic'
  },
  {
    id: 'q6_8',
    lessonId: 6,
    question: 'Khi xảy ra phản xạ toàn phần, góc phản xạ i\' liên hệ với góc tới i như thế nào?',
    options: ['i\' = i', 'i\' > i', 'i\' < i', 'i\' = 90° - i'],
    correctIndex: 0,
    explanation: 'Theo định luật phản xạ ánh sáng, góc phản xạ luôn bằng góc tới: i\' = i.',
    level: 'basic'
  },
  {
    id: 'q6_9',
    lessonId: 6,
    question: 'Hiện tượng ảo ảnh trên sa mạc hoặc trên mặt đường nhựa nắng nóng trưa hè (nhìn xa thấy như có vũng nước) được giải thích bằng:',
    options: ['Nhiệt độ quá cao làm mắt bị mờ', 'Hiện tượng phản xạ toàn phần của tia sáng qua các lớp không khí có nhiệt độ và mật độ khác nhau sát mặt đất', 'Hiện tượng tán sắc ánh sáng', 'Nước bốc hơi từ dưới lòng đất'],
    correctIndex: 1,
    explanation: 'Không khí sát mặt đường bị nung nóng nên loãng hơn (chiết suất nhỏ hơn không khí mát bên trên). Ánh sáng trời truyền cong và phản xạ toàn phần đi lên mắt người quan sát.',
    level: 'understanding'
  },
  {
    id: 'q6_10',
    lessonId: 6,
    question: 'Lăng kính phản xạ toàn phần là lăng kính thủy tinh có tiết diện thẳng là tam giác gì?',
    options: ['Tam giác đều', 'Tam giác vuông cân', 'Tam giác nhọn bất kì', 'Tam giác tù'],
    correctIndex: 1,
    explanation: 'Lăng kính phản xạ toàn phần có tiết diện là tam giác vuông cân (hai góc đáy 45°). Ánh sáng tới vuông góc một mặt bên sẽ tới mặt huyền với góc tới 45° > ith (42°).',
    level: 'understanding'
  },
  {
    id: 'q6_11',
    lessonId: 6,
    question: 'Cáp quang y tế dùng trong phẫu thuật nội soi hoạt động dựa trên nguyên lý nào?',
    options: ['Dẫn điện', 'Phản xạ toàn phần của ánh sáng trong bó sợi quang', 'Phát tia X', 'Bức xạ nhiệt'],
    correctIndex: 1,
    explanation: 'Bó sợi quang dẫn ánh sáng vào cơ thể và dẫn hình ảnh ra ngoài thông qua phản xạ toàn phần liên tục không gây tổn hại mô.',
    level: 'basic'
  },
  {
    id: 'q6_12',
    lessonId: 6,
    question: 'Một tia sáng đi từ chất lỏng trong suốt có chiết suất n ra không khí. Khi góc tới i = 45°, tia khúc xạ đi là là sát mặt phân cách (r = 90°). Chiết suất n của chất lỏng là:',
    options: ['1.33', '1.414 (căn 2)', '1.5', '1.732'],
    correctIndex: 1,
    explanation: 'Tại r = 90° thì i = ith = 45° => sin 45° = 1 / n => n = 1 / sin 45° = căn(2) ≈ 1.414.',
    level: 'advanced'
  },
  {
    id: 'q6_13',
    lessonId: 6,
    question: 'So với gương phẳng kim loại tráng bạc thông thường, lăng kính phản xạ toàn phần có ưu điểm gì?',
    options: ['Rẻ tiền hơn rất nhiều', 'Phản xạ hầu như 100% cường độ chùm sáng tới và không bị ố mờ theo thời gian', 'Làm cho ánh sáng đổi thành màu xanh', 'Nhẹ hơn gương'],
    correctIndex: 1,
    explanation: 'Gương tráng bạc chỉ phản xạ ~90-95% và lớp bạc có thể bị bong tróc, oxi hóa. Lăng kính phản xạ toàn phần đạt gần 100% phản xạ và bền vĩnh cửu.',
    level: 'understanding'
  },
  {
    id: 'q6_14',
    lessonId: 6,
    question: 'Khi góc tới i = ith thì tia khúc xạ sẽ:',
    options: ['Đi vuông góc với mặt phân cách', 'Đi là là sát mặt phân cách (góc khúc xạ r = 90°)', 'Bị biến mất', 'Quay ngược 180°'],
    correctIndex: 1,
    explanation: 'Khi i = ith, theo định luật Snell: n1 * sin ith = n2 * sin 90° => góc khúc xạ r = 90° (đi sát mặt phẳng phân cách).',
    level: 'understanding'
  },
  {
    id: 'q6_15',
    lessonId: 6,
    question: 'Cấu tạo sợi quang gồm 2 phần chính: phần lõi (core) và phần vỏ (cladding). Mối quan hệ giữa chiết suất của lõi n_core và chiết suất của vỏ n_clad là:',
    options: ['n_core > n_clad', 'n_core < n_clad', 'n_core = n_clad', 'Không phụ thuộc chiết suất'],
    correctIndex: 0,
    explanation: 'Để ánh sáng phản xạ toàn phần bên trong lõi, lõi phải chiết quang hơn vỏ: n_core > n_clad.',
    level: 'advanced'
  },
  {
    id: 'q6_16',
    lessonId: 6,
    question: 'Một khối bán trụ bằng thủy tinh chiết suất n = 1.5 được đặt trong không khí. Một tia sáng chiếu vào tâm của mặt phẳng bán trụ từ bên trong. Để có tia ló ra không khí, góc tới i phải thỏa mãn:',
    options: ['i ≥ 41.8°', 'i < 41.8°', 'i = 90°', 'Mọi góc tới'],
    correctIndex: 1,
    explanation: 'Để có tia ló (khúc xạ ra ngoài) thì chưa xảy ra phản xạ toàn phần, tức là góc tới phải nhỏ hơn góc giới hạn: i < ith (41.8°).',
    level: 'advanced'
  },
  {
    id: 'q6_17',
    lessonId: 6,
    question: 'Chiếu tia sáng từ kim cương (n = 2.42) ra nước (n = 1.33). Góc giới hạn phản xạ toàn phần ith bằng:',
    options: ['33.3°', '24.4°', '45.0°', '56.7°'],
    correctIndex: 0,
    explanation: 'sin ith = n_nước / n_kc = 1.33 / 2.42 ≈ 0.5496 => ith ≈ 33.3°.',
    level: 'high'
  },
  {
    id: 'q6_18',
    lessonId: 6,
    question: 'Khi nhìn vào một bọt khí nhỏ trong một khối thủy tinh dưới ánh sáng ban ngày, ta thấy bọt khí sáng lấp lánh như bạc. Đó là vì:',
    options: ['Bên trong bọt khí có chứa kim loại bạc', 'Ánh sáng truyền từ thủy tinh vào bọt khí bị phản xạ toàn phần trên mặt ngoài bọt khí đi đến mắt', 'Bọt khí tự phát quang', 'Do phản chiếu từ tường'],
    correctIndex: 1,
    explanation: 'Tia sáng truyền từ thủy tinh (n=1.5) vào không khí trong bọt khí (n=1) bị phản xạ toàn phần ngược lại, tạo độ sáng lấp lánh.',
    level: 'advanced'
  },
  {
    id: 'q6_19',
    lessonId: 6,
    question: 'Điều nào sau đây là SAI khi nói về phản xạ toàn phần?',
    options: ['Cường độ chùm phản xạ bằng gần như 100% cường độ chùm tới', 'Chỉ xảy ra khi tia sáng đi từ môi trường chiết quang hơn sang môi trường chiết quang kém', 'Xảy ra với mọi góc tới i', 'Góc giới hạn tính bằng sin ith = n2 / n1'],
    correctIndex: 2,
    explanation: 'Phản xạ toàn phần chỉ xảy ra khi góc tới i ≥ ith, không phải với mọi góc tới.',
    level: 'understanding'
  },
  {
    id: 'q6_20',
    lessonId: 6,
    question: 'Ống nhòm quân sự dùng hai lăng kính Porro phản xạ toàn phần để làm gì?',
    options: ['Đổi màu ánh sáng cho dễ nhìn ban đêm', 'Đảo ảnh ngược chiều thành ảnh thuận cùng chiều và thu ngắn chiều dài của ống nhòm', 'Tăng độ phóng đại thêm 100 lần', 'Ngăn nước mưa lọt vào'],
    correctIndex: 1,
    explanation: 'Hệ 2 lăng kính Porro đảo chiều ảnh 2 lần giúp ảnh thu được cùng chiều với vật và gấp khúc đường truyền quang giúp ống nhòm nhỏ gọn.',
    level: 'advanced'
  },

  // --- BÀI 7: Lăng kính (20 câu) ---
  {
    id: 'q7_1',
    lessonId: 7,
    question: 'Về mặt quang học, lăng kính là một khối chất trong suốt, đồng tính thường có dạng hình học gì?',
    options: ['Hình cầu', 'Lăng trụ tam giác', 'Hình trụ tròn', 'Hình hộp chữ nhật'],
    correctIndex: 1,
    explanation: 'Lăng kính thường có dạng lăng trụ tam giác, được giới hạn bởi hai mặt bên phẳng tạo thành góc chiết quang A.',
    level: 'basic'
  },
  {
    id: 'q7_2',
    lessonId: 7,
    question: 'Hai đại lượng đặc trưng cho một lăng kính là:',
    options: ['Chiều cao và bán kính đáy', 'Góc chiết quang A và chiết suất n', 'Khối lượng và diện tích đáy', 'Tiêu cự và độ tụ'],
    correctIndex: 1,
    explanation: 'Lăng kính được đặc trưng bởi góc chiết quang A (ở đỉnh) và chiết suất tỉ đối n của chất làm lăng kính.',
    level: 'basic'
  },
  {
    id: 'q7_3',
    lessonId: 7,
    question: 'Khi chiếu một tia sáng đơn sắc qua lăng kính đặt trong không khí, tia ló luôn bị lệch về phía nào so với tia tới?',
    options: ['Lệch về phía đáy của lăng kính', 'Lệch về phía đỉnh của lăng kính', 'Truyền thẳng không bị lệch', 'Bị quay ngược 180°'],
    correctIndex: 0,
    explanation: 'Qua 2 lần khúc xạ ở 2 mặt bên lăng kính (vào và ra), tia sáng luôn bị bẻ lệch về phía đáy lăng kính.',
    level: 'understanding'
  },
  {
    id: 'q7_4',
    lessonId: 7,
    question: 'Khi chiếu một chùm ánh sáng trắng hẹp qua lăng kính, hiện tượng thu được trên màn quan sát là:',
    options: ['Một vệt sáng trắng duy nhất', 'Dải màu cầu vồng biến thiên liên tục từ đỏ đến tím (hiện tượng tán sắc ánh sáng)', 'Một vệt sáng tối đen', 'Chỉ có 2 màu xanh và đỏ'],
    correctIndex: 1,
    explanation: 'Ánh sáng trắng là tập hợp của vô số ánh sáng đơn sắc. Do chiết suất của thủy tinh với các màu khác nhau, lăng kính làm tán sắc chùm sáng thành dải màu từ đỏ đến tím.',
    level: 'basic'
  },
  {
    id: 'q7_5',
    lessonId: 7,
    question: 'Trong hiện tượng tán sắc ánh sáng qua lăng kính, tia sáng màu nào bị lệch nhiều nhất và tia nào bị lệch ít nhất?',
    options: ['Tia đỏ lệch nhiều nhất, tia tím lệch ít nhất', 'Tia tím lệch nhiều nhất, tia đỏ lệch ít nhất', 'Tất cả các màu bị lệch như nhau', 'Tia vàng lệch nhiều nhất'],
    correctIndex: 1,
    explanation: 'Chiết suất của môi trường đối với ánh sáng tím là lớn nhất (n_tím > n_đỏ) nên tia tím bị bẻ gãy lệch nhiều nhất, tia đỏ lệch ít nhất.',
    level: 'understanding'
  },
  {
    id: 'q7_6',
    lessonId: 7,
    question: 'Góc lệch D của tia sáng qua lăng kính là góc tạo bởi:',
    options: ['Tia tới và tia phản xạ', 'Phương của tia tới ban đầu và phương của tia ló ra khỏi lăng kính', 'Hai mặt bên của lăng kính', 'Pháp tuyến mặt thứ nhất và pháp tuyến mặt thứ hai'],
    correctIndex: 1,
    explanation: 'Góc lệch D đo góc giữa phương truyền của tia tới ban đầu và phương truyền tia ló sau khi qua lăng kính.',
    level: 'understanding'
  },
  {
    id: 'q7_7',
    lessonId: 7,
    question: 'Ai là nhà bác học đầu tiên thực hiện thí nghiệm tán sắc ánh sáng mặt trời bằng lăng kính vào năm 1666?',
    options: ['Galileo Galilei', 'Albert Einstein', 'Isaac Newton', 'Michael Faraday'],
    correctIndex: 2,
    explanation: 'Isaac Newton đã thực hiện thí nghiệm lịch sử nổi tiếng này trong căn phòng tối tại Cambridge năm 1666.',
    level: 'basic'
  },
  {
    id: 'q7_8',
    lessonId: 7,
    question: 'Khi góc tới i và góc chiết quang A của lăng kính nhỏ (< 10°), góc lệch D được tính bằng công thức gần đúng nào?',
    options: ['D = (n - 1) * A', 'D = (n + 1) * A', 'D = A / n', 'D = n * A'],
    correctIndex: 0,
    explanation: 'Với góc nhỏ: sin x ≈ x, góc lệch D ≈ (n - 1) * A.',
    level: 'advanced'
  },
  {
    id: 'q7_9',
    lessonId: 7,
    question: 'Một lăng kính có góc chiết quang A = 5°, chiết suất n = 1.5. Chiếu tia tới với góc tới nhỏ. Góc lệch D của tia sáng là:',
    options: ['2.5°', '5°', '7.5°', '10°'],
    correctIndex: 0,
    explanation: 'D = (1.5 - 1) * 5° = 0.5 * 5° = 2.5°.',
    level: 'understanding'
  },
  {
    id: 'q7_10',
    lessonId: 7,
    question: 'Cầu vồng xuất hiện sau cơn mưa rào mùa hè là do hiện tượng gì của ánh sáng mặt trời khi gặp các giọt nước mưa li ti trong khí quyển?',
    options: ['Hiện tượng nhiễu xạ', 'Hiện tượng tán sắc và phản xạ ánh sáng bên trong các giọt nước', 'Do nước mưa phát sáng', 'Do ánh sáng phản chiếu từ mây đen'],
    correctIndex: 1,
    explanation: 'Các giọt nước mưa đóng vai trò như những lăng kính cầu nhỏ: ánh sáng mặt trời đi vào, khúc xạ, tán sắc và phản xạ bên trong giọt nước tạo nên dải cầu vồng.',
    level: 'understanding'
  },
  {
    id: 'q7_11',
    lessonId: 7,
    question: 'Thiết bị quang học nào dùng lăng kính để phân tích chùm sáng phức tạp thành các thành phần đơn sắc nhằm xác định cấu tạo hóa học của các thiên thể?',
    options: ['Kính hiển vi', 'Máy quang phổ lăng kính', 'Kính lúp', 'Kính thiên văn quang học phản xạ'],
    correctIndex: 1,
    explanation: 'Máy quang phổ lăng kính dùng hệ tán sắc lăng kính để phân tích quang phổ vạch của nguồn sáng.',
    level: 'understanding'
  },
  {
    id: 'q7_12',
    lessonId: 7,
    question: 'Ánh sáng đơn sắc là ánh sáng:',
    options: ['Có màu trắng', 'Không bị tán sắc (chỉ bị lệch) khi đi qua lăng kính và có một tần số xác định', 'Bị đổi thành màu khác khi qua lăng kính', 'Luôn phát ra từ ngọn nến'],
    correctIndex: 1,
    explanation: 'Định nghĩa ánh sáng đơn sắc: có màu xác định và không bị tán sắc khi truyền qua lăng kính.',
    level: 'basic'
  },
  {
    id: 'q7_13',
    lessonId: 7,
    question: 'Khi chiếu tia laser màu đỏ qua lăng kính, vệt sáng sau lăng kính trên màn sẽ:',
    options: ['Bị tách thành 7 màu', 'Vẫn là màu đỏ nhưng bị lệch phương về phía đáy lăng kính', 'Biến thành màu xanh lá cây', 'Biến thành ánh sáng trắng'],
    correctIndex: 1,
    explanation: 'Tia laser là ánh sáng đơn sắc nên không bị tán sắc, chỉ bị khúc xạ bẻ lệch về đáy lăng kính.',
    level: 'understanding'
  },
  {
    id: 'q7_14',
    lessonId: 7,
    question: 'Lăng kính phản xạ toàn phần có góc chiết quang A bằng:',
    options: ['30°', '60°', '90°', '120°'],
    correctIndex: 2,
    explanation: 'Lăng kính phản xạ toàn phần là khối thủy tinh có tiết diện tam giác vuông cân, góc ở đỉnh A = 90°.',
    level: 'understanding'
  },
  {
    id: 'q7_15',
    lessonId: 7,
    question: 'Điều kiện để có tia ló ra khỏi mặt bên thứ hai của lăng kính là góc chiết quang A phải thỏa mãn:',
    options: ['A ≤ 2 * ith', 'A > 2 * ith', 'A = 90°', 'A không phụ thuộc ith'],
    correctIndex: 0,
    explanation: 'Nếu góc chiết quang A > 2*ith thì góc tới mặt bên thứ hai luôn lớn hơn ith nên xảy ra phản xạ toàn phần bên trong, không có tia ló ra ngoài.',
    level: 'high'
  },
  {
    id: 'q7_16',
    lessonId: 7,
    question: 'Trong máy quang phổ, ống chuẩn trực có tác dụng gì?',
    options: ['Tạo ra chùm ánh sáng song song chiếu vào lăng kính', 'Chụp ảnh dải màu', 'Làm cho ánh sáng có cường độ cực mạnh', 'Lọc bỏ ánh sáng màu đỏ'],
    correctIndex: 0,
    explanation: 'Ống chuẩn trực gồm một khe hẹp đặt tại tiêu điểm của thấu kính hội tụ, biến chùm sáng từ nguồn thành chùm song song.',
    level: 'advanced'
  },
  {
    id: 'q7_17',
    lessonId: 7,
    question: 'Một lăng kính có chiết suất n = căn(2). Khi góc lệch đạt cực tiểu D_min thì góc tới i1 bằng góc ló i2. Nếu A = 60° thì góc lệch cực tiểu D_min là:',
    options: ['30°', '45°', '60°', '90°'],
    correctIndex: 0,
    explanation: 'Khi D_min: r1 = r2 = A/2 = 30°. sin i1 = n * sin r1 = căn(2) * sin 30° = căn(2)/2 => i1 = 45°. D_min = 2*i1 - A = 2*45° - 60° = 30°.',
    level: 'high'
  },
  {
    id: 'q7_18',
    lessonId: 7,
    question: 'Tại sao mặt ngoài của kim tự tháp kính Louvre ở Paris lại có thể phản chiếu bầu trời đẹp như một lăng kính khổng lồ?',
    options: ['Do các tấm kính được chế tạo có tính chất khúc xạ và phản xạ chọn lọc như lăng kính', 'Do kim tự tháp tự phát sáng', 'Do nhiệt độ bên trong kim tự tháp', 'Do có bóng đèn led chiếu'],
    correctIndex: 0,
    explanation: 'Cấu trúc các mặt kính nghiêng góc hoạt động như các mặt lăng kính phản xạ và khúc xạ ánh sáng tự nhiên.',
    level: 'basic'
  },
  {
    id: 'q7_19',
    lessonId: 7,
    question: 'Khi quan sát một vật qua lăng kính, mắt ta nhìn thấy ảnh của vật bị:',
    options: ['Dời về phía đáy của lăng kính', 'Dời về phía đỉnh của lăng kính', 'Không bị dịch chuyển', 'Đảo ngược từ trên xuống dưới'],
    correctIndex: 1,
    explanation: 'Vì tia sáng bị lệch về phía đáy nên đường kéo dài của tia ló (hướng mắt nhìn thấy ảnh ảo) bị nâng lệch về phía đỉnh lăng kính.',
    level: 'advanced'
  },
  {
    id: 'q7_20',
    lessonId: 7,
    question: 'Sắp xếp thứ tự các bức xạ màu sau theo chiều CHIẾT SUẤT CỦA THỦY TINH TĂNG DẦN:',
    options: ['Đỏ, Vàng, Lam, Tím', 'Tím, Lam, Vàng, Đỏ', 'Đỏ, Tím, Vàng, Lam', 'Lam, Vàng, Đỏ, Tím'],
    correctIndex: 0,
    explanation: 'Chiết suất thủy tinh tăng dần từ đỏ đến tím: n_đỏ < n_cam < n_vàng < n_lục < n_lam < n_chàm < n_tím.',
    level: 'understanding'
  },

  // --- BÀI 8: Thấu kính (20 câu) ---
  {
    id: 'q8_1',
    lessonId: 8,
    question: 'Thấu kính hội tụ có đặc điểm hình học nhận biết là:',
    options: ['Phần rìa dày hơn phần giữa', 'Phần rìa mỏng hơn phần giữa', 'Độ dày đồng đều mọi vị trí', 'Mặt ngoài sần sùi'],
    correctIndex: 1,
    explanation: 'Thấu kính hội tụ (thấu kính lồi) có phần rìa mỏng hơn phần giữa.',
    level: 'basic'
  },
  {
    id: 'q8_2',
    lessonId: 8,
    question: 'Thấu kính phân kỳ có đặc điểm hình học là:',
    options: ['Phần rìa mỏng hơn phần giữa', 'Phần rìa dày hơn phần giữa', 'Mặt phẳng hoàn toàn', 'Hình cầu đặc'],
    correctIndex: 1,
    explanation: 'Thấu kính phân kỳ (thấu kính lõm) có phần rìa dày hơn phần chính giữa.',
    level: 'basic'
  },
  {
    id: 'q8_3',
    lessonId: 8,
    question: 'Chùm tia sáng tới song song với trục chính của một thấu kính hội tụ sẽ cho chùm tia ló:',
    options: ['Song song với trục chính', 'Loe rộng ra', 'Hội tụ tại tiêu điểm ảnh chính F\' của thấu kính', 'Bị phản xạ ngược lại'],
    correctIndex: 2,
    explanation: 'Tính chất đặc trưng của thấu kính hội tụ: biến chùm tia tới song song trục chính thành chùm tia ló hội tụ tại tiêu điểm ảnh.',
    level: 'basic'
  },
  {
    id: 'q8_4',
    lessonId: 8,
    question: 'Điểm O nằm chính giữa thấu kính mà mọi tia sáng truyền qua điểm đó đều truyền thẳng gọi là:',
    options: ['Tiêu điểm', 'Quang tâm', 'Tiêu diện', 'Tâm cong'],
    correctIndex: 1,
    explanation: 'Quang tâm O là điểm chính giữa thấu kính, mọi tia sáng đi qua quang tâm đều truyền thẳng không đổi hướng.',
    level: 'basic'
  },
  {
    id: 'q8_5',
    lessonId: 8,
    question: 'Khoảng cách từ quang tâm O đến mỗi tiêu điểm của thấu kính gọi là:',
    options: ['Độ phóng đại', 'Đường kính thấu kính', 'Tiêu cự (kí hiệu là f)', 'Bán kính cong'],
    correctIndex: 2,
    explanation: 'Tiêu cự f = OF = OF\' là khoảng cách từ quang tâm đến tiêu điểm thấu kính.',
    level: 'basic'
  },
  {
    id: 'q8_6',
    lessonId: 8,
    question: 'Tia sáng đặc biệt nào sau đây khi qua thấu kính hội tụ sẽ cho TIA LÓ SONG SONG VỚI TRỤC CHÍNH?',
    options: ['Tia đi qua quang tâm O', 'Tia đi qua tiêu điểm vật F', 'Tia song song trục chính', 'Tia bất kì'],
    correctIndex: 1,
    explanation: 'Tia sáng đi qua tiêu điểm vật F (hoặc có đường kéo dài qua F) cho tia ló song song với trục chính.',
    level: 'understanding'
  },
  {
    id: 'q8_7',
    lessonId: 8,
    question: 'Một vật sáng AB đặt vuông góc với trục chính của một thấu kính phân kỳ luôn luôn cho ảnh:',
    options: ['Ảnh thật, ngược chiều, lớn hơn vật', 'Ảnh ảo, cùng chiều, nhỏ hơn vật và nằm trong khoảng tiêu cự', 'Ảnh ảo, ngược chiều, bằng vật', 'Ảnh thật, cùng chiều, lớn hơn vật'],
    correctIndex: 1,
    explanation: 'Thấu kính phân kỳ với vật thật luôn cho ảnh ảo, cùng chiều, nhỏ hơn vật và nằm trong khoảng OF.',
    level: 'understanding'
  },
  {
    id: 'q8_8',
    lessonId: 8,
    question: 'Đặt vật sáng AB trước thấu kính hội tụ ở khoảng cách d > 2f (vật ở rất xa thấu kính). Ảnh thu được có tính chất là:',
    options: ['Ảnh thật, ngược chiều và nhỏ hơn vật', 'Ảnh thật, ngược chiều và lớn hơn vật', 'Ảnh ảo, cùng chiều và lớn hơn vật', 'Ảnh thật, cùng chiều, bằng vật'],
    correctIndex: 0,
    explanation: 'Khi d > 2f: ảnh thu được là ảnh thật, ngược chiều, nhỏ hơn vật nằm trong khoảng f < d\' < 2f.',
    level: 'understanding'
  },
  {
    id: 'q8_9',
    lessonId: 8,
    question: 'Để thấu kính hội tụ cho ảnh ảo cùng chiều và lớn hơn vật, ta phải đặt vật ở vị trí nào?',
    options: ['Ngoài khoảng 2f (d > 2f)', 'Tại đúng tiêu điểm F (d = f)', 'Trong khoảng tiêu cự (d < f)', 'Tại vị trí d = 2f'],
    correctIndex: 2,
    explanation: 'Khi đặt vật trong khoảng tiêu cự (d < f), chùm tia ló loe rộng ra, đường kéo dài cắt nhau cho ảnh ảo, cùng chiều và lớn hơn vật (nguyên lý của kính lúp).',
    level: 'understanding'
  },
  {
    id: 'q8_10',
    lessonId: 8,
    question: 'Công thức thấu kính tổng quát liên hệ giữa tiêu cự f, khoảng cách vật d và khoảng cách ảnh d\' là:',
    options: ['1/f = 1/d + 1/d\'', 'f = d + d\'', '1/f = 1/d - 1/d\'', 'f = d * d\''],
    correctIndex: 0,
    explanation: 'Công thức thấu kính: 1/f = 1/d + 1/d\'.',
    level: 'basic'
  },
  {
    id: 'q8_11',
    lessonId: 8,
    question: 'Một vật sáng đặt cách thấu kính hội tụ có tiêu cự f = 15 cm một khoảng d = 30 cm. Khoảng cách từ ảnh đến thấu kính d\' là:',
    options: ['15 cm', '30 cm', '60 cm', '10 cm'],
    correctIndex: 1,
    explanation: '1/d\' = 1/f - 1/d = 1/15 - 1/30 = 1/30 => d\' = 30 cm (vị trí đối xứng d = 2f thì d\' = 2f).',
    level: 'understanding'
  },
  {
    id: 'q8_12',
    lessonId: 8,
    question: 'Quy ước dấu nào sau đây là ĐÚNG trong công thức thấu kính?',
    options: ['f > 0 đối với thấu kính phân kỳ', 'd\' > 0 đối với ảnh thật, d\' < 0 đối với ảnh ảo', 'f < 0 đối với thấu kính hội tụ', 'd < 0 đối với vật thật'],
    correctIndex: 1,
    explanation: 'Quy ước: f > 0 (TKHT), f < 0 (TKPK); d\' > 0 (ảnh thật), d\' < 0 (ảnh ảo).',
    level: 'understanding'
  },
  {
    id: 'q8_13',
    lessonId: 8,
    question: 'Kính mắt dùng để khắc phục tật cận thị của học sinh là loại thấu kính gì?',
    options: ['Thấu kính hội tụ', 'Thấu kính phân kỳ', 'Kính phẳng', 'Gương cầu lõm'],
    correctIndex: 1,
    explanation: 'Mắt cận không nhìn rõ vật ở xa (ảnh rơi trước võng mạc). Cần đeo thấu kính phân kỳ thích hợp để lùi ảnh rơi đúng trên màng lưới (võng mạc).',
    level: 'basic'
  },
  {
    id: 'q8_14',
    lessonId: 8,
    question: 'Kính lão của người già nhìn gần mờ dùng loại thấu kính nào?',
    options: ['Thấu kính phân kỳ', 'Thấu kính hội tụ', 'Gương cầu lồi', 'Kính màu đen'],
    correctIndex: 1,
    explanation: 'Mắt lão cơ vòng mi yếu, điểm cực cận dời xa mắt. Cần đeo thấu kính hội tụ để nhìn rõ vật ở gần bình thường.',
    level: 'basic'
  },
  {
    id: 'q8_15',
    lessonId: 8,
    question: 'Một thấu kính phân kỳ có tiêu cự f = -20 cm. Đặt vật sáng cách thấu kính d = 20 cm. Vị trí của ảnh d\' là:',
    options: ['-10 cm', '10 cm', '-20 cm', '40 cm'],
    correctIndex: 0,
    explanation: '1/d\' = 1/f - 1/d = 1/(-20) - 1/20 = -2/20 = -1/10 => d\' = -10 cm (ảnh ảo cách thấu kính 10 cm).',
    level: 'advanced'
  },
  {
    id: 'q8_16',
    lessonId: 8,
    question: 'Độ phóng đại của ảnh qua thấu kính được tính bằng biểu thức:',
    options: ['k = - d\' / d', 'k = d / d\'', 'k = f / d', 'k = d + d\''],
    correctIndex: 0,
    explanation: 'Độ phóng đại đại số: k = -d\'/d. Nếu k > 0 ảnh cùng chiều vật (ảnh ảo), k < 0 ảnh ngược chiều (ảnh thật).',
    level: 'understanding'
  },
  {
    id: 'q8_17',
    lessonId: 8,
    question: 'Khi đưa một thấu kính hội tụ ra dưới ánh sáng mặt trời chiếu vuông góc và hứng chùm tia ló trên một tờ giấy đen, hiện tượng xảy ra tại tiêu điểm là:',
    options: ['Tờ giấy bị ướt', 'Xuất hiện một đốm sáng nhỏ rất chói lọi và giấy có thể bốc khói, cháy', 'Tờ giấy chuyển sang màu xanh', 'Tờ giấy phản chiếu hình cầu vồng'],
    correctIndex: 1,
    explanation: 'Mặt trời ở rất xa nên chùm sáng tới song song hội tụ toàn bộ nhiệt lượng và ánh sáng tại tiêu điểm F\', đốt cháy giấy.',
    level: 'basic'
  },
  {
    id: 'q8_18',
    lessonId: 8,
    question: 'Một vật sáng AB cao 2 cm đặt vuông góc trục chính trước thấu kính hội tụ cho ảnh thật cao 4 cm. Độ phóng đại |k| là:',
    options: ['0.5', '1', '2', '4'],
    correctIndex: 2,
    explanation: '|k| = A\'B\' / AB = 4 / 2 = 2.',
    level: 'understanding'
  },
  {
    id: 'q8_19',
    lessonId: 8,
    question: 'Trong máy ảnh số trên điện thoại thông minh, thấu kính cụm camera đóng vai trò gì và cho ảnh như thế nào trên cảm biến sensor?',
    options: ['Thấu kính phân kỳ cho ảnh ảo lớn hơn vật', 'Thấu kính hội tụ cho ảnh thật, ngược chiều và nhỏ hơn vật trên cảm biến', 'Gương phẳng phản chiếu', 'Lăng kính tán sắc'],
    correctIndex: 1,
    explanation: 'Vật ở ngoài 2f (xa máy ảnh), thấu kính hội tụ tạo ảnh thật ngược chiều, thu nhỏ rơi vừa khít lên bề mặt cảm biến điện tử.',
    level: 'understanding'
  },
  {
    id: 'q8_20',
    lessonId: 8,
    question: 'Một vật thật đặt trước thấu kính hội tụ ở vị trí d = 2f. Tính chất của ảnh là:',
    options: ['Ảnh thật, ngược chiều, bằng vật và cách thấu kính d\' = 2f', 'Ảnh ảo, cùng chiều, lớn gấp đôi vật', 'Ảnh ở vô cực', 'Ảnh thật nhỏ hơn vật'],
    correctIndex: 0,
    explanation: 'Điểm đối xứng đặc biệt: d = 2f => d\' = 2f, ảnh thật, ngược chiều và có kích thước đúng bằng vật (A\'B\' = AB).',
    level: 'understanding'
  },

  // --- BÀI 9: Thực hành đo tiêu cự của thấu kính hội tụ (20 câu) ---
  {
    id: 'q9_1',
    lessonId: 9,
    question: 'Dụng cụ nào KHÔNG thuộc bộ thí nghiệm thực hành đo tiêu cự của thấu kính hội tụ?',
    options: ['Nguồn sáng (đèn chiếu và vật sáng chữ F)', 'Thấu kính hội tụ cần đo tiêu cự', 'Màn hứng ảnh và giá quang học có vạch mm', 'Nhiệt kế thủy ngân'],
    correctIndex: 3,
    explanation: 'Nhiệt kế đo nhiệt độ, không dùng trong bài thực hành quang học đo tiêu cự.',
    level: 'basic'
  },
  {
    id: 'q9_2',
    lessonId: 9,
    question: 'Trong phương pháp đo tiêu cự theo điểm đối xứng (phương pháp Silbermann), khi thu được ảnh thật rõ nét trên màn và có kích thước bằng vật thì khoảng cách giữa vật và màn L liên hệ với tiêu cự f là:',
    options: ['L = f', 'L = 2f', 'L = 4f', 'L = f / 2'],
    correctIndex: 2,
    explanation: 'Khi ảnh thật bằng vật: d = 2f và d\' = 2f => Khoảng cách vật - màn L = d + d\' = 4f => f = L / 4.',
    level: 'basic'
  },
  {
    id: 'q9_3',
    lessonId: 9,
    question: 'Một nhóm học sinh đo được khoảng cách từ vật sáng chữ F đến màn hứng ảnh (ảnh rõ nét và có chiều cao bằng vật) là L = 40 cm. Tiêu cự của thấu kính là:',
    options: ['10 cm', '20 cm', '40 cm', '5 cm'],
    correctIndex: 0,
    explanation: 'f = L / 4 = 40 / 4 = 10 cm.',
    level: 'understanding'
  },
  {
    id: 'q9_4',
    lessonId: 9,
    question: 'Để xác định chính xác ảnh trên màn đã rõ nét nhất, thao tác thực hành chuẩn là:',
    options: ['Dịch chuyển màn nhẹ nhàng qua lại quanh vị trí dự kiến đến khi viền chữ F trên màn sắc nét nhất', 'Chỉ nhìn bằng mắt không cần chỉnh màn', 'Đặt màn ở cuối giá quang học', 'Tắt hoàn toàn đèn chiếu sáng'],
    correctIndex: 0,
    explanation: 'Dịch chuyển màn tinh chỉnh để tìm mặt phẳng tiêu diện ảnh rõ nét nhất.',
    level: 'understanding'
  },
  {
    id: 'q9_5',
    lessonId: 9,
    question: 'Khi đo tiêu cự thấu kính, tại sao cần thực hiện phép đo nhiều lần (thường là 3 đến 5 lần)?',
    options: ['Để cho đủ thời gian tiết học', 'Để tính giá trị trung bình nhằm giảm thiểu sai số ngẫu nhiên của phép đo', 'Để làm hỏng bóng đèn', 'Vì mỗi lần đo cho một tiêu cự khác nhau của thấu kính'],
    correctIndex: 1,
    explanation: 'Đo lặp lại nhiều lần và lấy giá trị trung bình là nguyên tắc cơ bản trong thực nghiệm vật lý để giảm sai số ngẫu nhiên.',
    level: 'basic'
  },
  {
    id: 'q9_6',
    lessonId: 9,
    question: 'Kết quả 3 lần đo khoảng cách L = d + d\' lần lượt là 48.0 cm; 48.2 cm; 47.8 cm. Tiêu cự trung bình của thấu kính là:',
    options: ['12.0 cm', '24.0 cm', '48.0 cm', '6.0 cm'],
    correctIndex: 0,
    explanation: 'L_tb = (48.0 + 48.2 + 47.8) / 3 = 48.0 cm => f_tb = 48.0 / 4 = 12.0 cm.',
    level: 'understanding'
  },
  {
    id: 'q9_7',
    lessonId: 9,
    question: 'Khi tiến hành thí nghiệm trên giá quang học, điều kiện quan trọng để ảnh hiện rõ trên màn là:',
    options: ['Tâm của nguồn sáng, quang tâm thấu kính và tâm màn hứng ảnh phải cùng nằm trên một đường thẳng song song với thanh giá đỡ', 'Thấu kính phải đặt nghiêng 45°', 'Màn hứng ảnh phải làm bằng gương', 'Bóng đèn phải dùng ánh sáng đỏ'],
    correctIndex: 0,
    explanation: 'Các dụng cụ phải đồng trục quang học để ảnh không bị lệch ra ngoài màn chắn.',
    level: 'understanding'
  },
  {
    id: 'q9_8',
    lessonId: 9,
    question: 'Nếu ta dùng nửa tấm bìa đen che khuất nửa trên của thấu kính hội tụ thì hình ảnh trên màn sẽ:',
    options: ['Bị mất nửa phần dưới của ảnh', 'Bị mất nửa phần trên của ảnh', 'Vẫn đầy đủ toàn bộ hình ảnh nhưng độ sáng của ảnh bị giảm đi một nửa', 'Biến mất hoàn toàn'],
    correctIndex: 2,
    explanation: 'Mỗi điểm của vật đều gửi tia sáng đến nửa dưới của thấu kính nên vẫn tạo đầy đủ ảnh, nhưng lượng ánh sáng qua thấu kính giảm một nửa nên ảnh tối hơn.',
    level: 'advanced'
  },
  {
    id: 'q9_9',
    lessonId: 9,
    question: 'Ảnh chữ F thu được trên màn hứng ảnh trong thí nghiệm thấu kính hội tụ có đặc điểm chiều như thế nào so với vật chữ F ban đầu?',
    options: ['Cùng chiều', 'Ngược chiều (lộn ngược từ trên xuống và trái sang phải)', 'Xoay ngang 90°', 'Không đổi'],
    correctIndex: 1,
    explanation: 'Ảnh thật của thấu kính hội tụ luôn ngược chiều với vật cả theo phương thẳng đứng và phương ngang.',
    level: 'understanding'
  },
  {
    id: 'q9_10',
    lessonId: 9,
    question: 'Ước lượng nhanh tiêu cự của thấu kính hội tụ bằng ánh sáng mặt trời được thực hiện bằng cách:',
    options: ['Đo chiều dày thấu kính', 'Hứng ánh sáng mặt trời qua thấu kính lên màn, dịch màn sao cho đốm sáng nhỏ nhất, đo khoảng cách từ thấu kính đến màn', 'Nhìn qua thấu kính đọc sách', 'Cân khối lượng thấu kính'],
    correctIndex: 1,
    explanation: 'Vì mặt trời ở vô cực, chùm sáng tới song song nên hội tụ đúng tại tiêu điểm F\', khoảng cách từ thấu kính đến đốm sáng nhỏ nhất chính là tiêu cự f.',
    level: 'understanding'
  },
  {
    id: 'q9_11',
    lessonId: 9,
    question: 'Trong báo cáo thực hành, công thức tính sai số tuyệt đối của tiêu cự Delta f là:',
    options: ['Delta f = Delta L / 4', 'Delta f = Delta L * 4', 'Delta f = L_max - L_min', 'Delta f = 0'],
    correctIndex: 0,
    explanation: 'Vì f = L / 4 nên sai số tuyệt đối Delta f = (Delta L) / 4.',
    level: 'advanced'
  },
  {
    id: 'q9_12',
    lessonId: 9,
    question: 'Nếu khoảng cách giữa vật và màn L nhỏ hơn 4f (L < 4f) thì ta có thu được ảnh thật của vật trên màn không?',
    options: ['Luôn thu được 2 vị trí ảnh rõ nét', 'Không thể thu được ảnh thật nào trên màn dù dịch chuyển thấu kính đến bất kì vị trí nào', 'Thu được ảnh ảo', 'Thu được vô số ảnh'],
    correctIndex: 1,
    explanation: 'Điều kiện để có ảnh thật trên màn là khoảng cách vật - màn tối thiểu L_min = 4f. Nếu L < 4f thì phương trình thấu kính vô nghiệm thực.',
    level: 'high'
  },
  {
    id: 'q9_13',
    lessonId: 9,
    question: 'Phương pháp Bessel đo tiêu cự dựa trên hiện tượng khi khoảng cách vật - màn L > 4f thì:',
    options: ['Chỉ có 1 vị trí thấu kính cho ảnh rõ nét', 'Có hai vị trí của thấu kính dọc theo giá quang học cho ảnh rõ nét trên màn (một ảnh phóng to, một ảnh thu nhỏ)', 'Không có ảnh nào', 'Thấu kính phát sáng'],
    correctIndex: 1,
    explanation: 'Phương pháp Bessel: tồn tại 2 vị trí của thấu kính cách nhau đoạn l cho ảnh rõ nét trên màn, công thức f = (L^2 - l^2) / (4L).',
    level: 'high'
  },
  {
    id: 'q9_14',
    lessonId: 9,
    question: 'Khi di chuyển vật lại gần thấu kính hội tụ (từ khoảng cách 3f lại gần tiêu điểm F), ảnh thật trên màn sẽ:',
    options: ['Dịch lại gần thấu kính và nhỏ đi', 'Dịch ra xa thấu kính và lớn dần lên', 'Không dịch chuyển', 'Biến mất ngay lập tức'],
    correctIndex: 1,
    explanation: 'Khi d giảm (d > f) thì d\' tăng và độ phóng đại |k| tăng, nên ảnh dịch ra xa thấu kính và lớn hơn.',
    level: 'advanced'
  },
  {
    id: 'q9_15',
    lessonId: 9,
    question: 'Trên giá quang học, vạch chỉ vị trí vật ở mốc 10.0 cm, thấu kính ở mốc 30.0 cm, màn hứng ảnh rõ nét ở mốc 50.0 cm. Kết luận nào sau đây là ĐÚNG?',
    options: ['d = 20.0 cm, d\' = 20.0 cm => Tiêu cự f = 10.0 cm', 'd = 30.0 cm, d\' = 50.0 cm', 'Tiêu cự f = 20.0 cm', 'Khoảng cách vật - màn L = 50.0 cm'],
    correctIndex: 0,
    explanation: 'd = 30.0 - 10.0 = 20.0 cm; d\' = 50.0 - 30.0 = 20.0 cm. Vì d = d\' nên d = 2f => f = 10.0 cm.',
    level: 'understanding'
  },
  {
    id: 'q9_16',
    lessonId: 9,
    question: 'Để đo được kích thước của vật và ảnh trong bài thực hành, người ta thường dùng vật sáng có dạng:',
    options: ['Bóng đèn tròn trơn', 'Chữ F hoặc hình tam giác có gắn thước chia milimét trong suốt', 'Một bức tranh phong cảnh', 'Ngọn lửa cây nến'],
    correctIndex: 1,
    explanation: 'Chữ F có tính bất đối xứng cả 2 chiều và có vạch chia giúp dễ đo chiều cao và xác định hướng lộn ngược của ảnh.',
    level: 'basic'
  },
  {
    id: 'q9_17',
    lessonId: 9,
    question: 'Tại sao không nên dùng ngọn nến làm vật sáng trong các phép đo định lượng chính xác tiêu cự?',
    options: ['Vì ngọn nến quá sáng làm chói mắt', 'Vì ngọn lửa nến chập chờn trước gió, kích thước không cố định và nến bị ngắn dần khi cháy gây sai số lớn', 'Vì nến không tạo được ảnh thật', 'Vì nến tỏa ra khí độc'],
    correctIndex: 1,
    explanation: 'Ngọn lửa dao động và thân nến hao dần làm thay đổi vị trí quang tâm và kích thước chuẩn của vật sáng.',
    level: 'understanding'
  },
  {
    id: 'q9_18',
    lessonId: 9,
    question: 'Một học sinh đo tiêu cự được 3 giá trị f1 = 15.1 cm; f2 = 14.9 cm; f3 = 15.0 cm. Kết quả đo được ghi chuẩn là:',
    options: ['f = (15.0 ± 0.1) cm', 'f = 15 cm', 'f = 15.000 cm', 'f = 15.3 cm'],
    correctIndex: 0,
    explanation: 'f_tb = 15.0 cm. Sai số tuyệt đối lớn nhất Delta f = 0.1 cm. Ghi kết quả: f = (15.0 ± 0.1) cm.',
    level: 'advanced'
  },
  {
    id: 'q9_19',
    lessonId: 9,
    question: 'Trong thí nghiệm, nếu màn hứng ảnh đặt quá gần thấu kính (d\' < f) thì:',
    options: ['Thu được ảnh thật cực lớn', 'Không bao giờ thu được ảnh rõ nét trên màn vì chùm tia ló chưa hội tụ', 'Ảnh bị cháy', 'Thu được ảnh đảo ngược'],
    correctIndex: 1,
    explanation: 'Chùm tia ló hội tụ tại vị trí d\' > f, trước tiêu cự chùm tia chưa cắt nhau nên chỉ tạo một vệt sáng nhòe.',
    level: 'understanding'
  },
  {
    id: 'q9_20',
    lessonId: 9,
    question: 'Sau khi hoàn thành bài thực hành quang học, thao tác thu dọn nào sau đây là ĐÚNG quy tắc?',
    options: ['Để nguyên đèn sáng và ra về', 'Tắt công tắc nguồn điện, cất thấu kính vào hộp nhung chuyên dụng tránh trầy xước và xếp gọn giá quang học', 'Lấy khăn giấy ráp cọ mạnh lên mặt kính', 'Tháo tung các ốc vít giá quang học'],
    correctIndex: 1,
    explanation: 'Ngắt nguồn điện, bảo quản cẩn thận bề mặt thấu kính quang học trong hộp chống ẩm/trầy xước.',
    level: 'basic'
  },

  // --- BÀI 10: Kính lúp. Bài tập thấu kính (20 câu) ---
  {
    id: 'q10_1',
    lessonId: 10,
    question: 'Kính lúp thực chất là một thấu kính loại gì?',
    options: ['Thấu kính phân kỳ có tiêu cự rất dài', 'Thấu kính hội tụ có tiêu cự ngắn (thường vài xentimét)', 'Gương phẳng có cán cầm', 'Lăng kính thủy tinh'],
    correctIndex: 1,
    explanation: 'Kính lúp là một thấu kính hội tụ có tiêu cự ngắn dùng để quan sát các vật nhỏ.',
    level: 'basic'
  },
  {
    id: 'q10_2',
    lessonId: 10,
    question: 'Để quan sát một vật nhỏ qua kính lúp, ta phải đặt vật ở vị trí nào so với kính lúp?',
    options: ['Ở rất xa kính lúp (d > 2f)', 'Trong khoảng tiêu cự của kính lúp (d < f)', 'Tại vị trí d = 2f', 'Ở bất kì vị trí nào'],
    correctIndex: 1,
    explanation: 'Đặt vật trong khoảng tiêu cự (d < f) để kính lúp cho một ảnh ảo, cùng chiều và lớn hơn vật.',
    level: 'basic'
  },
  {
    id: 'q10_3',
    lessonId: 10,
    question: 'Ảnh của một vật quan sát được qua kính lúp có tính chất là:',
    options: ['Ảnh thật, ngược chiều, nhỏ hơn vật', 'Ảnh ảo, cùng chiều, lớn hơn vật', 'Ảnh thật, cùng chiều, lớn hơn vật', 'Ảnh ảo, ngược chiều, nhỏ hơn vật'],
    correctIndex: 1,
    explanation: 'Ảnh qua kính lúp là ảnh ảo, cùng chiều và phóng đại lớn hơn vật.',
    level: 'basic'
  },
  {
    id: 'q10_4',
    lessonId: 10,
    question: 'Số bội giác của kính lúp (kí hiệu là G) cho biết điều gì?',
    options: ['Độ dày của vành kính lúp', 'Ảnh quan sát được qua kính lúp lớn gấp bao nhiêu lần so với khi nhìn trực tiếp vật bằng mắt ở khoảng nhìn rõ ngắn nhất (25 cm)', 'Số năm bảo hành của kính', 'Độ bền của thủy tinh'],
    correctIndex: 1,
    explanation: 'Số bội giác G là tỉ số giữa góc trông ảnh qua kính và góc trông trực tiếp vật đặt ở điểm cực cận.',
    level: 'understanding'
  },
  {
    id: 'q10_5',
    lessonId: 10,
    question: 'Hệ thức liên hệ giữa số bội giác G và tiêu cự f (tính bằng đơn vị cm) của kính lúp khi ngắm chừng ở vô cực là:',
    options: ['G = 25 / f', 'G = f / 25', 'G = 25 * f', 'G = 1 / f'],
    correctIndex: 0,
    explanation: 'Công thức tính số bội giác kính lúp: G = 25 / f (với f tính bằng cm).',
    level: 'basic'
  },
  {
    id: 'q10_6',
    lessonId: 10,
    question: 'Trên vành một kính lúp cầm tay có ghi 5x. Tiêu cự của kính lúp này là:',
    options: ['5 cm', '10 cm', '125 cm', '50 cm'],
    correctIndex: 0,
    explanation: 'G = 5 => f = 25 / G = 25 / 5 = 5 cm.',
    level: 'understanding'
  },
  {
    id: 'q10_7',
    lessonId: 10,
    question: 'Một kính lúp có tiêu cự f = 10 cm. Số bội giác của kính lúp đó là:',
    options: ['2.5x', '5x', '10x', '25x'],
    correctIndex: 0,
    explanation: 'G = 25 / f = 25 / 10 = 2.5x.',
    level: 'understanding'
  },
  {
    id: 'q10_8',
    lessonId: 10,
    question: 'Kính lúp nào trong số các kính lúp sau đây cho ảnh phóng đại lớn nhất?',
    options: ['Kính có tiêu cự f = 2.5 cm', 'Kính có tiêu cự f = 5 cm', 'Kính có tiêu cự f = 10 cm', 'Kính có tiêu cự f = 12.5 cm'],
    correctIndex: 0,
    explanation: 'G = 25 / f. Tiêu cự f càng nhỏ thì số bội giác G càng lớn (f = 2.5 cm có G = 10x).',
    level: 'understanding'
  },
  {
    id: 'q10_9',
    lessonId: 10,
    question: 'Người thợ sửa đồng hồ thường đeo một chiếc kính lúp nhỏ trước mắt để làm gì?',
    options: ['Chống bụi bay vào mắt', 'Phóng to các chi tiết bánh răng, ốc vít tí hon trong đồng hồ để thao tác chính xác', 'Tránh ánh sáng chói', 'Làm đẹp'],
    correctIndex: 1,
    explanation: 'Kính lúp phóng to ảnh giúp thợ đồng hồ quan sát chi tiết siêu vi mô.',
    level: 'basic'
  },
  {
    id: 'q10_10',
    lessonId: 10,
    question: 'Đặt vật sáng AB cao 1 mm cách kính lúp có tiêu cự 5 cm một khoảng d = 4 cm. Vị trí ảnh d\' là:',
    options: ['-20 cm', '20 cm', '-10 cm', '-4 cm'],
    correctIndex: 0,
    explanation: '1/d\' = 1/f - 1/d = 1/5 - 1/4 = -1/20 => d\' = -20 cm (ảnh ảo cách kính 20 cm).',
    level: 'advanced'
  },
  {
    id: 'q10_11',
    lessonId: 10,
    question: 'Chiều cao ảnh A\'B\' trong câu hỏi số 10 ở trên bằng bao nhiêu?',
    options: ['2 mm', '4 mm', '5 mm', '10 mm'],
    correctIndex: 2,
    explanation: 'Độ phóng đại k = -d\'/d = -(-20)/4 = 5. Chiều cao ảnh A\'B\' = k * AB = 5 * 1 mm = 5 mm.',
    level: 'advanced'
  },
  {
    id: 'q10_12',
    lessonId: 10,
    question: 'Khi quan sát một dòng chữ nhỏ qua kính lúp, nếu ta từ từ dịch chuyển kính lúp ra xa trang sách (vẫn trong khoảng d < f) thì ta thấy ảnh dòng chữ:',
    options: ['Nhỏ dần lại', 'Càng lớn dần lên', 'Đổi màu thành đỏ', 'Biến thành ảnh thật ngay lập tức'],
    correctIndex: 1,
    explanation: 'Khi d tăng dần từ 0 tiến sát f, độ phóng đại k = f / (f - d) tăng dần lên, ảnh ảo ngày càng to ra.',
    level: 'advanced'
  },
  {
    id: 'q10_13',
    lessonId: 10,
    question: 'Nếu vô tình đặt trang sách ra ngoài khoảng tiêu cự của kính lúp (d > f) thì mắt đặt sau kính nhìn vào kính sẽ:',
    options: ['Vẫn thấy dòng chữ phóng to như cũ', 'Thấy hình ảnh bị mờ nhòe hoặc lộn ngược đầu xuống dưới (vì là ảnh thật)', 'Không nhìn thấy gì', 'Kính lúp bị nứt'],
    correctIndex: 1,
    explanation: 'Khi d > f, thấu kính hội tụ tạo ảnh thật ngược chiều, mắt khó quan sát trực tiếp nếu không có màn hứng ảnh thích hợp.',
    level: 'understanding'
  },
  {
    id: 'q10_14',
    lessonId: 10,
    question: 'Số bội giác lớn nhất của các kính lúp thông thường cầm tay thường đạt khoảng bao nhiêu?',
    options: ['Khoảng 1.5x đến 20x', 'Hàng nghìn lần (1000x - 2000x)', 'Hàng triệu lần', 'Chỉ 1x'],
    correctIndex: 0,
    explanation: 'Kính lúp đơn lẻ bị giới hạn quang sai nên độ bội giác thực tế chỉ khoảng từ 2x đến 20x. Muốn phóng đại hàng trăm, nghìn lần phải dùng kính hiển vi quang học.',
    level: 'understanding'
  },
  {
    id: 'q10_15',
    lessonId: 10,
    question: 'Để mắt không bị mỏi khi quan sát qua kính lúp trong thời gian dài, người ta thường điều chỉnh để ngắm chừng ở:',
    options: ['Điểm cực cận', 'Vô cực (vật đặt đúng tiêu điểm F của kính)', 'Điểm cách mắt 10 cm', 'Vị trí bất kì'],
    correctIndex: 1,
    explanation: 'Khi ngắm chừng ở vô cực (vật đặt tại F), chùm tia ló song song đi vào mắt, mắt điều tiết ở trạng thái nghỉ không bị mỏi.',
    level: 'advanced'
  },
  {
    id: 'q10_16',
    lessonId: 10,
    question: 'Một giọt nước tròn nhỏ rơi đọng trên mặt kính hoặc lá cây có thể hoạt động như một kính lúp tự nhiên phóng to các gân lá bên dưới. Đó là vì:',
    options: ['Nước có màu trong suốt', 'Mặt cong của giọt nước cùng với chiết suất n = 1.33 của nước tạo thành một thấu kính hội tụ có tiêu cự ngắn', 'Giọt nước hút ánh sáng', 'Do ma sát'],
    correctIndex: 1,
    explanation: 'Giọt nước cong có dạng thấu kính hội tụ rìa mỏng, tạo ảnh ảo phóng to các vật thể nằm sát bên dưới.',
    level: 'understanding'
  },
  {
    id: 'q10_17',
    lessonId: 10,
    question: 'Một kính lúp có ghi 10x. Khoảng cách tiêu cự của nó là:',
    options: ['2.5 cm', '10 cm', '25 cm', '1 cm'],
    correctIndex: 0,
    explanation: 'f = 25 / G = 25 / 10 = 2.5 cm.',
    level: 'basic'
  },
  {
    id: 'q10_18',
    lessonId: 10,
    question: 'So sánh số bội giác của kính lúp A (fA = 5 cm) và kính lúp B (fB = 8 cm):',
    options: ['GA > GB (kính A phóng đại tốt hơn)', 'GA < GB', 'GA = GB', 'Không so sánh được'],
    correctIndex: 0,
    explanation: 'GA = 25 / 5 = 5x; GB = 25 / 8 = 3.125x => GA > GB.',
    level: 'understanding'
  },
  {
    id: 'q10_19',
    lessonId: 10,
    question: 'Một người cận thị bỏ kính cận ra và dùng kính lúp để đọc sách. Người đó sẽ quan sát rõ nhất khi ảnh ảo của dòng chữ nằm ở:',
    options: ['Điểm cực viễn đến điểm cực cận của mắt người đó', 'Vô cực', 'Sát thấu kính', 'Cách mắt 1 mét'],
    correctIndex: 0,
    explanation: 'Mắt người chỉ nhìn rõ vật (hoặc ảnh ảo của vật) nếu ảnh đó nằm trong giới hạn nhìn rõ (từ điểm Cc đến điểm Cv) của mắt.',
    level: 'high'
  },
  {
    id: 'q10_20',
    lessonId: 10,
    question: 'Một vật sáng đặt vuông góc trục chính trước một thấu kính hội tụ cho ảnh ảo cao gấp 3 lần vật và cách thấu kính 30 cm. Tiêu cự f của thấu kính là:',
    options: ['15 cm', '20 cm', '10 cm', '30 cm'],
    correctIndex: 0,
    explanation: 'Ảnh ảo => d\' = -30 cm. Vì ảnh ảo cao gấp 3 lần vật => k = 3 => -d\'/d = 3 => d = -d\'/3 = 30/3 = 10 cm. Tiêu cự: 1/f = 1/d + 1/d\' = 1/10 - 1/30 = 2/30 = 1/15 => f = 15 cm.',
    level: 'high'
  }
];
