#### BÁO CÁO BÀI TẬP LỚN
##### MÔN: Các vấn đề hiện đại trong công nghệ thông tin
##### Giảng viên: Trương Anh Hoàng
- Nhóm 11
- Thành viên:
1. Trần Hữu Minh
2. Nguyễn Đức Tài
3. Nguyễn Thị Tâm
-------------------------------------------------------------

## Đề tài: ỨNG DỤNG TẠO MÃ VÀ NHẬN DIỆN MÃ TRÊN THIẾT BỊ DI ĐỘNG

---
#### I. GIỚI THIỆU CHUNG
#### 1. Tổng quan về OpenCV

- OpenCV (OpenSource Computer Vision) là một thư viện mã nguồn mở. OpenCV được phát hành theo giấy phép BSD, do đó nó hoàn toàn miễn phí cho cả học thuật và thương mại.
- Thư viện OpenCV cung cấp cho người dùng các cấu trúc dữ liệu, đối tượng và hàm bằng cách khai báo nguyên mẫu (prototype) của chúng trong các tập tin thư viện C/C++ và định nghĩa chi tiết trong các tập tin mã nguồn. Với mức độ sử dụng OpenCV, ta chỉ cần giải nén các tập tin đã được biên dịch sẵn rồi thực hiện các thao tác cài đặt đường dẫn cho thích hợp để hệ điều hành tìm đến đúng vị trí của các tập tin thư viện. Ở mức độ cao hơn, nếu muốn hiệu chỉnh sửa đổi thuật toán hay sử dụng phần mở rộng của OpenCV ta cần phải biên dịch mã nguồn trực tiếp trên máy trước khi cài đặt.
- Được viết bằng tối ưu hóa C/C++, thư viện có thể tận dụng lợi thế của xử lý đa lõi. Được sử dụng trên khắp thế giới, OpenCV có cộng đồng hơn 47 nghìn người dùng và số lượng download vượt quá 6 triệu lần. Phạm vi sử dụng từ nghệ thuật tương tác, cho đến lĩnh vực khai thác mỏ, bản đồ trên web hoặc công nghệ robot.
- Gói chương trình OpenCV kèm theo giao diện đa nền tảng. Ngoài Windows, OpenCV còn hỗ trợ một số ngôn ngữ lập trình khác nhau như C++, C, Python và Java, nếu bạn đang thực hiện các dự án Java thì đây chính là bộ công cụ hỗ trợ vô cùng cần thiết.. Trọng tâm chính của phần mềm này là ứng dụng thời gian thực, được phát triển nhờ vào tính năng xử lý nhiều lõi của hệ thống.
- OpenCV bao gồm một số module khác nhau, mỗi module có các chức năng riêng biệt và bổ sung cho nhau:
  1. Core cung cấp cho người dùng cấu trúc dữ liệu cơ sở và các tính năng, trong khi thành phần "Imgproc" có tính năng xử lý hình ảnh, bao gồm lọc ảnh (cả tuyến tính và phi tuyến tính), cũng như các tuỳ chọn chỉnh sửa ảnh khác (thay đổi kích thước, biến dạng...) và chuyển đổi không gian màu.
  2. Video OpenCV cung cấp cho bạn một số thuật toán mạnh nhằm ước tính chuyển động, theo dõi đối tượng và thực hiện phương pháp tách cảnh nền.
  3. Calib3d bao gồm nhiều thuật toán hình học multiple-view, cung cấp một số tính năng chẳng hạn như hiệu chỉnh camera hoặc xây dựng lại đồ hoạ 3D.
  4. Features2d bao gồm bộ mô tả và bộ tương hợp mô tả cũng như công cụ phát hiện tính năng.
  5. Objdetect người dùng có thể tìm các đối tượng khác nhau từ các lớp xác định trước (ví dụ xe hơi, khuôn mặt, ánh mắt...)
  6. Highgui được thiết kế để quay video, mã hoá giải mã hình ảnh và video.

- Đọc thêm về  [OpenCV](https://opencv.org/)

---
#### 2. Tổng quan về đề tài và giới thiệu về ứng dụng tạo mã tự động

- Thị giác máy tính (Computer Vision) là một lĩnh vực bao gồm các phương pháp thu nhận, xử lý ảnh kỹ thuật số, phân tích và nhận dạng các hình ảnh và, nói chung là dữ liệu đa chiều từ thế giới thực để cho ra các thông tin số hoặc biểu tượng, ví dụ trong các dạng quyết định.
- Việc phát triển lĩnh vực này có bối cảnh từ việc sao chép các khả năng thị giác con người bởi sự nhận diện và hiểu biết một hình ảnh mang tính điện tử. Sự nhận diện hình ảnh có thể xem là việc giải quyết vấn đề của các biểu tượng thông tin từ dữ liệu hình ảnh qua cách dùng các mô hình được xây dựng với sự giúp đỡ của các ngành lý thuyết học, thống kê, vật lý và hình học.
- Thị giác máy tính cũng được mô tả là sự tổng thể của một dải rộng các quá trình tự động và tích hợp và các thể hiện cho các nhận thức thị giác. Nếu như bằng cặp mắt của mình, con người có thể thu nhận hình ảnh từ môi trường xung quanh, biết được màu sắc của vật, hình dáng của vật và vô số thông tin khác để có những phản ứng, hành động trong môi trường sống thì thị giác máy tính cũng vậy, chỉ có điều cặp mắt của máy tính giờ đây được thay bằng những thiết bị điện tử khác như camera, sensor hồng ngoại chẳng hạn... Bằng hệ thống cảm biến này, máy sẽ thu thập thế giới đa chiều và lưu trữ những gì thu tập được dưới dạng ảnh số. Những ảnh này sau đó được xử lý, phân tích và trích chọn ra những thông tin cần thiết giúp máy hiểu được nó đang nhìn thấy gì, cần phải làm gì...
- Ngày nay, định vị giữ vai trò rất quan trọng trong các ứng dụng về thị giác máy tính như: điều hướng robot, thực tế tăng cường (AR), và nhiều ứng dụng khác nữa. Quá trình này dựa trên việc tìm kiếm sự tương ứng giữa các điểm ảnh trong môi trường thực tế và ánh xạ thành ảnh 2D trong môi trường ảo để nhận diện chúng.
- Một trong những cách tiếp cận phổ biến nhất là việc sử dụng những điểm đánh dấu hình vuông nhị phân để ước lượng hình dáng của ảnh đối tượng. Đồng thời, việc mã hoá nhị phân bên trong làm cho chúng trở nên đặc biệt mạnh mẽ, cho phép áp dụng các kỹ thuật chỉnh sửa và phát hiện lỗi. 
- Ứng dụng tạo mã tự động sử dụng một trong các module của opencv contrib là module Aruco. Module Aruco được xây dựng dựa trên thư viện Aruco, một thư viện khá phổ biến cho việc phát hiện các loại mã và các công cụ sử dụng chúng để định vị và hiệu chuẩn máy ảnh, nó được phát triển bởi Rafael Muñoz và Sergio Garrido. 
- Ứng dụng này cho phép tạo ra các mã và nhận diện chúng một cách tự động .
- Quy mô trong môn học: ứng dụng cho phép tự động sinh ra các mã đáp án trắc nghiệm tương ứng với các đáp án A, B, C, D. Mối người sẽ có 4 mã đáp án, với mỗi câu hỏi được đưa ra, mỗi người sẽ chọn đáp án của câu hỏi mà mình cho là đúng bằng cách đưa ra hình ảnh mã của đáp án đó. Máy sẽ quét tự động, phát hiện và nhận dạng mã đó tương ứng với đáp án nào.
---
#### 3.Công nghệ sử dụng

##### a. WebSocket

- WebSocket là công nghệ hỗ trợ giao tiếp hai chiều giữa client và server bằng cách sử dụng một TCP socket (cổng 80 và 443) để tạo một kết nối hiệu quả và ít tốn kém. Theo phân tích từ [](http://websocket.org/quantum.html), WebSockets có thể giảm kích thước của HTTP header lên đến 500 – 1000 lần, giảm độ trễ của network lên đến 3 lần. Do đó, hỗ trợ tốt hơn đối với các ứng dụng web apps real – time.
- WebSockets mới xuất hiện trong HTML5, là một kỹ thuật [Reverse Ajax](http://directwebremoting.org/dwr/documentation/reverse-ajax/index.html). Kết nối được mở thông qua một HTTP request (yêu cầu HTTP), được gọi là liên kết WebSockets với những header đặc biệt. Kết nối được duy trì để bạn có thể viết và nhận dữ liệu bằng JavaScript như khi bạn đang sử dụng một TCP socket đơn thuần.
- Hiện tại Websocket đã được hỗ trợ trên 74% các trình duyệt. Bạn có thể xem số liệu mới nhất tại đây: 
[Trình duyệt](https://caniuse.com/#search=websocket)
- Giao thức bắt tay của WebSocket:
[img00](https://poesiabinaria.net/wp-content/uploads/2016/10/WebSockets-Diagram.png)



**Ưu điểm**
	- WebSockets cung cấp khả năng giao tiếp hai chiều mạnh mẽ, có độ trễ thấp và dễ xử lý lỗi.
	- API cũng rất dễ sử dụng trực tiếp mà không cần bất kỳ các tầng bổ sung nào, so với Comet, thường đòi hỏi một thư viện tốt để xử lý kết nối lại, thời gian chờ timeout, các Ajax request (yêu cầu Ajax), các tin báo nhận và các dạng truyền tải tùy chọn khác nhau (Ajax long-polling và jsonp polling).
	- Không cần phải có nhiều kết nối như phương pháp Comet long-polling và cũng không có những nhược điểm như Comet streaming.

**Nhược điểm**
	- Chưa hỗ trợ được tất cả các trình duyệt.
	- Không có phạm vi yêu cầu nào. Do WebSockets là một TCP socket chứ không phải là HTTP request, nên không dễ sử dụng các dịch vụ có phạm vi yêu cầu.

- Tìm hiểu thêm về [Websocket](http://www.developerfusion.com/article/143158/an-introduction-to-websockets/)

##### b. Node.js

- Node.js là một nền tảng dựa vào Chrome Javascript runtime để xây dựng các ứng dụng nhanh, có độ lớn. Node.js sử dụng các phần phát sinh các sự kiện (event-driven), mô hình non-blocking I/O để tạo ra các ứng dụng nhẹ và hiệu quả cho các ứng dụng về dữ liệu thời gian thực chạy trên các thiết bị phân tán.
- NodeJs là một mã nguồn mở, đa nền tảng cho phát triển các ứng dụng phía Server và các ứng dụng liên quan đến mạng. Ứng dụng Node.js được viết bằng Javascript và có thể chạy trong môi trường Node.js trên hệ điều hành Window, Linux...
- Node.js cũng cung cấp cho chúng ta các module Javascript đa dạng, có thể đơn giản hóa sự phát triển của các ứng dụng web sử dụng Node.js với các phần mở rộng.
- Một số đặc điểm nổi bật của Node.js:
	1. Không đồng bộ và Phát sinh sự kiện (Event Driven): Tất các các APIs của thư viện Node.js đều không đồng bộ, nghĩa là không blocking (khóa). Nó rất cần thiết vì Node.js không bao giờ đợi một API trả về dự liệu. Server chuyển sang một API sau khi gọi nó và có cơ chế thông báo về Sự kiện của Node.js giúp Server nhận đựa phản hồi từ các API gọi trước đó.
	2. Chạy rất nhanh: Dựa trên V8 Javascript Engine của Google Chrome, thư viện Node.js rất nhanh trong các quá trình thực hiện code.
	3. Các tiến trình đơn giản nhưng hiệu năng cao: Node.js sử dụng một mô hình luồng đơn (single thread) với các sự kiện lặp. Các cơ chế sự kiện giúp Server trả lại các phản hồi với một cách không khóa và tạo cho Server hiệu quả cao ngược lại với các cách truyền thống tạo ra một số lượng luồng hữu hạn để quản lý request. Nodejs sử dụng các chương trình đơn luồng và các chương trình này cung cấp các dịch vụ cho số lượng request nhiều hơn so với các Server truyền thống như Apache HTTP Server.
	4. Không đệm: Ứng dụng Node.js không lưu trữ các dữ liệu buffer.
 
##### c. Socket.io

- Socket.IO là một thư viện javascript có mục đích tạo ra các ứng dụng realtime trên trình duyệt cũng như thiết bị di động. Việc sử dụng thư viện này cũng rất đơn giản và giống nhau ở cả server lẫn client. 
- Thư viện này gồm 2 phần:
	1. Phía client: gồm bộ thư viện viết cho web (JavaScript), IOS, Android
	2. Phía server: viết bằng JavaScript và dùng cho các máy chủ Node.js
- Thư viện Socket.IO trên Android cung cấp những hàm cơ bản sau:
	1. connect(): kết nối với server socket
	2. on(event_name, listener): đăng kí lắng nghe sự kiện từ server trả về
	3. emit(event_name, data): gửi một sự kiện lên server
	4. off(event_name): ngừng lắng nghe một sự kiện nào đó
- Tìm hiểu thêm tại trang [Manual](https://socket.io/#how-to-use)
##### d. JNI

- Cấu trúc của một Class JNI:
[img000](http://vietgamedev.net/file/attachment/2013/08/276f80e2cb29445c46c18d07132d91da_view.png)



- JNI (Java Native Interface) là một framework cho phép gọi các hàm Java trong JVM từ các ngôn ngữ cấp thấp như C, C++ hay assembly. Nói nôm na dễ hiểu là mình muốn gọi Java từ C++ thì mình sẽ gọi thông qua JNI.
- Ta thường dùng JNI khi muốn gọi các phương thức đặc trưng của Android như: gửi tin nhắn, thực hiện cuộc gọi... JniHelper class là lớp singleton cocos2d-x cung cấp để hỗ trợ việc sử dụng JNI một cách dễ dàng hơn. Ta sẽ dùng lớp này để thực hiện các lệnh gọi Java từ C++.
**Vai trò của JNI**
	- Khi một môi trường Java được cài trên một hệ điều hành, sẽ có trường hợp người lập trình muốn sử dụng các thư viện của riêng hệ điều hành đó. Lý do là vì dùng thư viện của riêng hệ điều hành sẽ nhanh hơn, hiệu suất cao hơn.
	- Ngoài ra đối với hệ điều hành Windows thì số lượng các thư viện do cộng đồng viết ra rất nhiều, và có một số thư viện cực kỳ đồ sộ, việc viết lại các thư viện này bằng ngôn ngữ Java sẽ mất nhiều thời gian hơn so với việc tìm cách sử dụng chúng từ Java.
	- JNI là một tính năng cực kỳ mạnh mẽ cho phép chúng ta sử dụng code từ các ngôn ngữ khác, JNI có tính chất 2 chiều, tức là code từ các ngôn ngữ khác cũng có thể gọi lại code từ Java nữa.
**Nhược điểm**
	- Chúng ta đã biết rằng Java là một ngôn ngữ viêt một lần-chạy mọi nơi, tức là chỉ cần viết code Java, sau đó biên dịch rồi đem lên một hệ điều hành có cài JVM là có thể chạy bình thường. Tuy nhiên khi chúng ta sử dụng JNI để “hợp tác” với code của hệ điều hành, thì lại không thể đem chương trình đó đi chạy trên máy có hệ điều hành khác được, do đó mất đi tính viết một lần-chạy mọi nơi.
	- Một điều nữa là Java có tính năng type-safe, tức là bạn khai báo kiểu dữ liệu gì thì chỉ được thao tác với kiểu dữ liệu đó, nhưng các ngôn ngữ hệ điều hành thì có thể không có tính năng type-safe, do đó khi viết code JNI bạn sẽ phải chú ý cẩn thận, chỉ cần khác kiểu dữ liệu cũng có thể crash chương trình.
- Tìm hiểu thêm tại [JNI](https://www3.ntu.edu.sg/home/ehchua/programming/java/JavaNativeInterface.html)

---
#### II. THUẬT TOÁN TẠO MÃ
#### 1. Mã và từ điển

##### a. Mã

- Mã ArUco là một điểm đánh dấu tổng hợp hình vuông bao gồm một đường viền rộng màu đen và ma trận nhị phân bên trong màu trắng nhằm xác định số nhận dạng của nó (id). Các đường biên màu đen tạo điều kiện cho việc phát hiện một cách nhanh chóng hình ảnh của nó và mã hóa nhị phân cho phép định vị và áp dụng các kỹ thuật phát hiện và sửa lỗi.
- Kích thước điểm đánh dấu xác định kích thước của ma trận nội bộ. Ví dụ: một mã có khích thước là 4x4 được xây dựng bởi ma trận 16 bits.
- Mã này có thể quay theo nhiều chiều khác nhau trong môi trường, vì vậy, để xác định đúng dữ liệu mà nó truyền tải ta cần phải xác định được độ quay ban đầu của nó, do đó mỗi góc được xác định rõ ràng. Mã hóa nhị phân sẽ giải quyết vấn đề này.

- Hình ảnh về mã:

![img01](https://docs.opencv.org/3.1.0/markers.jpg)



*Một mã ArUco*

##### b. Từ điển

- Từ điển của các điểm đánh dấu là một tập các điểm đánh dấu được xem xét trong một ứng dụng cụ thể. Nó chỉ đơn giản là danh sách các mã hoá nhị phân cho mỗi dấu hiệu của nó.
- Hai thuộc tính chính của một từ điển là kích thước từ điển và kích thước điểm đánh dấu:
  1. Kích cỡ từ điển là số lượng dấu hiệu được tạo ra từ từ điển.
  2. Kích thước điểm đánh dấu là kích thước của các dấu hiệu (số bits)

- Module Aruco chứa một số từ điển được định nghĩa trước bao gồm một loạt các kích cỡ từ điển khác nhau và kích thước điểm đánh dấu.
- Một bộ phận có thể cho rằng id điểm đánh dấu là số thu được từ quá trình chuyển đổi mã nhị phân thành số thập phân cơ sở. Tuy nhiên, điều này là không thể khi mà kích thước điểm đánh dấu là các số bit cao và quản lý số lượng lớn như vậy là không thực tế. Thay vào đó, địa chi một điểm đánh dấu chỉ đơn giản là chỉ mục đánh dấu bên trong từ điển mà nó thuộc về. Ví dụ, 5 dấu đầu tiên trong một từ điển có id: 0, 1, 2, 3 và 4.

---
#### 2. Thuật toán tạo mã

- Trước khi nhận dạng mã, các mã cần được in ra và được đặt trong môi trường. Hình ảnh của mã có thể được tạo ra bằng cách sử dụng hàm drawMarker().
- Ví dụ, phân tích lời gọi hàm sau:

  **c++ cv::Mat markerImage;**

  **cv::aruco::Dictionary dictionary = cv::aruco::getPredefinedDictionary(cv::aruco::DICT_6X6_250);**

  **cv::aruco::drawMarker(dictionary, 23, 200, markerImage, 1);**

- Đầu tiên, đối tượng Dictionary được tạo ra bằng cách chọn một trong những từ điển được định nghĩa trước trong module Aruco. Cụ thể, từ điển này được tạo bởi 250 mã và kích thước đánh dấu là 6x6 bit ( DICT_6X6_250 )
- Các tham số của drawMarker là:
  1. Tham số đầu tiên là đối tượng Dictionary được tạo ra trước đó.
  2. Tham số thứ hai là id mã, trong trường hợp này là mã 23 của từ điển DICT_6X6_250 . Chú ý rằng mỗi từ điển được tạo bởi một số các mã khác nhau. Trong trường hợp này id hợp lệ đi từ 0 đến 249. Bất kỳ id cụ thể nào ra khỏi phạm vi hợp lệ sẽ tạo ra một ngoại lệ.
  3. Tham số thứ ba, 200, là kích thước của hình ảnh đầu ra của mã. Trong ví dụ này, hình ảnh đầu ra sẽ có kích thước 200x200 pixel. Lưu ý rằng tham số này phải đủ lớn để lưu trữ số bit cho từ điển cụ thể. Ví dụ, không thể tạo ra một hình ảnh có kích thước 5x5 pixel cho một kích thước đánh dấu là 6x6 bit (và không tính đến đường biên). Hơn nữa, để tránh biến dạng, tham số này nên tỉ lệ thuận với số bit + kích thước đường viền, hoặc ít nhất cao hơn nhiều so với kích cỡ của marker (như 200 trong ví dụ), do đó các biến dạng không đáng kể.
  4. Tham số thứ tư là hình ảnh đầu ra.
  5. Tham số cuối cùng là một tham số tùy chọn để xác định chiều rộng của đường viền màu đen. Kích thước được quy định tỉ lệ thuận với số bit. Ví dụ giá trị 2 có nghĩa là đường viền sẽ có chiều rộng tương đương với kích thước của 2 bits nội bộ. Giá trị mặc định là 1.

- Hình ảnh mã được tạo:

![img02](https://docs.opencv.org/3.1.0/marker23.jpg)


*Mã được tạo*

---
#### III. THUẬT TOÁN NHẬN DẠNG MÃ
#### 1. Thuật toán nhận dạng mã

- Để nhận dạng mã cần phải xác định 2 yếu tố:
  1. Vị trí của bốn góc của mã trong hình ảnh (theo thứ tự ban đầu của chúng)
  2. Id của mã.

- Quá trình nhận dạng mã bao gồm 2 bước chính:
  1. Bước 1: Phát hiện các đối tượng chứa mã.

    Trong bước này, máy sẽ phân tích hình ảnh thu nhận được để tìm hình vuông chứa đối tượng được đánh dấu. Nó bắt đầu bằng một ngưỡng có khả năng thích nghi (chỉ một giá trị mà người ta dựa vào để phân hoạch một tập hợp thành các miền phân biệt) để phân đoạn các mã, sau đó các đường viền được lấy ra từ hình ảnh ngưỡng và những đường không lồi hoặc không tương tự hình vuông sẽ được loại bỏ. Một số thành phần lọc bổ sung cũng được áp dụng (loại bỏ các đường viền quá nhỏ hoặc quá lớn, loại bỏ đường viền quá gần nhau... )

  2. Bước 2: Phân tích mã hóa.

    Sau khi phát hiện đối tượng, cần thiết phải xác định xem chúng là mã thực sự hay không bằng cách phân tích mã hoá bên trong của chúng. Bước này bắt đầu bằng cách lấy ra các dấu hiệu của mỗi mã. Để làm điều này, trước tiên, phép biến đổi bối cảnh được áp dụng để có được mã theo hình thức tiêu chuẩn của nó. Sau đó, các hình ảnh tiêu chẩn được tạo ngưỡng bằng cách sử dụng Otsu để phân tách riêng bit trắng và đen. Hình ảnh được chia thành các ô khác nhau theo kích thước điểm đánh dấu và kích thước đường viền và số lượng điểm ảnh màu đen hoặc trắng trên mỗi ô được đếm để xác định xem nó có màu trắng hay đen. Cuối cùng, các bit được phân tích để xác định xem các điểm đánh dấu thuộc về từ điển cụ thể và kỹ thuật sửa lỗi được sử dụng khi cần thiết.

- Xem xét hình ảnh sau:
![img03](https://docs.opencv.org/3.1.0/singlemarkersoriginal.png)


*Hình ảnh gốc với các mã*

- Đây là mã được phát hiện (màu xanh lá cây):
![img04](https://docs.opencv.org/3.1.0/singlemarkersdetection.png)


*Hình ảnh có mã đã phát hiện*

- Và đây là những đối tượng đã bị loại bỏ trong bước nhận dạng (màu hồng):
![img05](https://docs.opencv.org/3.1.0/singlemarkersrejected.png)


*Hình ảnh với đối tượng bị loại bỏ*

- Trong module ArUco, việc phát hiện mã được thực hiện bởi hàm detectMarkers(). Đây là chức năng quan trọng nhất trong module, vì tất cả các phần còn lại của các chức năng được dựa trên các dấu hiệu phát hiện trước đó được trả về bởi detectMarkers().
- Một ví dụ về phát hiện mã:

  **c++ cv::Mat inputImage;**

  **vector< int > markerIds;**

  **vector< vector<Point2f> > markerCorners, rejectedCandidates;**

  **cv::aruco::DetectorParameters parameters;**

  **cv::aruco::Dictionary dictionary = cv::aruco::getPredefinedDictionary(cv::aruco::DICT_6X6_250);**

  **cv::aruco::detectMarkers(inputImage, dictionary, markerCorners, markerIds, parameters, rejectedCandidates);**

- Các tham số của detectMarkers là:
  1. Tham số đầu tiên là hình ảnh nơi mã sẽ được phát hiện
  2. Tham số thứ hai là đối tượng từ điển, trong trường hợp này là một trong những từ điển được xác định trước ( DICT_6X6_250 )
  3. Các mã đã phát hiện sẽ được lưu trữ dưới dạng cấu trúc markerCorners và markerIds:
    - markerCorners là danh sách các góc của các mã đã phát hiện. Đối với mỗi mã, bốn góc của nó được trả về theo thứ tự ban đầu của chúng (theo chiều kim đồng hồ bắt đầu với phía trên bên trái). Vì vậy, góc đầu tiên là góc trên bên trái, tiếp theo là phía trên bên phải, phía dưới bên phải và phía dưới bên trái.
    - markerIds là danh sách id của mỗi mã đã phát hiện trong markerCorners . Lưu ý rằng các markerCorners và markerIds đã trả về có cùng kích cỡ.
  4. Tham số thứ tư là đối tượng của kiểu DetectionParameters . Đối tượng này bao gồm tất cả các tham số có thể được tùy chỉnh trong quá trình phát hiện.
  5. Tham số cuối cùng, rejectedCandidates , là một danh sách trả về các đối tượng mã, tức là các ô vuông đã được tìm thấy nhưng chúng không có mã hoá hợp lệ. Mỗi đối tượng cũng được xác định bởi bốn góc của nó, và định dạng của nó là giống nhau so với tham số markerCorners . Tham số này có thể bị bỏ qua và chỉ hữu ích cho các mục đích gỡ lỗi và cho các chiến lược 'refind'.

- Sau khi detectMarkers(), bạn sẽ kiểm tra xem mã được phát hiện có chính xác hay không. Module ArUco cung cấp một chức năng để vẽ các mã được phát hiện trong hình ảnh đầu vào, chức năng này là drawDetectedMarkers()
- Xem ví vụ sau:

  **c++ cv::Mat outputImage cv::aruco::drawDetectedMarkers(image, markerCorners, markerIds);**

- Các tham số:
  1. image là hình ảnh đầu vào / đầu ra, nơi mã sẽ được lấy ra (nó thường sẽ là hình ảnh tương tự, nơi các mã đã được phát hiện)
  2. markerCorners và markerIds là cấu trúc của các mã được phát hiện trong cùng một định dạng được cung cấp bởi hàm detectMarkers()

![img06](https://docs.opencv.org/3.1.0/singlemarkersrejected.png)


*Hình ảnh có mã đã phát hiện*

- Chú ý rằng chức năng này chỉ được cung cấp cho việc hình dung mã và việc sử dụng nó có thể được bỏ qua hoàn toàn.
- Với hai chức năng này, chúng ta có thể tạo ra một vòng lặp dò tìm cơ bản để phát hiện các mã từ máy ảnh.

---
#### 2. Ước lượng hình dáng

- Để thực hiện ước lượng hình dáng mã, bạn cần phải biết các thông số hiệu chuẩn trên máy ảnh của bạn. Đó là ma trận máy ảnh và các hệ số biến dạng. OpenCV cung cấp chức năng calibrateCamera() và hướng dẫn Calibration để hiệu chuẩn máy ảnh. Bạn cũng có thể hiệu chuẩn máy ảnh của bạn bằng cách sử dụng module Aruco. Lưu ý rằng điều này chỉ cần được thực hiện một lần trừ khi các ống kính máy ảnh được sửa đổi.
- Cuối cùng, những gì bạn nhận được sau khi hiệu chuẩn là ma trận máy ảnh: một ma trận 3x3 với khoảng cách tiêu cự và tọa độ trung tâm của máy ảnh (còn gọi là các tham số nội tại) và hệ số biến dạng: một vector gồm 5 phần tử  hoặc nhiều hơn, đó là mô hình sự biến dạng được tạo ra bởi máy ảnh của bạn.
- Khi ước lượng hình dáng tập các mã ArUco, bạn có thể ước tính hình dáng của mỗi mã riêng lẻ, bằng cách sử dụng các bảng aruco.
Máy ảnh đặt ra đối với một mã là sự chuyển đổi 3d từ hệ tọa độ của mã sang hệ toạ độ máy ảnh. Nó được chỉ định bởi phép quay và một vector dịch.
- Module ArUco cung cấp một chức năng để ước lượng các vị trí của tất cả các dấu hiệu đã phát hiện:

  **c++ Mat cameraMatrix, distCoeffs;**

  **vector< Vec3d > rvecs, tvecs;**

  **cv::aruco::estimatePoseSingleMarkers(corners,0.05,cameraMatrix, distCoeffs, rvecs, tvecs);**

- Các tham số:
  1. Tham số corners là vector của các góc đánh dấu được trả về bởi hàm detectMarkers()
  2. Tham số thứ hai là kích thước của mặt mã bằng mét hoặc trong bất kỳ đơn vị khác. Lưu ý rằng các vectơ dịch của các vị trí ước tính sẽ nằm trong cùng một đơn vị.
  3. Tham số cameraMatrix và distCoeffs là các thông số hiệu chuẩn máy ảnh cần được biết đến một cách rõ ràng.
  4. Tham số rvecs và tvecs là các phép quay và bản dịch dịch theo thứ tự, cho mỗi mã ở các góc.

- Hệ tọa độ mã được giả định bởi chức năng này được đặt ở chính giữa của mã, được môt tả như trong hình dưới đây. Màu sắc tương ứng với trục X: đỏ, Y: xanh, Z: xanh lam.

![img07](https://docs.opencv.org/3.1.0/singlemarkersaxis.png)



*Hình ảnh các mã được gắn với trục tọa độ*

- Module ArUco cung cấp một chức năng để vẽ trục như trong hình trên, vì vậy có thể kiểm tra việc đánh giá.
- Xét ví dụ:

  **c++ cv::aruco::drawAxis(image, cameraMatrix, distCoeffs, rvec, tvec, 0.1);**

- Các tham số:
  1. image là hình ảnh đầu vào / đầu ra, nơi trục sẽ được vẽ (thường nó sẽ là hình ảnh các mã đã được phát hiện)
  2. cameraMatrix và distCoeffs là các thông số hiệu chuẩn máy ảnh.
  3. rvec và tvec là các tham số đặt ra mà trục của chúng muốn được lấy ra.
  4. Tham số cuối cùng là chiều dài của trục, thường đo bằng mét.

- Xem ví dụ đầy đủ ở video sau:
[ArUco markers detection video](https://www.youtube.com/watch?v=IsXWrcB_Hvs&feature=youtu.be)

---
#### 3. Chọn từ điển

- Module ArUco cung cấp lớp Dictionary là lớp đại diện cho từ điển của các mã.
- Ngoài kích thước của mã và số lượng mã trong từ điển, có một tham số quan trọng nữa đó là khoảng cách giữa hai mã. Khoảng cách giữa hai mã là khoảng cách tối thiểu giữa các dấu hiệu của nó và nó sẽ xác định khả năng phát hiện và sửa chữa các lỗi của từ điển. Nói chung, kích thước từ điển và kích thước mã cao hơn làm tăng khoảng cách giữa các mã và ngược lại. Tuy nhiên, việc phát hiện các mã với kích thước lớn hơn là phức tạp hơn, do số lượng bit cao hơn cần phải được chiết xuất từ hình ảnh. Ví dụ, nếu bạn chỉ cần 10 mã trong ứng dụng của bạn, tốt hơn là sử dụng một từ điển chỉ gồm có 10 mã hơn là sử dụng một từ điển gồm có 1000 mã. Lý do là từ điển gồm 10 mã phân cách sẽ có khoảng cách giữa các điểm đánh dấu cao hơn và, do đó, nó sẽ mạnh mẽ hơn đối với các lỗi.
- Module ArUco cung cấp một số lựa chọn từ điển sau:
  1. Từ điển được xác định trước

  - Đây là cách dễ nhất để chọn một từ điển. Module aruco chứa một tập các từ điển được xác định trước của một loạt các kích thước mã và số lượng mã.
  - Ví dụ:

    **c++cv::aruco::Dictionary  dictionary = cv::aruco::getPredefinedDictionary(cv::aruco::DICT_6X6_250);**

  - Với DICT_6X6_250 là một ví dụ về từ điển được xác định trước với 6x6 bits và tổng cộng là 250 mã.
  - Từ tất cả các từ điển được cung cấp, bạn nên chọn một trong những từ điển nhỏ hơn phù hợp với ứng dụng của mình. Từ điển càng nhỏ thì khoảng cách giữa các mã càng cao.
  2. Thế hệ từ điển tự động

  - Từ điển có thể được tạo ra tự động để điều chỉnh theo số lượng các mã và bit cần thiết để khoảng cách giữa các mã được tối ưu hóa.
  - Ví dụ:

    **c++cv::aruco::Dictionary  dictionary= cv::aruco::generateCustomDictionary(36, 5);**

  - Thao tác này sẽ tạo một từ điển tùy chỉnh gồm 36 mã của 5x5 bits. Quá trình này có thể mất vài giây, tùy thuộc vào các tham số (nó chậm hơn cho các từ điển lớn hơn và số bit cao hơn)
  3. Thế hệ từ điển tự tạo

  - Cuối cùng, từ điển có thể được cấu hình bằng tay, do đó bất kỳ mã hóa có thể được sử dụng. Để làm điều đó, các tham số đối tượng Dictionary cần được gán bằng tay. Cần lưu ý rằng, trừ khi bạn có một lý do đặc biệt để làm điều này bằng tay, tốt hơn là sử dụng một trong những lựa chọn trước đó.
  - Ví dụ:

    **c++ class Dictionary { public: Mat bytesList; int markerSize; int maxCorrectionBits;**

  - Các tham số:
    - bytesList là mảng có chứa tất cả thông tin về mã code.
    - markerSize là kích thước của mỗi mã (ví dụ, 5 cho các mã với kích thước 5x5 bits)
    - maxCorrectionBits là số bit sai lệch tối đa có thể được sửa chữa trong quá trình phát hiện mã. Nếu giá trị này quá cao, nó có thể dẫn đến một số lượng lớn các sai phạm lớn.
  - Mỗi hàng trong bytesList đại diện cho một trong các mã từ điển. Tuy nhiên, các mã không được lưu trữ ở dạng nhị phân của nó, thay vào đó chúng được lưu trữ ở một định dạng đặc biệt để đơn giản hóa phát hiện của chúng, sử dụng phương pháp tĩnh Dictionary::getByteListFromBits() để làm điều này.
  - Ví dụ:

    **c++ Dictionary dictionary;**

    **cv::Mat markerBits = generateMarkerBits();**

    **cv::Mat markerCompressed = getByteListFromBits(markerBits);**

---
#### 4. Tham số cảm biến

- Một trong các tham số của detectMarkers() là đối tượng DetectorParameters . Đối tượng này bao gồm tất cả các tùy chọn có thể được tùy chỉnh trong quá trình phát hiện mã.
- Các tham số được phân loại tùy thuộc vào quá trình mà chúng tham gia.

##### a. Phân đoạn ảnh

- Một trong những bước đầu tiên của quá trình nhận dạng mã là phân đoạn thích nghi hình ảnh đầu vào. Phương thức này tính giá trị trung bình của các n điểm xung quanh pixel đó rồi trừ cho C chứ không lấy ngưỡng cố định (n thường là số lẻ, còn C là số nguyên bất kỳ)
- Ví dụ về phân đoạn cho hình ảnh mẫu được sử dụng ở trên là:

![img08](https://docs.opencv.org/3.1.0/singlemarkersthresh.png)


*Hình ảnh đã phân đoạn*

- Phân đoạn ảnh này có thể được tùy chỉnh bằng các tham số sau: int adaptiveThreshWinSizeMin, int adaptiveThreshWinSizeMax, int adaptiveThreshWinSizeStep

  - Các tham số adaptiveThreshWinSizeMin và adaptiveThreshWinSizeMax đặc trưng cho khoảng không gian kích thước cửa sổ (tính bằng pixel) được chọn cho phân đoạn thích ứng.


  - Tham số adaptiveThreshWinSizeStep chỉ sự tăng lên của kích thước cửa sổ từ adaptiveThreshWinSizeMin đến adaptiveThreshWinSizeMax.

- Ví dụ, đối với các giá trị adaptiveThreshWinSizeMin = 5 và adaptiveThreshWinSizeMax = 21 và adaptiveThreshWinSizeStep = 4, sẽ có 5 bước phân đoạn với kích thước cửa sổ 5, 9, 13, 17 và 21. Trên mỗi hình ảnh phân đoạn, các mã sẽ được trích xuất.

- Giá trị kích thước cửa sổ thấp có thể 'phá vỡ' đường viền mã, nếu kích thước mã quá lớn và sẽ không được nhận dạng, như trong hình ảnh sau:

![img09](https://docs.opencv.org/3.1.0/singlemarkersbrokenthresh.png)


*Ảnh mã bị hỏng*

- Mặt khác, giá trị quá cao có thể tạo ra hiệu quả tương tự nếu các mã quá nhỏ và nó cũng có thể làm giảm hiệu suất. Hơn nữa quá trình này có xu hướng giảm phân đoạn toàn cầu, mất đi các lợi ích thích ứng.
- Trường hợp đơn giản nhất sử dụng cùng một giá trị cho adaptiveThreshWinSizeMin và adaptiveThreshWinSizeMax , tạo ra một giá trị phân đoạn duy nhất. Tuy nhiên, cách tốt hơn đó là sử dụng một loạt các giá trị cho kích thước cửa sổ, mặc dù nhiều giá trị phân đoạn cũng có thể làm giảm hiệu suất đáng kể.
- Giá trị mặc định: adaptiveThreshWinSizeMin: 3, adaptiveThreshWinSizeMax: 23, adaptiveThreshWinSizeStep: 10.

- Tham số double adaptiveThreshConstant thể hiện giá trị hằng số được thêm vào trong điều kiện phân đoạn. Giá trị mặc định là một lựa chọn tốt trong hầu hết các trường hợp.
Giá trị mặc định: 7.

##### b. Lọc đường viền

- Sau khi phân đoạn ảnh, đường viền được nhận diện. Tuy nhiên, không phải tất cả các đường viền được coi là các đối tượng mã. Chúng được lọc ra theo các bước khác nhau để các đường viền không chắc sẽ bị đánh dấu bị loại bỏ.
- Tất cả các đường viền được xem xét và sẽ được xử lý trong các giai đoạn sau, mất chi phí tính toán cao hơn. Vì vậy, việc loại bỏ các đối tượng sai trong giai đoạn này là thích hợp hơn trong giai đoạn sau. Mặt khác, nếu các điều kiện lọc quá chặt chẽ, các đường viền  thực của mã có thể bị loại bỏ, và do đó không được phát hiện.
- Tham số double minMarkerPerimeterRate , double maxMarkerPerimeterRate xác định kích thước tối thiểu và tối đa của một mã, cụ thể là chu vi tối đa và tối thiểu của mã. Chúng không được chỉ định trong các giá trị pixel tuyệt đối, thay vào đó chúng được chỉ định tương đối so với kích thước tối đa của hình ảnh đầu vào.
- Ví dụ, một hình ảnh có kích thước 640x480 và một mã có  chu vi tương đối nhỏ 0.05 sẽ dẫn đến một mã có chu vi tối thiểu là 640x0.05 = 32 pixel, vì 640 là chiều tối đa của hình ảnh. Tương tự áp dụng cho tham số maxMarkerPerimeterRate. Giá trị minMarkerPerimeterRate: 0 và giá trị maxMarkerPerimeterRate : 4 (hoặc nhiều hơn) sẽ tương đương với việc xem xét tất cả các đường viền trong hình ảnh, tuy nhiên điều này không được khuyến khích vì các lý do hiệu suất.
- Giá trị mặc định: minMarkerPerimeterRate : 0.03, maxMarkerPerimeterRate : 4.0.
- Các tham số khác:
  - double polygonalApproxAccuracyRate
    - Việc lấy xấp xỉ đa giác được áp dụng cho mỗi đối tượng và chỉ chấp nhận những hình dạng gần đúng hình vuông. Giá trị này xác định lỗi tối đa mà sự xấp xỉ đa giác có thể tạo ra.
    - Tham số này liên quan đến đồ dài đối tượng (tính bằng pixel). Vì vậy, nếu đối tượng có chu vi 100 pixel và giá trị của polygonalApproxAccuracyRate là 0,04, lỗi tối đa sẽ là 100x0.04 = 5,4 pixel.
    - Trong hầu hết các trường hợp, giá trị mặc định hoạt động tốt, nhưng giá trị lỗi cao hơn có thể là cần thiết cho hình ảnh biến dạng cao.
    - Giá trị mặc định: 0,05.
  - double minCornerDistanceRate
    - Khoảng cách tối thiểu giữa bất kỳ cặp góc nào trong cùng một điểm đánh dấu. Nó được thể hiện tương đối so với chu vi marker. Khoảng cách tối thiểu bằng pixel là Perimeter * minCornerDistanceRate.
    - Giá trị mặc định: 0,05.
  - double minMarkerDistanceRate
    - Khoảng cách tối thiểu giữa bất kỳ cặp góc nào từ hai mã khác nhau. Nếu hai đối tượng quá gần, đối tượng kia sẽ bị bỏ qua.
    - Giá trị mặc định: 0,05.
  - int minDistanceToBorder
    - Khoảng cách tối thiểu tới bất kỳ mã nào đối với đường viền hình ảnh (bằng pixel). Mã bị che khuất bởi đường viền hình ảnh có thể được phát hiện chính xác nếu tắc nghẽn là nhỏ. Tuy nhiên, nếu một góc bị che khuất, góc quay trở lại thường nằm ở vị trí sai gần đường biên của hình ảnh.
    - Giá trị mặc định: 3.

##### c. Trích xuất bits

- Sau khi nhận dạng đối tượng, các bit của mỗi đối tượng sẽ được phân tích để xác định xem chúng có phải là mã thực sự hay không.
Trước khi phân tích mã nhị phân chính nó, các bit cần phải được trích xuất. Để làm như vậy, sự méo mó bị loại bỏ và hình ảnh kết quả được phân đoạn sử dụng thuật toán Otsu để tách riêng các điểm ảnh màu đen và trắng.
- Đây là một ví dụ về hình ảnh thu được sau khi loại bỏ sự méo mó:

![img10](https://docs.opencv.org/3.1.0/removeperspective.png)


*Thay đổi phối cảnh*

- Sau đó, hình ảnh được chia thành lưới có cùng số ô so với số bit trong mã . Trên mỗi ô, số lượng điểm ảnh màu đen và trắng được tính để quyết định bit được gán cho ô nào (từ giá trị lớn) :

![img11](https://docs.opencv.org/3.1.0/bitsextraction1.png)


*Ô đánh dấu*

- Có một số tham số có thể tùy chỉnh quá trình này:
  - int markerBorderBits
    - Tham số này chỉ ra chiều rộng của đường biên. Nó tương ứng với kích thước của mỗi bit. Vì vậy, giá trị 2 cho biết đường biên có chiều rộng của 2 bits nội bộ.
    - Tham số này cần trùng khớp với kích thước đường viền của mã mà bạn đang sử dụng. Kích thước đường viền có thể được định trong các chức năng vẽ ký tự như drawMarker()
    - Giá trị mặc định: 1.
  - double minOtsuStdDev
    - Giá trị này xác định độ lệch chuẩn tối thiểu trên các giá trị pixel để thực hiện phân đoạn Otsu. Nếu độ lệch thấp, có nghĩa là tất cả các hình vuông là màu đen (hoặc trắng) và áp dụng Otsu không có ý nghĩa. Nếu đúng như vậy, tất cả các bit được đặt thành 0 (hoặc 1) tùy thuộc nếu giá trị trung bình cao hơn hoặc thấp hơn 128.
    - Giá trị mặc định: 5.0.
  - int perpectiveRemovePixelPerCell
    - Tham số này xác định số lượng điểm ảnh (mỗi ô) trong ảnh thu được sau khi loại bỏ sự méo mó của góc cạnh (bao gồm cả đường viền). Đây là kích thước của hình vuông màu đỏ trong hình trên.
    - Ví dụ, giả sử chúng ta đang làm việc với các mã 5x5 bits và kích thước đường viền 1 bit. Sau đó, tính tổng số ô / bit trên mỗi chiều là 5 + 2 * 1 = 7 (đường biên phải được tính hai lần). Tổng số ô là 7x7. Nếu giá trị của perpectiveRemovePixelPerCell là 10, thì kích thước của hình ảnh thu được sẽ là 10 * 7 = 70 -> 70x70 pixel.
    - Giá trị cao hơn của tham số này có thể cải thiện quá trình trích xuất bits (đến một mức độ nào đó), tuy nhiên nó có thể làm giảm hiệu suất.
    - Giá trị mặc định: 4
  - double perspectiveRemoveIgnoredMarginPerCell
    - Khi giải nén bit của mỗi phần, số lượng điểm ảnh màu đen và trắng được tính. Nói chung, không nên xem xét tất cả các điểm ảnh di động. Thay vào đó, tốt hơn là bỏ qua một số điểm ảnh ở mép của các phần. Vì sau khi loại bỏ sự méo mó, màu của các phần nói chung không tách rời hoàn toàn và các phần trắng có thể lấn chiếm một số pixel của các phần đen (và ngược lại). Vì vậy, tốt hơn là bỏ qua một số điểm ảnh để tránh tính các điểm ảnh sai.
    - Ví dụ, trong hình dưới đây:

![img12](https://docs.opencv.org/3.1.0/bitsextraction2.png)


*Lề ô đánh dấu*

- Chỉ các pixel bên trong các ô vuông màu xanh lá cây được xem xét.
- Tham số perspectiveRemoveIgnoredMarginPerCell cho thấy sự khác biệt giữa các ô màu đỏ và xanh lá cây. Tham số này liên quan đến tổng kích thước của ô. Ví dụ nếu kích thước tế bào là 40 pixel và giá trị của tham số này là 0,1, một lề 40 * 0,1 = 4 pixel được bỏ qua trong các ô. Điều này có nghĩa là tổng số pixel được phân tích trên mỗi ô sẽ thực sự là 32x32, thay vì 40x40.
- Giá trị mặc định: 0.13.

##### d. Nhận diện mã

- Sau khi các bit đã được trích xuất, bước tiếp theo kiểm tra nếu chiết xuất mã thuộc về từ điển đánh dấu, và nếu cần thiết, sửa lỗi có thể được thực hiện.
- double maxErroneousBitsInBorderRate
  - Các bit của đường viền mã nên là màu đen. Tham số này xác định số bit cho phép trong đường biên, nghĩa là số bit trắng tối đa trong đường biên. Nó được biểu diễn tương ứng so với tổng số bit trong mã.
  - Giá trị mặc định: 0.35.
- double errorCorrectionRate
  - Mỗi từ điển mã có số lượng bit lý thuyết tối đa có thể được sửa chữa ( Dictionary.maxCorrectionBits ). Tuy nhiên, giá trị này có thể được sửa đổi bởi tham số errorCorrectionRate.
  - Ví dụ, nếu số bit cho phép có thể được sửa chữa là 6 và giá trị errorCorrectionRate là 0.5, số bit thực có thể được sửa là 6 * 0.5 = 3 bits.
  - Giá trị này rất hữu ích để giảm khả năng hiệu chỉnh lỗi để tránh sai liên tục.
  - Giá trị mặc định: 0.6.

##### e. Sàng lọc ở góc

- Sau khi các mã đã được phát hiện và xác định, bước cuối cùng là thực hiện sàng lọc subpixel ở các vị trí góc. Lưu ý rằng bước này là tùy chọn và chỉ có ý nghĩa nếu vị trí của mã phải chính xác. Đây là một bước tốn thời gian và nó bị vô hiệu theo mặc định.
- bool doCornerRefinement
  - Tham số này quyết định xem quá trình con subpixel góc được thực hiện hay không. Nó có thể bị vô hiệu nếu các góc chính xác là không cần thiết.
  - Giá trị mặc định: flase.
- int cornerRefinementWinSize
  - Tham số này xác định kích thước cửa sổ của quá trình sàng lọc subpixel.
  - Giá trị mặc định: 5.
- int cornerRefinementMaxIterations, double cornerRefinementMinAccuracy
  - Hai thông số này xác định tiêu chuẩn dừng của quá trình tinh chỉnh subpixel. Các cornerRefinementMaxIterations cho biết số lần lặp lại và cornerRefinementMinAccuracy tối thiểu lỗi giá trị trước khi dừng quá trình. Nếu số lần lặp lại quá cao, nó có thể ảnh hưởng đến hiệu năng. Mặt khác, nếu nó quá thấp, nó có thể tạo ra một sàng lọc subpixel không có giá trị.
  - Giá trị mặc định: cornerRefinementMaxIterations: 30, cornerRefinementMinAccuracy: 0.1.
*subpixel: có thể hiểu là độ phân giải hình ảnh*

---
#### IV. CÀI ĐẶT VÀ SỬ DỤNG ỨNG DỤNG
#### 1. Cài đặt

- Yêu cầu thiết bị đi động của bạn phải chạy hệ điều hành Android phiên bản 4.4 trở lên.
- Để cài đặt ứng dụng này, bạn dowload file cài đặt tại link sau: [](https://drive.google.com/file/d/10kHWmoSjUdRt7Zg4km4Em9GM6ca8NbLt/view)

---
#### 2. Sử dụng

- Sau khi tải file apk về thiết bị di động của bạn, hãy mở nó ra.
- Màn hình đăng nhập hiển thị, yêu cầu bạn đăng nhập tài khoản để có thể sử dụng ứng dụng.

![img13](https://drive.google.com/file/d/1XRs3zr5DJEFPMlgE4L0EFNxTkdRSfaC9/view?usp=sharing)



*Màn hình đăng nhập*

- Sau khi đăng nhập thành công, màn hình chính sẽ hiển thị như hình ảnh dưới đây:

![img14](https://drive.google.com/file/d/1caWwE9MEM0pyE4k9LHPj6SjiabO3Glpl/view?usp=sharing)



*Màn hình chính*

- Khi bạn ấn vào nút SCAN, camera sẽ hiển thị, bắt đầu quét các mã trong không gian và nhận dạng chúng.

![img15](https://drive.google.com/file/d/1foXO5nt6uymTgyA2dYOaCVg2nhO1gg8i/view?usp=sharing)



*Màn hình camera*

- Trên màn hình thiết bị sẽ hiển thị các đối tượng được phát hiện có viền màu xanh lá cây.


























