
## Nhóm BigChain

#### Thành viên trong nhóm:
* Đỗ Văn Quang
* Nguyễn Ngọc Trung
* Nguyễn Bá Tú
* Phan Thế Thảo

### Mô tả đề tài của nhóm:
Xây dựng công cụ quản lý và chia sẻ điểm an toàn dựa vào bigchaindb

### Giới thiệu về blockchain
Blockchain (chuỗi khối), tên ban đầu block chain là một cơ sở dữ liệu phân cấp lưu trữ thông tin trong các khối thông tin được liên kết với nhau bằng mã hóa và mở rộng theo thời gian. Mỗi khối thông tin đều chứa thông tin về thời gian khởi tạo và được liên kết tới khối trước đó, kèm một mã thời gian và dữ liệu giao dịch. Blockchain được thiết kế để chống lại việc thay đổi của dữ liệu: Một khi dữ liệu đã được mạng lưới chấp nhận thì sẽ không có cách nào thay đổi được nó.

(Nguồn wikipedia)

### Giới thiệu về mã hoá chữ kí số ed25519 và mã hoá dữ liệu AES
 (**Tú** viết phần này)
### Giới thiệu về bigchaindb
BigchainDB
(Dịch từ docs bigchain)

 (**Thảo** viết phần này)

## Báo cáo tiến độ project
### Thiết kế
Cho ảnh với desgin vào

  (T viết phần này)
### Server
### Cài đặt bigchaindb
  Yêu cầu:
  * python-pip
  * mongodb >=3.4
  Hướng dẫn sau đây là dành cho hệ điều hành ubuntu 16.04 64bit các hệ điều hành unix khác làm tương tự

#### Cài đặt python-pip
```
    sudo apt-get update
    sudo apt-get install libffi-dev libssl-dev
    sudo apt-get install python3-pip
    sudo pip3 install --upgrade pip setuptools
```
#### Cài đặt mongodb bản mới nhất
```
    sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
    echo "deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
    sudo apt-get update
    sudo apt-get install -y mongodb-org
```

#### Cài đặt bigchaindb
```
    sudo pip3 install bigchaindb
```

#### Chạy Bigchaindb
```
    sudo mongod --replSet=bigchain-rs
    bigchaindb -y configure mongodb
    bigchaindb start
```

mặc định bigchaindb chạy ở http://127.0.0.1:9984/

### Cài đặt server
 Yêu cầu:
 * Bigchaindb
 * Nodejs

#### Cài đặt nodejs
```
    curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
    sudo apt-get install -y nodejs
    sudo apt-get install -y build-essential
```

#### Cài đặt server
```
    git clone https://github.com/truonganhhoang/int3507-2017.git
    cd int3507-2017/bigchain/
    npm install
```

#### Chạy server
```
    node app.js
    or
    npm start
```

### Client
  (**Trung** viết phần này)
### Hình ảnh demo

### Đánh giá ưu nhược điểm
