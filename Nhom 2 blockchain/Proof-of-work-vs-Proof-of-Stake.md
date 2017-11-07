# Proof of work vs Proof of Stake


![article image](https://congnghetienao.com/assets/plugins/kcfinder/upload/image/anh_bai_viet/Proof-of-Work-PoW-va-Proof-of-Stake-PoS-la-gi.jpg)


**1. Proof of Work là gì?**
Proof of Work là yêu cầu một người sử dụng dịch vụ chứng minh rằng họ đã thực hiện một hành động mang tính chất cống hiến (thường là chi phí để thực hiện các phép toán) để ngăn chặn các cuộc tấn công mạng như spam và từ chối chuyên dụng dịch vụ (DDoS).
Liên quan đến Bitcoin, PoW có nghĩa là bằng chứng ghi nhận các cống hiến của thợ đào bitcoin trong công cuộc khai thác tiền ảo.
Thợ đào được ghi nhận PoW thường được thưởng kèm với đồng tiền mới được tạo ra và phí giao dịch.
Quyền ảnh hưởng của thợ đào lên đồng thuận mạng (network consensus) và cả phần thưởng của họ được quyết định bởi khối lượng giao dịch mà họ giải quyết.
Nói cách khác, PoW là yêu cầu tạo ra một khối trên sổ kế toán phân phối blockchain.
Khai thác mỏ đóng vai trò như:
- Để xác minh tính hợp pháp của một giao dịch.
- Để tạo tiền tệ kỹ thuật số mới bằng cách thưởng cho thợ đào.
Khi bạn muốn thiết lập một giao dịch:
- Các giao dịch được đóng gói lại với nhau thành một khối.
- Thợ mỏ xác minh rằng các giao dịch trong mỗi khối là hợp pháp.
- Để làm như vậy, người thợ mỏ cần giải quyết một câu đố toán học được gọi là vấn đề PoW.
- Một phần thưởng sẽ được trao cho các thợ mỏ đầu tiên giải quyết từng vấn đề khối.
Tất cả những người thợ đào  cạnh tranh để mình là người đầu tiên tìm ra giải pháp cho vấn đề khối này.
Khi một người thợ đào tìm được giải pháp phù hợp, người đó sẽ tuyên bố tin tức cho toàn bộ mạng, và nhận được một giải thưởng bằng tiền ảo.
**1.1 Giải thích sâu hơn về POW**
**Proof of Work** – bằng chứng công việc là một phần dữ liệu khó tạo ra *(đắt đỏ, tốn nhiều thời gian)* nhưng dễ dàng để người khác xác minh và thỏa mãn các yêu cầu nhất định. Việc tạo ra bằng chứng công việc có thể là một quá trình ngẫu nhiên với xác suất thấp nên đòi hỏi phải có nhiều thử nghiệm và sai sót trước khi đưa ra bằng chứng công việc hợp lệ. Bitcoin sử dụng hệ thống bằng chứng công việc **Hashcash**.
Một ứng dụng của ý tưởng này là sử dụng Hashcash như một cách để **ngăn chặn gửi email rác**, yêu cầu phải có bằng chứng về nội dung của email *(bao gồm cả địa chỉ đến)* trên mỗi email. Email hợp pháp sẽ có thể làm việc để tạo ra bằng chứng một cách dễ dàng *(không yêu cầu nhiều công việc trong một email duy nhất)*nhưng người gửi email rác hàng loạt sẽ gặp khó khăn trong việc tạo ra các bằng chứng cần thiết *(đòi hỏi phải có các nguồn lực tính toán khổng lồ).*
Các bằng chứng công việc Hashcash được sử dụng trong Bitcoin để **tạo ra khối.** Để một khối được các thành viên tham gia mạng lưới chấp nhận, các thợ đào phải hoàn thành bằng chứng công việc bao gồm tất cả các dữ liệu trong khối. Độ khó của công việc này được điều chỉnh để hạn chế tốc độ mà các khối mới có thể được tạo ra bởi mạng lưới 10 phút cho mỗi khối. Do xác suất tạo khối thành công rất thấp khiến cho không ai có thể đoán trước được máy tính làm việc nào trong mạng lưới sẽ có thể tạo ra khối tiếp theo.
Để một khối trở nên hợp lệ, nó phải băm đến một giá trị nhỏ hơn mục tiêu hiện tại; điều này có nghĩa là mỗi khối chỉ ra rằng công việc đã được thực hiện để tạo ra nó. Mỗi khối có chứa các băm của khối trước, do đó mỗi khối có một chuỗi các khối cùng chứa một lượng lớn công việc. Thay đổi một khối *(chỉ có thể được thực hiện bằng cách tạo một khối mới có chứa cùng một phần tiền nhiệm)* đòi hỏi phải tái tạo tất cả các phần kế thừa và làm lại công việc mà chúng chứa. Điều này bảo vệ chuỗi khối khỏi bị giả mạo.
Chương trình bằng chứng công việc được sử dụng rộng rãi nhất dựa trên **SHA-256** và được giới thiệu như một phần của Bitcoin. Một số thuật toán băm khác được sử dụng cho bằng chứng công việc bao gồm **Scrypt, Blake-256, CryptoNight, HEFTY1, Quark, SHA-3, scrypt-jane, scrypt-n** và các kết hợp của chúng.
Có hai loại giao thức bằng chứng công việc.
**- Giao thức phản ứng thách thức** giả sử một liên kết tương tác trực tiếp giữa người yêu cầu *(máy khách)* và nhà cung cấp *(máy chủ).* Nhà cung cấp chọn một thách thức, giả sử như một mục trong một tập hợp với một tài sản, người yêu cầu sẽ tìm thấy phản hồi thích hợp trong tập hợp, được gửi lại và kiểm tra bởi nhà cung cấp. Khi thách thức được chọn ngay tại chỗ bởi nhà cung cấp, khó khăn của nó có thể được điều chỉnh theo sức nặng hiện tại của nó. Công việc phía bên yêu cầu có thể bị hạn chế nếu giao thức phản ứng thách thức có một giải pháp đã biết *(được chọn bởi nhà cung cấp)* hoặc được biết là tồn tại trong một không gian tìm kiếm bị giới hạn.
- Các giao thức xác minh giải pháp không giả định một liên kết như vậy: kết quả là vấn đề phải được tự áp đặt trước khi người yêu cầu tìm ra giải pháp và nhà cung cấp phải kiểm tra sự cả lựa chọn vấn đề và giải pháp tìm thấy. Hầu hết các chương trình như vậy là các thủ tục lặp đi lặp lại xác suất không bị giới hạn như Hashcash.
=> PoW không chỉ được sử dụng bởi blockchain của Bitcoin mà còn bởi ethereum và nhiều blockchains khác.
Điều quan trọng bạn nên biết các nhà phát triển Ethereum muốn sử dụng một hệ thống đồng thuận mới được gọi là proof of stake (PoS) - bằng chứng cổ phần.
**2. Vậy, Proof of Stake là gì?**
**Proof of Stake** - bằng chứng cổ phần là một đề nghị thay thế cho Proof of Work. Giống như bằng chứng công việc, bằng chứng cổ phần nhằm nỗ lực **cung cấp sự đồng thuận và ngăn chặn việc gửi hai lần*****(doublespend).*** Không giống như các tiền mã hóa dựa trên bằng chứng công việc *(PoW)* như **bitcoin**, trong đó thuật toán thưởng cho những người tham gia giải quyết các câu đố mật mã phức tạp để làm cho các giao dịch có hiệu lực và tạo các khối mới *(khai thác)*, trong các tiền mã hóa dựa trên PoS, người tạo ra khối tiếp theo được lựa chọn theo cách xác định *(giả ngẫu nhiên)* và cơ hội cho một tài khoản được lựa chọn phụ thuộc vào sự giàu có của nó *(tức là cổ phần).* Trong loại tiền mã hóa sử dụng PoS, các khối thường được cho là được rèn hoặc đúc, chứ không phải là đào. Ngoài ra, thông thường tất cả các coin được tạo ra từ đầu và tổng số coin không bao giờ thay đổi sau đó *(mặc dù có một số phiên bản khác của PoS trong đó có thể tạo ra coin mới)*. Do đó, trong phiên bản cơ bản của PoS **không có phần thưởng khối** *(như trong bitcoin);* vì vậy, các thợ rèn chỉ nhận các khoản phí giao dịch.
PoS được nêu ý tưởng lần đầu tiên trên diễn đàn **bitcointalk** năm 2011, các tiền tệ kỹ thuật số đầu tiên sử dụng phương pháp này là **Peercoin** vào năm 2012, cùng với **ShadowCash**, **NXT, BlackCoin, NuShares / NuBits, Qora** và **Nav Coin.**
Với bằng chứng công việc, xác suất khai thác một khối phụ thuộc vào công việc của thợ đào *(ví dụ chu kỳ CPU / GPU đã bỏ ra ra để kiểm tra các băm)*. Với bằng chứng cổ phần, tài nguyên được so sánh là lượng Bitcoin người khai thác nắm giữ - một người giữ 1% Bitcoin có thể khai thác 1% *"khối bằng chứng cổ phần".*
Một số người cho rằng các phương pháp chỉ dựa trên bằng chứng công việc có thể dẫn đến việc bảo mật mạng lưới thấp trong một hệ thống tiền mã hóa với các ưu đãi khối giảm theo thời gian *(như bitcoin)* và bằng chứng cổ phần là một cách để **thay đổi các ưu đãi của thợ đào để an ninh mạng lưới được đẩy cao hơn.**
Một hệ thống bằng chứng cổ phần có thể **cung cấp sự gia tăng bảo vệ khỏi một cuộc tấn công nguy hiểm trên mạng lưới.** Bảo vệ bổ sung được lấy từ hai nguồn:
1) Việc thực hiện cuộc tấn công sẽ tốn kém hơn nhiều.
2) Giảm bớt khuyến khích tấn công. Kẻ tấn công sẽ cần phải sở hữu một phần lớn tất cả bitcoin. Do đó, kẻ tấn công bị ảnh hưởng nặng nề từ cuộc tấn công của chính mình.
Khi ngăn chặn phần thưởng khối được sản xuất thông qua lệ phí txn, một hệ thống bằng chứng cổ phần sẽ dẫn đến mức txn cân bằng thấp hơn. Chi phí dài hạn thấp sẽ làm **tăng khả năng cạnh tranh của bitcoin** so với các hệ thống thanh toán khác. Giảm lệ phí trực quan là do sự giảm đáng kể về quy mô lãng phí các nguồn lực.
**3. Ưu điểm của PoS so với PoW**
Bằng chứng công việc **phụ thuộc vào việc sử dụng năng lượng.** Theo một nhà điều hành nhà máy khai thác bitcoin, lượng năng lượng tiêu thụ cho mỗi bitcoin trong năm 2014 là **240kWh** *(tương đương 16 gallon xăng).*Hơn nữa, chi phí năng lượng này hầu như không được thanh toán bằng tiền mã hóa, gây áp lực khiến giá giảm liên tục. Tiền tệ sử dụng bằng chứng cổ phần có thể **tiết kiệm chi phí hiệu quả** hơn gấp ngàn lần. 
Những ưu đãi của việc tạo khối cũng khác nhau. Trong bằng chứng công việc, người tạo ra khối có thể không sở hữu bất kỳ số tiền tệ nào mà họ đang khai thác. Động lực của người khai thác chỉ là để tối đa hóa lợi nhuận của họ. Không rõ liệu sự chênh lệch này có làm giảm hoặc làm tăng nguy cơ bảo mật hay không. Trong bằng chứng cổ phần, những người *"bảo vệ"* số coin luôn là những người sở chúng *(mặc dù một vài loại tiền mã hóa cho phép hoặc thực hiện việc cho mượn sức mạnh của các nút khác).*
**Tại sao Ethereum muốn sử dụng PoS?**
Cộng đồng Ethereum và tác giả của nó, Vitalik Buterin, đang có kế hoạch chuyển đổi hệ thống PoW sang PoS.
Nếu sử dụng PoW, thợ đào cần tiêu hao rất nhiều năng lượng. Một giao dịch Bitcoin đòi hỏi cung cấp cùng một lượng điện bằng với  năng lượng của 1,57 hộ gia đình Mỹ trong một ngày (số liệu từ năm 2015).
Trong một nghiên cứu gần đây, các chuyên gia cho rằng lượng điện năng các giao dịch Bitcoin cần sẽ bằng tổng điện năng cung cấp cho Đan Mạch vào năm 2020.
Các nhà phát triển là khá lo lắng về vấn đề này, và cộng đồng Ethereum muốn khai thác phương pháp PoS cho một đồng thuận tiết kiệm năng lượng và hiệu quả hơn.
Trong Proof of Stake, thợ rèn luôn được sở hữu những đồng tiền họ tạo ra.
Nếu Casper (giao thức đồng thuận PoS mới) được thực hiện, sẽ tạo ra một mỏ validator. Người dùng có thể tham gia mỏ này để được chọn làm thợ rèn.
Bạn sẽ được chọn sau một thời gian, không hề có chuyện ưu tiên ai trước. Đồng thời mỗi người được chọn vào mỏ sẽ được thưởng khoảng 2 đến 15%.
Ngoài ra, Buterin cho rằng sẽ có không áp đặt giới hạn về số lượng xác nhận hoạt động (hoặc thợ rèn), nhưng sẽ tự động có điều chỉnh lãi tùy từng trường hợp.
**Như vậy,** PoS vượt trội hơn ở một vài điểm:
- Tiết kiệm năng lượng.
- Một mạng lưới an toàn hơn vì phí phải trả để tấn công trở nên đắt hơn: nếu một hacker muốn mua 51% tổng số tiền xu, thị trường phản ứng bằng cách tăng giá nhanh.

