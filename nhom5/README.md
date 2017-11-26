# Ứng dụng chatbot hỗ trợ sinh viên UET

**Môn học**: Các vấn đề hiện đại trong Công nghệ thông tin

**Giảng viên**: Trương Anh Hoàng

**Nhóm 5**: Facebook Chatbot
- Nguyễn Đức Thuần
- Phan Thị Hà Trang
- Nguyễn Thị Lan
- Nguyễn Văn Nhật

## Tóm tắt

## Danh sách thuật ngữ và viết tắt

## Danh sách bảng

## Danh sách hình vẽ

## Lời mở đầu

## Chương 1: Các khái niệm cơ bản

Trước khi đi vào xây dựng ứng dụng, ta cần hiểu về cơ chế hoạt động của Facebook Chatbot và các khái niệm liên quan.

### 1.1. Webhook là gì

Webhook, hiểu đơn giản thì đây là một công cụ để truy vấn và lưu dữ liệu của một sự kiện xác định. Khi một trong những sự kiện đã đăng ký được kích hoạt, webhook sẽ gửi một HTTP POST đến một địa chỉ URL được đăng ký từ trước.

### 1.2. Rest API là gì

REST (**RE**presentational **S**tate **T**ransfer) là một dạng dạng chuyển đổi cấu trúc dữ liệu. Rest API là một ứng dụng chuyển đổi cấu trúc dữ liệu có phương thức để kết nối và ứng dụng khác. Facebook cung cấp REST API để lập trình viên có thể gửi tin nhắn phản hồi đến người dùng, cho dù người dùng viết ứng dụng trả lời bằng bất kỳ ngôn ngữ lập trình nào.

### 1.3. Cơ chế hoạt động của Facebook Chatbot

Đầu tiên, ta phải tạo và đăng kí địa chỉ ứng dụng webhook cho trang với Facebook. Khi có tin nhắn gửi đến trang, Facebook sẽ gửi một HTTP POST thông qua Webhook này để chúng ta tiếp tục xử lý.

Sau khi xử lý xong, nếu muốn trả lời lại người dùng, chúng ta phải gửi tin nhắn qua Rest API của Facebook. Nhờ đó, một tin nhắn từ trang của ta tới người dùng được Facebook gửi đi.

## Chương 2: Tổng quan về kiến trúc ứng dụng

Dựa vào cơ chế hoạt động của Facebook Chatbot, để xây dựng một ứng dụng Facebook Chatbot, ta cần xây dựng một ứng dụng có thể tương tác hai chiều với Facebook với hai chức năng như sau: 

1. Cung cấp địa chỉ webhook để ta đăng kí với Facebook

2. Tiếp nhận tin nhắn của người dùng và xử lý chúng, sau đó trả lại kết quả cho người dùng thông qua Rest API của Facebook

![Tổng quan kiến trúc ứng dụng](images/tong_quan_kien_truc_ung_dung.jpg)

### 2.1. Mô tả kiến trúc

Ứng dụng được chia làm 2 tầng chính với chức năng như sau:

- Máy chủ chatbot (Chatbot server) 

    - Kết nối 2 chiều với Facebook thông qua Webhook và Rest API
    
    - Tiếp nhận, xử lý và điều hướng các hành động, tin nhắn của người dùng
    
    - Lưu dữ liệu về người dùng và tin nhắn trên MongoDB
    
- Máy chủ tìm kiếm (Search server):

    - Cung cấp API tìm kiếm môn học, giảng viên,...

    - Thao tác với dữ liệu về môn học, giảng viên,... trên MySQL và Elastic Search
    
    - Quản lý quá trình đẩy dữ liệu từ MySQL sang Elastic Search (indexing)
    
### 2.2. Luồng xử lý 

Khi người dùng Facebook gửi tin nhắn tới trang, Facebook sẽ gọi tới webhook của máy chủ Chatbot. Máy chủ chatbot sẽ lưu thông tin người dùng và các tin nhắn vào MongoDB. Đối với các yêu cầu tìm kiếm của người dùng, máy chủ Chatbot gọi tới các API tìm kiếm tương ứng trên máy chủ tìm kiếm. Máy chủ tìm kiếm sẽ tìm chúng trên Elastic Search, sau đó trả kết quả về. Sau khi nhận được kết quả tìm kiếm, máy chủ Chatbot sẽ chọn một cách hiển thị thích hợp cho kết quả, rồi gửi kết quả tới người dùng thông qua Facebook Chatbot API.

Song song với đó, các trình thu thập thông tin sẽ thu thập dữ liệu từ các nguồn khác nhau như trang web của trường, của các khoa,... để bổ sung hoặc cập nhật dữ liệu trên MySQL. Máy chủ tìm kiếm sẽ đảm nhận vai trò đưa dữ liệu từ MySQL sang Elastic Search hàng ngày. 

## Chương 3: Máy chủ chatbot 

Máy chủ chatbot chúng ta sử dụng ở đây được xây dựng trên framework ExpressJS, cơ sở dữ liệu là MongoDB

### 3.1. Kết nối hai chiều với Facebook thông qua Webhook và Rest API

Phần này sẽ tập trung vào cách thức xây dựng máy chủ chatbot để tiếp nhận các yêu cầu của người dùng và xử lý hoặc điều hướng xử lý chúng. 

#### 3.1.1. Chuẩn bị

- Tạo một trang (fanpage) Facebook (hoặc sử dụng một trang mà bạn có quyền quản trị) để đăng ký webhook
 
- Tạo một project cung cấp webhook, tham khảo project mẫu được viết trên ExpressJS tại [đây](https://github.com/nguyenducthuanuet/facebookchatbot)

- Tải [Ngrok](https://ngrok.com/download) để làm Tunnel

Các hướng dẫn dưới đây được viết dựa trên project mẫu.
    
##### Bước 1: Cài đặt ứng dụng mẫu 
    
- Chạy lệnh dưới đây sau khi tải project về
    
        $ npm install
    
- Nhân bản tệp `.env.sample` và đặt tên là `.env`

- Truy cập [Facebook Developer](https://developers.facebook.com/), tạo một ứng dụng. Sau đó vào chọn ứng dụng Messenger

![Đăng ký ứng dụng](https://i.imgur.com/CxCpMQt.png  "Đăng ký ứng dụng")

![Tạo ứng dụng Messenger](https://i.imgur.com/6fHCKLf.png  "Tạo ứng dụng Messenger")

- Cài đặt MongoDB và tạo DB mới có tên giống với `DB_DATABASE=` trong tệp `.env` (ở project mẫu là `facebookchatbot`), trong DB tạo 2 collection `users` và `lecturers`
 
- Chạy lệnh sau để khởi động project

        $ npm start
        
- Truy cập `localhost:3000/seed` để tạo dữ liệu về giảng viên và hướng nghiên cứu (phần dữ liệu này về sau sẽ được chuyển sang MySQL ở máy chủ tìm kiếm để sử dụng Elastic Search)  

##### Bước 2: Kết nối ứng dụng webhook với Facebook.

- Khởi động Ngrok và mở cổng http 3000

        $ ngrok http 3000
        
Sau đó chú ý tới địa chỉ `Forwarding (https)` (ở hình vẽ dưới đây là https://58157de6.ngrok.io)
        
![Khởi chạy ngrok](https://i.imgur.com/7G0gUHP.png  "Khởi chạy ngrok")

- Trong ứng dụng Messenger vừa tạo ở bước 1, chọn trang mà bạn có quyền quản trị để lấy mã truy cập Trang. Dán mã truy cập trang vào dòng `PAGE_TOKEN=` trong tệp `.env`

![Thiết lập page token](https://i.imgur.com/etczblm.png "Thiết lập page token")

- Trên trang Facebook Developer, chọn phần `Thiết lập webhook`

![Thiết lập webhook](https://i.imgur.com/xSMD3cb.png  "Thiết lập webhook")
  
Tại hộp thoại hiện lên, điền URL gọi lại giống `Fowarding (https)` của Ngrok và thêm `/webhook` vào sau (ở project mẫu là https://58157de6.ngrok.io/webhook). 

Trường `Mã xác minh` nhập giống `VERIFY_TOKEN=` trong tệp `.env` (ở project mẫu là `verify_token`). `Trường gửi` chúng ta chọn `messages` và `messaging_postbacks`

![Webhook](https://i.imgur.com/cGF7ra6.png  "Webhook")

### 3.2. Xây dựng máy chủ chatbot nhận, xử lý tin nhắn và phản hồi tin nhắn phù hợp.

Việc xây dựng máy chủ chatbot như thế nào, phản hồi thông điệp ra sao phụ thuộc rất nhiều vào mục đích của chatbot để tạo nên các hàm cũng như gọi các API để lấy dữ liệu tương ứng. Tuy nhiên, do các ứng dụng chatbot đều xây dựng dựa trên các giao diện ứng dụng (API) mà Facebook cung cấp, chính vì vậy mà các sự kiện xử lý và luồng dữ liệu đều xoay quanh các API này.

Phần này sẽ trình bày cách tổ chức và xây dựng mã nguồn nhằm đáp ứng mụch đích của chatbot mà chúng tôi xây dựng, bao gồm hai tính năng chính là tra cứu và hỏi đáp thông tin.

#### 3.1. Xây dựng cơ sở dữ liệu

Dữ liệu trong bài toán nào có thể được chia làm hai phần: 

- Dữ liệu về người dùng và tin nhắn của họ: Dữ liệu này biến động thường xuyên trong quá trình sử dụng nên chúng ta chọn MongoDB để lưu trữ do việc nó có có dạng NoSQL, và việc kết nối giữa NodeJS với MongoDB rất đơn giản.

- Dữ liệu phục vụ người dùng cần tìm kiếm (thông tin giảng viên, hướng nghiên cứu, môn học, tài liệu,...): Dữ liệu này ít biến động, chỉ có bổ sung thêm khi thu thập được thêm thông tin, nhưng lại cần tìm kiếm nhiều. Do đó ta tách phần dữ liệu này ra cùng với việc xử lý tìm kiếm trên dữ liệu này thành 1 tầng khác, sẽ được trình bày ở phần sau.

Như vậy ở MongoDB ta cần xây dựng 1 collection `users` có cấu trúc như sau

![Collection users](images/collection_user.png)

#### 3.2. Xây dựng các logic xử lý

Facebook khi phản hồi các tin nhắn của người dùng đến ứng dụng webhook (máy chủ chatbot) của chúng ta sẽ phản hồi theo 4 kiểu dữ liệu khác nhau tương ứng với 4 kiểu dữ liệu mà người dùng có thể gửi đến bot, đó là: message, postback, quick reply và tập tin đa phương tiện. Vì thế chúng ta sẽ xây dựng controller theo 4 kiểu dữ liệu này để phản hồi tin nhắn phù hợp.
![Cấu trúc mã nguồn](https://i.imgur.com/IreNobG.png  "Cấu trúc mã nguồn")
Ở đây chúng tôi sử dụng một framework đóng gói các hàm nhận và gửi tin nhắn mà Facebook cung cấp.
- Có 4 hàm 'lắng nghe' các dữ liệu mà Facebook gửi đến, Khi người dùng nhắn tin, tùy vào loại tin nhắn người dùng gửi đến, hàm xử lý tương ứng sẽ được gọi.
- Trong tin nhắn đầu tiên gửi đến bot, một 'đối tượng' mới sẽ được thêm vào collection users, từ đó các tin nhắn mới mà người dùng gửi đến sẽ được thêm vào trong mảng tin nhắn lưu trữ trong đối tượng này.
- .on('message') là sự kiện lắng nghe các tin nhắn văn bản thông thường của người dùng gửi đến
- .on('postback') là sự kiện lắng nghe các sự kiện tương tác
- .on('quickreply') là sự kiện lắng nghe các tương tác nhanh.
- .on('attachment') là sự kiện lắng nghe các tập tin đa phương tiện được gửi đến.
###3.3. Làm sao để xây dựng được luồng xử lý phù hợp với các tin nhắn của người dùng.
Khi ứng dụng của bạn yêu cầu nhập tên giảng viên khi tra cứu giảng viên, hay nhập câu hỏi khi muốn tra cứu hỏi đáp. Vậy làm sao để phân biệt được tin nhắn nào là để tra cứu giảng viên hay hỏi đáp khi mà các tin nhắn gửi đến chỉ được gửi hoàn toàn riêng rẽ và độc lập ? Chính vì vậy, chúng tôi đã sử dụng collection users để xử lý vấn đề này. Khi một tin nhắn văn bản gửi đến, chúng tôi sẽ dựa vào postback hay quickreply cuối cùng được gửi đến để xác định yêu cầu tra cứu. Ví dụ:
![Tạo luồng sự kiện](https://i.imgur.com/McVKxRv.png  "Tạo luồng sự kiện")
Khi một tin nhắn văn bản được gửi đến, chúng tôi sẽ truy vấn action cuối cùng, sau đó mới đưa ra phương thức xử lý của action đó.

## Chương 4: Tầng máy chủ tìm kiếm

## Kết luận

### Kết quả đạt được

### Định hướng tương lai

### Tài liệu tham khảo

### Phụ lục