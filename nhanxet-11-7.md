# Nhận xét nhóm 7 - Dafny
## Nhận xét bởi: nhóm 11
---
### 1. Điểm chưa tốt

**Lỗi chính tả**

- Không viết hoa: windows, dafny.
- Tab:
	- Giới thiệu( Introduction), tính đúng đắn(bộ phận hoặc toàn thể), boolean( true_false ),...
	- Bằng cách kiểm tra này trước khi điền vào lemma,chúng tôi đảm bảo rằng chúng đang cố gắng để chứng minh đúng,...
- Sai chính tả: qui nạp
- Thừa ký tự: 
	- ...chọn đúng tệp tin; cần đặt, càng sớm càng tốt.<br Tùy chọn,...
- Viết hoa và không đồng bộ khi sử dụng các từng cùng ý nghĩa: lỗi này xảy ra và lặp lại nhiều lần.
	- VD: cặp chẵn lẻ - VD: Việc thực hiện hàm Ackermann,...
	- tuần tự (sequences) - Tập hợp (Sets),...
	- provides (cung cấp) - tuần tự (sequences),...
	- Map – maps – map – bản đồ, method – Methods – phương thức,...

**Nội dung**

- Dùng không đúng từ: Không giống các phương pháp (phương thức), hàm có thể xuất hiện trong các biểu thức.
- Không rõ nghĩa và lỗi diễn đạt: sau đây là một vài chỗ điển hình.
	- Ví dụ, 4 trong m và 5 trong m, nhưng 7 trong m ?
	- Các chức năng cần các yếu tố đầu tiên, tính số của mình, sau đó thêm nó vào phần còn lại của tiến trình. Nếu a là lâu dài, sau đó nó có thể là một trong khi trước khi quá trình cán này thực sự đạt đến count(b). Do đó, Dafny không cố gắng để unwrap hơn là một vài cuộc gọi đệ quy. (Hai, để được chính xác. Xem giấy máy tính với một người giải quyết SMT Amin, Leino và Rompf, TAP 2014). Đây là một ví dụ về một tài sản mà yêu cầu một bổ đề để chứng minh ?
	- Bây giờ điều này trông rất giống với những biểu hiện mà chúng tôi đã nhận sau khi mở rộng count(a + b) ?
	- Các đối số, chúng tôi đang cố gắng để làm cho là quy nạp. Chúng ta có thể chứng minh mục đích của chúng tôi cho rằng một phiên bản nhỏ hơn của vấn đề là sự thật. Điều này là chính xác các khái niệm của cảm ứng: sử dụng một phiên bản nhỏ hơn của một vấn đề để chứng minh một một lớn hơn. Để làm điều này, chúng ta gọi là sở hữu đệ quy từ trong mã của chúng tôi. Nó là một phương pháp, do đó, nó có thể được kích hoạt bất cứ khi nào chúng ta cần nó ?...

*Tổng kết:*

- Cùng một từ với một ý nghĩa không nên chỗ thì dùng tiếng Việt chỗ lại để tiếng Anh.
- Phần mục lục đầu tiên nên bỏ các dấu chấm trước số thứ tự của các mục.

### 2. Điểm tốt

- Phần mở đầu tốt về cách diễn đạt và nội dung trình bày.
- Có nhiều ví dụ và giải thích ví dụ đơn giản, dễ hiểu.
- Có trích dẫn nguồn và tài liệu tham khảo để mọi người có thể đọc hiểu thêm.
- Nội dung tổng thế khá đầy đủ về các khái niệm, vấn đề trong Dafny.
- Trình bày bố cục tài liệu rõ ràng từng mục dễ đọc, có mục lục.

*Tổng kết:*

- Nhìn chung tài liệu đảm bảo về mặt nội dung cần đưa ra và trình bày tổng thể rõ ràng, người đọc có thể nắm được thông tin chính mà nhóm muốn truyền đạt.
- Đảm bảo về mặt độ dài và có đầu tư thời gian tìm hiểu, trình bày.

### 3. Chấm điểm

**Nhóm:** 9.0/10
