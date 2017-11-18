# [Nhóm 4 - GraphQL](http://graphql.org/)

<img src="http://graphql.org/img/logo.svg" width="300">

## Giới thiệu về GraphQL

### 1. GraphQL là gì?

GraphQL (Graph Query Language) là một ngôn ngữ truy vấn cho các API và một thời gian chạy để thực hiện các truy vấn đó với dữ liệu hiện có của bạn. GraphQL cung cấp mô tả đầy đủ và dễ hiểu về dữ liệu trong API của bạn, cho phép khách hàng có quyền yêu cầu chính xác những gì họ cần và không có gì nhiều hơn, giúp dễ dàng phát triển các API theo thời gian và cho phép các công cụ phát triển mạnh mẽ.

GraphQL do Facebook tạo ra từ năm 2012 cung cấp giao thức chung cho phép giao tiếp giữa người dùng (client) và máy chủ (server) để cập nhật và lấy dữ liệu.

Người dùng truy vấn đến máy chủ GraphQL bằng các truy vấn với đặc điểm: format của dữ liệu trả về được mô tả trong câu truy vấn và được định nghĩa ở phía người dùng thay vì ở máy chủ. Nói đơn giản hơn, đây là truy vấn hướng người dùng, cấu trúc dữ liệu không khô cứng 1 khuôn mẫu từ máy chủ (REST API) mà thay đổi theo từng ngữ cảnh sao cho hiệu quả nhất đối với người dùng mà chỉ cần dùng duy nhất 1 địa điểm cuối.

[![Hình 1: Mô hình GraphQL](https://www.businesscard.vn/blog/wp-content/uploads/2016/03/graphql-la-gi-1024x593.png)](https://www.businesscard.vn/blog/wp-content/uploads/2016/03/graphql-la-gi-1024x593.png)

<center>Hình 1: Mô hình GraphQL</center>

### 2. Tổng quan về GraphQL

GraphQL là một cú pháp mô tả cách yêu cầu lấy dữ liệu, và thường được dùng để load data từ một server cho client. GraphQL bao gồm 3 điểm đặc trưng sau:

- Nó cho phép client xác định chính xác những gì dữ liệu họ cần.
- Nó làm cho việc tổng hợp dữ liệu từ nhiều nguồn dễ dàng hơn.
- Nó sử dụng một mẫu hệ thống để mô tả dữ liệu.

Thế thì GraphQL hoạt động như thế nào? ta dùng nó như thế nào?

Điều quan trọng là GraphQL không phải là một ngôn ngữ truy vấn thực sự, nó chỉ là giao thức giao tiếp giữa client và server, tất cả client (web, mobile) đều có thể giao tiếp với bất kỳ server nào mà sử dụng ngôn ngữ GraphQL.

Khái niệm chính về GraphQL bao gồm:

- Cấu trúc phân tầng (Hierarchical)
- Hướng sản phẩm (Product0-centric)
- Định kiểu mạnh (Strong-typing)
- Truy vấn hướng client (Client-specified queries)
- Nội quan (Introspective)

Các bạn có thể tìm hiểu thêm ở [đây](https://facebook.github.io/graphql/October2016/).

### 3. Cách giải quyết vấn đề của GraphQL

Ví dụ muốn hiển thị một list ‘posts’, và ở dưới mỗi ‘post’ là một list ‘like’, bao gồm cả tên người dùng và avatar. Cách giải quyết đơn giản là thay đổi API của ‘posts’ để nó bao gồm một mảng ‘like’ chứa thông tin về người dùng.

<pre><code>
[
  {
    type: 'post 1',
  like: [
    {
      name: 'user 1',
    avatar: 'img1.jpg'
    }
  ]
  },
   {
    type: 'post 2',
  like: [
    {
      name: 'user 2',
    avatar: 'img2.jpg'
    }
  ]
  }
]
</code></pre>

Nhưng khi làm như vậy cho các app mobile thì tốc độ của chúng chạy quá chậm. Vì thế sẽ cần tới 2 endpoints, một với likes và một thiếu chúng.

Từ đó có thêm một vấn đề khác xuất hiện: trong khi posts được lưu trữ trong một MySQL database thì likes lại được lưu tại Redis store. Mở rộng vấn đề trên ra với việc Facebook phải quản lí vô số data source và API clients thì cũng là điều dễ hiểu khi REST APIs bị đánh giá là cũ kĩ bởi những hạn chế của nó.

Giải pháp mà Facebook đưa ra đến từ một ý tưởng rất đơn giản: Thay vì có rất nhiều “endpoint” thì sẽ dùng chỉ một “endpoint” thông minh với khả năng tiếp thu những Query phức tạp rồi đưa ra output data với loại type tùy theo yêu cầu của client.

Thực tế mà nói, GraphQL như là một layer nằm giữa client và data source, sau khi nhận yêu cầu của client thì nó sẽ kiếm những thông tin cần từ các data source và đưa lại cho client theo format họ muốn.

### 4. So sánh REST và GraphQL

Trước tiên chúng ta cần phải hiểu được REST là gì?

Những khái niệm đầu tiên về REST(REpresentational State Transfer) được đưa ra vào năm 2000 trong luận văn tiến sĩ của Roy Thomas Fielding (đồng sáng lập giao thức HTTP). Trong luận văn ông giới thiệu khá chi tiết về các ràng buộc, quy ước cũng như cách thức thực hiện với hệ thống để có được một hệ thống REST.

Hiểu đơn giản nó là một bộ các ràng buộc và quy ước , khi áp dụng đầy đủ vào hệ thống của bạn thì ta có 1 hệ thống REST.

REST Contraints:

- Hệ thống hoạt động theo mô hình client-server, trong đó server là tập hợp các service nhỏ lắng nghe các request từ client. Với từng request khác nhau thì có thể một hoặc nhiều service xử lý.
- Stateless (phi trạng thái). Đơn giản server và client không lưu trạng thái của nhau -> mỗi request lên server thì client phải đóng gói thông tin đầy đủ để thằng server hiểu được. Điều này giúp hệ thống của bạn dễ phát triển,bảo trì, mở rộng vì không cần tốn công CRUD trạng thái của client . Hệ thống phát triển theo hướng này có ưu điểm nhưng cũng có khuyết điểm là gia tăng lượng thông tin cần truyền tải giữa client và server.
- Khả năng caching : Các response có thể lấy ra từ cache. Bằng cách cache các response , server giảm tải việc xử lý request, còn client cũng nhận được thông tin nhanh hơn. Ở đây ta đặt 1 thằng cache vào giữa : client- cache- server.
- Chuẩn hóa các interface : Đây là một trong những đặc tính quan trọng của hệ thống REST. Bằng cách tạo ra các quy ước chuẩn để giao tiếp giữa các thành phần trong hệ thống, bạn đã đơn giản hóa việc client có thể tương tác với server. Các quy ước này áp dụng cho toàn bộ các service giúp cho người sử dụng hệ thống của bạn dễ dụng hơn. Dễ hiểu hơn trên hệ thống bạn đặt ra 1 chuẩn API để người dùng dù là mobile, web đều có thể kết nối vào được. Hệ thống REST có yếu điểm ở đây vì khi chuẩn hóa rồi ta không thế tối ưu từng kết nối.-
- Phân lớp hệ thống : trong hệ thống REST bạn chia tách các thành phần hệ thống theo từng lớp, mỗi lớp chỉ sử dụng lớp ở dưới nó và giao tiếp với lớp ở ngay trên nó mà thôi. Điều này giúp bạn giảm độ phức tạp của hệ thống,giúp các thành phần tách biệt nhau từ đó dễ dàng mở rộng từng thành phần:

[![Hình 2: Mô hình REST](https://raw.githubusercontent.com/tuansaker1412/int3507-2017/nhom4/Nhom%204%20GraphQL/Tutorial/img/rest.png)](https://raw.githubusercontent.com/tuansaker1412/int3507-2017/nhom4/Nhom%204%20GraphQL/Tutorial/img/rest.png)

<center>Hình 2: Mô hình REST</center>

<b>So sánh REST và GraphQL</b>

<i>Giống nhau:</i>
- Cả hai đều có địa chỉ về một tài nguyên và có thể chỉ định ID cho các tài nguyên đó.
- Cả hai đều có thể lấy được dữ liệu thông qua một yêu cầu HTTP GET với một URL.
- Cả hai đều có thể trả lại dữ liệu JSON trong một request.
- Danh sách các endpoints trong REST API tương tự như danh sách các trường trên các kiểu Query -và Mutation trong một GraphQL API. Cả hai đều là những điểm nhập vào dữ liệu.
- Cả hai đều có cách để phân biệt nếu một request API là có nghĩa là để đọc dữ liệu hoặc ghi.
- Endpoints trong REST và các trường trong GraphQL đều kết thúc bằngchức năng gọi trên server.
- Cả REST và GraphQL thường dựa vào các framework và thư viện để xử lý các boilerplate mạng nitty-gritty.

<i>Khác nhau:</i>

| REST | GraphQL |
| ------ | ------ |
| Endpoints mà bạn gọi là định danh của đối tượng đó | Định danh của đối tượng tách biệt với cách bạn lấy nó |
| Hình dạng và kích thước của tài nguyên được xác định bởi server | Server khai báo những tài nguyên có sẵn, và khách hàng yêu cầu những gì nó cần vào thời điểm đó |
| Bạn phải gọi nhiều endpoints để tìm nạp các tài nguyên có liên quan | Bạn có thể đi qua từ điểm vào đến dữ liệu có liên quan, theo các mối quan hệ được xác định trong lược đồ, trong một request |
| Không có khái niệm first-class về URL lồng nhau | Không có sự khác biệt giữa các trường trên kiểu truy vấn và các trường trên bất kỳ loại nào khác, ngoại trừ chỉ truy cập vào loại truy vấn ở gốc của một truy vấn. Ví dụ: bạn có thể có đối số trong bất kỳ trường nào trong một truy vấn |
| Bạn chỉ định viết bằng cách thay đổi động từ HTTP từ GET sang cái gì khác như POST | Bạn thay đổi một từ khóa trong truy vấn |
| Mỗi yêu cầu thường gọi chính xác một hàm xử lý route | Một truy vấn có thể gọi nhiều resolvers để xây dựng một response lồng nhau với nhiều tài nguyên |
| Bạn xây dựng hình dạng của response của chính mình | Hình dạng của response được xây dựng bởi thư viện thực hiện GraphQL để phù hợp với hình dạng của truy vấn |

<b>CÓ NÊN ÁP DỤNG GRAPHQL KHÔNG?</b>

Bạn nên áp dụng GraphQL nếu bạn có định hướng phát triển nhiều dòng sản phẩm, vì đặc tính của GraphQL là phục vụ client, nên càng nhiều client thì GraphQL càng tỏ rõ ưu điểm.
