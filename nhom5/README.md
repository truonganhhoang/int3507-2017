# Các vấn đề hiện đại trong Công nghệ thông tin
Giảng viên: Trương Anh Hoàng

## Nhóm 5: Facebook Chatbot
- Nguyễn Đức Thuần
- Phan Thị Hà Trang
- Nguyễn Thị Lan
- Nguyễn Văn Nhật

## Báo cáo tiến độ: Tuần 4

### I. Vấn đề đang tìm hiểu, bài toán đặt ra và tài liệu đang tìm hiểu
Đề tài mà nhóm 5 đang thực hiện là Facebook Chatbot, với đề tài này nhóm đang thực hiện bài toán như sau:

<center><h4>“Ứng dụng chatbot tương tác hỗ trợ sinh viên UET”</h4></center>

<b>Mục đích của ứng dụng:</b> 
-	Ứng dụng chatbot được thực hiện nhằm mục đích hỗ trợ sinh viên UET nhằm mục đích tra cứu thông tin liên quan đến trường, lớp, giảng viên hay các môn học, tra cứu điểm thi hay hỏi đáp, hỗ trợ giải quyết vấn đề đang gặp phải thông qua tương tác với hộp thoại trả lời tự động trên mạng xã hội Facebook. 
-	Bên cạnh đó, sinh viên có thể tải về các biểu mẫu, đề thi các năm mà không cần mất công tìm kiếm trên website của nhà trường hay trên các trang tài liệu.

<b>Bài toán đặt ra:</b> 
1.	Làm sao để xây dựng được một hệ thống chatbot có khả năng tương tác với người dùng một cách dễ dàng nhất, người sử dụng không mất quá nhiều thời gian tương tác với hệ thống mà vẫn đạt được mục đích. Do đó, nhóm cần khai thác tối đa và hiệu quả các tương tác với người dùng thông qua các API mà Facebook cung cấp, đồng thời xây dựng được các luồng thao tác hợp lý và dễ hiểu, cải thiện các xử lý về ngôn ngữ theo thời gian. 
2.	Vấn đề thứ hai là làm sao xây dựng nhiều chức năng nhất, hỗ trợ tối đa sinh viên UET trong việc tra cứu hay hỏi đáp liên quan. Điều này đòi hỏi phải có một cơ sở dữ liệu lớn, thu thập từ nhiều nguồn khác nhau đồng thời phải có những kết nối đến các API khác để truy vấn dữ liệu.
                                                                                                                                                                      
<b>Technology:</b>
- [Facebook chatbot API](https://developers.facebook.com/docs/messenger-platform/)
- [NodeJS](https://nodejs.org/) with [Express Framework](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Ngrok](https://ngrok.com)


### II. Các kết quả đạt được trong tuần

#### 1. Xây dựng chức năng tra cứu thông tin giảng viên và hướng nghiên cứu
- Xây dựng thông tin liên hệ và nơi làm việc của trên 100 GV và hướng nghiên cứu của trên 40 GV.
- Xây dựng xong chức năng tra cứu GV và hướng nghiên cứu dựa trên dữ liệu đã xây dựng được.

#### 2. Xây dựng chức năng cho người dùng đóng góp ý kiến / phản hồi
Để tăng tính cộng đồng của dự án, nhóm đã thêm chức năng cho phép người dùng đóng góp ý kiến / phản hồi. Những đóng góp này sẽ được các thành viên đội phát triển duyệt và đưa vào CSDL hoặc chỉnh sửa cho phù hợp.

### III. Các mục tiêu dự định thực hiện trong tuần tới
1. Tiếp tục thu thập thêm thông tin về GV và hướng nghiên cứu
2. Xây dựng chức năng hỏi đáp và liên hệ trực tiếp quản trị
3. Xây dựng chức năng tra cứu văn bản, biểu mẫu