# Nhóm 8 - Ethereum

## Các thành viên:
- Nguyễn Mạnh Cường
- Nguyễn Minh Đức 
- Bùi Thị Chung Thuỷ
- Vũ Nam Tước
 
## Mô tả đề tài nhóm

* Tìm hiểu về Ethereum
* Xây dựng một chương trình bỏ phiếu dựa vào Ethereum 

## Mục lục:
 
------------------------

# Tìm hiểu về Ethereum

## 1. Tổng quan về chuỗi khối *[1]*
Chuỗi khối (block chain) là một cơ sở dữ liệu phân cấp lưu trữ thông tin trong các khối thông tin được liên kết với nhau bằng mã hóa và mở rộng theo thời gian. Mỗi khối thông tin đều chứa thông tin về thời gian khởi tạo và được liên kết tới khối trước đó, kèm một mã thời gian và dữ liệu giao dịch. Chuỗi khốiđược thiết kế để chống lại việc thay đổi của dữ liệu: Một khi dữ liệu đã được mạng lưới chấp nhận thì sẽ không có cách nào thay đổi được nó.*[2]*

Theo cuốn *"Introducing Ethereum and Solidity"*: *[3]*


>Một chuỗi khối là một mạng lưới phần mềm (software network) có tính chất ngang hàng (peer-to-peer) và hoàn toàn phân tán, nó sử dụng mật mã (cryptography) để lưu trữ an toàn các ứng dụng, dữ liệu, và dễ dàng chuyển các chứng thực số (digital instrument) mang giá trị đại diện cho tiền thực.

<center>![](https://raw.githubusercontent.com/nesso99/int3507-2017/c9616ae75f6b12f43922bdc3a0d2d097b28e0548/ethereum-group-8/img/howtowork.PNG)

*Hình 1: Cách hoạt động của chuỗi khối [4]*</center>

### Ba thành phần (công nghệ) của chuỗi khối:
* Mạng ngang hàng: Một nhóm các máy tính có khả năng giao tiếp với nhau mà không phải phụ thuộc vào một người cầm quyền ở trung tâm và vì vậy không xảy ra hiện tượng điểm lỗi chí tử (single point of failure).

* Mật mã bất đối xứng: Một cách cho phép những máy tính này gửi các tin nhắn được mã hóa cho những người nhận đã được xác định vì vậy bất kỳ ai cũng có thể biết định danh của người gửi, nhưng chỉ người nhận được chỉ định mới có thể đọc nội dung tin nhắn. Ở Bitcoin *[5]* và Ethereum, mật mã bất đối xứng được sử dụng để tạo một tập các giấy chứng nhận (credential) cho tài khoản của bạn, để chắc chắn rảng chỉ có duy nhất bạn mới có thể chuyển các token của bạn (tiền của bạn).

* Phép băm mật mã: Một các để sinh một "dấu-vân-tay" (fingerprint) nhỏ, duy nhất cho bất kỳ dữ liệu nào, cho phép so sánh một cách nhanh chóng các tập dữ liệu lớn và là một cách an toàn để xác nhận rằng dữ liệu đã được thay đổi hay chưa; ở cả Bitcoin và Ethereum, cấu trúc dữ liệu cây Merkle được sử dụng để ghi lại thứ tự kinh điển (canonical) của các giao dịch, sau đó được băm vào một “dấu-vân-tay” làm cơ sở cho việc so sánh của các máy tính trong mạng.

### Cấu trúc của một khối (block):
* Index: thứ tự của block trong chuỗi (chain)
* Hash: Giá trị đại diện cho khối đó. Có đầu vào là Index, Previos Hash, Data, Timestamp và Nonce
* Previos Hash: giá trị của khối hợp lệ ngay trước
* Timestamp: thời gian khối được khai thác
* Data: dữ liệu được lưu trong khối đó
* Nonce: là giá trị được tìm thấy và thêm vào để sau khi băm, ta có giá trị băm hợp lệ.

## 2. Tổng quan về Ethereum
Khái niệm "Ethereum" có thể được sử dụng để chỉ ba thứ khác nhau: giao thức Ethereum, mạng Ethereum, và dự án Ethereum bao gồm cả hai thứ trên. Có thể thấy sức mạnh chủ yếu của nó đến từ giao thức.

Ethereum là một nền tảng điện toán có tính chất phân tán, công cộng, mã nguồn mở dựa trên công nghệ Blockchain. Nó có tính năng Hợp đồng thông minh (Smart Contracts), tạo thuận lợi cho các thỏa thuận hợp đồng trực tuyến.*[6]*

| Điểm khác biệt | Bitcoin | Ethereum |
| :------: | :---: | :---: |
| Nguồn gốc | Được tạo ra như một loại tiền tệ và để lưu trữ giá trị | Được tạo ra như một nền tảng giao dịch hợp đồng thông minh phân tán | 
| Thời gian tạo khối mới | 10 phút | 14 - 15 giây | 
| Tốc độ giao dịch | Chậm | Nhanh |
| Phí giao dịch | Bị giới hạn, bị cạnh tranh trực tiếp với nhau để được vào khối của Bitcoin | Được tính dựa trên khối lượng tính toán, băng thông lưu trữ |
| "Đào mỏ" tập trung | Cho phép | Không cho phép |

<center> *Bảng 1: Các điểm khác biệt cơ bản của Ethereum so với Bitcoin* </center>

## 3. Các khái niệm trong Ethereum

### Ether
Tiền mã hóa được giao dịch trong mạng lưới Ethereum được gọi là ether. Nó được liệt kê dưới mã ETH và giao dịch trên các sàn giao dịch tiền mã hóa. Nó cũng được sử dụng để trả phí giao dịch và dịch vụ tính toán trên mạng Ethereum.

Đối với tiền ảo, thách thức để được chấp nhận vẫn còn tồn tại. Ngày nay, những token này vẫn là một lớp thanh toán nhanh, bảo mật và minh bạch nhất trong các hệ thống tiền tệ được công nhận đang tồn tại; Một sự triển khai thử nghiệm một ngày nào đó có thể thay thế các công nghệ mạng thanh toán tập trung như Visa hay Mastercard như ngày nay.

### Gas
Gas là một đơn vị công việc được sử dụng để đo lường mức chi phí tính toán (computationally expensive) cho một giao dịch trên Ethereum có thể tiêu tốn. Giá trị của Gas được trả bằng một lượng nhỏ ether.

Có hai lý do chính để Gas được ra đời:

* Thứ nhất, Nó đảm bảo một phần thưởng được tả trước cho các thợ đào (miner)
cho việc thực thi mã nguồn và bảo mật kết mạng, ngay cả khi việc thực thi bị thất bại vì một lý do nào đó. 

* Thứ hai, nó hoạt động xung quanh *bài toán rừng* và đảm bảo việc thực thi không thể dài quá thời gian đã được ước lượng trước đó.

Gas là một đơn vị công việc, nó không phải là một đơn vị tiền tệ con, và bạn không thể sở hữu hay tích trữ nó. Nó chỉ đơn giản đo đạc mức tiêu hao mà hệ thống phải chịu nếu thực hiện giao dịch, ở mức các khái niệm tính toán.
Để có thể trả chi phí Gas, bạn chỉ cần thêm ether vào tài khoản của bạn. Bạn không cần phải thu lấy nó một cách riêng biệt; không có khái niệm Gas token. Mọi toán tử trên EVM đều có một giá trị Gas nhất định.

Việc này khác so với ở Bitcoin, nơi mà chi phí được tính bằng kích thước của giao dịch tính bằng kilobytes, việc tính phí dựa trên khối lượng tính toán hợp lý hơn nhiều.

<center>![](https://raw.githubusercontent.com/nesso99/int3507-2017/c9616ae75f6b12f43922bdc3a0d2d097b28e0548/ethereum-group-8/img/value.png)

*Hình 2: Giá trị của một số toán tử (trên EVM) phổ biến*</center>

###  Ethereum Virtual Machine (EVM)

Máy ảo Ethereum (EVM) là một môi trường chạy các hợp đồng thông minh Ethereum. Định nghĩa chính thức của EVM được quy định trong Ethereum Yellow Paper của Gavin Wood. Nó được hoàn toàn cô lập từ mạng, hệ thống tập tin và các quá trình khác của hệ thống máy chủ. Mỗi nút Ethereum trong mạng chạy một EVM và thực hiện các hướng dẫn giống nhau. Ethereum Virtual Machines đã được lập trình trong C++, Go, Haskell, Java, Python, Ruby, Rust và WebAssembly (hiện đang được phát triển)

###  Hợp đồng thông minh

Hợp đồng thông minh (smart contract)  là một cơ chế trao đổi xác định, được kiểm soát bởi các phương tiện kỹ thuật số mà có thể giúp cho việc thực hiện giao dịch trực tiếp giữa các thực thể mà không cần tin cậy nhau. Các hợp đồng này được định nghĩa bằng cách lập trình và được chạy chính xác như mong muốn mà không bị kiểm duyệt, lừa đảo hay sự can thiệp từ bên thứ ba trung gian.

Chúng có thể được sử dụng để tạo điều kiện, xác minh và thực thi việc đàm phán hoặc thực hiện các hướng dẫn thủ tục kinh tế và có khả năng tránh được sự kiểm duyệt, thông đồng và rủi ro từ phía đối tác. Trong Ethereum, các hợp đồng thông minh được coi là các kịch bản tự trị hoặc các ứng dụng phân cấp được lưu trữ trong chuỗi khối Ethereum để thực hiện sau đó bởi EVM. Các hướng dẫn được nhúng trong các hợp đồng Ethereum được thanh toán bằng ether và có thể được thực hiện bằng nhiều ngôn ngữ Turing-complete khác nhau

Sự khác biệt giữa hợp đồng truyền thống và hợp đồng hiện đại:

* Hợp đồng truyền thống được tạo bởi các chuyên gia pháp lí để biên soạn và thực thi. Điều này rất mất thời gian và không minh bạch. Hợp đồng có sự cố sảy ra thì phải dựa vào hệ thống pháp lí giải quyết và điều này tốn các chi phí liên quan.

* Hợp đồng thông minh được tạo ra bởi hệ thống máy tính bằng ngôn ngữ lập trình. Trong đó nêu rõ các điều khoản và hình phạt tương đương với các hợp đồng truyền thống đưa ra. Nhưng hợp đồng thông minh không cần sự can thiệp của con người, do đó đảm bảo việc thự thi hợp đồng được chính xác và công minh nhất. Toàn bộ đoàn mã của hợp đồng thông minh được thực hiện bởi hệ thống sổ cái phân tán chuỗi khối.

###Solidity
Solidity là một ngôn ngữ lập trình sử dụng để viết các chương trình được gọi là hợp đồng thông minh (smart contract), thứ mà sẽ được chạy trên EVM. Ngôn ngữ mới này là một sự pha trộn các công ước từ mạng, hợp ngữ (assembly language) và phát triển web.Solidity là một ngôn ngữ cấp cao có định hướng hợp đồng, có cú pháp tương tự như của JavaScript và nó được thiết kế để nhắm mục tiêu Ethereum Virtual Machine (EVM).
 
Solidity là ngôn ngữ bậc cao được compile bằng bytecode và đươc đưa lên chuỗi khối Ethereum bằng cách dùng các phần mềm phía người dùng như Mist browser hoặc node. Ngôn ngữ Solidity định kiểu mạnh, hỗ trợ thừa kế, thư viện và các loại người dùng xác định  và phức tạp giữa các tính năng khác.

Solidity có khả năng thể hiện tất cả các nhiệm vụ có thể thực hiện được bằng máy tính, làm cho chúng về mặt lý thuyết là Turing hoàn chỉnh. Điều đó có nghĩa là toàn bộ mạng phân phối, mỗi node, thực hiện mọi chương trình được thực hiện trên nền tảng này. Khi một người dùng tải lên một hợp đồng thông minh thông qua node Ethereum của họ, nó được bao gồm trong khối mới nhất và được truyền bá xung quanh mạng, nơi nó được lưu trữ trên mọi nút khác trong mạng

###	Decenterlized App
Decenterlize App (DAPP) là ứng dụng mã nguồn mở hoàn chỉnh,hoạt động độc lập, không có thực thể nào kiểm soát phần lớn các tokens của ứng dụng này và dữ liệu và hồ sơ hoạt động của ứng dụng phải được lưu trữ dưới dạng mã hoá công khai, phân quyền chuỗi khối.

Ứng dụng này tạo các mã thông báo theo một thuật toán tiêu chuẩn hoặc bộ tiêu chuẩn và có thể phân phối một số hoặc tất cả các tokens của nó khi bắt đầu hoạt động. Các tokens này phải là cần thiết cho việc sử dụng ứng dụng và bất kỳ đóng góp nào từ người dùng sẽ được thưởng bằng các khoản thanh toán trong các tokens của ứng dụng.Ứng dụng có thể thích ứng các giao thức của nó để đáp ứng với những cải tiến đề xuất và phản hồi thị trường nhưng tất cả thay đổi phải được quyết định bởi sự đồng thuận của người sử dụng. DAPP có giá trị và có khả năng phá vỡ một số ngành công nghiệp.

Phân loại DAPP:

 1. Các ứng dụng phân cấp có chuỗi khối riêng như bitcoin
 2. Giống như loại 1 nhưng có thêm token và các protocol cần thiết như omni protocol
 3. Giống như loại 2 nhưng có các mã thông báo cần thiết

Lợi ích của DAPP:

 - The Safe Network có sự bảo mật lớn nhất
 - Factom đang đơn giản hóa quá trình tăng cường quá trình ghi lại quá trình quản lý dữ liệu lớn
 - BURST giải quyết các vấn đề đã làm lưu trữ đám mây đắt đỏ và không đáng tin cậy
 - Augur được biết đến như là một thị trường dự đoán phân quyền để thưởng cho người sử dụng về các sự kiện dự báo
 - BlockAuth cung cấp một hệ thống đa chữ ký để chia sẻ dữ liệu cá nhân với các bên thứ ba

### Giao thức GHOST (Greedy Heaviest Observed Subtree) 
"Grey Heaviest Observed Subtree" (GHOST) là một cải tiến được giới thiệu lần đầu tiên vào tháng 12 năm 2013. Động lực đằng sau GHOST ra đời đó là thời gian xác nhận các chuỗi khối nhanh chóng hiện đang phải chịu sự giảm an ninh do tỷ lệ lỗi cao - bởi vì các khối mất một thời gian nhất định để truyền thông qua mạng.

Nếu thợ đào mỏ A khai thác một khối và sau đó thợ đào mỏ B tình cờ đào mỏ khác  trước khi khối của thợ mỏ A truyền cho B, khối thợ mỏ B đào sẽ kết thúc, bị lãng phí và không đóng góp cho an ninh mạng. Hơn nữa, có một vấn đề tập trung hóa: nếu thợ mỏ A là một mỏ khai thác với 30% năng lượng (hashpower) và B có 10% năng lượng, A sẽ có nguy cơ tạo ra một khối cũ 70% thời gian (do đó 30% thời gian khác A sản xuất khối cuối cùng và vì vậy sẽ lấy được dữ liệu khai thác được ngay lập tức) trong khi B sẽ có nguy cơ sản xuất một khối thời gian 90% thời gian. Do đó, nếu khoảng thời gian là đủ ngắn cho tỷ lệ khối cũ để được cao, A sẽ được hiệu quả hơn rất nhiều chỉ đơn giản bởi hiệu quả của kích thước của nó. 

Với hai hiệu ứng kết hợp, các chuỗi khối sản xuất khối một cách nhanh chóng rất có thể dẫn đến một mở chứa có một tỷ lệ phần trăm đủ lớn của mạng lưới hashpower để kiểm soát quá trình khai thác trong thực tế. Như được mô tả, GHOST giải quyết vấn đề đầu tiên của mất mát an ninh mạng bằng cách bao gồm các khối cũ trong việc tính chuỗi nào là "dài nhất"; có nghĩa là không chỉ là cha mẹ và các tổ tiên khác của một khối, mà còn là hậu duệ cũ của tổ tiên của khối (trong thuật ngữ Ethereum, "Uncle" (bác)) được thêm vào để tính khối mà có tổng số bằng chứng của sự hỗ trợ công việc lớn nhất.	 
Để giải quyết vấn đề thứ hai về xu hướng tập trung, chúng ta vượt qua các giao thức được mô tả, và cũng cung cấp các phần thưởng block cho các stales: một khối cũ nhận được 87,5% phần thưởng cơ bản của nó, và con cháu (nephew) có khối cũ nhận được 12,5% phần thưởng còn lại. Tuy nhiên, phí giao dịch không được thưởng cho Uncle.

Phiên bản Ethereum của Ghost chỉ rơi vào bảy cấp độ - hoặc trở lại bảy cấp độ trong chiều cao của chuỗi khối:

 - Một khối phải chỉ định cha mẹ, và nó phải chỉ định 0 hoặc nhiều Uncle
 - Đối với mỗi Uncle U trong khối B, thợ mỏ B được cộng thêm 3,125% vào phần thưởng coinbase và người thợ mỏ của U được 93,75% của phần thưởng coinbase tiêu chuẩn.
 - Một Uncle bao gồm trong khối B phải có các tính chất sau:
	1. Nó phải là con trực tiếp của tổ tiên thế hệ k của B, trong đó 2 <= k <= 7
	2. Nó không thể là tổ tiên của B
	3. Một uncle phải có tiêu đề khối hợp lệ, nhưng trước đó không cần xác minh hay thậm chí là một khối hợp lệ
	4. Một Uncle phải khác mọi Uncle khác bao gồm trong các khối trước và tất cả những Uncle khác nằm trong cùng một khối (không bao gồm hai lần)

###Whisper và Swarm 
Các ứng dụng máy chủ hiện đại làm tốt 3 việc: tính toán, chạy chương trình và ghi nhớ lưu trữ dữ liệu, tạo ra sự thuận lợi trong việc tương tác giữa người với người.
Trong Ethereum, với EVM ta có thể tính toán nhưng không thể lưu trữ nhiều dữ liệu cũng không thể phục vụ như một người trung gian trong giao tiếp người với người. Vì vậy Whisper và Swarm ra đời.

####Whisper
Whisper là một hệ thống nhắn tin phân tán, là một phần của giao thức Ethereum và sẽ có sẵn cho các ứng dụng web sử dụng EVM phần back-end. Nói một cách ngắn gọn, Whisper là một giao thức truyền thông cho phép DApps giao tiếp được với nhau
####Swarm
Swarm là một giao thức thanh toán được định rõ nội dung. Nó hoạt động với dữ liệu không thay đổi, phân mảnh nó và lưu trữ nó trên một mạng lưới được phân bố theo cách làm cho nó dễ dàng được gọi lại khi một ứng dụng cần. 

Mục tiêu của Swarm là để có thể tìm các phiên bản khác nhau của một tệp tin cùng một địa chỉ bộ nhớ, giống đường dẫn tên miền trong các URL hiện tại, với cấu trúc thư mục của chúng. Giao thức này chỉ đơn thuần phục vụ mục đích của một chỉ mục của nơi mà các khối dữ liệu được lưu t. Kịch bản lưu trữ này là một ứng dụng phổ biến cho các hệ thống phân quyền và Swarrm làm nó trở nên dễ dàng hơn, nhờ vào một số sáng kiến tiên phong của BitTorrent

### Lạm phát đồng ether
#### Khái niệm liên quan
Năng lượng của công việc (Power Of Work): tốn rất nhiều năng lực tính toán để tính ra được mã hợp lệ, chưa kể còn lãng phí khi tạo ra các khối thừa.

Năng lượng của tiền đặt cược (Power Of Stake viết tắt là PoS): người giải mã sẽ được chỉ định dựa trên số ETH họ đánh cược, nếu giải mã sai hoặc cố tính làm ảnh hưởng đến hệ thống thì sẽ bị mất đi số tiền đặt cược đó. Ở đây miner sẽ được gọi là validator. Đòi hỏi người tham gia có trách nhiệm hơn. Quan trọng hơn, PoS không tạo ra lượng tiền mới (không có thưởng khối mà chỉ trả chi phí giao dịch).

Các bạn có thể tìm hiểu thêm tại [đây](https://bitcoinvietnamnews.com/2017/02/su-khac-biet-giua-proof-of-stake-va-proof-of-work.html)

#### Lí do không khuyến khích đào mỏ tập trung
Đào mỏ tập trung (mining pool) sẽ dẫn đến một hệ quả là một vài tổ chức sẽ nắm một năng lực băm (hash power) rất lớn, chiếm tỉ trọng đáng kể trên toàn bộ năng lực của cả hệ thống.
 
Khi năng lực băm của một tổ chức nào đó vượt từ 51% năng lực băm của cả hệ thống trở lên thì họ sẽ phát huy sức mạnh đáng kể trên toàn bộ chuỗi khối (một dạng độc quyền) - đây là một lỗ hổng trong thiết kế của Bitcoin cũng như mô hình bằng chứng của công việc (proof of work). Vấn đề độc quyền này có thể dẫn đến tấn công 51% (51% attack)

Người nắm giữ 51% năng lực có thể

* Ngăn cản các giao dịch, ngăn việc chuyển tiền
* Cùng gửi một tờ tiền đến nhiều người (Double spend transaction)
* Ngăn chặn các thợ mỏ khác đào được khối mới trong một khoảng thời gian

#### Lạm phát đồng Ether
Trong một nền kinh tế, lạm phát là sự mất giá trị thị trường hay giảm sức mua của đồng tiền. Khi so sánh với các nền kinh tế khác thì lạm phát là sự phá giá đồng tiền nội tệ so với các loại tiền tệ khác

Đồng ether không giới hạn nguồn cung, số lượng ether phụ thuộc vào số khối được đào. Hiện nay trung bình là 5 ether trên một khối. Việc trả công trên khối này cũng sẽ tránh tình trạng một cá nhân hay tổ chức nào đó bơm tiền vào thị trường. Việc triển khai bằng chứng về tiền đặt cược (Proof of Stake) sẽ làm nguồn cung Ether giảm đi nên sẽ làm giảm tỉ lệ lạm phát. Việc này sẽ hoàn toàn đảm bảo tính minh bạch, rằng không có một tổ chức hay cá nhân nào có thể tự bơm tiền vào thị trường. 

Bitcoin ngay từ lúc ra đời đã được các nhà phát triển giới hạn số tiền có thể khai thác là 21 triệu BTC. Cho đến khi được mọi người trong cộng đồng IT bỏ phiếu thay đổi mã nguồn và điều chỉnh số tiền được đưa vào hệ thống, thì độ lạm phát của Bitcoin là rất ổn định.
Khác với Bitcoin, hệ thống tiền thưởng cho các thợ đào mỏ của ETH là vô hạn. Các nhà phát triển của ETH cho biết đây cũng là tính năng huy động vốn và tạo lợi nhuận cho nhà đầu tư, dĩ nhiên cũng sẽ cân bằng rủi ro là tính chất không ổn định.

Năng lượng của tiền đặt cược (PoS) là cơ chế người giải mã sẽ được chỉ định dựa trên số ETH họ đánh cược, nếu giải mã sai hoặc cố tính làm ảnh hưởng đến hệ thống thì sẽ bị mất đi số tiền đặt cược đó. Cơ chế này đòi hỏi người tham gia có trách nhiệm hơn. Quan trọng hơn, PoS không tạo ra lượng tiền mới (không có thưởng khối mà chỉ trả chi phí giao dịch).


## Tài liệu tham khảo

- [1] [Trang chủ Blockchain](https://www.blockchain.com/)
- [2] [Blockchain](https://vi.wikipedia.org/wiki/Blockchain), *wikipedia.org* (ngày 24 tháng 10 năm 2017)
- [3] [Introducing Ethereum and Solidity](https://drive.google.com/file/d/0Bz_MvHBFauwkY1lFdThyQ0U1dE0/view), *Chris Dannen*
- [4] [Giải ngố toàn tập về Blockchain từ A - I: "Bitcoin - Đồng tiền ảo đầu tiên"](http://genk.vn/giai-ngo-toan-tap-ve-blockchain-tu-a-i-bitcoin-dong-tien-ao-dau-tien-20160702212844019.chn), *genk.vn* (ngày 7 tháng 7 năm 2016)
- [5] [Trang chủ Bitcoin](https://www.bitcoin.com/)
- [6] [Ethereum](https://vi.wikipedia.org/wiki/Ethereum), *wikipedia.org* (ngày 11 tháng 10 năm 2017)