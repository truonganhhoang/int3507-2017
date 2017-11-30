# GraphQL Tutorial

## Xây dựng Graphql Server: [Video hướng dẫn](https://www.youtube.com/watch?v=PEcJxkylcRM&list=PLillGF-RfqbYZty73_PHBqKRDnv7ikh68)

### Hướng dẫn tạo graphql đơn giản:

GraphQL server được viết bằng [Nodejs](https://nodejs.org/) và [framework ExpressJS](https://expressjs.com/).

Tạo file package.json với những thư viện cần thiết để sử dụng tạo ra graphql server như hình dưới:

[![Hình 1](https://raw.githubusercontent.com/tuansaker1412/int3507-2017/nhom4/Nhom%204%20GraphQL/Tutorial/img/1.png)](https://raw.githubusercontent.com/tuansaker1412/int3507-2017/nhom4/Nhom%204%20GraphQL/Tutorial/img/1.png)

Cài đặt các thư viện: 

<pre><code>npm install</code></pre>

Tiếp theo ta khởi tạo file index.js

Thêm thư viện của graphql tích hợp graphql vào express như sau:

[![Hình 2](https://raw.githubusercontent.com/tuansaker1412/int3507-2017/nhom4/Nhom%204%20GraphQL/Tutorial/img/2.png)](https://raw.githubusercontent.com/tuansaker1412/int3507-2017/nhom4/Nhom%204%20GraphQL/Tutorial/img/2.png)

Khởi tạo file graphql.js

Thêm các kiểu dữ liệu của Graphql, các kiểu dữ liệu được dùng để khai báo cho các Object Type Graphql như hình:

[![Hình 3](https://raw.githubusercontent.com/tuansaker1412/int3507-2017/nhom4/Nhom%204%20GraphQL/Tutorial/img/3.png)](https://raw.githubusercontent.com/tuansaker1412/int3507-2017/nhom4/Nhom%204%20GraphQL/Tutorial/img/3.png)

Tạo ra một mảng dữ liệu:

[![Hình 4](https://raw.githubusercontent.com/tuansaker1412/int3507-2017/nhom4/Nhom%204%20GraphQL/Tutorial/img/4.png)](https://raw.githubusercontent.com/tuansaker1412/int3507-2017/nhom4/Nhom%204%20GraphQL/Tutorial/img/4.png)

Tạo 1 Type Graphql có name là tên của Type đó trên Graphql, fields là hàm trả về Object có các trường dữ liệu tương ứng với kiểu dữ liệu Graphql bạn muốn trả về:

[![Hình 5](https://raw.githubusercontent.com/tuansaker1412/int3507-2017/nhom4/Nhom%204%20GraphQL/Tutorial/img/5.png)](https://raw.githubusercontent.com/tuansaker1412/int3507-2017/nhom4/Nhom%204%20GraphQL/Tutorial/img/5.png)

Tạo QueryType RootQuery cho Graphql:

- args: đối tượng các dữ liệu tham số đầu vào.
- resolve: fuction sẽ được thực thi khi dữ liệu được query trên Graphql.
- RootQuery sẽ trả về 2 trường customer và customers.

Với customer sẽ trả về kiểu dữ liệu Graphql là 1 Object CustomerType đã được miêu ở trên. Có tham số đầu vào (args) là id. Và trả về là 1 object có id trùng với id yêu cầu query.

Với customers sẽ trả về kiểu dữ liệu Graphql là danh sách các Object CustomerType. Hình minh họa cho RootQuery:

[![Hình 6](https://raw.githubusercontent.com/tuansaker1412/int3507-2017/nhom4/Nhom%204%20GraphQL/Tutorial/img/6.png)](https://raw.githubusercontent.com/tuansaker1412/int3507-2017/nhom4/Nhom%204%20GraphQL/Tutorial/img/6.png)

Tạo đối tượng GraphqlQLSchema và exports:

[![Hình 7](https://raw.githubusercontent.com/tuansaker1412/int3507-2017/nhom4/Nhom%204%20GraphQL/Tutorial/img/7.png)](https://raw.githubusercontent.com/tuansaker1412/int3507-2017/nhom4/Nhom%204%20GraphQL/Tutorial/img/7.png)

Chạy chương trình : 

<pre><code>npm start</code></pre>

Kết quả:

[![Hình 8](https://raw.githubusercontent.com/tuansaker1412/int3507-2017/nhom4/Nhom%204%20GraphQL/Tutorial/img/8.png)](https://raw.githubusercontent.com/tuansaker1412/int3507-2017/nhom4/Nhom%204%20GraphQL/Tutorial/img/8.png)

[![Hình 9](https://raw.githubusercontent.com/tuansaker1412/int3507-2017/nhom4/Nhom%204%20GraphQL/Tutorial/img/9.png)](https://raw.githubusercontent.com/tuansaker1412/int3507-2017/nhom4/Nhom%204%20GraphQL/Tutorial/img/9.png)

Cảm ơn các bạn đã đọc hết bài hướng dẫn!



