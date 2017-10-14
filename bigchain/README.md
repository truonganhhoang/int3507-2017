
## Nhóm BigChain

#### Thành viên trong nhóm:
* Đỗ Văn Quang
* Nguyễn Ngọc Trung
* Nguyễn Bá Tú
* Phan Thế Thảo

### Mô tả đề tài của nhóm:
Xây dựng công cụ quản lý và chia sẻ điểm an toàn dựa vào BigchainDB

### Giới thiệu về blockchain
Blockchain (chuỗi khối), tên ban đầu block chain là một cơ sở dữ liệu phân cấp lưu trữ thông tin trong các khối thông tin được liên kết với nhau bằng mã hóa và mở rộng theo thời gian. Mỗi khối thông tin đều chứa thông tin về thời gian khởi tạo và được liên kết tới khối trước đó, kèm một mã thời gian và dữ liệu giao dịch. Blockchain được thiết kế để chống lại việc thay đổi của dữ liệu: Một khi dữ liệu đã được mạng lưới chấp nhận thì sẽ không có cách nào thay đổi được nó.

(Nguồn wikipedia)

### Giới thiệu về mã hoá chữ ký số ed25519 và mã hoá dữ liệu AES

#### Chữ ký số ed25519
Ed25519 là một hệ thống chữ ký số khóa công khai với nhiều tính năng nổi trội:
* Kiểm tra chữ ký đơn nhanh
* Kiểm tra chữ ký nhanh trong cả trường hợp kiểm tra hàng loạt
* Việc ký được thực hiện rất nhanh
* Sinh khóa nhanh
* Mức độ an toàn cao
* Khóa phiên dễ dùng
* Chống xung đột
* Không dùng mảng chỉ số bí mật
* Không có các điều kiện bí mật nhánh
* Độ dài chữ ký nhỏ
* Độ dài khóa nhỏ

#### Mã hóa dữ liệu AES
 AES là thuật toán được phát triển dựa trên bản thiết kế Square bởi 2 nhà mật mã học người bỉ là Joan Daemen và Vincent Rijmen.AES là một thuật toán mã hóa khối đối xứng với độ dài khóa là 128 bít (một chữ số nhị phân có giá trị 0 hoặc 1), 192 bít và 256 bít tương ứng gọi là AES-128, AES-192 và AES-256. tùy vào độ dài của key khi sử dụng mà ta có số vòng lặp khác nhau AES-128 sử dụng 10 vòng (round), AES-192 sử dụng 12 vòng và AES-256 sử dụng 14 vòng.
Các thứ tự hàm AES sẽ thực hiện:

* Trộn từng byte (SubBytes): mỗi byte được thay thế với các byte khác.
* Trộn từng hàng (ShiftRows): Phép biến đổi dùng trong phép mã hóa áp dụng lên trạng thái bằng cách chuyển dịch vòng ba hàng cuối của trạng thái theo số lượng byte các offset khác nhau.
* Trộn từng cột (MixColumns): mỗi cột được chuyển đổi tuyến tính bằng cách nhân nó với một ma trận trong trường hữu hạn
* Mã hóa (AddRoundKey): mỗi byte trong bảng trạng thái được thực hiện phép XOR với một khoá vòng, quá trình xử lý AES thu được 11 khoá vòng từ các key mã hoá được phân phát cho kỹ thuật mã hoá.

### Giới thiệu về bigchaindb
  BigchainDB là một cơ sở dữ liệu blockchain có thể mở rộng, phân cấp, không thể thay đổi được đối tượng và sở hữu cá nhân. BigchainDB cho phép triển khai các ứng dụng quy mô lớn trong nhiều trường hợp sử dụng và các ngành công nghiệp từ sở hữu trí tuệ, định danh đến các chuỗi cung ứng, IoT và trí tuệ nhân tạo. BigchainDB cung cấp giả pháp độc nhất cho các nhà phát triển, các dự án khởi nghiệp và các doanh nghiệp để xây dựng thành công các khái niệm, nền tảng và các ứng dụng mơ ước.

  Chúng ta có thể xây dựng một blockchain truyền thống như một cơ sở dữ liệu (DB), theo nghĩa nó cung cấp một cơ chế lưu trữ.
  Nếu chúng ta đo Bitcoin blockchain bằng các tiêu chí DB truyền thống:
  * thông lượng:  một vài giao dịch mỗi giây (tps),
  * độ trễ: trước khi một đơn xác nhận viết là 10 phút,
  * khả năng lưu trữ:  một vài chục GB. 
  Hơn nữa nó về cơ bản cũng không có khả năng truy vấn như một cơ sở dữ liệu NoQL.

  Ngược lại, một DB phân phối hiện đại:
  * thông lượng: vượt quá 1 triệu tps.
  * độ trễ: của một phần nhỏ của một giây.
  * khả năng lưu trữ: đạt hàng petabyte và nhiều hơn nữa.
  * thông lượng và khả năng lưu trữ tăng lên khi các nút được thêm vào.
  
  Cơ sở dữ liệu hiện đại cũng có khả thực hiện các truy vấn, và kiểm soát truy cập bằng SQL hoặc NoSQL,..
  
  Trên thực tế SQL là một tiêu chuẩn quốc tế ANSI và ISO.

  Các công nghệ phân tán với khả năng kết nối các hệ thống tài chính hiện đại, các chuỗi cung ứng, các ngành công nghiệp sáng tạo và ngay cả bản thân mạng Internet đòi hỏi các yêu cầu rất cao về thông lượng, độ trễ và khả năng lưu trữ và nó vượt quá khả năng của bitcoin

|| Blockchain truyển thống | CSDL phân tán truyền thống| BigchainDB |
| :-------: | :--: | :---: | :---: |
| Thông lượng lớn, tăng với số lượng nút | - | x | x | 
| Độ trễ thấp | - | x | x | 
| Khả năng lưu trữ lớn | - | x | x |
| Truy vấn đa dạng | - | x | x | 
| Permission đa dạng | - | x | x | 
| Điều khiển phân quyền | x | - | x | 
| Immutability | x | - | x | 
| Tạo và di chuyển tài sản điện tử | x | - | x |


(Dịch từ docs bigchain)


## Báo cáo tiến độ project
### Thiết kế

##### Thiết kế:
![this art][assets/architecture.png]


Tác dụng của từng thành phần:
* BigchainDB Server: Lưu trữ điểm, bảo đảm dữ liệu
* MongoDB Server: Lưu trữ thông tin của người dùng, index dữ liệu hỗ trợ truy cập nhanh vào BigchainDB
* Node Server: Cung cấp API thao tác với database
* Angular Server: Cung cấp giao diện cho người dùng

##### Actor:

Đối tượng là người dùng:
* Sinh viên
* Giảng viên
* Quản trị viên

Đối tượng là Hệ thống khác:
* Hệ thống đăng ký môn học
* Hệ thống quản lý đào tạo

#### Chức năng chính:
* Thêm điểm (Giảng viên)
* Chia điểm  (Sinh viên)
* Lấy điểm  (Giảng viên & sinh viên)


### Server
### Cài đặt bigchaindb
  Yêu cầu:
  * python-pip
  * mongodb >=3.4
  Hướng dẫn sau đây là dành cho hệ điều hành ubuntu 16.04 64bit các hệ điều hành unix khác làm tương tự

#### Cài đặt python-pip
```
    $ sudo apt-get update
    $ sudo apt-get install libffi-dev libssl-dev
    $ sudo apt-get install python3-pip
    $ sudo pip3 install --upgrade pip setuptools
```
#### Cài đặt mongodb bản mới nhất
```
    $ sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
    $ echo "deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
    $ sudo apt-get update
    $ sudo apt-get install -y mongodb-org
```

#### Cài đặt bigchaindb
```
    $ sudo pip3 install bigchaindb
```

#### Chạy Bigchaindb
```
    $ sudo mongod --replSet=bigchain-rs
    $ bigchaindb -y configure mongodb
    $ bigchaindb start
```

mặc định bigchaindb chạy ở http://127.0.0.1:9984/

### Cài đặt server
 Yêu cầu:
 * Bigchaindb
 * Nodejs

#### Cài đặt nodejs
```
    $ curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
    $ sudo apt-get install -y nodejs
    $ sudo apt-get install -y build-essential
```

#### Cài đặt server
```
    $ git clone https://github.com/truonganhhoang/int3507-2017.git
    $ cd int3507-2017/bigchain/
    $ npm install
```

#### Chạy server
```
    $ node app.js
     or
    $ npm start
```
 mặc định server chạy ở http://127.0.0.1:3000
### Client
 Yêu cầu: Nodejs

#### Cài đặt client
```
    $ cd int3507-2017/bigchain/client
    $ npm install
```

#### Chạy client
```
    $ npm start
```

mặc định client chạy ở http://127.0.0.1:4200
### Hình ảnh demo

### Đánh giá ưu nhược điểm
#### Ưu điểm
* Sử dụng blockchain cho phép ngăn chặn các hành vi thao tác trái phép vào trong database, dễ dàng mở rộng, phân tán mà không cần một server điểu khiển.
* Sử dụng thuật toán mã hoá AES giúp ngăn chặn đánh căp thông tin
#### Nhược điểm
* Việc mã hoá và giải mã làm hao tốn tài nguyên hơn các thao tác truy xuất database thông thường.
* Việc đồng bộ dữ liệu giữa các node có độ trễ.
