import { Lesson } from '../types';

export const CHAPTERS = [
  { id: 1, name: 'Chương I', title: 'Năng lượng cơ học', shortName: 'Chương 1', lessonIds: [1, 2, 3, 4] },
  { id: 2, name: 'Chương II', title: 'Ánh sáng', shortName: 'Chương 2', lessonIds: [5, 6, 7, 8, 9, 10] },
  { id: 3, name: 'Chương III', title: 'Điện và từ', shortName: 'Chương 3', lessonIds: [11, 12, 13, 14, 15] },
  { id: 4, name: 'Chương IV', title: 'Năng lượng & biến đổi', shortName: 'Chương 4', lessonIds: [16, 17] },
];

export const LESSONS: Lesson[] = [
  {
    id: 1,
    chapterId: 1,
    chapterTitle: 'Chương I: Năng lượng cơ học',
    title: 'Nhận biết một số dụng cụ, hoá chất. Thuyết minh một vấn đề khoa học',
    pageRange: 'Trang 6 – 11',
    description: 'Trong chương trình Vật lý 9, các em sẽ tiếp cận với nhiều thiết bị đo lường quang học và điện học chính xác. Việc sử dụng đúng quy cách, an toàn thí nghiệm và thuyết minh khoa học là kỹ năng nền tảng...',
    summary: [
      'Nhận biết các dụng cụ đo điện: Ampe kế, Vôn kế, Đồng hồ vạn năng hiện số (DMM), nguồn điện một chiều và xoay chiều.',
      'Dụng cụ quang học: Đèn chiếu sáng hẹp, thấu kính hội tụ, thấu kính phân kỳ, lăng kính, bản bán trụ thủy tinh, giá quang học.',
      'Quy tắc an toàn trong phòng thực hành: Không cắm nhầm cực, chọn thang đo thích hợp, ngắt nguồn trước khi thay đổi mạch.',
      'Cấu trúc bài thuyết minh vấn đề khoa học: Đặt vấn đề, giả thuyết, phương án thí nghiệm, thu thập số liệu và rút ra kết luận.'
    ],
    formulas: [
      { name: 'Độ chia nhỏ nhất (ĐCNN)', formula: 'ĐCNN = \\text{Giá trị 2 vạch kề nhau}', note: 'Xác định sai số dụng cụ đo' },
      { name: 'Giá trị trung bình', formula: '\\bar{X} = \\frac{X_1 + X_2 + ... + X_n}{n}', note: 'Tính giá trị đo thực nghiệm' }
    ],
    example: {
      problem: 'Một bạn dùng thước có ĐCNN là 1 mm để đo tiêu cự của thấu kính hội tụ 3 lần được các kết quả: 10.1 cm, 10.0 cm, 10.2 cm. Hãy tính giá trị trung bình tiêu cự.',
      solution: 'Giá trị trung bình của tiêu cự là: f_tb = (10.1 + 10.0 + 10.2) / 3 = 10.1 cm = 101 mm.'
    }
  },
  {
    id: 2,
    chapterId: 1,
    chapterTitle: 'Chương I: Năng lượng cơ học',
    title: 'Động năng. Thế năng',
    pageRange: 'Trang 12 – 17',
    description: 'Một viên đạn đang bay có thể xuyên thủng tấm gỗ, một búa máy rơi từ trên cao có thể đóng sâu cọc móng... Tất cả các vật đó đều mang năng lượng dưới dạng động năng hoặc thế năng.',
    summary: [
      'Động năng (Wđ) là dạng năng lượng mà một vật có được do nó đang chuyển động.',
      'Động năng phụ thuộc vào khối lượng m và vận tốc v của vật: Vật có khối lượng càng lớn và chuyển động càng nhanh thì động năng càng lớn.',
      'Thế năng trọng trường (Wt) là dạng năng lượng vật có được do vị trí của nó so với mặt đất (hoặc so với mốc chọn làm mốc thế năng).',
      'Thế năng trọng trường phụ thuộc vào khối lượng m và độ cao h của vật so với mốc thế năng.',
      'Thế năng đàn hồi xuất hiện khi một vật (như lò xo) bị biến dạng đàn hồi.'
    ],
    formulas: [
      { name: 'Công thức Động năng', formula: 'W_đ = \\frac{1}{2} m v^2', note: 'm (kg), v (m/s), W_đ (J)' },
      { name: 'Công thức Thế năng trọng trường', formula: 'W_t = m \\cdot g \\cdot h', note: 'm (kg), g \\approx 9.8 \\text{ hoặc } 10 \\text{ m/s}^2, h (m), W_t (J)' }
    ],
    example: {
      problem: 'Một quả bóng có khối lượng m = 0.5 kg đang lăn trên sân với vận tốc v = 4 m/s. Tính động năng của quả bóng.',
      solution: 'Áp dụng công thức: W_đ = (1/2) * m * v^2 = 0.5 * 0.5 * (4)^2 = 0.25 * 16 = 4 Joules.'
    }
  },
  {
    id: 3,
    chapterId: 1,
    chapterTitle: 'Chương I: Năng lượng cơ học',
    title: 'Cơ năng',
    pageRange: 'Trang 18 – 21',
    description: 'Khi ném một quả bóng lên cao, quả bóng bay chậm dần cho tới khi dừng lại ở đỉnh rồi rơi nhanh dần xuống. Trong quá trình đó có sự chuyển hóa qua lại giữa động năng và thế năng.',
    summary: [
      'Cơ năng (W) của một vật là tổng của động năng và thế năng của nó: W = Wđ + Wt.',
      'Định luật bảo toàn cơ năng: Khi một vật chuyển động trong trọng trường chỉ chịu tác dụng của trọng lực (bỏ qua ma sát và lực cản), cơ năng của vật được bảo toàn.',
      'Sự chuyển hóa: Khi vật rơi tự do, độ cao giảm nên thế năng giảm, vận tốc tăng nên động năng tăng (thế năng chuyển hóa thành động năng). Ngược lại khi ném lên cao, động năng chuyển hóa thành thế năng.',
      'Tại vị trí cao nhất (v = 0), cơ năng bằng thế năng cực đại. Tại mặt đất (h = 0), cơ năng bằng động năng cực đại.'
    ],
    formulas: [
      { name: 'Cơ năng toàn phần', formula: 'W = W_đ + W_t = \\frac{1}{2} m v^2 + m g h', note: 'W không đổi trong trường trọng lực' },
      { name: 'Bảo toàn cơ năng', formula: 'W_1 = W_2 \\Leftrightarrow \\frac{1}{2} m v_1^2 + m g h_1 = \\frac{1}{2} m v_2^2 + m g h_2', note: 'Áp dụng khi bỏ qua ma sát' }
    ],
    example: {
      problem: 'Một hòn đá khối lượng m = 0.2 kg rơi tự do từ độ cao h = 5 m xuống đất (lấy g = 10 m/s²). Tính vận tốc của hòn đá ngay trước khi chạm đất.',
      solution: 'Chọn mốc thế năng tại mặt đất. Tại độ cao h: W = Wt = m*g*h = 0.2 * 10 * 5 = 10 J. Ngay trước khi chạm đất: W = Wđ = (1/2)*m*v^2 = 10 J => v = sqrt(2 * 10 / 0.2) = sqrt(100) = 10 m/s.'
    }
  },
  {
    id: 4,
    chapterId: 1,
    chapterTitle: 'Chương I: Năng lượng cơ học',
    title: 'Công và công suất',
    pageRange: 'Trang 22 – 25',
    description: 'Trong đời sống, ta thường nghe nói "lao động cần cù", "công sức bỏ ra". Nhưng trong Vật lý học, công cơ học chỉ xuất hiện khi có lực tác dụng và làm vật chuyển dời theo phương của lực.',
    summary: [
      'Dấu hiệu có công cơ học: Phải có lực tác dụng vào vật (F) và vật phải dịch chuyển một quãng đường (s) theo hướng có thành phần của lực.',
      'Công thức tính công cơ học khi lực F cùng hướng với chuyển động: A = F . s.',
      'Đơn vị của công là Jun (J): 1 J = 1 N.m.',
      'Công suất (P) là đại lượng đặc trưng cho tốc độ sinh công, được xác định bằng công thực hiện trong một đơn vị thời gian: P = A / t.',
      'Đơn vị công suất là Oát (W): 1 W = 1 J/s. 1 kW = 1000 W.'
    ],
    formulas: [
      { name: 'Công cơ học', formula: 'A = F \\cdot s', note: 'F: Lực (N), s: Quãng đường (m), A: Công (J)' },
      { name: 'Công suất', formula: '\\mathcal{P} = \\frac{A}{t} = F \\cdot v', note: 't: Thời gian (s), v: Vận tốc (m/s), P: Công suất (W)' }
    ],
    example: {
      problem: 'Một cần cẩu nâng thùng hàng nặng 500 kg lên cao 6 m trong thời gian 15 giây (lấy g = 10 m/s²). Tính công suất nâng của cần cẩu.',
      solution: 'Lực nâng tối thiểu: F = P = m*g = 500 * 10 = 5000 N. Công thực hiện: A = F * s = 5000 * 6 = 30000 J. Công suất của cần cẩu: P = A / t = 30000 / 15 = 2000 W = 2 kW.'
    }
  },
  {
    id: 5,
    chapterId: 2,
    chapterTitle: 'Chương II: Ánh sáng',
    title: 'Khúc xạ ánh sáng',
    pageRange: 'Trang 26 – 29',
    description: 'Khi cắm một chiếc đũa hoặc ống hút vào cốc nước, ta thấy chiếc đũa dường như bị gãy khúc tại mặt phân cách giữa không khí và nước. Đó chính là hiện tượng khúc xạ ánh sáng.',
    summary: [
      'Khúc xạ ánh sáng là hiện tượng tia sáng bị gãy khúc (đổi phương truyền) khi truyền xiên góc qua mặt phân cách giữa hai môi trường trong suốt khác nhau.',
      'Tia khúc xạ nằm trong mặt phẳng tới (tạo bởi tia tới và pháp tuyến tại điểm tới) và ở phía bên kia pháp tuyến so với tia tới.',
      'Khi tia sáng truyền từ môi trường chiết quang kém sang môi trường chiết quang hơn (ví dụ từ không khí vào nước, n1 < n2): góc khúc xạ nhỏ hơn góc tới (r < i).',
      'Khi góc tới i tăng (hoặc giảm) thì góc khúc xạ r cũng tăng (hoặc giảm). Nếu tia sáng chiếu vuông góc với mặt phân cách (i = 0°) thì truyền thẳng (r = 0°).'
    ],
    formulas: [
      { name: 'Định luật Snell về khúc xạ', formula: 'n_1 \\cdot \\sin i = n_2 \\cdot \\sin r', note: 'n_1, n_2: chiết suất môi trường 1 và 2; i: góc tới, r: góc khúc xạ' },
      { name: 'Tỉ số chiết suất', formula: '\\frac{\\sin i}{\\sin r} = \\frac{n_2}{n_1} = n_{21}', note: 'n_{21} là chiết suất tỉ đối của môi trường 2 đối với môi trường 1' }
    ],
    example: {
      problem: 'Chiếu một tia sáng từ không khí (n1 = 1) vào nước (n2 = 4/3) với góc tới i = 45°. Tính góc khúc xạ r (lấy sin 45° ≈ 0.707).',
      solution: 'Ta có: n1 * sin i = n2 * sin r => 1 * 0.707 = (4/3) * sin r => sin r = 0.707 * 3 / 4 ≈ 0.530 => r ≈ 32°.'
    }
  },
  {
    id: 6,
    chapterId: 2,
    chapterTitle: 'Chương II: Ánh sáng',
    title: 'Phản xạ toàn phần',
    pageRange: 'Trang 30 – 33',
    description: 'Khi bơi dưới nước nhìn chếch lên mặt nước, ta thấy mặt nước sáng loáng như một tấm gương phản chiếu đáy hồ... Đó là minh chứng cho hiện tượng phản xạ toàn phần kì diệu.',
    summary: [
      'Phản xạ toàn phần là hiện tượng toàn bộ tia sáng tới bị phản xạ trở lại môi trường trong suốt ban đầu tại mặt phân cách.',
      'Điều kiện để xảy ra phản xạ toàn phần: 1. Ánh sáng phải truyền từ môi trường chiết quang hơn sang môi trường chiết quang kém (n1 > n2). 2. Góc tới phải lớn hơn hoặc bằng góc giới hạn phản xạ toàn phần (i ≥ ith).',
      'Góc giới hạn phản xạ toàn phần được tính bằng: sin(ith) = n2 / n1.',
      'Ứng dụng: Cáp quang truyền internet tốc độ cao (dựa trên sự phản xạ toàn phần liên tục của tia sáng trong lõi thủy tinh), lăng kính phản xạ toàn phần trong ống nhòm, kính tiềm vọng.'
    ],
    formulas: [
      { name: 'Góc giới hạn phản xạ toàn phần', formula: '\\sin i_{th} = \\frac{n_2}{n_1}', note: 'Điều kiện n_1 > n_2' },
      { name: 'Điều kiện xảy ra PXTP', formula: 'n_1 > n_2 \\quad \\text{và} \\quad i \\ge i_{th}', note: 'Khi đó không có tia khúc xạ, tia phản xạ có cường độ bằng tia tới' }
    ],
    example: {
      problem: 'Một tia sáng truyền từ nước (n1 = 4/3) ra không khí (n2 = 1). Hãy tính góc giới hạn phản xạ toàn phần ith.',
      solution: 'Áp dụng công thức: sin(ith) = n2 / n1 = 1 / (4/3) = 3/4 = 0.75 => ith ≈ 48.6° (khoảng 48°35\').'
    }
  },
  {
    id: 7,
    chapterId: 2,
    chapterTitle: 'Chương II: Ánh sáng',
    title: 'Lăng kính',
    pageRange: 'Trang 34 – 39',
    description: 'Chiếu một chùm ánh sáng trắng của Mặt Trời qua một lăng kính thủy tinh, ta không thu được một vệt sáng trắng mà là dải màu cầu vồng rực rỡ từ đỏ đến tím.',
    summary: [
      'Lăng kính là một khối chất trong suốt, đồng tính (thủy tinh, nhựa...), thường có dạng lăng trụ tam giác.',
      'Một lăng kính được đặc trưng bởi góc chiết quang A và chiết suất n.',
      'Tác dụng tán sắc ánh sáng: Khi chiếu chùm ánh sáng trắng qua lăng kính, chùm sáng bị tách thành dải màu liên tục biến thiên từ đỏ đến tím. Tia đỏ bị lệch ít nhất, tia tím bị lệch nhiều nhất.',
      'Đường đi của tia sáng đơn sắc qua lăng kính: Bị lệch về phía đáy của lăng kính.',
      'Ứng dụng: Máy quang phổ lăng kính để phân tích thành phần ánh sáng, lăng kính đảo ảnh trong ống nhòm.'
    ],
    formulas: [
      { name: 'Độ lệch qua lăng kính (góc nhỏ)', formula: 'D \\approx (n - 1) \\cdot A', note: 'Áp dụng khi góc tới i và góc chiết quang A nhỏ (< 10°)' }
    ],
    example: {
      problem: 'Một lăng kính thủy tinh có góc chiết quang A = 6°, chiết suất n = 1.5. Chiếu tia sáng tới gần như vuông góc với mặt bên. Tính góc lệch D.',
      solution: 'Vì góc chiết quang nhỏ, góc lệch xấp xỉ: D = (n - 1) * A = (1.5 - 1) * 6° = 3°.'
    }
  },
  {
    id: 8,
    chapterId: 2,
    chapterTitle: 'Chương II: Ánh sáng',
    title: 'Thấu kính',
    pageRange: 'Trang 40 – 46',
    description: 'Kính đeo mắt, máy ảnh trên điện thoại, kính thiên văn ngắm các chòm sao, kính hiển vi soi vi khuẩn... đều có bộ phận quang học cốt lõi là thấu kính.',
    summary: [
      'Thấu kính là một khối chất trong suốt giới hạn bởi hai mặt cong hoặc một mặt cong và một mặt phẳng.',
      'Thấu kính hội tụ (rìa mỏng): Chùm tia tới song song trục chính cho chùm tia ló hội tụ tại tiêu điểm ảnh F\'.',
      'Thấu kính phân kỳ (rìa dày): Chùm tia tới song song trục chính cho chùm tia ló loe rộng ra, đường kéo dài cắt nhau tại tiêu điểm ảo F\'.',
      'Đặc điểm quang học: Quang tâm O (mọi tia sáng qua O đều truyền thẳng), tiêu cự f = OF = OF\'.',
      '3 tia sáng đặc biệt qua thấu kính hội tụ: 1. Tia qua quang tâm truyền thẳng; 2. Tia song song trục chính cho tia ló đi qua tiêu điểm F\'; 3. Tia qua tiêu điểm F cho tia ló song song trục chính.'
    ],
    formulas: [
      { name: 'Công thức thấu kính', formula: '\\frac{1}{f} = \\frac{1}{d} + \\frac{1}{d\'}', note: 'f > 0 (TKHT), f < 0 (TKPK); d: khoảng cách vật, d\': khoảng cách ảnh' },
      { name: 'Độ phóng đại ảnh', formula: 'k = -\\frac{d\'}{d} = \\frac{\\overline{A\'B\'}}{\\overline{AB}}', note: '|k| > 1: ảnh lớn hơn vật; |k| < 1: ảnh nhỏ hơn vật' }
    ],
    example: {
      problem: 'Đặt vật sáng AB vuông góc với trục chính của thấu kính hội tụ có tiêu cự f = 20 cm, cách thấu kính d = 30 cm. Xác định vị trí của ảnh d\'.',
      solution: 'Áp dụng công thức 1/f = 1/d + 1/d\' => 1/d\' = 1/20 - 1/30 = (3 - 2)/60 = 1/60 => d\' = 60 cm. Ảnh là ảnh thật cách thấu kính 60 cm.'
    }
  },
  {
    id: 9,
    chapterId: 2,
    chapterTitle: 'Chương II: Ánh sáng',
    title: 'Thực hành đo tiêu cự của thấu kính hội tụ',
    pageRange: 'Trang 47 – 49',
    description: 'Trong tiết thực hành này, các em sẽ tự tay vận hành giá quang học, ngắm ảnh chữ F sắc nét trên màn chắn và áp dụng phương pháp điểm đối xứng đo tiêu cự thấu kính.',
    summary: [
      'Dụng cụ thực hành: Nguồn sáng (đèn LED hoặc vật sáng chữ F), thấu kính hội tụ cần đo tiêu cự, màn hứng ảnh, giá quang học thẳng có chia vạch mm.',
      'Phương pháp đo theo Silbermann (điểm đối xứng): Điều chỉnh vật và màn sao cho thu được ảnh thật ngược chiều, bằng vật (A\'B\' = AB). Khi đó khoảng cách từ vật đến màn là L = 4f, và d = d\' = 2f.',
      'Tiêu cự thấu kính khi đó được tính đơn giản bằng: f = L / 4.',
      'Các bước: Bật đèn, dịch chuyển thấu kính và màn để tìm vị trí ảnh rõ nét nhất và có kích thước bằng vật, đọc khoảng cách d và d\', tính tiêu cự và sai số trung bình qua 3 lần đo.'
    ],
    formulas: [
      { name: 'Công thức Silbermann', formula: 'f = \\frac{L}{4} = \\frac{d + d\'}{4}', note: 'Khi ảnh thật bằng vật: d = d\' = 2f' },
      { name: 'Tiêu cự trung bình', formula: '\\bar{f} = \\frac{f_1 + f_2 + f_3}{3}', note: 'Lấy trung bình cộng các lần đo' }
    ],
    example: {
      problem: 'Trong một thí nghiệm đo tiêu cự theo phương pháp Silbermann, học sinh đo được khoảng cách từ vật sáng đến màn hứng ảnh bằng vật là L = 48 cm. Tính tiêu cự của thấu kính.',
      solution: 'Áp dụng công thức: f = L / 4 = 48 / 4 = 12 cm.'
    }
  },
  {
    id: 10,
    chapterId: 2,
    chapterTitle: 'Chương II: Ánh sáng',
    title: 'Kính lúp. Bài tập thấu kính',
    pageRange: 'Trang 50 – 52',
    description: 'Một người thợ sửa đồng hồ tỉ mỉ gắp từng bánh răng tí hon, một nhà khảo cổ quan sát vết khắc trên đồng xu cổ... Tất cả đều sử dụng kính lúp để phóng to hình ảnh.',
    summary: [
      'Kính lúp là một thấu kính hội tụ có tiêu cự ngắn (thường vài cm), dùng để quan sát các vật nhỏ.',
      'Cách sử dụng: Đặt vật trong khoảng tiêu cự của kính lúp (d < f) để cho một ảnh ảo, cùng chiều và lớn hơn vật.',
      'Số bội giác của kính lúp (G) cho biết ảnh quan sát được qua kính lớn gấp bao nhiêu lần so với khi nhìn trực tiếp vật bằng mắt thường đặt ở điểm cực cận.',
      'Hệ thức liên hệ giữa số bội giác và tiêu cự f (tính bằng cm): G = 25 / f.',
      'Số ghi trên vành kính lúp thường có dạng 2.5x, 3x, 5x, 10x tương ứng với số bội giác G.'
    ],
    formulas: [
      { name: 'Số bội giác của kính lúp', formula: 'G = \\frac{25}{f}', note: 'f đo bằng cm, 25 cm là khoảng nhìn rõ ngắn nhất quy ước' },
      { name: 'Tiêu cự từ số bội giác', formula: 'f = \\frac{25}{G}', note: 'Ví dụ kính 5x có tiêu cự f = 25 / 5 = 5 cm' }
    ],
    example: {
      problem: 'Trên vành một kính lúp có ghi 5x. Hãy tính tiêu cự f của kính lúp này.',
      solution: 'Áp dụng công thức f = 25 / G => f = 25 / 5 = 5 cm.'
    }
  },
  {
    id: 11,
    chapterId: 3,
    chapterTitle: 'Chương III: Điện và từ',
    title: 'Điện trở. Định luật Ohm',
    pageRange: 'Trang 53 – 59',
    description: 'Tại sao bóng đèn trong nhà sáng lên nhưng dây dẫn điện nối đến bóng đèn hầu như không nóng? Tại sao cùng một hiệu điện thế, cường độ dòng điện qua các vật dẫn lại khác nhau?',
    summary: [
      'Điện trở của dây dẫn đặc trưng cho mức độ cản trở dòng điện của dây dẫn đó.',
      'Định luật Ohm: Cường độ dòng điện chạy qua một dây dẫn tỉ lệ thuận với hiệu điện thế đặt vào hai đầu dây dẫn và tỉ lệ nghịch với điện trở của dây.',
      'Biểu thức định luật Ohm: I = U / R.',
      'Đơn vị: Cường độ dòng điện I tính bằng Ampe (A), hiệu điện thế U tính bằng Vôn (V), điện trở R tính bằng Ôm (Ω).',
      'Điện trở phụ thuộc vào vật liệu, chiều dài l và tiết diện S của dây dẫn: R = ρ . (l / S).'
    ],
    formulas: [
      { name: 'Định luật Ohm', formula: 'I = \\frac{U}{R} \\Rightarrow U = I \\cdot R, \\quad R = \\frac{U}{I}', note: 'I (A), U (V), R (\\Omega)' },
      { name: 'Điện trở dây dẫn', formula: 'R = \\rho \\frac{l}{S}', note: '\\rho: điện trở suất (\\Omega \\cdot m), l: chiều dài (m), S: tiết diện (m^2)' }
    ],
    example: {
      problem: 'Đặt một hiệu điện thế U = 12 V vào hai đầu một điện trở R = 24 Ω. Tính cường độ dòng điện chạy qua điện trở.',
      solution: 'Áp dụng định luật Ohm: I = U / R = 12 / 24 = 0.5 A.'
    }
  },
  {
    id: 12,
    chapterId: 3,
    chapterTitle: 'Chương III: Điện và từ',
    title: 'Đoạn mạch nối tiếp, song song',
    pageRange: 'Trang 60 – 63',
    description: 'Trong một ngôi nhà, khi ta tắt bóng đèn phòng khách thì chiếc quạt trần hay tivi trong phòng ngủ vẫn hoạt động bình thường. Đó là nhờ cách mắc mạch điện song song.',
    summary: [
      'Đoạn mạch nối tiếp: Cường độ dòng điện như nhau tại mọi vị trí: I = I1 = I2. Hiệu điện thế tổng bằng tổng các hiệu điện thế: U = U1 + U2. Điện trở tương đương: Rtđ = R1 + R2.',
      'Trong đoạn mạch nối tiếp, hiệu điện thế giữa hai đầu mỗi điện trở tỉ lệ thuận với điện trở đó: U1 / U2 = R1 / R2.',
      'Đoạn mạch song song: Hiệu điện thế như nhau ở hai đầu các nhánh: U = U1 = U2. Cường độ dòng điện mạch chính bằng tổng dòng qua các nhánh: I = I1 + I2.',
      'Điện trở tương đương của đoạn mạch song song: 1 / Rtđ = 1 / R1 + 1 / R2 (Với 2 điện trở: Rtđ = (R1 . R2) / (R1 + R2)). Điện trở tương đương luôn nhỏ hơn mỗi điện trở thành phần.'
    ],
    formulas: [
      { name: 'Đoạn mạch nối tiếp', formula: 'R_{tđ} = R_1 + R_2, \\quad I = I_1 = I_2, \\quad U = U_1 + U_2', note: 'Điện trở tương đương lớn hơn từng điện trở' },
      { name: 'Đoạn mạch song song', formula: '\\frac{1}{R_{tđ}} = \\frac{1}{R_1} + \\frac{1}{R_2} \\Rightarrow R_{tđ} = \\frac{R_1 R_2}{R_1 + R_2}', note: 'Điện trở tương đương nhỏ hơn từng điện trở' }
    ],
    example: {
      problem: 'Hai điện trở R1 = 20 Ω và R2 = 30 Ω mắc song song vào nguồn điện U = 12 V. Tính điện trở tương đương của mạch và cường độ dòng điện trong mạch chính.',
      solution: 'Rtđ = (R1 * R2) / (R1 + R2) = (20 * 30) / (20 + 30) = 600 / 50 = 12 Ω. Cường độ dòng điện mạch chính: I = U / Rtđ = 12 / 12 = 1.0 A.'
    }
  },
  {
    id: 13,
    chapterId: 3,
    chapterTitle: 'Chương III: Điện và từ',
    title: 'Năng lượng của dòng điện và công suất điện',
    pageRange: 'Trang 64 – 66',
    description: 'Hằng tháng, nhân viên điện lực ghi số đếm trên công tơ điện của mỗi hộ gia đình để tính tiền điện. Con số đó đại diện cho năng lượng điện mà gia đình đã tiêu thụ.',
    summary: [
      'Năng lượng của dòng điện (điện năng) là năng lượng mà dòng điện cung cấp cho các thiết bị để chuyển hóa thành nhiệt năng, quang năng, cơ năng...',
      'Công của dòng điện (A): A = U . I . t.',
      'Công suất điện (P) của một đoạn mạch là điện năng tiêu thụ trong một đơn vị thời gian: P = A / t = U . I.',
      'Số đo công tơ điện: 1 số điện tương ứng với 1 kilôoát giờ (1 kWh) = 3 600 000 J.',
      'Công suất định mức ghi trên mỗi dụng cụ điện cho biết công suất của dụng cụ khi nó hoạt động bình thường dưới hiệu điện thế định mức.'
    ],
    formulas: [
      { name: 'Công suất điện', formula: '\\mathcal{P} = U \\cdot I = I^2 \\cdot R = \\frac{U^2}{R}', note: 'P tính bằng Watt (W)' },
      { name: 'Năng lượng điện tiêu thụ', formula: 'A = \\mathcal{P} \\cdot t = U \\cdot I \\cdot t', note: 'A tính bằng Jun (J) hoặc kWh (1 kWh = 3.6 * 10^6 J)' }
    ],
    example: {
      problem: 'Một bàn là điện có công suất 1000 W được sử dụng mỗi ngày 30 phút. Tính điện năng tiêu thụ trong 30 ngày theo đơn vị kWh.',
      solution: 'Đổi thời gian mỗi ngày: t = 0.5 h. Tổng thời gian trong 30 ngày: t_tong = 0.5 * 30 = 15 h. Điện năng tiêu thụ: A = P * t = 1 kW * 15 h = 15 kWh (15 số điện).'
    }
  },
  {
    id: 14,
    chapterId: 3,
    chapterTitle: 'Chương III: Điện và từ',
    title: 'Cảm ứng điện từ. Nguyên tắc tạo ra dòng điện xoay chiều',
    pageRange: 'Trang 67 – 71',
    description: 'Năm 1831, nhà bác học thiên tài Michael Faraday đã làm thay đổi cả nền văn minh nhân loại khi phát hiện ra rằng từ trường biến thiên có thể sinh ra dòng điện.',
    summary: [
      'Hiện tượng cảm ứng điện từ: Khi số đường sức từ xuyên qua tiết diện S của cuộn dây dẫn kín biến thiên (tăng hoặc giảm) thì trong cuộn dây xuất hiện dòng điện cảm ứng.',
      'Các cách làm biến thiên từ thông: Đưa thanh nam châm lại gần hoặc ra xa cuộn dây; Cho nam châm quay trước cuộn dây; Đóng/ngắt mạch điện của nam châm điện đặt gần cuộn dây.',
      'Dòng điện xoay chiều (AC): Dòng điện có chiều luân phiên thay đổi tuần hoàn theo thời gian.',
      'Nguyên tắc tạo ra dòng điện xoay chiều: Cho cuộn dây quay trong từ trường của nam châm, hoặc cho nam châm quay trước cuộn dây dẫn kín.',
      'Cấu tạo máy phát điện xoay chiều: Hai bộ phận chính là nam châm (tạo từ trường) và cuộn dây dẫn (tạo dòng điện). Một bộ phận đứng yên (stato), một bộ phận quay (roto).'
    ],
    formulas: [
      { name: 'Điều kiện có dòng điện cảm ứng', formula: '\\frac{\\Delta \\Phi}{\\Delta t} \\ne 0', note: 'Từ thông \\Phi xuyên qua cuộn dây kín biến thiên theo thời gian' }
    ],
    example: {
      problem: 'Khi cho một thanh nam châm dịch chuyển lại gần cuộn dây dẫn kín thì trong cuộn dây có xuất hiện dòng điện cảm ứng không? Vì sao?',
      solution: 'Có xuất hiện dòng điện cảm ứng, vì khi đưa nam châm lại gần thì số đường sức từ xuyên qua tiết diện cuộn dây tăng lên (từ thông biến thiên).'
    }
  },
  {
    id: 15,
    chapterId: 3,
    chapterTitle: 'Chương III: Điện và từ',
    title: 'Tác dụng của dòng điện xoay chiều',
    pageRange: 'Trang 72 – 74',
    description: 'Dòng điện xoay chiều 220V chạy vào từng ổ cắm gia đình làm nóng bàn là, thắp sáng bóng đèn, quay động cơ máy giặt và có thể hút nhả lõi sắt nam châm điện.',
    summary: [
      'Dòng điện xoay chiều có các tác dụng chính: Tác dụng nhiệt (bàn là, nồi cơm điện), tác dụng phát sáng (bóng đèn), tác dụng từ (nam châm điện, quạt điện, máy bơm) và tác dụng sinh học (gây giật điện nguy hiểm nếu chạm vào).',
      'Tác dụng từ của dòng điện xoay chiều: Khác với dòng một chiều, cực từ của nam châm điện xoay chiều luân phiên đổi cực theo tần số của dòng điện.',
      'Đo dòng điện xoay chiều: Sử dụng ampe kế và vôn kế xoay chiều (có ký hiệu AC hoặc dấu ~).',
      'Giá trị hiệu dụng: Các giá trị I = 2A, U = 220V đo được bằng vôn kế/ampe kế xoay chiều là giá trị hiệu dụng, tương đương về tác dụng nhiệt với dòng điện một chiều cùng độ lớn.'
    ],
    formulas: [
      { name: 'Nhiệt lượng tỏa ra (Định luật Joule - Lenz)', formula: 'Q = I^2 \\cdot R \\cdot t', note: 'I là cường độ dòng điện hiệu dụng' }
    ],
    example: {
      problem: 'Trên vỏ một bóng đèn compact có ghi 220V - 15W. Số 220V biểu thị giá trị nào của hiệu điện thế xoay chiều?',
      solution: 'Số 220V biểu thị giá trị hiệu dụng của hiệu điện thế xoay chiều đặt vào bóng đèn để đèn hoạt động bình thường.'
    }
  },
  {
    id: 16,
    chapterId: 4,
    chapterTitle: 'Chương IV: Năng lượng & biến đổi',
    title: 'Vòng năng lượng trên Trái Đất. Năng lượng hoá thạch',
    pageRange: 'Trang 75 – 78',
    description: 'Ánh nắng Mặt Trời sưởi ấm mặt đất, làm nước bốc hơi tạo thành mây mưa, thúc đẩy cây xanh quang hợp tích lũy chất hữu cơ qua hàng triệu năm biến thành than đá, dầu mỏ...',
    summary: [
      'Nguồn gốc năng lượng Trái Đất: Hầu hết mọi nguồn năng lượng trên Trái Đất (gió, nước chảy, sinh khối, nhiên liệu hóa thạch) đều có nguồn gốc từ năng lượng bức xạ của Mặt Trời.',
      'Vòng tuần hoàn năng lượng: Năng lượng Mặt Trời -> Quang hợp tích lũy năng lượng hóa học trong thực vật -> Động vật ăn thực vật -> Xác sinh vật bị chôn vùi hàng triệu năm biến thành nhiên liệu hóa thạch.',
      'Nhiên liệu hóa thạch: Gồm than đá, dầu mỏ, khí đốt tự nhiên. Đây là nguồn năng lượng không tái tạo vì tốc độ hình thành mất hàng triệu năm trong khi tốc độ khai thác rất nhanh.',
      'Tác hại môi trường của nhiên liệu hóa thạch: Sinh ra khí thải nhà kính (CO2), bụi mịn, SO2 gây mưa axit, hiệu ứng nhà kính và biến đổi khí hậu toàn cầu.'
    ],
    formulas: [
      { name: 'Nhiệt lượng tỏa ra khi đốt cháy nhiên liệu', formula: 'Q = q \\cdot m', note: 'q: năng suất tỏa nhiệt (J/kg), m: khối lượng (kg)' }
    ],
    example: {
      problem: 'Biết năng suất tỏa nhiệt của than đá là q = 27 * 10^6 J/kg. Tính nhiệt lượng tỏa ra khi đốt cháy hoàn toàn 2 kg than đá.',
      solution: 'Áp dụng công thức: Q = q * m = 27 * 10^6 * 2 = 54 * 10^6 J = 54 MJ.'
    }
  },
  {
    id: 17,
    chapterId: 4,
    chapterTitle: 'Chương IV: Năng lượng & biến đổi',
    title: 'Một số dạng năng lượng tái tạo',
    pageRange: 'Trang 79 – 84',
    description: 'Để bảo vệ bầu khí quyển Trái Đất trước khủng hoảng khí hậu, nhân loại đang bước vào cuộc cách mạng năng lượng xanh, khai thác gió, Mặt Trời, thủy triều vô tận.',
    summary: [
      'Năng lượng tái tạo là năng lượng từ những nguồn tự nhiên, liên tục được bổ sung trong thời gian ngắn và gần như vô tận: Năng lượng Mặt Trời, năng lượng gió, năng lượng nước, năng lượng sinh khối, địa nhiệt, năng lượng thủy triều.',
      'Ưu điểm: Sạch, giảm thiểu phát thải khí nhà kính, không cạn kiệt, thúc đẩy phát triển bền vững.',
      'Các ứng dụng tiêu biểu: Pin mặt trời (quang điện biến ánh sáng thành điện năng), turbine gió biến động năng của gió thành điện năng, nhà máy thủy điện biến thế năng dòng nước thành điện năng.',
      'Thách thức: Chi phí đầu tư ban đầu cao, phụ thuộc vào điều kiện thời tiết (ngày nhiều nắng, gió mạnh...), cần hệ thống lưu trữ điện (pin tích năng).'
    ],
    formulas: [
      { name: 'Hiệu suất chuyển hóa năng lượng', formula: 'H = \\frac{A_{ich}}{A_{toan\\,phan}} \\cdot 100\\%', note: 'A_ich: Năng lượng có ích thu được, A_toanphan: Năng lượng cung cấp ban đầu' }
    ],
    example: {
      problem: 'Một tấm pin mặt trời nhận được 500 J năng lượng ánh sáng và chuyển hóa thành 100 J điện năng. Tính hiệu suất của tấm pin.',
      solution: 'Hiệu suất của tấm pin mặt trời: H = (100 / 500) * 100% = 20%.'
    }
  }
];
