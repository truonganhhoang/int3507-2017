# [Nhóm 4 - GraphQL](http://graphql.org/)

<img src="http://graphql.org/img/logo.svg" width="300">

## Giới thiệu về GraphQL

### 1. GraphQL là gì?

GraphQL[1](Graph Query Language) là một ngôn ngữ truy vấn dành cho các API[2] được tạo ra với mục đích hướng tới những dạng dữ liệu phức tạp, nhiều lớp với nhiều thành phần phụ thuộc được sử dụng ngày càng phổ biến trong các application hiện đại. GraphQL cung cấp một mô tả đầy đủ và dễ hiểu về dữ liệu trong API của bạn, nó cho phép máy khách (client) có quyền yêu cầu chính xác những gì họ cần, giúp dễ dàng phát triển các API và cho phép các công cụ phát triển mạnh mẽ.

GraphQL do Facebook tạo ra từ năm 2012 cung cấp giao thức chung cho phép giao tiếp giữa người dùng (client) và máy chủ (server) để cập nhật và lấy dữ liệu.

<i>Vậy API là gì? </i>

API (Application Programming Interface - giao diện lập trình ứng dụng)  là 1 giao tiếp phần mềm được dùng bởi các ứng dụng khác nhau. Cũng giống như bàn phím là một thiết bị giao tiếp giữa ngườI dùng và máy tính, API là 1 giao tiếp phần mếm chẳng hạn như giữa chương trình và hệ điều hành (HĐH).

Vậy API theo GraphQL sẽ có gì khác biệt so với các dạng SQL khác hay REST API[3]?

GraphQL API sẽ giúp bạn có thể thay đổi câu truy vấn của mình bằng cách thêm hoặc bớt các trường mà không cần biết trường đó có kiểu dữ liệu là gì mà vẫn không bị ảnh hưởng tới câu truy vấn hiện có. So với các dạng SQL khác thì GraphQL giúp việc lưu trữ và biểu diễn các kết quả thu được hiệu quả hơn, việc truy vấn dễ dàng hơn và có format đúng chuẩn, việc giữ các mối quan hệ của các dữ liệu trong GraphQL sẽ không cần quá nhiều điều kiện khi mà các mối quan hệ trở nên trừu tượng hơn. So sánh với REST API chúng ta sẽ xem ở phần sau.

[![Hình 1: Mô hình GraphQL](https://www.businesscard.vn/blog/wp-content/uploads/2016/03/graphql-la-gi-1024x593.png)](https://www.businesscard.vn/blog/wp-content/uploads/2016/03/graphql-la-gi-1024x593.png)

<center>Hình 1: Mô hình GraphQL</center>

Hình 1 mô tả về việc truy vấn để lấy dữ liệu từ client thông qua GraplQL server.
Client truy vấn đến máy chủ GraphQL bằng các truy vấn với đặc điểm: format của dữ liệu trả về được mô tả trong câu truy vấn và được định nghĩa ở phía client thay vì ở máy chủ. Nói đơn giản hơn, đây là truy vấn hướng client, cấu trúc dữ liệu không khô cứng giống khuôn mẫu từ máy chủ (REST API) mà thay đổi theo từng ngữ cảnh sao cho hiệu quả nhất đối với client mà chỉ cần dùng duy nhất một điểm cuối (endpoint)[4].

### 2. Tổng quan về GraphQL

GraphQL là một cú pháp mô tả cách yêu cầu lấy dữ liệu, và thường được dùng để load data từ một server cho client. GraphQL bao gồm 3 điểm đặc trưng sau:

- Nó cho phép client xác định chính xác những gì dữ liệu họ cần.
- Nó làm cho việc tổng hợp dữ liệu từ nhiều nguồn dễ dàng hơn.
- Nó sử dụng một mẫu hệ thống để mô tả dữ liệu.

Thế thì GraphQL hoạt động như thế nào? ta dùng nó như thế nào?

Điều quan trọng là GraphQL không phải là một ngôn ngữ truy vấn thực sự, nó chỉ là giao thức giao tiếp giữa client và server, tất cả client (web, mobile) đều có thể giao tiếp với bất kỳ server nào mà sử dụng ngôn ngữ GraphQL.

Khái niệm chính về GraphQL bao gồm:

- Cấu trúc phân tầng (Hierarchical)
- Hướng sản phẩm (Product-centric)
- Định kiểu mạnh (Strong-typing)
- Truy vấn hướng client (Client-specified queries)
- Nội quan (Introspective)

<i>Cấu trúc phân tầng</i>

Hầu hết phát triển sản phẩm ngày nay liên quan đến việc tạo ra và vận dụng của các cấu trúc phân tầng. Để đạt được sự tương đương với cấu trúc của các ứng dụng này, một truy vấn GraphQL sẽ là một tập hợp các trường. Truy vấn được định hình giống như dữ liệu nó trả về. Đây là một cách tự nhiên để các kỹ sư sản phẩm mô tả các yêu cầu về dữ liệu.

<i>Hướng sản phẩm</i>

GraphQL không phải bị hướng theo bởi các yêu cầu của quan điểm và các kỹ sư đầu cuối viết ra. Nó bắt đầu với cách suy nghĩ và yêu cầu của các kỹ sư đầu cuối và xây dựng ngôn ngữ và giới hạn thời gian chạy cần thiết trong mức cho phép.

<i>Định kiểu mạnh</i>

GraphQL đinh rõ kiểu dữ liệu khá tốt. Cho truy vấn, công cụ có thể đảm bảo rằng truy vấn có cả cú pháp chính xác và hợp lệ trong hệ thống loại GraphQL trước khi thực hiện, nghĩa là ở thời điểm phát triển và server có thể đảm bảo chắc chắn về kiểu và tính chất của dữ liệu trả về. Điều này làm cho việc xây dựng các công cụ cho client chất lượng cao dễ dàng hơn.

<i>Truy vấn hướng client</i>

Trong GraphQL, đặc điểm kỹ thuật cho các truy vấn được mã hoá trong cliet chứ không phải là server. Những truy vấn này được chỉ định ở cấp độ mức trường(field). Trong phần lớn các ứng dụng được viết mà không có GraphQL, server xác định dữ liệu được trả lại trong các endpoint những kịch bản khác nhau của nó. Mặt khác, một truy vấn GraphQL trả về chính xác những gì một client yêu cầu và không có dư thừa bất kì trường dữ liệu nào trong reponse.

<i>Nội quan</i>

GraphQL là nội suy. Client và công cụ có thể truy vấn hệ thống bằng cách sử dụng cú pháp GraphQL. Đây là một nền tảng mạnh mẽ để xây dựng các công cụ và phần mềm cho client, chẳng hạn như phân tích cú pháp dữ liệu đến vào các giao diện mạnh mẽ. Nó đặc biệt hữu ích trong các ngôn ngữ đánh máy tĩnh như Swift, Objective-C và Java, vì nó tránh được sự cần thiết phải có mã lặp đi lặp lại và dễ bị lỗi để shuffle JSON nguyên dạng, không có phân loại vào các đối tượng có vai trò quan trọng.

Các bạn có thể tìm hiểu thêm ở [đây](https://facebook.github.io/graphql/October2016/).

### 3. Cách giải quyết vấn đề của GraphQL

<i>Vấn đề là gì?</i>

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

Từ đó có thêm một vấn đề khác xuất hiện: trong khi posts được lưu trữ trong một MySQL database thì likes lại được lưu tại Redis store[5]. Mở rộng vấn đề trên ra với việc Facebook phải quản lí vô số data source và API clients thì cũng là điều dễ hiểu khi REST API bị đánh giá là cũ kĩ bởi những hạn chế của nó.

<i>Vậy cách giải quyết ở đây là gì?</i>

Giải pháp mà Facebook đưa ra đến từ một ý tưởng rất đơn giản: Thay vì có rất nhiều “endpoint” thì sẽ dùng chỉ một “endpoint” thông minh với khả năng tiếp thu những Query phức tạp rồi đưa ra output data với loại type tùy theo yêu cầu của client.

Thực tế mà nói, GraphQL như là một tầng(layer) nằm giữa client và data source, sau khi nhận yêu cầu của client thì nó sẽ kiếm những thông tin cần từ các data source và đưa lại cho client theo format họ muốn.

### 4. So sánh REST và GraphQL

<i>Trước tiên chúng ta cần phải hiểu được REST là gì?</i>

Những khái niệm đầu tiên về REST(REpresentational State Transfer) được đưa ra vào năm 2000 trong luận văn tiến sĩ của Roy Thomas Fielding (đồng sáng lập giao thức HTTP). Trong luận văn ông giới thiệu khá chi tiết về các ràng buộc, quy ước cũng như cách thức thực hiện với hệ thống để có được một hệ thống REST.

Hiểu đơn giản nó là một bộ các ràng buộc và quy ước , khi áp dụng đầy đủ vào hệ thống của bạn thì ta có 1 hệ thống REST.

Các ràng buộc của REST:

- Hệ thống hoạt động theo mô hình client-server, trong đó server là tập hợp các service nhỏ lắng nghe các request[6] từ client. Với từng request khác nhau thì có thể một hoặc nhiều service xử lý.
- Stateless (phi trạng thái). Đơn giản server và client không lưu trạng thái của nhau -> mỗi request lên server thì client phải đóng gói thông tin đầy đủ để thằng server hiểu được. Điều này giúp hệ thống của bạn dễ phát triển,bảo trì, mở rộng vì không cần tốn công CRUD[7] trạng thái của client. Hệ thống phát triển theo hướng này có ưu điểm nhưng cũng có khuyết điểm là gia tăng lượng thông tin cần truyền tải giữa client và server.
- Khả năng caching[8]: Các response[9] có thể lấy ra từ cache. Bằng cách cache các response, server giảm tải việc xử lý request, còn client cũng nhận được thông tin nhanh hơn. Ở đây ta đặt 1 thằng cache vào giữa: client-cache-server.
- Chuẩn hóa các interface : Đây là một trong những đặc tính quan trọng của hệ thống REST. Bằng cách tạo ra các quy ước chuẩn để giao tiếp giữa các thành phần trong hệ thống, bạn đã đơn giản hóa việc client có thể tương tác với server. Các quy ước này áp dụng cho toàn bộ các service giúp cho người sử dụng hệ thống của bạn dễ dụng hơn. Dễ hiểu hơn trên hệ thống bạn đặt ra 1 chuẩn API để người dùng dù là mobile, web đều có thể kết nối vào được. Hệ thống REST có yếu điểm ở đây vì khi chuẩn hóa rồi ta không thế tối ưu từng kết nối.
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

Bạn nên áp dụng GraphQL nếu bạn có định hướng phát triển nhiều dòng sản phẩm và muốn cơ cấu lại cơ sở dữ liệu, vì đặc tính của GraphQL là phục vụ client, nên càng nhiều client thì GraphQL càng tỏ rõ ưu điểm. GraphQL còn là một tài liệu được lưu giữ đầy đủ, có đầy đủ đặc điểm với một giao diện hay ho, một tài liệu tham khảo chính thức được sử dụng trong JavaScript và cò tránh một số lựa chọn thiết kế phức tạp mà REST buộc bạn phải làm.

<b>Chú thích</b>

[1] http://graphql.org/

[2] https://vi.wikipedia.org/wiki/Giao_di%E1%BB%87n_l%E1%BA%ADp_tr%C3%ACnh_%E1%BB%A9ng_d%E1%BB%A5ng

[3] RESTful API là một tiêu chuẩn dùng trong việc thết kế các thiết kế API cho các ứng dụng web để quản lý các resource. RESTful là một trong những kiểu thiết kế API được sử dụng phổ biến nhất ngày nay. Trọng tâm của REST quy định cách sử dụng các HTTP method (như GET, POST, PUT, DELETE...) và cách định dạng các URL cho ứng dụng web để quản các resource.

Nguồn: https://www.codehub.vn/RESTful-API-Cho-Nguoi-Bat-Dau

[4] Endpoint: Endpoint thực chất chính là URL: https://abc.com/foo/bar và lúc này ta gọi /foo/bar là Endpoint vì Url đằng trước thì giống nhau trong hầu hết các trường hợp.

[5] Redis: Redis là một dự án mã nguồn mở, dự án có hơn 20k stars và hơn 7k forks trên Github. Redis thường được coi như là data structures server, điều đó có nghĩa là nó cung cấp quyền truy cập dữ liệu thông qua một tập các câu lệnh, các request sử dụng cấu trúc server-client với giao thức TCP sockets và một giao thức đơn giản khác. Vì vậy, các tiến trình khác nhau có thể query hay modify cùng một dữ liệu dưới nhiều cách khác nhau.

[6] request: Request có thể hiểu nhanh là thông tin gửi từ client lên server.

[7] CRUD: Các phương thức thao tác trên cơ sở dữ liệu là Create, Read, Update và Delete.

[8] caching: là việc lưu trữ bản sao của những tài liệu web sao cho gần với người dùng, cả về mặt chức năng trong web client hoặc những web caching servers riêng biệt.

[9] response: Reponse là dữ liệu mà server trả về cho client.

Redis là một in-memory data structure store, điều này có nghĩa là Redis lưu dữ liệu ở trong bộ nhớ chính (RAM), lí giải tại sao Redis lại nhanh.

Nguồn: https://viblo.asia/p/toi-uu-rails-app-voi-redis-nwmkyEZMkoW

<i>Tài liệu tham khảo:</i>

http://graphql.org/

https://www.reindex.io/blog/how-facebooks-graphql-will-change-backend-development/

https://reactjs.org/blog/2015/05/01/graphql-introduction.html

https://viblo.asia/p/graphql-3OEqGjJQG9bL

http://cuthanh.com/server/gioi-thieu-ve-graphql

https://blog.topdev.vn/nhung-dieu-ban-can-phai-biet-ve-graphql-cong-nghe-moi-cho-web-developer/

https://dev-blog.apollodata.com/graphql-vs-rest-5d425123e34b
