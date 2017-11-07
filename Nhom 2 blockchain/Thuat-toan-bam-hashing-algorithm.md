# Thuật toán băm (hashing algorithm)

**Thuật toán băm (hashing algorithm) là một vũ khí quan trọng trong bất kỳ công cụ mã hóa nào. Thuật toán băm ở khắp mọi nơi trên internet, ngoài việc được sử dụng để bảo mật mật khẩu, chúng cũng được xem là một phần không thể tách rời của hầu hết các loại tiền tệ mã hóa như Bitcoin và Litecoin.**
**Bản chất chính của một thuật toán băm là hàm một chiều – nói cách khác, bạn có thể tìm được đầu ra từ đầu vào nhưng bạn không thể có được đầu vào từ đầu ra; cũng giống như đường cong e-lip, bạn không thể lấy được khoá chính từ khóa phụ. Các loại tài sản khác khi cho vào cùng một đầu sẽ có cùng một đầu ra.**
Hầu hết các thuật toán băm, bao gồm cả SHA và RIPEMD đều có nguồn gốc từ MD4. Thuật toán băm MD4 được phát triển đặc biệt bởi **Ronald Rivest**, rất dễ dàng sử dụng trên phần mềm. Các thuật toán băm MD4 và SHA sử dụng các biến 32 bit với hàm Boolean Bitwise như : hàm logic AND, OR và  XOR được khai thác để hoạt động từ đầu vào đến đầu ra.
Vậy các thuật toán băm làm việc như thế nào – trong trường hợp này, ta sẽ lấy ví dụ hàm SHA1:

**1 – Tạo ra năm biến**

> H0 – 01100111010001010010001100000001

> H1 – 11101111110011011010101110001001

> H2 – 10011000101110101101110011111110

> H3 – 00010000001100100101010001110110

> H4 – 11000011110100101110000111110000

**2- Sau đó chọn một từ để “băm”.** Trong trường hợp này, chúng tôi sẽ chọn từ “*CRYPTO*“

**3 – Chuyển đổi từ đó sang mã ASCII** – “American Standard Code for Interchange” – Bộ mã thông tin tiêu chuẩn của Hoa Kỳ. Mỗi chuỗi ASCII đều được gán số mã hóa.
CRYPTO – 67-82-89-80-84-79

**4 – Chuyển đổi mã ASCII sang nhị phân –**

> CRYPTO – 01000011-01010010-01011001-01010000-01010100-01001111

**5- Gom chuỗi lại với nhau và thêm số “1” vào cuối chuỗi.**

> CRYPTO – 0100001101010010010110010101000001010100010011111

**6- Thêm một vài số 0 để cho chuỗi thành 448 mod 512** – (số học modular, giống như một đồng hồ có 512 giờ). Vì vậy, chuỗi 48 bit (ký tự) với một số được thêm vào sẽ cần 399 số 0 được thêm vào cuối, và chuỗi 64 bit (hoặc 512 bit – kí tự), bạn sẽ cần 447 số 0.

> 01000011010100100101100101010000010101000100111110­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­

**7- Thêm chuỗi ban đầu vào trường 64 bit còn sót lại phía sau mô-đun 448.** Chuỗi có độ dài 48 ký tự được biểu diễn bằng nhị phân là 110000. Vì vậy, thêm phần dưới đây vào cuối của chuỗi ở bước 6

> 0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­0­1­1­0­0­0­0­

**8- Chia chuỗi thành 16 phần với 32 ký tự/ bit.**

> 01000011010100100101100101010000
> 01010100010011111000000000000000
> 00000000000000000000000000000000
> 00000000000000000000000000000000
> 00000000000000000000000000000000
> 00000000000000000000000000000000
> 00000000000000000000000000000000
> 00000000000000000000000000000000
> 00000000000000000000000000000000
> 00000000000000000000000000000000
> 00000000000000000000000000000000
> 00000000000000000000000000000000
> 00000000000000000000000000000000
> 00000000000000000000000000000000
> 00000000000000000000000000000000
> 00000000000000000000000000110000

**9- Chuyển các bit 16 x 32 ký tự thành 80 ký tự** bằng cách sử dụng chức năng vòng lặp. Đầu tiên hãy chọn bốn từ cho lần chạy đầu tiên, thông qua vòng lặp là các chuỗi 1,3,9 & 14 trong bước 8
Lần lặp tiếp theo, chúng ta sẽ sử dụng các từ 2,4,10,15 trong bước 8
Quá trình tiếp theo là XoR các từ với nhau. XoR là một chức năng tính toán cơ bản cho phép đầu ra bằng q chỉ khi cả hai đầu vào có cùng vị trí – nếu không đầu ra sẽ bằng 0
Công thức : ((14 XOR 9) XOR 3) XOR 1) là:

> 00000000000000000000000000000000

XOR

> 01000011010100100101100101010000

Là

> 01000011010100100101100101010000

10 – Thực hiện phép quay trái – tức là tịnh tiến số còn lại sang phải 1 số.
Nên

> 01000011010100100101100101010000

Sẽ trở thành

> 10000110101001001011001010100000

Quá trình này sau đó được lặp lại cho đến khi có 80 từ, hoặc chuỗi 32 bit.
**10- Bước tiếp theo là thiết lập hàm** theo thứ tự cụ thể hoạt động trên 5 biến được đặt ở bước 1. Các hàm kết hợp các toán tử AND, OR & NOT, kết hợp với việc tịnh tiến sang trái
Kết quả cuối cùng, bạn có 5 biến số:

> H0 – 01000100101010010111000100110011
> H1- 01010000111001010011100001011000
> H2-11110000010110000100011000111101
> H3-01001011111101111111000111100101
> H4-01000010110110011100101001001011

**11- Chuyển đổi các biến H thành mã hex:**

> H0- 44a97133
> H1- 50e53858
> H2- f058463d
> H3 – 4bf7f1e5
> H4 – 42d9ca4b

**12- Gom các biến lại với nhau để tạo ra hàm băm tiêu chuẩn:**

> 44a9713350e53858f058463d4bf7f1e542d9ca4b

Đây là quá trình hoạt động cơ bản của hàm băm – chỉ đơn giản là chuyển một số thành nhị phân sau đó thực hiện các hàm đơn giản, hoạt động thông qua các quy trình bán dẫn và BUS cơ bản như AND, XOR, NOT, Rotate & OR. Đây là một phần lý do mà ASIC, hoặc ứng dụng chip cụ thể có thể thiết kế tối ưu hóa hàm băm. Trong trường hợp các chip SHA-256 đã được thiết kế đặc biệt để tối ưu hóa sự lặp đi lặp lại trong các bước để tăng tốc độ tạo ra hàm băm từ đầu vào. **Khi khai thác, bạn có thể tính toán để tăng số hàm băm mỗi giây bằng cách lặp lại các tham số nonce và extra nonce để có thể tăng tốc độ đào vào kiếm được nhiều lợi nhuận hơn**.
