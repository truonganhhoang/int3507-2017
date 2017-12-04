# Nhận xét nhóm 5 - Facebook chatbot
## Nhận xét bởi: nhóm 10

### Ưu điểm
* Về ứng dụng:
- Sử dụng được công nghệ Chatbot Facebook, một xu hướng phổ biến hiện nay, và áp dụng để giải quyết vấn đề thực tế.
- Có crawl đưọc dữ liệu, cung cấp nhiều API endpoint, tìm kiếm trên Elasticsearch sử dụng cơ chế Multi Match Query nên truy vấn trả dữ liệu nhanh.
- Có chia thành các hệ thống con theo chức năng trao đổi qua API (hướng phát triển).

* Về báo cáo
- Có mục lục tham chiếu rõ ràng đến các phần.
- Có demo hình ảnh luồng hoạt động của hệ thống, các bước tạo app facebook và lấy token, webhook rõ ràng.
- Báo cáo đầy đủ giới thiệu về các khái niệm, sự kiện, có chú thích đầy đủ, các bước dẫn dắt, trình bày rõ ràng.

### Nhược điểm
* Về ứng dụng
- Máy chủ tìm kiếm chưa độc lập, cần độc lập máy chủ này và nâng cao hiệu suất tìm kiếm.

* Về báo cáo
- Chưa có hình ảnh demo về ứng dụng (Source code sguet chatbot không thể công bố nhưng nên có các hình ảnh demo chat với con bot này).
- Một số phần báo cáo chưa chi tiết như phần tìm kiếm trên Elasticsearch, phần phân tích kiểm tra hành động (làm thế nào để phát hiện hành động đó là hành động tìm kiếm hỏi đáp hay hành động không hợp lệ).

### Góp ý
- Nên bổ sung các hình ảnh demo về ứng dụng.
- Bổ sung thêm dữ liệu về các cuộc thi, các loại học bổng để sinh viên tra cứu.
- Nâng cấp máy chủ để cải thiện tốc độ truy vấn, hỗ trợ nhiều người dùng cùng lúc.

## Điểm đánh giá: 9.5
