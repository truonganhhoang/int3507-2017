#Xây dựng ứng dụng chatbot
Phần này tập trung trình bày vào cách thức xây dựng một ứng dụng chatbot có thể nhận tin nhắn từ người dùng và phản hồi lại thông điệp phù hợp. Trước tiên, tôi xin trình bày tổng quan về các khái niệm cơ bản và cơ chế hoạt động của Facebook chatbot.


##1. Các khái niệm cơ bản và cơ chế hoạt động của Facebook chatbot
###1.1. Tổng quan về webhook.
Webhook, hiểu đơn giản là là thì đây là một công cụ để truy vấn và lưu dữ liệu của một Event xác định. Khi một trong những sự kiện đã đăng ký được kích hoạt, webhook sẽ gửi một HTTP POST đến một địa chỉ URL được đăng ký từ trước.
###1.2. Tổng quan về Rest API.
REST (**RE**presentational **S**tate **T**ransfer) là một dạng dạng chuyển đổi cấu trúc dữ liệu. Rest API là một ứng dụng chuyển đổi cấu trúc dữ liệu có phương thức để kết nối và ứng dụng khác. Facebook cung cấp REST API để lập trình viên có thể gửi tin nhắn phản hồi đến người dùng, cho dù người dùng viết ứng dụng trả lời bằng bất kỳ ngôn ngữ lập trình nào.
###1.3. Cơ chế hoạt động cơ bản của Facebook chatbot
Đầu tiên, ta phải cung cấp địa chỉ webhook cho Facebook (là địa chỉ của chatbot server). Khi có tin nhắn gửi đến bot, Facebook sẽ gửi một HTTP POST đến chatbot server thông qua webhook để chúng ta tiếp tục xử lý.
Sau khi xử lý xong, nếu muốn trả lời lại người dùng, chúng ta phải gửi lại tin nhắn cho Rest API của Facebook. Sau khi nhận được tin nhắn, bot sẽ phản hồi lại cho người dùng.
Như vậy: Để viết ứng dụng chatbot Facebook, ta cần thực hiện 2 công việc sau:
1. Viết ứng dụng webhook (chatbot server) và gửi đăng ký địa chỉ webhook với Facebook
2. Nhận tin nhắn từ người dùng thông qua webhook, xử lý nội dung và phản hồi lại cho người dùng.


##2. Xây dựng ứng dụng webhook và đăng ký địa chỉ webhook với Facebook
Phần này sẽ tập trung vào cách thức xây dựng ứng dụng webhook cơ bản (chatbot server) để kết nối với Facebook Messenger. Ứng dụng webhook lúc này ban đầu chỉ xây dựng kết nối cơ bản, chưa xử lý và tìm thông điệp phản hồi phù hợp cho người dùng (nội dung này sẽ được trình bày trong phần sau)
Ngôn ngữ được sử dụng để xây dựng ứng dụng webhook được trình bày trong bài báo cáo này là `Nodejs`. Chúng ta có thể xây dựng ứng dụng webhook bằng bất kỳ ngôn ngữ lập trình nào khác.
####Các chuẩn bị cần thiết để thiết lập kết nối.
- Người dùng sẽ phải tạo cho mình fanpage, nếu đã sở hữu một fanpage thì không cần thiết phải lập mới.
- Để kết nối bot với một fanpage của người dùng, Facebook yêu cầu ứng dụng webhook của người dùng là giao thức HTTPS. Tuy nhiên để có được một server thật với giao thức HTTPS thì không phải cũng có sẵn, chính vì vậy chúng tôi sử dụng một reserve proxy có tên là Ngrok đóng vai trò trung gian có giao thức HTTPS để kết nối giữa Facebook và ứng dụng webhook được xây dựng trên server local của chúng ta.
- Mục tiêu của chúng ta là xây dựng được một ứng dụng webhook có tối thiểu 2 giao thức cơ bản, một là phương thức GET để Facebook xác thực ứng dụng, hai là phương thức POST để nhận tin nhắn của người dùng do Facebook gửi đến.
Ở đây, chúng tôi đã xây dựng sẵn một ứng dụng webhook cơ bản, chúng ta có thể tạo bản sao của ứng dụng này và thiết lập các thông số cần thiết là có thể kết nối ứng dụng webhook với Facebook.
- Link download: [Chatbot server starter kit](https://github.com/nguyenducthuanuet/facebookchatbot) 
- Sau khi clone project, vào thư mục chứa project, chạy câu lệnh `npm install` trên command line để tiến hành cài đặt các gói cần thiết.
- Sau khi hoàn tất công việc chuẩn bị để thiết lập kết nối, sau đây tôi sẽ đi vào chi tiết các bước cài đặt thiết lập để nối Facebook với ứng dụng webook.
####Bước 1: Tạo ứng dụng Messenger trên trang dành cho nhà phát triển của Facebook
1. Truy cập vào Facebook Developer [Facebook Developer](https://developers.facebook.com/) . Sau đó kích vào nút bắt đầu ở phía trên bên phải để tạo cho mình một ứng dụng.
![Đăng ký ứng dụng](https://i.imgur.com/CxCpMQt.png  "Đăng ký ứng dụng")
2. Tạo ứng dụng Messenger
![Tạo ứng dụng Messenger](https://i.imgur.com/6fHCKLf.png  "Tạo ứng dụng Messenger")
####Bước 2: Kết nối ứng dụng webhook với Facebook.
1. Vào project và khởi động server local bằng cách chạy câu lệnh `npm start` trên command line. Bây giờ cần đưa ứng dụng webhook của chúng ta lên Internet với giao thức HTTPS, và Ngrok sẽ giúp chúng ta làm điều này.
Download ngrok tại [đây](https://ngrok.com/download). Sau khi đã tải ngrok về, khởi chạy với câu lệnh: `./ngrok http 3000` (3000 là port mà ứng ứng dụng webhook chạy trên server local). Ví dụ ta được:
![Khởi chạy ngrok](https://i.imgur.com/7G0gUHP.png  "Khởi chạy ngrok")
2. Tạo token cho fanpage.
Trên trang phát triển, kéo xuống dưới chọn phần 'Tạo mã' và chọn fanpage cần tạo mã. Nó sẽ sinh cho mình 1 mã, sao chép đoạn mã này.
Sau đó mở quay trở lại, dán đoạn mã này vào PAGE_TOKEN trong file .env (nếu chưa có file .env, vui lòng tạo vào sao chép nội dung từ file .env.sample)
![Thiết lập page token](https://i.imgur.com/etczblm.png "Thiết lập page token")
 Trên trang phát triển, kéo xuống dưới chọn phần 'Thiết lập webhook'
 ![Thiết lập webhook](https://i.imgur.com/xSMD3cb.png  "Thiết lập webhook") 
 Có một hộp thoại hiện lên, cứ để đấy. Yêu cầu nhập 'URL gọi lại', sao chép trường 'Fowarding' (https) sai khi khởi chạy ngrok và dán vào trường này ( ví dụ ở đây forwading https của tôi là `https://58157de6.ngrok.io`, trường 'Mã xác minh' nhập `verify_token`, 'Trường gửi' chúng ta chọn `messages` và `messaging_postbacks`, ta được
 ![Webhook](https://i.imgur.com/cGF7ra6.png  "Webhook")
 Đến đây, việc thiết lập đã hoàn thành. Nhắn tin đến fanpage đăng ký để kiểm tra kết quả.
## 3. Xây dựng chatbot server nhận, xử lý tin nhắn và phản hồi tin nhắn phù hợp.
- Việc xây dựng chatbot server như thế nào, phản hồi thông điệp ra sao phụ thuộc rất nhiều vào mục đích của chatbot để tạo nên các hàm cũng như gọi các API để lấy dữ liệu tương ứng.
- Tuy nhiên, do các ứng dụng chatbot đều xây dựng dựa trên API mà facebook cung cấp, chính vì vậy mà các sự kiện xử lý và luồng dữ liệu đều xoay quanh các API này.
- Phần này sẽ trình bày cách tổ chức và xây dựng mã nguồn nhằm đáp ứng mụch đích của chatbot mà chúng tôi xây dựng, bao gồm 2 tính năng chính là tra cứu và hỏi đáp thông tin.
### 3.1. Xây dựng cơ sở dữ liệu
Chúng tôi sử dụng mongoDB làm hệ quản trị cơ sở dữ liệu lưu trữ, bao gồm 2 collections chính, đó là: users và lecturers. 
- Collection users lưu trữ thông tin của người dùng cùng với đó là lịch sử tin nhắn của người dùng. Ngoài việc lưu trữ thông tin người dùng và lịch sử tin nhắn thông thường thì collection này có tác dụng phân tích và xử lý yêu cầu khi người dùng nhắn tin đến bot (chi tiết sẽ được trình bày ở phần sau).
- Collection lecturers chứa các thông tin của giảng viên, các phòng khoa trong trường.
Ngoài ra dữ liệu tra cứu còn được lấy từ API [Sguet](http://sguet.com), website này có cơ sở dữ liệu sử dụng search engine Elastic Search hỗ trợ cho việc truy vấn. (Chi tiết về API này sẽ được trình bày cụ thể ở phần sau).
###3.2. Xây dựng các controllers xử lý
Facebook khi phản hồi các tin nhắn của người dùng đến ứng dụng webhook (chatbot server) của chúng ta sẽ phản hồi theo 4 kiểu dữ liệu khác nhau tương ứng với 4 kiểu dữ liệu mà người dùng có thể gửi đến bot, đó là: message, postback, quick reply và tập tin đa phương tiện. Vì thế chúng ta sẽ xây dựng controller theo 4 kiểu dữ liệu này để phản hồi tin nhắn phù hợp.
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