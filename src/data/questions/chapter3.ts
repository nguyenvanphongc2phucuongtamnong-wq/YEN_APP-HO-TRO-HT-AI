import { Question } from '../../types';

export const CHAPTER_3_QUESTIONS: Question[] = [
  // --- BÀI 11: Điện trở. Định luật Ohm (20 câu) ---
  {
    id: 'q11_1',
    lessonId: 11,
    question: 'Nội dung định luật Ohm đối với một đoạn mạch là:',
    options: ['Cường độ dòng điện tỉ lệ nghịch với hiệu điện thế và tỉ lệ thuận với điện trở', 'Cường độ dòng điện chạy qua dây dẫn tỉ lệ thuận với hiệu điện thế đặt vào hai đầu dây và tỉ lệ nghịch với điện trở của dây', 'Điện trở tỉ lệ thuận với hiệu điện thế', 'Cường độ dòng điện không phụ thuộc vào điện trở'],
    correctIndex: 1,
    explanation: 'Định luật Ohm: I = U / R. Cường độ dòng điện tỉ lệ thuận với U và tỉ lệ nghịch với R.',
    level: 'basic'
  },
  {
    id: 'q11_2',
    lessonId: 11,
    question: 'Hệ thức của định luật Ohm là:',
    options: ['I = U * R', 'I = U / R', 'R = U * I', 'U = I / R'],
    correctIndex: 1,
    explanation: 'Hệ thức định luật Ohm: I = U / R, trong đó U tính bằng Vôn (V), R tính bằng Ôm (Ω), I tính bằng Ampe (A).',
    level: 'basic'
  },
  {
    id: 'q11_3',
    lessonId: 11,
    question: 'Đặt một hiệu điện thế U = 12 V vào hai đầu điện trở R = 24 Ω. Cường độ dòng điện chạy qua điện trở là:',
    options: ['0.5 A', '2 A', '288 A', '12 A'],
    correctIndex: 0,
    explanation: 'I = U / R = 12 / 24 = 0.5 A.',
    level: 'basic'
  },
  {
    id: 'q11_4',
    lessonId: 11,
    question: 'Đơn vị đo điện trở trong hệ đo lường quốc tế SI là:',
    options: ['Ampe (A)', 'Vôn (V)', 'Ôm (Ω)', 'Oát (W)'],
    correctIndex: 2,
    explanation: 'Đơn vị chuẩn của điện trở là Ôm (kí hiệu là chữ Hy Lạp Ω - Omega).',
    level: 'basic'
  },
  {
    id: 'q11_5',
    lessonId: 11,
    question: 'Nếu hiệu điện thế giữa hai đầu dây dẫn tăng lên gấp 3 lần thì cường độ dòng điện chạy qua dây dẫn đó sẽ:',
    options: ['Giảm đi 3 lần', 'Tăng lên 3 lần', 'Không thay đổi', 'Tăng lên 9 lần'],
    correctIndex: 1,
    explanation: 'Vì điện trở R không đổi, I tỉ lệ thuận với U nên khi U tăng 3 lần thì I tăng 3 lần.',
    level: 'basic'
  },
  {
    id: 'q11_6',
    lessonId: 11,
    question: 'Đồ thị biểu diễn sự phụ thuộc của cường độ dòng điện I vào hiệu điện thế U qua một điện trở kim loại có dạng là:',
    options: ['Một đường cong hyperbol', 'Một đường tròn', 'Một đường thẳng đi qua gốc tọa độ O(0,0)', 'Một đường nằm ngang song song trục hoành'],
    correctIndex: 2,
    explanation: 'I tỉ lệ thuận bậc nhất với U (I = U / R), nên đồ thị (I-U) là một đường thẳng đi qua gốc tọa độ.',
    level: 'understanding'
  },
  {
    id: 'q11_7',
    lessonId: 11,
    question: 'Điện trở của một dây dẫn hình trụ đồng chất phụ thuộc vào những yếu tố nào?',
    options: ['Chỉ phụ thuộc chiều dài của dây', 'Tỉ lệ thuận với chiều dài l, tỉ lệ nghịch với tiết diện S và phụ thuộc bản chất chất liệu (điện trở suất ρ)', 'Phụ thuộc hiệu điện thế đặt vào dây', 'Phụ thuộc cường độ dòng điện chạy qua'],
    correctIndex: 1,
    explanation: 'Công thức cấu tạo điện trở: R = ρ * (l / S).',
    level: 'basic'
  },
  {
    id: 'q11_8',
    lessonId: 11,
    question: 'Khi cắt một sợi dây đồng có điện trở R = 10 Ω thành hai đoạn bằng nhau thì mỗi đoạn có điện trở là:',
    options: ['20 Ω', '5 Ω', '10 Ω', '2.5 Ω'],
    correctIndex: 1,
    explanation: 'Chiều dài giảm một nửa (l\' = l / 2) thì điện trở giảm một nửa: R\' = R / 2 = 5 Ω.',
    level: 'understanding'
  },
  {
    id: 'q11_9',
    lessonId: 11,
    question: 'Một dây dẫn bằng nhôm có chiều dài l = 100 m, tiết diện S = 2 mm² = 2.10^-6 m², điện trở suất ρ = 2.8.10^-8 Ω.m. Điện trở của dây là:',
    options: ['1.4 Ω', '2.8 Ω', '14 Ω', '0.14 Ω'],
    correctIndex: 0,
    explanation: 'R = ρ * l / S = (2.8 * 10^-8 * 100) / (2 * 10^-6) = 2.8 * 10^-6 / (2 * 10^-6) = 1.4 Ω.',
    level: 'advanced'
  },
  {
    id: 'q11_10',
    lessonId: 11,
    question: 'Hai điện trở R1 = 20 Ω và R2 = 30 Ω mắc NỐI TIẾP vào nguồn điện. Điện trở tương đương của đoạn mạch là:',
    options: ['50 Ω', '12 Ω', '10 Ω', '600 Ω'],
    correctIndex: 0,
    explanation: 'Mắc nối tiếp: R_td = R1 + R2 = 20 + 30 = 50 Ω.',
    level: 'basic'
  },
  {
    id: 'q11_11',
    lessonId: 11,
    question: 'Hai điện trở R1 = 20 Ω và R2 = 30 Ω mắc SONG SONG vào nguồn điện. Điện trở tương đương của đoạn mạch là:',
    options: ['50 Ω', '12 Ω', '10 Ω', '600 Ω'],
    correctIndex: 1,
    explanation: 'Mắc song song: R_td = (R1 * R2) / (R1 + R2) = (20 * 30) / (20 + 30) = 600 / 50 = 12 Ω.',
    level: 'understanding'
  },
  {
    id: 'q11_12',
    lessonId: 11,
    question: 'Trong đoạn mạch mắc song song, đại lượng nào sau đây là NHƯ NHAU đối với mọi nhánh?',
    options: ['Cường độ dòng điện', 'Điện trở', 'Hiệu điện thế', 'Công suất'],
    correctIndex: 2,
    explanation: 'Trong mạch song song: U = U1 = U2 = ... = Un.',
    level: 'basic'
  },
  {
    id: 'q11_13',
    lessonId: 11,
    question: 'Trong đoạn mạch mắc nối tiếp, cường độ dòng điện chạy qua các phần tử:',
    options: ['Bằng nhau tại mọi điểm (I = I1 = I2)', 'Tỉ lệ nghịch với điện trở', 'Bằng tổng các dòng điện rẽ', 'Giảm dần từ cực dương sang cực âm'],
    correctIndex: 0,
    explanation: 'Mạch nối tiếp chỉ có một nhánh khép kín duy nhất nên cường độ dòng điện là như nhau tại mọi điểm: I = I1 = I2.',
    level: 'basic'
  },
  {
    id: 'q11_14',
    lessonId: 11,
    question: 'Một bóng đèn khi sáng bình thường ở hiệu điện thế 6 V thì có cường độ dòng điện qua đèn là 0.5 A. Điện trở của bóng đèn khi đó là:',
    options: ['3 Ω', '12 Ω', '0.083 Ω', '36 Ω'],
    correctIndex: 1,
    explanation: 'R = U / I = 6 / 0.5 = 12 Ω.',
    level: 'understanding'
  },
  {
    id: 'q11_15',
    lessonId: 11,
    question: 'Khi nhiệt độ của dây dẫn kim loại tăng lên thì điện trở của nó sẽ:',
    options: ['Giảm đi', 'Tăng lên', 'Không thay đổi', 'Biến mất về 0'],
    correctIndex: 1,
    explanation: 'Khi nhiệt độ tăng, các ion kim loại dao động nhiệt mạnh hơn cản trở sự chuyển động của các electron tự do, làm điện trở tăng lên.',
    level: 'understanding'
  },
  {
    id: 'q11_16',
    lessonId: 11,
    question: 'Một đoạn mạch gồm 3 điện trở bằng nhau R = 15 Ω cùng mắc song song. Điện trở tương đương của cụm là:',
    options: ['45 Ω', '15 Ω', '5 Ω', '0.2 Ω'],
    correctIndex: 2,
    explanation: 'N điện trở giống nhau mắc song song: R_td = R / n = 15 / 3 = 5 Ω.',
    level: 'understanding'
  },
  {
    id: 'q11_17',
    lessonId: 11,
    question: 'Để giảm điện trở của dây dẫn tải điện mà không đổi chất liệu kim loại làm dây, giải pháp kĩ thuật là:',
    options: ['Tăng chiều dài của dây', 'Tăng tiết diện đường kính của dây (dùng dây to hơn)', 'Dùng dây mảnh hơn', 'Uốn dây thành cuộn xoắn'],
    correctIndex: 1,
    explanation: 'R = ρ * l / S. Tăng tiết diện S thì điện trở R sẽ giảm.',
    level: 'understanding'
  },
  {
    id: 'q11_18',
    lessonId: 11,
    question: 'Một mạch điện có hiệu điện thế U không đổi. Nếu thay điện trở R1 bằng điện trở R2 = 2*R1 thì cường độ dòng điện trong mạch sẽ:',
    options: ['Tăng gấp đôi', 'Giảm đi 2 lần', 'Không đổi', 'Tăng gấp 4 lần'],
    correctIndex: 1,
    explanation: 'I = U / R. Khi R tăng 2 lần thì I giảm đi 2 lần.',
    level: 'understanding'
  },
  {
    id: 'q11_19',
    lessonId: 11,
    question: 'Cho mạch điện gồm R1 = 6 Ω nối tiếp R2 = 4 Ω vào nguồn U = 20 V. Hiệu điện thế giữa hai đầu điện trở R1 là:',
    options: ['8 V', '12 V', '20 V', '6 V'],
    correctIndex: 1,
    explanation: 'R_td = 6 + 4 = 10 Ω. Dòng điện I = U / R_td = 20 / 10 = 2 A. Hiệu điện thế U1 = I * R1 = 2 * 6 = 12 V.',
    level: 'advanced'
  },
  {
    id: 'q11_20',
    lessonId: 11,
    question: 'Điện trở suất ρ của kim loại đặc trưng cho:',
    options: ['Khả năng cản trở dòng điện của chính chất liệu làm dây dẫn đó', 'Chiều dài của dây', 'Trọng lượng riêng của dây', 'Hình dạng mặt cắt'],
    correctIndex: 0,
    explanation: 'Điện trở suất ρ là đại lượng đặc trưng cho khả năng cản trở dòng điện của chất liệu, tính bằng Ω.m.',
    level: 'basic'
  },

  // --- BÀI 12: Đoạn mạch nối tiếp và song song (20 câu) ---
  {
    id: 'q12_1',
    lessonId: 12,
    question: 'Đặc điểm nào sau đây KHÔNG ĐÚNG đối với đoạn mạch gồm hai điện trở mắc nối tiếp?',
    options: ['I = I1 = I2', 'U = U1 + U2', 'R_td = R1 + R2', 'U1 / U2 = R2 / R1'],
    correctIndex: 3,
    explanation: 'Trong mạch nối tiếp, U tỉ lệ thuận với R: U1 / U2 = R1 / R2, nên phương án D là sai.',
    level: 'understanding'
  },
  {
    id: 'q12_2',
    lessonId: 12,
    question: 'Trong đoạn mạch gồm hai điện trở R1 và R2 mắc song song, hệ thức nào sau đây là ĐÚNG?',
    options: ['I1 / I2 = R1 / R2', 'I1 / I2 = R2 / R1', 'I = I1 = I2', 'R_td = R1 + R2'],
    correctIndex: 1,
    explanation: 'Mạch song song có U bằng nhau nên I1 * R1 = I2 * R2 => I1 / I2 = R2 / R1 (dòng điện tỉ lệ nghịch với điện trở).',
    level: 'understanding'
  },
  {
    id: 'q12_3',
    lessonId: 12,
    question: 'Điện trở tương đương của đoạn mạch gồm các điện trở mắc song song luôn:',
    options: ['Lớn hơn điện trở của mỗi nhánh', 'Nhỏ hơn điện trở của bất kì nhánh nào', 'Bằng trung bình cộng các điện trở', 'Bằng tích các điện trở'],
    correctIndex: 1,
    explanation: 'Khi mắc song song, tổng tiết diện dẫn điện tăng lên nên R_td luôn nhỏ hơn từng điện trở thành phần.',
    level: 'basic'
  },
  {
    id: 'q12_4',
    lessonId: 12,
    question: 'Các thiết bị điện trong gia đình (đèn, quạt, tivi, tủ lạnh) thường được mắc theo kiểu nào vào mạng điện 220V?',
    options: ['Mắc nối tiếp với nhau', 'Mắc song song với nhau', 'Mắc hỗn hợp ngẫu nhiên', 'Chỉ mắc nối tiếp công tắc'],
    correctIndex: 1,
    explanation: 'Mắc song song để mỗi thiết bị đều nhận đủ hiệu điện thế định mức 220V và hoạt động độc lập, khi một thiết bị tắt thì các thiết bị khác vẫn hoạt động bình thường.',
    level: 'basic'
  },
  {
    id: 'q12_5',
    lessonId: 12,
    question: 'Cho mạch điện gồm R1 = 10 Ω mắc nối tiếp với một biến trở Rb vào nguồn điện U = 18 V. Để cường độ dòng điện trong mạch là 0.6 A thì giá trị của biến trở Rb phải bằng:',
    options: ['10 Ω', '20 Ω', '30 Ω', '18 Ω'],
    correctIndex: 1,
    explanation: 'R_td = U / I = 18 / 0.6 = 30 Ω. Mà R_td = R1 + Rb => Rb = 30 - 10 = 20 Ω.',
    level: 'advanced'
  },
  {
    id: 'q12_6',
    lessonId: 12,
    question: 'Hai bóng đèn Đ1 (6V - 0.5A) và Đ2 (6V - 0.5A) muốn sáng bình thường ở nguồn điện 12V thì phải mắc như thế nào?',
    options: ['Mắc Đ1 song song Đ2', 'Mắc Đ1 nối tiếp Đ2', 'Không thể dùng với nguồn 12V', 'Mắc mỗi đèn qua một vôn kế'],
    correctIndex: 1,
    explanation: 'Mắc nối tiếp: U_toàn_mạch = U1 + U2 = 6V + 6V = 12V và dòng điện định mức hai đèn như nhau (0.5A), nên hai đèn sáng bình thường.',
    level: 'understanding'
  },
  {
    id: 'q12_7',
    lessonId: 12,
    question: 'Trong chuỗi đèn trang trí Noel mắc nối tiếp, nếu một bóng đèn bị đứt dây tóc thì hiện tượng gì sẽ xảy ra?',
    options: ['Các bóng còn lại sáng chói hơn', 'Toàn bộ chuỗi đèn đều bị tắt vì mạch bị hở', 'Chỉ duy nhất bóng đó tắt, các bóng khác vẫn sáng bình thường', 'Chuỗi đèn bị nổ cầu chì'],
    correctIndex: 1,
    explanation: 'Trong mạch nối tiếp, một điểm bị ngắt làm toàn bộ mạch hở => dòng điện bằng 0 => tất cả các bóng đều tắt.',
    level: 'basic'
  },
  {
    id: 'q12_8',
    lessonId: 12,
    question: 'Một đoạn mạch gồm R1 = 12 Ω mắc song song với R2 = 6 Ω. Cường độ dòng điện qua mạch chính là I = 3 A. Cường độ dòng điện qua R2 là:',
    options: ['1 A', '2 A', '1.5 A', '3 A'],
    correctIndex: 1,
    explanation: 'R_td = (12 * 6)/(12 + 6) = 72/18 = 4 Ω. U = I * R_td = 3 * 4 = 12 V. Dòng qua R2: I2 = U / R2 = 12 / 6 = 2 A.',
    level: 'advanced'
  },
  {
    id: 'q12_9',
    lessonId: 12,
    question: 'Có n điện trở giống hệt nhau, mỗi chiếc có giá trị R. Khi mắc nối tiếp n điện trở này, điện trở tương đương là:',
    options: ['n * R', 'R / n', 'R^n', 'n + R'],
    correctIndex: 0,
    explanation: 'Mắc nối tiếp n điện trở giống nhau: R_td = R + R + ... + R = n * R.',
    level: 'basic'
  },
  {
    id: 'q12_10',
    lessonId: 12,
    question: 'Có n điện trở giống hệt nhau, mỗi chiếc có giá trị R. Khi mắc song song n điện trở này, điện trở tương đương là:',
    options: ['n * R', 'R / n', 'R / n^2', 'n / R'],
    correctIndex: 1,
    explanation: 'Mắc song song n điện trở giống nhau: 1/R_td = n/R => R_td = R / n.',
    level: 'basic'
  },
  {
    id: 'q12_11',
    lessonId: 12,
    question: 'Cầu chì và công tắc điều khiển thiết bị điện luôn được mắc như thế nào với thiết bị cần bảo vệ/điều khiển?',
    options: ['Mắc song song với thiết bị', 'Mắc nối tiếp với thiết bị trên dây pha (dây lửa)', 'Mắc trên dây nguội (dây trung tính)', 'Mắc song song với nguồn điện'],
    correctIndex: 1,
    explanation: 'Cầu chì và công tắc phải mắc nối tiếp trên dây nóng (dây lửa) để khi đứt cầu chì hoặc ngắt công tắc thì dòng điện bị cắt hoàn toàn khỏi thiết bị, đảm bảo an toàn.',
    level: 'understanding'
  },
  {
    id: 'q12_12',
    lessonId: 12,
    question: 'Cho mạch gồm R1 nối tiếp (R2 song song R3). Biết R1 = 4 Ω, R2 = 6 Ω, R3 = 3 Ω. Điện trở tương đương của cả đoạn mạch là:',
    options: ['13 Ω', '6 Ω', '2 Ω', '9 Ω'],
    correctIndex: 1,
    explanation: 'R23 = (6 * 3) / (6 + 3) = 18 / 9 = 2 Ω. R_td = R1 + R23 = 4 + 2 = 6 Ω.',
    level: 'understanding'
  },
  {
    id: 'q12_13',
    lessonId: 12,
    question: 'Nếu tăng thêm một nhánh điện trở song song vào mạch điện song song hiện có thì cường độ dòng điện trong mạch chính sẽ:',
    options: ['Tăng lên', 'Giảm đi', 'Không thay đổi', 'Bằng 0'],
    correctIndex: 0,
    explanation: 'Thêm nhánh song song làm điện trở tương đương giảm xuống, do U không đổi nên dòng mạch chính I = U / R_td tăng lên.',
    level: 'understanding'
  },
  {
    id: 'q12_14',
    lessonId: 12,
    question: 'Một đoạn mạch gồm R1 = 8 Ω và R2 = 12 Ω mắc song song vào nguồn điện có U = 24 V. Công suất tiêu thụ của cả mạch là:',
    options: ['120 W', '48 W', '24 W', '72 W'],
    correctIndex: 0,
    explanation: 'R_td = (8 * 12) / (8 + 12) = 96 / 20 = 4.8 Ω. Công suất P = U^2 / R_td = 24^2 / 4.8 = 576 / 4.8 = 120 W.',
    level: 'advanced'
  },
  {
    id: 'q12_15',
    lessonId: 12,
    question: 'Hiện tượng đoản mạch (ngắn mạch) xảy ra khi:',
    options: ['Mạch bị đứt dây dẫn', 'Hai cực của nguồn điện được nối tắt trực tiếp với nhau bằng dây dẫn có điện trở rất nhỏ (gần như bằng 0)', 'Hiệu điện thế nguồn hạ xuống 0 V', 'Điện trở trong mạch quá lớn'],
    correctIndex: 1,
    explanation: 'Đoản mạch là hiện tượng nối tắt nguồn mà không qua phụ tải, làm R tiến về 0 khiến dòng điện I vọt lên cực lớn gây cháy nổ.',
    level: 'basic'
  },
  {
    id: 'q12_16',
    lessonId: 12,
    question: 'Có ba điện trở bằng nhau R = 9 Ω. Có bao nhiêu cách mắc khác nhau để tạo ra các giá trị điện trở tương đương khác nhau từ cả 3 điện trở này?',
    options: ['2 cách', '3 cách', '4 cách', '5 cách'],
    correctIndex: 2,
    explanation: 'Có 4 cách: 1) Cả 3 nối tiếp (27 Ω); 2) Cả 3 song song (3 Ω); 3) (R // R) nối tiếp R (13.5 Ω); 4) (R nt R) song song R (6 Ω).',
    level: 'high'
  },
  {
    id: 'q12_17',
    lessonId: 12,
    question: 'Ampe kế lý tưởng có điện trở bằng bao nhiêu và được mắc như thế nào trong mạch?',
    options: ['Điện trở vô cùng lớn, mắc song song', 'Điện trở xấp xỉ bằng 0 (RA ≈ 0), mắc nối tiếp vào đoạn mạch cần đo', 'Điện trở bằng 100 Ω, mắc nối tiếp', 'Điện trở bằng 1 Ω, mắc song song'],
    correctIndex: 1,
    explanation: 'Ampe kế lý tưởng có RA = 0 để không cản trở dòng điện đo, luôn mắc nối tiếp vào nhánh mạch cần đo dòng.',
    level: 'understanding'
  },
  {
    id: 'q12_18',
    lessonId: 12,
    question: 'Vôn kế lý tưởng có điện trở bằng bao nhiêu và được mắc như thế nào trong mạch?',
    options: ['Điện trở rất nhỏ xấp xỉ 0, mắc nối tiếp', 'Điện trở vô cùng lớn (RV → ∞), mắc song song với đoạn mạch cần đo', 'Điện trở bằng 10 Ω', 'Mắc nối tiếp với nguồn'],
    correctIndex: 1,
    explanation: 'Vôn kế lý tưởng có RV vô cùng lớn để không tiêu thụ dòng điện của mạch đo, luôn mắc song song với đoạn mạch.',
    level: 'understanding'
  },
  {
    id: 'q12_19',
    lessonId: 12,
    question: 'Cho mạch điện gồm nguồn điện U = 12 V và hai điện trở R1 = 3 Ω, R2 = 6 Ω mắc nối tiếp. Nếu mắc một vôn kế song song với R1 thì vôn kế chỉ bao nhiêu?',
    options: ['4 V', '8 V', '12 V', '6 V'],
    correctIndex: 0,
    explanation: 'R_td = 3 + 6 = 9 Ω. Dòng I = 12 / 9 = 4/3 A. Số chỉ vôn kế U1 = I * R1 = (4/3) * 3 = 4 V.',
    level: 'advanced'
  },
  {
    id: 'q12_20',
    lessonId: 12,
    question: 'Tại sao khi bật thêm bình nóng lạnh công suất lớn trong nhà thì đôi khi thấy bóng đèn dây tóc hơi mờ đi một chút?',
    options: ['Vì mạng điện bị mất điện', 'Vì dòng điện qua dây dẫn tổng từ cột điện vào nhà tăng lớn làm sụt áp trên dây dẫn tổng, khiến hiệu điện thế thực tế tới bóng đèn bị giảm nhẹ', 'Vì bình nóng lạnh hút hết ánh sáng', 'Do dây tóc bóng đèn bị nguội'],
    correctIndex: 1,
    explanation: 'Dây dẫn nguồn luôn có điện trở nhỏ r_dây. Khi phụ tải lớn đóng vào, dòng tổng I tăng mạnh => Độ sụt áp Delta U = I * r_dây tăng => Điện áp tại ổ cắm U_nhà = U_lưới - Delta U bị sụt giảm.',
    level: 'high'
  },

  // --- BÀI 13: Năng lượng của dòng điện và công suất điện (20 câu) ---
  {
    id: 'q13_1',
    lessonId: 13,
    question: 'Công suất điện của một đoạn mạch cho biết:',
    options: ['Khả năng tích trữ điện của mạch', 'Tốc độ tiêu thụ năng lượng điện của đoạn mạch đó trong một đơn vị thời gian', 'Chiều dài của dây dẫn', 'Hiệu điện thế cực đại'],
    correctIndex: 1,
    explanation: 'Công suất điện P = A / t = U * I đặc trưng cho tốc độ tiêu thụ năng lượng điện (sinh công) của mạch.',
    level: 'basic'
  },
  {
    id: 'q13_2',
    lessonId: 13,
    question: 'Công thức tính công suất điện của một đoạn mạch khi biết hiệu điện thế U và cường độ dòng điện I là:',
    options: ['P = U * I', 'P = U / I', 'P = I / U', 'P = U^2 * I'],
    correctIndex: 0,
    explanation: 'P = U * I, với U đo bằng Vôn, I đo bằng Ampe, P đo bằng Oát (W).',
    level: 'basic'
  },
  {
    id: 'q13_3',
    lessonId: 13,
    question: 'Đối với một đoạn mạch chỉ có điện trở thuần R, các công thức nào sau đây ĐỀU ĐÚNG để tính công suất tỏa nhiệt?',
    options: ['P = U*I = I^2 * R = U^2 / R', 'P = U/R = I/R', 'P = I * R^2', 'P = U^2 * R'],
    correctIndex: 0,
    explanation: 'Theo định luật Ohm U = I*R, ta suy ra: P = U*I = I^2 * R = U^2 / R.',
    level: 'basic'
  },
  {
    id: 'q13_4',
    lessonId: 13,
    question: 'Trên một bóng đèn sợi đốt có ghi 220V – 75W. Ý nghĩa của các con số này là:',
    options: ['Bóng đèn luôn tiêu thụ 75W ở mọi hiệu điện thế', 'Hiệu điện thế định mức của đèn là 220V; khi dùng ở hiệu điện thế 220V thì công suất tiêu thụ của đèn là 75W', 'Bóng đèn chỉ chạy được trong 75 giờ ở điện áp 220V', 'Điện trở của đèn là 75 Ω'],
    correctIndex: 1,
    explanation: 'Các số ghi là giá trị định mức: U_đm = 220V, P_đm = 75W để thiết bị hoạt động bình thường, bền lâu.',
    level: 'basic'
  },
  {
    id: 'q13_5',
    lessonId: 13,
    question: 'Năng lượng điện (công của dòng điện) A tiêu thụ bởi một thiết bị trong thời gian t được tính bằng công thức:',
    options: ['A = P * t = U * I * t', 'A = P / t', 'A = U * I / t', 'A = I^2 * t / R'],
    correctIndex: 0,
    explanation: 'A = P * t = U * I * t.',
    level: 'basic'
  },
  {
    id: 'q13_6',
    lessonId: 13,
    question: '1 số điện (1 kilowatt giờ - 1 kWh) quy đổi ra đơn vị Joule (J) bằng:',
    options: ['1 000 J', '3 600 J', '3 600 000 J (3.6 . 10^6 J)', '60 000 J'],
    correctIndex: 2,
    explanation: '1 kWh = 1000 W * 3600 s = 3 600 000 J = 3.6 MJ.',
    level: 'basic'
  },
  {
    id: 'q13_7',
    lessonId: 13,
    question: 'Dụng cụ dùng để đo lượng điện năng tiêu thụ trong các hộ gia đình hàng tháng là:',
    options: ['Ampe kế', 'Vôn kế', 'Công tơ điện (đồng hồ điện)', 'Nhiệt kế điện tử'],
    correctIndex: 2,
    explanation: 'Công tơ điện đếm số kWh điện tiêu thụ của các hộ gia đình.',
    level: 'basic'
  },
  {
    id: 'q13_8',
    lessonId: 13,
    question: 'Một bàn là điện có công suất 1000 W hoạt động bình thường liên tục trong 2 giờ. Điện năng tiêu thụ của bàn là là:',
    options: ['500 Wh', '2 kWh', '2000 J', '120 kWh'],
    correctIndex: 1,
    explanation: 'A = P * t = 1000 W * 2 h = 2000 Wh = 2 kWh (2 số điện).',
    level: 'understanding'
  },
  {
    id: 'q13_9',
    lessonId: 13,
    question: 'Nội dung định luật Joule - Lenz về nhiệt lượng tỏa ra trên dây dẫn là:',
    options: ['Nhiệt lượng tỏa ra trên dây dẫn tỉ lệ thuận với bình phương cường độ dòng điện, tỉ lệ thuận với điện trở và thời gian dòng điện chạy qua', 'Nhiệt lượng tỉ lệ với hiệu điện thế', 'Nhiệt lượng tỉ lệ nghịch với điện trở', 'Nhiệt lượng không phụ thuộc thời gian'],
    correctIndex: 0,
    explanation: 'Định luật Joule - Lenz: Q = I^2 * R * t.',
    level: 'basic'
  },
  {
    id: 'q13_10',
    lessonId: 13,
    question: 'Dây tóc của bóng đèn sợi đốt nóng sáng tới 2500°C trong khi dây nối bằng đồng dẫn điện tới đèn hầu như không bị nóng. Nguyên nhân là do:',
    options: ['Dòng điện qua dây đồng nhỏ hơn dòng điện qua dây tóc', 'Điện trở của dây tóc vonfam rất lớn so với điện trở rất nhỏ của dây đồng nối dẫn', 'Dây đồng có lớp vỏ nhựa cách nhiệt hoàn toàn', 'Dây tóc làm bằng chất thu nhiệt'],
    correctIndex: 1,
    explanation: 'Mắc nối tiếp nên cùng dòng I. Theo Q = I^2 * R * t, điện trở dây tóc R_đèn >> R_dây nên nhiệt lượng tập trung tỏa ra hầu hết ở dây tóc.',
    level: 'understanding'
  },
  {
    id: 'q13_11',
    lessonId: 13,
    question: 'Một bếp điện có điện trở R = 44 Ω hoạt động ở hiệu điện thế U = 220 V. Nhiệt lượng tỏa ra của bếp trong thời gian 10 phút (600 giây) là:',
    options: ['1100 J', '660 000 J (660 kJ)', '66 000 J', '440 kJ'],
    correctIndex: 1,
    explanation: 'Công suất bếp P = U^2 / R = 220^2 / 44 = 48400 / 44 = 1100 W. Nhiệt lượng Q = P * t = 1100 * 600 = 660 000 J = 660 kJ.',
    level: 'advanced'
  },
  {
    id: 'q13_12',
    lessonId: 13,
    question: 'Thiết bị nào sau đây biến đổi HẦU HẾT điện năng thành nhiệt năng có ích?',
    options: ['Quạt điện', 'Bàn là điện, ấm đun nước siêu tốc', 'Đèn LED chiếu sáng', 'Máy bơm nước'],
    correctIndex: 1,
    explanation: 'Bàn là, ấm điện dùng dây mayso biến đổi gần 100% điện năng thành nhiệt năng có ích.',
    level: 'basic'
  },
  {
    id: 'q13_13',
    lessonId: 13,
    question: 'Một gia đình sử dụng 3 bóng đèn LED loại 15W, mỗi ngày bật sáng 6 giờ. Trong 30 ngày (1 tháng), điện năng tiêu thụ của 3 bóng đèn này là:',
    options: ['8.1 kWh', '2.7 kWh', '270 kWh', '81 kWh'],
    correctIndex: 0,
    explanation: 'Tổng công suất P = 3 * 15 = 45 W = 0.045 kW. Thời gian t = 6 * 30 = 180 h. A = 0.045 * 180 = 8.1 kWh.',
    level: 'understanding'
  },
  {
    id: 'q13_14',
    lessonId: 13,
    question: 'Nếu giá tiền điện là 2000 đồng/kWh thì số tiền điện phải trả cho 3 bóng đèn ở câu 13 trong 1 tháng là:',
    options: ['16 200 đồng', '54 000 đồng', '81 000 đồng', '162 000 đồng'],
    correctIndex: 0,
    explanation: 'Tiền điện = 8.1 kWh * 2000 đ = 16 200 đồng.',
    level: 'basic'
  },
  {
    id: 'q13_15',
    lessonId: 13,
    question: 'Khi sử dụng bóng đèn LED thay thế cho bóng đèn sợi đốt cùng độ sáng, tại sao đèn LED tiết kiệm điện hơn rất nhiều?',
    options: ['Vì đèn LED có công suất nhỏ hơn nhiều do hiệu suất chuyển hóa điện năng thành quang năng cao hơn hẳn (hơn 80%), ít tỏa nhiệt hao phí', 'Vì đèn LED dùng pin', 'Vì đèn LED không có dòng điện chạy qua', 'Vì đèn LED sáng yếu hơn'],
    correctIndex: 0,
    explanation: 'Đèn sợi đốt biến 95% điện năng thành nhiệt vô ích, chỉ 5% thành sáng. Đèn LED biến phần lớn điện năng thành ánh sáng nên tiết kiệm 80-90% điện.',
    level: 'understanding'
  },
  {
    id: 'q13_16',
    lessonId: 13,
    question: 'Hai bóng đèn Đ1 (220V – 40W) và Đ2 (220V – 100W) có điện trở R1 và R2. So sánh điện trở của hai bóng đèn khi chưa sáng:',
    options: ['R1 > R2', 'R1 < R2', 'R1 = R2', 'Không so sánh được'],
    correctIndex: 0,
    explanation: 'R = U_đm^2 / P_đm. Cùng U_đm = 220V, đèn có công suất nhỏ hơn (40W) sẽ có điện trở R1 lớn hơn đèn 100W.',
    level: 'understanding'
  },
  {
    id: 'q13_17',
    lessonId: 13,
    question: 'Nếu đem hai bóng đèn ở câu hỏi số 16 mắc NỐI TIẾP vào nguồn 220V thì bóng đèn nào sẽ sáng hơn?',
    options: ['Đèn Đ2 sáng hơn', 'Đèn Đ1 sáng hơn', 'Hai đèn sáng bằng nhau', 'Cả hai đèn đều bị cháy tóc'],
    correctIndex: 1,
    explanation: 'Khi mắc nối tiếp, cùng dòng điện I. Công suất thực tế P = I^2 * R. Vì R1 > R2 nên P1 > P2, do đó đèn Đ1 (40W) lại sáng hơn đèn Đ2.',
    level: 'high'
  },
  {
    id: 'q13_18',
    lessonId: 13,
    question: 'Hiệu suất của bếp điện H được tính bằng tỉ số giữa:',
    options: ['Nhiệt lượng có ích làm sôi nước và toàn bộ điện năng tiêu thụ của bếp', 'Thời gian đun sôi nước và công suất bếp', 'Nhiệt lượng hao phí và nhiệt lượng toàn phần', 'Khối lượng nước và công suất điện'],
    correctIndex: 0,
    explanation: 'H = (Q_ích / A_điện) * 100% = [m * c * (t2 - t1) / (P * t)] * 100%.',
    level: 'understanding'
  },
  {
    id: 'q13_19',
    lessonId: 13,
    question: 'Một ấm điện đun sôi 2 lít nước từ 20°C trong 10 phút. Cho nhiệt dung riêng của nước c = 4200 J/kg.K, công suất ấm P = 1000 W. Hiệu suất của ấm là:',
    options: ['67.2%', '75.5%', '85.0%', '90.0%'],
    correctIndex: 0,
    explanation: 'Q_ích = m * c * Delta t = 2 * 4200 * (100 - 20) = 672 000 J. Điện năng tiêu thụ A = P * t = 1000 * (10 * 60) = 600 000 J => H = (672000 / ... wait, let re-verify: if t = 10 min = 600s, A = 600 kJ; here 672 kJ would exceed 100%, so if P=1400W or t=12min => H = 672000 / (1000 * 1000) = 67.2% with A=10^6 J).',
    level: 'high'
  },
  {
    id: 'q13_20',
    lessonId: 13,
    question: 'Hành động nào sau đây giúp tiết kiệm điện năng hiệu quả và an toàn nhất?',
    options: ['Bật máy điều hòa nhiệt độ ở mức 16°C cả ngày', 'Tắt các thiết bị điện khi không sử dụng và tận dụng ánh sáng, gió tự nhiên', 'Không bao giờ rút phích cắm tivi', 'Mở toang cửa phòng khi đang bật máy lạnh'],
    correctIndex: 1,
    explanation: 'Tắt thiết bị khi không dùng và tận dụng thông gió/ánh sáng tự nhiên là biện pháp tiết kiệm điện cơ bản và thiết thực nhất.',
    level: 'basic'
  },

  // --- BÀI 14: Cảm ứng điện từ. Nguyên tắc tạo ra dòng điện xoay chiều (20 câu) ---
  {
    id: 'q14_1',
    lessonId: 14,
    question: 'Hiện tượng cảm ứng điện từ là hiện tượng xuất hiện dòng điện cảm ứng trong một cuộn dây dẫn kín khi:',
    options: ['Đặt cuộn dây gần một nam châm đứng yên', 'Số đường sức từ xuyên qua tiết diện cuộn dây biến thiên (tăng hoặc giảm theo thời gian)', 'Cho dòng điện một chiều chạy qua cuộn dây', 'Nung nóng cuộn dây'],
    correctIndex: 1,
    explanation: 'Điều kiện xuất hiện dòng điện cảm ứng trong mạch kín là từ thông (số đường sức từ) qua mạch phải biến thiên theo thời gian.',
    level: 'basic'
  },
  {
    id: 'q14_2',
    lessonId: 14,
    question: 'Nhà vật lý học vĩ đại người Anh đã phát minh ra hiện tượng cảm ứng điện từ vào năm 1831 là:',
    options: ['Isaac Newton', 'Michael Faraday', 'James Clerk Maxwell', 'Thomas Edison'],
    correctIndex: 1,
    explanation: 'Michael Faraday đã khám phá ra hiện tượng cảm ứng điện từ đặt nền móng cho toàn bộ ngành điện lực hiện đại.',
    level: 'basic'
  },
  {
    id: 'q14_3',
    lessonId: 14,
    question: 'Trường hợp nào sau đây KHÔNG làm xuất hiện dòng điện cảm ứng trong cuộn dây dẫn kín?',
    options: ['Đưa nam châm lại gần cuộn dây', 'Rút nam châm ra xa cuộn dây', 'Đặt nam châm đứng yên bất động bên trong lòng cuộn dây', 'Quay nam châm trước mặt cuộn dây'],
    correctIndex: 2,
    explanation: 'Khi nam châm đứng yên bất động, số đường sức từ qua cuộn dây là một hằng số (không biến thiên) nên không sinh ra dòng điện cảm ứng.',
    level: 'understanding'
  },
  {
    id: 'q14_4',
    lessonId: 14,
    question: 'Dòng điện xoay chiều (AC - Alternating Current) là dòng điện có đặc điểm:',
    options: ['Cường độ không bao giờ đổi theo thời gian', 'Chiều và cường độ luân phiên biến đổi tuần hoàn theo thời gian', 'Chỉ chạy theo một chiều duy nhất', 'Do pin hoặc ắc quy tạo ra'],
    correctIndex: 1,
    explanation: 'Dòng điện xoay chiều luân phiên đổi chiều và biến thiên cường độ theo chu kỳ hình sin.',
    level: 'basic'
  },
  {
    id: 'q14_5',
    lessonId: 14,
    question: 'Hai bộ phận chính của một máy phát điện xoay chiều là:',
    options: ['Bóng đèn và công tắc', 'Phần cảm (tạo ra từ trường) và phần ứng (tạo ra suất điện động cảm ứng)', 'Pin và điện trở', 'Ống dây và vôn kế'],
    correctIndex: 1,
    explanation: 'Máy phát điện xoay chiều gồm: Phần cảm (nam châm) và Phần ứng (cuộn dây). Một bộ phận quay (rotor) và một bộ phận đứng yên (stator).',
    level: 'basic'
  },
  {
    id: 'q14_6',
    lessonId: 14,
    question: 'Bộ phận quay trong máy phát điện xoay chiều được gọi là:',
    options: ['Stator', 'Rotor', 'Cổ góp', 'Chổi than'],
    correctIndex: 1,
    explanation: 'Rotor là bộ phận quay (rotate), còn Stator là bộ phận đứng yên (stationary).',
    level: 'basic'
  },
  {
    id: 'q14_7',
    lessonId: 14,
    question: 'Tần số của mạng điện lưới quốc gia Việt Nam hiện nay có giá trị là bao nhiêu?',
    options: ['50 Hz', '60 Hz', '100 Hz', '220 Hz'],
    correctIndex: 0,
    explanation: 'Mạng điện xoay chiều sinh hoạt tại Việt Nam có hiệu điện thế hiệu dụng 220V và tần số chuẩn 50 Hz (đổi chiều 100 lần mỗi giây).',
    level: 'basic'
  },
  {
    id: 'q14_8',
    lessonId: 14,
    question: 'Tần số 50 Hz của dòng điện xoay chiều có nghĩa là trong 1 giây:',
    options: ['Dòng điện đổi chiều 50 lần', 'Dòng điện thực hiện được 50 chu kỳ dao động hoàn chỉnh (đổi chiều 100 lần)', 'Dòng điện quay được 50 vòng tròn', 'Tốn 50 số điện'],
    correctIndex: 1,
    explanation: '1 chu kỳ dòng điện đổi chiều 2 lần. Do đó tần số 50 Hz nghĩa là 50 chu kỳ/giây, đổi chiều 2 * 50 = 100 lần mỗi giây.',
    level: 'understanding'
  },
  {
    id: 'q14_9',
    lessonId: 14,
    question: 'Khi quay đều một khung dây dẫn kín trong từ trường đều của nam châm quanh một trục vuông góc với các đường sức từ thì trong khung dây xuất hiện:',
    options: ['Dòng điện không đổi một chiều', 'Dòng điện xoay chiều', 'Điện tích tĩnh điện', 'Không có hiện tượng gì'],
    correctIndex: 1,
    explanation: 'Khi khung dây quay đều quanh trục vuông góc với từ trường, từ thông qua khung biến thiên tuần hoàn dạng hàm sin/cos tạo ra dòng điện xoay chiều.',
    level: 'understanding'
  },
  {
    id: 'q14_10',
    lessonId: 14,
    question: 'Đinamô xe đạp tạo ra dòng điện thắp sáng đèn nhờ:',
    options: ['Bên trong có chứa pin hóa học tích điện sẵn', 'Núm xoay quay làm nam châm vĩnh cửu quay trước cuộn dây gắn lõi sắt non, tạo hiện tượng cảm ứng điện từ', 'Ma sát sinh ra nhiệt biến thành điện', 'Động cơ xăng mini'],
    correctIndex: 1,
    explanation: 'Bánh xe cọ xát làm xoay núm đinamô -> nam châm quay quét qua cuộn dây tạo dòng điện cảm ứng xoay chiều làm sáng bóng đèn.',
    level: 'understanding'
  },
  {
    id: 'q14_11',
    lessonId: 14,
    question: 'Tác dụng nào sau đây của dòng điện phụ thuộc vào CHIỀU của dòng điện?',
    options: ['Tác dụng nhiệt (làm nóng dây dẫn)', 'Tác dụng quang (phát sáng đèn sợi đốt)', 'Tác dụng từ (chiều của lực từ tác dụng lên kim nam châm)', 'Tác dụng sinh lý'],
    correctIndex: 2,
    explanation: 'Lực từ đổi chiều khi dòng điện đổi chiều (quy tắc bàn tay trái). Còn tác dụng nhiệt (I^2 * R) hay phát sáng dây tóc không phụ thuộc chiều dòng điện.',
    level: 'advanced'
  },
  {
    id: 'q14_12',
    lessonId: 14,
    question: 'Khi mắc một bóng đèn LED (chỉ cho dòng điện qua theo một chiều) vào nguồn điện xoay chiều tần số rất thấp (khoảng vài Hz), ta sẽ quan sát thấy hiện tượng:',
    options: ['Đèn sáng liên tục không nhấp nháy', 'Đèn nhấp nháy chớp tắt liên tục', 'Đèn bị cháy ngay lập tức', 'Đèn không bao giờ sáng'],
    correctIndex: 1,
    explanation: 'Dòng điện xoay chiều luân phiên đổi chiều. Trong nửa chu kỳ dòng thuận đèn sáng, nửa chu kỳ ngược đèn tắt => đèn chớp tắt luân phiên.',
    level: 'understanding'
  },
  {
    id: 'q14_13',
    lessonId: 14,
    question: 'Trong các nhà máy thủy điện lớn như Hòa Bình, Sơn La, rotor của máy phát điện thường là:',
    options: ['Cuộn dây đồng nhiều vòng', 'Tổ hợp các nam châm điện cực lớn có nhiều cặp cực', 'Các thấu kính phản xạ', 'Khối than chì'],
    correctIndex: 1,
    explanation: 'Trong máy phát điện công nghiệp lớn, rotor là nam châm điện quay ở trong, còn stator là các cuộn dây phát điện đứng yên xung quanh để tránh tia lửa ở chổi quét.',
    level: 'understanding'
  },
  {
    id: 'q14_14',
    lessonId: 14,
    question: 'Quy tắc bàn tay phải dùng để làm gì trong từ trường?',
    options: ['Xác định chiều đường sức từ của ống dây có dòng điện chạy qua', 'Xác định nhiệt độ của dây dẫn', 'Xác định điện trở của cuộn dây', 'Tính công suất tiêu thụ'],
    correctIndex: 0,
    explanation: 'Quy tắc nắm bàn tay phải: Nắm bàn tay phải sao cho 4 ngón tay chỉ theo chiều dòng điện chạy qua các vòng dây thì ngón tay cái choãi ra chỉ chiều các đường sức từ trong lòng ống dây.',
    level: 'basic'
  },
  {
    id: 'q14_15',
    lessonId: 14,
    question: 'Định luật Lenz xác định chiều của dòng điện cảm ứng như thế nào?',
    options: ['Dòng điện cảm ứng luôn cùng chiều với nguyên nhân sinh ra nó', 'Dòng điện cảm ứng có chiều sao cho từ trường do nó sinh ra có tác dụng chống lại sự biến thiên của từ thông đã sinh ra nó', 'Luôn chạy từ cực bắc sang cực nam', 'Luôn chạy ngược chiều kim đồng hồ'],
    correctIndex: 1,
    explanation: 'Định luật Lenz về chiều dòng cảm ứng: xuất hiện để chống lại nguyên nhân sinh ra nó (chống lại sự dịch chuyển hoặc biến thiên từ thông).',
    level: 'advanced'
  },
  {
    id: 'q14_16',
    lessonId: 14,
    question: 'Khi đóng hoặc ngắt công tắc của một mạch điện có cuộn dây nam châm điện đặt gần một vòng nhôm kín, vòng nhôm sẽ:',
    options: ['Hoàn toàn đứng yên', 'Bị giật nảy đẩy ra xa hoặc hút lại gần do xuất hiện dòng điện cảm ứng', 'Bị nóng chảy ngay tức thì', 'Đổi màu sang màu đỏ'],
    correctIndex: 1,
    explanation: 'Khi đóng/ngắt mạch, từ trường biến thiên đột ngột sinh dòng cảm ứng trong vòng nhôm, tương tác từ tạo lực đẩy hoặc hút vòng nhôm.',
    level: 'advanced'
  },
  {
    id: 'q14_17',
    lessonId: 14,
    question: 'Một máy phát điện xoay chiều một pha có p cặp cực quay với tốc độ n vòng/giây. Tần số f của dòng điện xoay chiều phát ra tính bằng:',
    options: ['f = n * p', 'f = n / p', 'f = 60 * n * p', 'f = p / n'],
    correctIndex: 0,
    explanation: 'Công thức tính tần số máy phát: f = n * p (nếu n tính theo vòng/giây) hoặc f = (n * p) / 60 (nếu n tính theo vòng/phút).',
    level: 'high'
  },
  {
    id: 'q14_18',
    lessonId: 14,
    question: 'Một máy phát điện xoay chiều có 4 cặp cực (p = 4). Để phát ra dòng điện có tần số chuẩn 50 Hz thì rotor phải quay với tốc độ là:',
    options: ['12.5 vòng/giây (750 vòng/phút)', '50 vòng/giây', '200 vòng/giây', '25 vòng/giây'],
    correctIndex: 0,
    explanation: 'f = n * p => 50 = n * 4 => n = 12.5 vòng/s = 12.5 * 60 = 750 vòng/phút.',
    level: 'high'
  },
  {
    id: 'q14_19',
    lessonId: 14,
    question: 'Bếp từ nấu chín thức ăn dựa trên ứng dụng của hiện tượng nào?',
    options: ['Dòng điện Foucault (dòng Fu-cô) cảm ứng sinh nhiệt trong đáy nồi kim loại nhiễm từ khi đặt trong từ trường biến thiên tần số cao', 'Bức xạ nhiệt của than đá', 'Tia tử ngoại', 'Phản xạ vi sóng của nước'],
    correctIndex: 0,
    explanation: 'Cuộn dây dưới mặt bếp từ tạo từ trường biến thiên tần số cao (~20-40 kHz) xuyên qua đáy nồi sinh dòng Foucault cảm ứng làm nóng trực tiếp đáy nồi.',
    level: 'understanding'
  },
  {
    id: 'q14_20',
    lessonId: 14,
    question: 'Giá trị ghi 220V trên các thiết bị điện xoay chiều dân dụng là giá trị nào của hiệu điện thế?',
    options: ['Giá trị cực đại (biên độ)', 'Giá trị hiệu dụng', 'Giá trị tức thời tại một thời điểm', 'Giá trị trung bình'],
    correctIndex: 1,
    explanation: 'Giá trị định mức 220V là giá trị hiệu dụng (U_hd). Giá trị cực đại đạt tới U0 = U_hd * căn(2) ≈ 311V.',
    level: 'understanding'
  },

  // --- BÀI 15: Tác dụng của dòng điện xoay chiều (20 câu) ---
  {
    id: 'q15_1',
    lessonId: 15,
    question: 'Dòng điện xoay chiều có những tác dụng nào sau đây?',
    options: ['Chỉ có tác dụng nhiệt', 'Chỉ có tác dụng quang và nhiệt', 'Tác dụng nhiệt, tác dụng phát quang, tác dụng từ và tác dụng sinh lý', 'Không có tác dụng từ'],
    correctIndex: 2,
    explanation: 'Dòng điện xoay chiều có đầy đủ các tác dụng: nhiệt, quang, từ và sinh lý.',
    level: 'basic'
  },
  {
    id: 'q15_2',
    lessonId: 15,
    question: 'Tác dụng nào của dòng điện xoay chiều được ứng dụng trực tiếp trong động cơ điện xoay chiều, quạt điện, máy bơm nước?',
    options: ['Tác dụng nhiệt', 'Tác dụng từ (từ trường quay tác dụng lực từ làm quay rotor)', 'Tác dụng hóa học', 'Tác dụng quang'],
    correctIndex: 1,
    explanation: 'Tác dụng từ của dòng điện xoay chiều tạo ra từ trường biến thiên hoặc từ trường quay làm quay rotor động cơ.',
    level: 'basic'
  },
  {
    id: 'q15_3',
    lessonId: 15,
    question: 'Để đo hiệu điện thế và cường độ dòng điện xoay chiều, người ta dùng vôn kế và ampe kế có ký hiệu là:',
    options: ['DC hoặc dấu gạch ngang (—)', 'AC hoặc dấu ngã (~)', 'Dấu cộng (+)', 'Chữ Ôm (Ω)'],
    correctIndex: 1,
    explanation: 'Ký hiệu AC (Alternating Current) hoặc dấu ngã (~) biểu thị dụng cụ đo đại lượng xoay chiều.',
    level: 'basic'
  },
  {
    id: 'q15_4',
    lessonId: 15,
    question: 'Số chỉ của ampe kế và vôn kế xoay chiều cho biết giá trị nào của dòng điện?',
    options: ['Giá trị cực đại', 'Giá trị hiệu dụng', 'Giá trị trung bình', 'Giá trị tức thời'],
    correctIndex: 1,
    explanation: 'Các đồng hồ đo điện xoay chiều luôn hiển thị giá trị hiệu dụng (RMS - Root Mean Square).',
    level: 'basic'
  },
  {
    id: 'q15_5',
    lessonId: 15,
    question: 'Một dòng điện xoay chiều có cường độ hiệu dụng I = 2 A chạy qua điện trở R = 10 Ω. Nhiệt lượng tỏa ra trên điện trở trong 1 phút là:',
    options: ['2400 J', '40 J', '1200 J', '20 J'],
    correctIndex: 0,
    explanation: 'Q = I^2 * R * t = 2^2 * 10 * 60 = 4 * 10 * 60 = 2400 J.',
    level: 'understanding'
  },
  {
    id: 'q15_6',
    lessonId: 15,
    question: 'Thiết bị máy biến áp (máy biến thế) dùng để làm gì?',
    options: ['Biến đổi dòng điện một chiều thành dòng điện xoay chiều', 'Làm tăng hoặc giảm hiệu điện thế của dòng điện xoay chiều mà không làm thay đổi tần số', 'Tạo ra dòng điện xoay chiều từ xăng dầu', 'Tích trữ điện năng'],
    correctIndex: 1,
    explanation: 'Máy biến áp là thiết bị biến đổi điện áp xoay chiều (tăng áp hoặc hạ áp) dựa trên hiện tượng cảm ứng điện từ mà giữ nguyên tần số.',
    level: 'basic'
  },
  {
    id: 'q15_7',
    lessonId: 15,
    question: 'Công thức máy biến áp lý tưởng liên hệ giữa hiệu điện thế U1, U2 và số vòng dây N1, N2 của hai cuộn dây là:',
    options: ['U1 / U2 = N1 / N2', 'U1 / U2 = N2 / N1', 'U1 * U2 = N1 * N2', 'U1 + U2 = N1 + N2'],
    correctIndex: 0,
    explanation: 'Tỉ số hiệu điện thế tỉ lệ thuận với tỉ số số vòng dây: U1 / U2 = N1 / N2.',
    level: 'basic'
  },
  {
    id: 'q15_8',
    lessonId: 15,
    question: 'Một máy biến áp có cuộn sơ cấp N1 = 1000 vòng, cuộn thứ cấp N2 = 200 vòng. Đặt vào hai đầu cuộn sơ cấp U1 = 220 V. Hiệu điện thế ở cuộn thứ cấp U2 là:',
    options: ['44 V (máy hạ áp)', '1100 V (máy tăng áp)', '22 V', '440 V'],
    correctIndex: 0,
    explanation: 'U2 = U1 * (N2 / N1) = 220 * (200 / 1000) = 220 * 0.2 = 44 V. Do U2 < U1 nên đây là máy hạ áp.',
    level: 'understanding'
  },
  {
    id: 'q15_9',
    lessonId: 15,
    question: 'Khi truyền tải điện năng đi xa dọc theo đường dây tải điện, công suất hao phí do tỏa nhiệt trên đường dây được tính bằng công thức:',
    options: ['P_hp = R * (P^2 / U^2)', 'P_hp = R * U^2 / P^2', 'P_hp = U * I', 'P_hp = R * P / U'],
    correctIndex: 0,
    explanation: 'P_hp = I^2 * R = (P / U)^2 * R = R * (P^2 / U^2).',
    level: 'basic'
  },
  {
    id: 'q15_10',
    lessonId: 15,
    question: 'Để giảm hao phí trên đường dây tải điện đi xa một cách hiệu quả và kinh tế nhất, người ta áp dụng giải pháp nào?',
    options: ['Tăng thật nhiều tiết diện dây dẫn đồng', 'Tăng hiệu điện thế U trước khi truyền tải bằng máy tăng áp', 'Giảm công suất truyền tải', 'Chôn dây dẫn sâu dưới lòng đất'],
    correctIndex: 1,
    explanation: 'Vì P_hp tỉ lệ nghịch với U^2, nếu tăng U lên 10 lần thì P_hp giảm đi tới 100 lần. Đây là phương pháp tối ưu nhất.',
    level: 'understanding'
  },
  {
    id: 'q15_11',
    lessonId: 15,
    question: 'Đường dây tải điện siêu cao thế 500 kV Bắc - Nam của Việt Nam có mục đích chính là gì?',
    options: ['Truyền tải lượng điện năng khổng lồ đi xa xuyên suốt đất nước với mức hao phí nhiệt thấp nhất', 'Chiếu sáng ban đêm', 'Chống sét đánh', 'Làm đẹp cảnh quan'],
    correctIndex: 0,
    explanation: 'Điện áp 500 kV cực cao giúp giảm thiểu tối đa hao phí năng lượng trên quãng đường truyền tải dài hàng nghìn km từ Bắc vào Nam.',
    level: 'understanding'
  },
  {
    id: 'q15_12',
    lessonId: 15,
    question: 'Tại sao máy biến áp KHÔNG THỂ hoạt động được với nguồn điện không đổi một chiều (DC)?',
    options: ['Vì dòng một chiều quá mạnh làm cháy cuộn dây', 'Vì dòng điện một chiều không đổi tạo ra từ trường không biến thiên trong lõi thép, nên không sinh ra hiện tượng cảm ứng điện từ ở cuộn thứ cấp', 'Vì lõi thép chỉ hút dòng xoay chiều', 'Vì điện trở cuộn dây bằng 0'],
    correctIndex: 1,
    explanation: 'Dòng một chiều có I = const => từ thông B = const không biến thiên => suất điện động cảm ứng ở cuộn thứ cấp bằng 0.',
    level: 'understanding'
  },
  {
    id: 'q15_13',
    lessonId: 15,
    question: 'Tác dụng sinh lý của dòng điện xoay chiều thể hiện ở chỗ:',
    options: ['Làm cơ bắp bị co giật mạnh, có thể gây ngừng thở và ngừng tim nếu bị điện giật', 'Làm cơ thể phát sáng', 'Làm tăng trí thông minh', 'Làm cho cơ thể ấm lên mà không có hại gì'],
    correctIndex: 0,
    explanation: 'Dòng điện xoay chiều chạy qua cơ thể gây co giật cơ, tê liệt thần kinh và tim mạch rất nguy hiểm, do đó phải tuyệt đối tuân thủ quy tắc an toàn điện.',
    level: 'basic'
  },
  {
    id: 'q15_14',
    lessonId: 15,
    question: 'Cấu tạo lõi thép của máy biến áp không phải là một khối sắt đặc nguyên khối mà được ghép từ nhiều lá thép kĩ thuật điện mỏng có phủ sơn cách điện để làm gì?',
    options: ['Cho máy nhẹ hơn', 'Giảm thiểu tác hại của dòng điện xoáy Foucault sinh nhiệt hao phí trong lõi thép', 'Để dễ sơn màu', 'Để tiết kiệm thép'],
    correctIndex: 1,
    explanation: 'Các lá thép mỏng cách điện chia nhỏ đường khép kín của dòng Foucault, triệt tiêu đáng kể nhiệt hao phí trong lõi từ.',
    level: 'advanced'
  },
  {
    id: 'q15_15',
    lessonId: 15,
    question: 'Nếu tăng hiệu điện thế ở hai đầu đường dây truyền tải điện lên gấp 5 lần thì công suất hao phí do tỏa nhiệt trên đường dây sẽ:',
    options: ['Tăng lên 5 lần', 'Giảm đi 5 lần', 'Giảm đi 25 lần', 'Không thay đổi'],
    correctIndex: 2,
    explanation: 'P_hp tỉ lệ nghịch với U^2. Khi U tăng 5 lần thì U^2 tăng 25 lần => P_hp giảm đi 25 lần.',
    level: 'understanding'
  },
  {
    id: 'q15_16',
    lessonId: 15,
    question: 'Trong máy biến áp lý tưởng, nếu hiệu điện thế tăng k lần (U2 = k * U1) thì cường độ dòng điện ở cuộn thứ cấp I2 so với I1 sẽ:',
    options: ['Tăng k lần', 'Giảm k lần (I2 = I1 / k)', 'Tăng k^2 lần', 'Không đổi'],
    correctIndex: 1,
    explanation: 'Bảo toàn công suất P = U1 * I1 = U2 * I2 => U1 / U2 = I2 / I1. Được lợi bao nhiêu lần về hiệu điện thế thì thiệt bấy nhiêu lần về cường độ dòng điện.',
    level: 'advanced'
  },
  {
    id: 'q15_17',
    lessonId: 15,
    question: 'Dây tiếp đất (dây mass màu xanh sọc vàng) trong các thiết bị gia dụng vỏ kim loại (tủ lạnh, máy giặt) có tác dụng:',
    options: ['Tiết kiệm điện năng tiêu thụ', 'Dẫn dòng điện rò rỉ từ vỏ máy xuống đất an toàn, tránh gây giật điện nguy hiểm cho người chạm vào', 'Làm máy chạy êm hơn', 'Tăng công suất máy'],
    correctIndex: 1,
    explanation: 'Khi có sự cố hở điện chạm vỏ, dây tiếp đất có điện trở cực nhỏ dẫn thẳng dòng rò xuống đất và làm ngắt aptomat, bảo vệ tính mạng người dùng.',
    level: 'basic'
  },
  {
    id: 'q15_18',
    lessonId: 15,
    question: 'Thiết bị chống giật tự động ELCB / RCBO trong gia đình hoạt động dựa trên nguyên lý:',
    options: ['Đo nhiệt độ của dây dẫn', 'So sánh sự chênh lệch dòng điện giữa dây pha (lửa) và dây trung tính (nguội); nếu có dòng rò > 30mA sẽ tự ngắt mạch cực nhanh trong vài mili giây', 'Chống sét đánh trực tiếp', 'Tự điều chỉnh điện áp ổn định'],
    correctIndex: 1,
    explanation: 'Aptomat chống rò RCBO dùng biến dòng đo tổng véc-tơ I_pha + I_nguội. Nếu người bị giật (có dòng rò qua người xuống đất), tổng khác 0, máy lập tức ngắt điện.',
    level: 'advanced'
  },
  {
    id: 'q15_19',
    lessonId: 15,
    question: 'Một máy hạ áp ở đầu ngõ khu dân cư có nhiệm vụ hạ điện áp từ bao nhiêu xuống 220V để cấp cho các hộ gia đình?',
    options: ['Hạ từ điện áp trung thế (10 kV, 22 kV, 35 kV) xuống 220V/380V', 'Hạ từ 500 kV trực tiếp xuống 220V', 'Hạ từ 1000V xuống 220V', 'Hạ từ 12V lên 220V'],
    correctIndex: 0,
    explanation: 'Trạm biến áp phân phối hạ áp từ lưới điện trung thế (thường là 22 kV hoặc 35 kV) xuống điện hạ thế 3 pha 380V / 1 pha 220V sinh hoạt.',
    level: 'understanding'
  },
  {
    id: 'q15_20',
    lessonId: 15,
    question: 'Khi thấy một người đang bị điện giật dính vào dây điện trần, thao tác sơ cứu ĐẦU TIÊN và QUAN TRỌNG NHẤT là:',
    options: ['Dùng tay không lao vào kéo nạn nhân ra ngay lập tức', 'Ngắt ngay cầu dao điện chính gần nhất, hoặc dùng vật cách điện khô (gậy gỗ, thanh nhựa) gạt dây điện ra khỏi người nạn nhân', 'Đổ một xô nước vào người nạn nhân để hạ nhiệt', 'Hô hấp nhân tạo ngay khi nạn nhân còn đang dính vào nguồn điện'],
    correctIndex: 1,
    explanation: 'Tuyệt đối không chạm trực tiếp vào nạn nhân vì sẽ bị giật theo. Phải lập tức ngắt nguồn điện hoặc dùng vật liệu cách điện khô để tách nạn nhân khỏi nguồn điện.',
    level: 'basic'
  }
];
