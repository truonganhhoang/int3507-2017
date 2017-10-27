 Nhóm 8 - Ethereum
=========
Thành viên:

 1. Nguyễn Mạnh Cường
 2. Phạm Minh Đức
 3. Bùi Thị Trung Thuỷ
 4. Vũ Nam Tước

----------

### Mô tả đề tài nhóm

### Giới thiệu chung về chuỗi khối
 Chuỗi khối (Blockchain), tên ban đầu chuỗi khối là một cơ sở dữ liệu phân cấp lưu trữ thông tin trong các khối thông tin được liên kết với nhau bằng mã hóa và mở rộng theo thời gian. Mỗi khối thông tin đều chứa thông tin về thời gian khởi tạo và được liên kết tới khối trước đó, kèm một mã thời gian và dữ liệu giao dịch. Chuỗi khốiđược thiết kế để chống lại việc thay đổi của dữ liệu: Một khi dữ liệu đã được mạng lưới chấp nhận thì sẽ không có cách nào thay đổi được nó.
### Giới thiệu về Ethereum
Ethereum (ETH) hay còn được gọi là Bitcoin 2.0. Ethereum là một nền tảng điện toán phân tán khối chuỗi, chạy trên chuỗi khối, thông qua việc sử dụng chức năng Hợp đồng thông minh (Smart Contract). Tiền ảo Ethereum có thể thực hiện các giao dịch, hợp đồng mạng ngang hàng thông qua đơn vị tiền ảo là Ether. Điểm khác biệt giữa Bitcoin và Ethereum:

| Điểm khác biệt| Bitcoin| Ethereum|
| :------- | ----: | :---: |
| Nguồn gốc | Được tạo ra như một khối tiền tệ và để lưu giá trị |  Được tạo ra như một nền tảng giao hợp đồng thông minh phân tán    |
| Thời gian tạo chuỗi mới| 10 phút   |  10 - 15 giây   |
| Tốc độ giao dịch| chậm    |  nhanh  |
| Phí giao dịch| Bị giới hạn, cạnh tranh trực tiếp với nhau để được vào chuỗi khối của Bitcoin       | Được tính toán dựa trên khối lượng băng thông, lưu trữ  |
| "Đào mỏ" tập trung| Cho phép   |  Không cho phép  |

#### Lịch sử ra đời
Ethereum được đề xuất vào cuối năm 2013 bởi Vitalik Buterin người Nga sinh năm 1994, một cậu thanh niên chuyên nghiên cứu về lập trình tiền ảo. Vốn hoá của Ethereum đạt 25 triệu USD trong đợt mở bán lần đầu năm 2014. Kể từ đó Ethereum bắt đầu phát triển Chuỗi khốicho riêng cũng như phát triển ngôn ngữ lập trình của mình. Phiên bản beta được phát hành vào tháng 7/2015. Kể từ đầu năm trở lại đây, giá Ethereum tăng hơn 2000% trong khi Bitcoin là 150%.
#### Gas
Gas là một đơn vị công việc được sử dụng để đo lường mức chi phí tính toán (computationally expensive) cho một giao dịch trên Ethereum có thể tiêu tốn. Giá trị của Gas được trả bằng một lượng nhỏ ether. Gas không phải là một đơn vị tiền tệ con, và bạn không thể sở hữu hay tích trữ nó. Gas chỉ đơn giản đo đạc mức tiêu hao mà hệ thống phải chịu nếu thực hiện giao dịch, ở mức các khái niệm tính toán. Để có thể trả chi phí Gas, bạn chỉ cần thêm ether vào tài khoản của bạn và không cần phải thu lấy nó một cách riêng biệt. Mọi toán tử trên EVM đều có một giá trị Gas nhất định.  
 Có hai lý do chính để Gas được ra đời:
 -  Đảm bảo một phần thưởng được tả trước cho các thợ đào (miner)
 - Nó hoạt động xung quanh *bài toán rừng* và đảm bảo việc thực thi không thể dài quá thời gian đã được ước lượng trước đó

Gas là chi phí nội bộ để thực hiện một giao dịch hoặc hợp đồng trong Ethereum. Vào thời điểm trước viết đó là lúc trước khi ra mắt Frontier, nó được cố định đến 10 Szabo, khoảng 1 / 100.000 của một Ether. Nó tách rời các đơn vị của Ether (ETH) và giá trị thị trường của nó từ đơn vị để đo mức độ sử dụng điện toán (gas). Do đó, một thợ “đào”  có thể quyết định tăng hoặc giảm việc sử dụng gas theo nhu cầu của mình, trong khi nếu cần, giá khí có thể tăng hoặc giảm tương ứng theo, tránh tránh tình trạng tăng giá của ETH cần phải thay đổi tất cả giá gas. Đây cũng là một phản ứng đối với việc thảo luận về bitcoin về cấu trúc phí.  
Hệ thống gas không khác gì việc sử dụng Kw để đo điện sử trong nhà. Một khác biệt từ thị trường năng lượng thực tế là người khởi tạo giao dịch quy định giá gas cho người thợ mỏ mà họ có thể quyết định chấp nhận hay không, điều này dẫn tới sự xuất hiện của một thị trường xung quanh gas. Bạn có thể thấy sự phát triển của giá khí ở [gasprice](https://etherscan.io/chart/gasprice).  
Với Ethereum cũng có một giới hạn blockize – vì vậy bạn đang trả phí bảo hiểm cho khối tiếp theo giống như Bitcoin.  
Với các thợ “đào” Bitcoin thì họ  ưu tiên giao dịch với mức phí đào cao nhất. Điều này cũng đúng với Ethereum, nơi các thợ “đào” tự do bỏ qua các giao dịch có giới hạn về chi phí gas quá thấp.  
Chi phí gas trên mỗi giao dịch hoặc hợp đồng được thiết lập để đối phó với bản chất mã lặp vòng (Turing Complete) của Ethereum và EVM (Ethereum Virtual Machine Code) – ý tưởng để hạn chế vòng lặp vô hạn. Ví dụ 10 Szabo, hoặc 0.00001 Ether hoặc 1 Gas có thể thực hiện một dòng mã hoặc một số mệnh lệnh. Nếu không có đủ Ether trong tài khoản để thực hiện giao dịch hoặc tin nhắn thì nó sẽ bị coi là không hợp lệ. Mục đích là ngừng các cuộc tấn công từ chối dịch vụ từ các vòng lặp vô hạn, khuyến khích tính hiệu quả trong mã và làm cho kẻ tấn công trả tiền cho các tài nguyên mà họ sử dụng, từ băng thông thông qua việc tính toán của CPU rồi tới việc lưu trữ.  
Càng nhiều lệnh phức tạp mà bạn muốn thực hiện, càng nhiều chi phí gas (và Ether) bạn phải trả. Ví dụ nếu A muốn gửi đơn vị B 1 Ether – sẽ có tổng chi phí là 1.00001 Ether được trả bởi A. Tuy nhiên nếu A muốn hình thành một hợp đồng với B tùy thuộc vào mức giá tương lai của Ether, thì sẽ có nhiều dòng code có thể thực thi hơn và nhiều hơn một nhiệm vụ hoặc việc tiêu thụ năng lượng được đặt trên mạng Ether phân phối – và do đó A sẽ phải trả nhiều hơn so với 1 Gas thực hiện trong giao dịch.  
Một số bước tính toán trị giá hơn nhiều so với những cái khác vì chúng mắc với sự ước tính hoặc bởi vì chúng tăng lượng dữ liệu phải được lưu trữ trong tiểu bang. Dưới đây là danh sách các hoạt động trong Ethereum Virtual Code và chi phí của chúng trong gas (được gọi là Ethers).  
### EVM
Ethereum Virtual Machine (EVM) là một máy tính toàn cầu mà ai cũng có thể sử dụng với khoản phí nhỏ trả bằng ether. EVM là một "máy tính" toàn cầu, đơn nhất, 256 bit, trong đó tất cả các giao dịch là cục bộ trên mỗi nút của mạng và được thực hiện trong tương đối đồng bộ. Đó là một máy ảo truy cập toàn cầu, bao gồm rất nhiều máy tính nhỏ hơn.  
Máy tính khổng lồ này, bất cứ ai có node hoặc wallet có thể truy cập, làm cho nó đơn giản để di chuyển một lượng lớn tùy ý của giá trị (tiền) gần như ngay lập tức. Mặc dù bất cứ ai có thể sử dụng máy ảo toàn cầu này, không ai có thể tạo tiền giả trong đó, hoặc chuyển tiền mà không được phép.  
Nếu nó có vẻ lãng phí để có toàn bộ EVM, tất cả các node đó, sao chép các giao dịch tương tự và duy trì cùng một trạng thái giữa hàng ngàn máy tính cá nhân, điều quan trọng là phải có cơ sở để so sánh cho các dịch vụ tài chính công nghệ thông tin ngày nay hoạt động như thế nào. EVM là một mô hình đơn giản và hiệu quả bằng cách so sánh. Quan trọng hơn, tất cả những công việc đó không phải là vô ích. Trong thực tế, như bạn sẽ thấy trong chương này, đó là bằng chứng của công việc này thực sự bảo đảm mạng.  
EVM có thể chạy bất kỳ chương trình máy tính được viết bằng ngôn ngữ Solidity. Các chương trình này, với một đầu vào cụ thể, sẽ luôn luôn sản xuất ra theo cùng một cách, với cùng một sự thay đổi trạng thái cơ bản. Điều này làm cho các chương trình Solidity được xác định đầy đủ và đảm bảo thực hiện, miễn là bạn đã trả đủ cho giao dịch; nhưng chúng ta sẽ nói về việc trả tiền gas trong chương này.  
### Hợp đồng thông minh
Hợp đồng thông minh (smart contract)  là một cơ chế trao đổi xác định, được kiểm soát bởi các phương tiện kỹ thuật số mà có thể giúp cho việc thực hiện giao dịch trực tiếp giữa các thực thể mà không cần tin cậy nhau. Các hợp đồng này được định nghĩa bằng cách lập trình và được chạy chính xác như mong muốn mà không bị kiểm duyệt, lừa đảo hay sự can thiệp từ bên thứ ba trung gian.  
Trong Ethereum, các hợp đồng thông minh được coi là các kịch bản tự trị hoặc các ứng dụng phân cấp được lưu trữ trong chuỗi khối Ethereum để thực hiện sau đó bởi EVM.  
Sự khác biệt giữa hợp đồng truyền thống và hợp đồng hiện đại:

 - Hợp đồng truyền thống được tạo  bởi các chuyên gia pháp lí để biên soạn và thực thi. Điều này rất mất thời gian và không minh bạch. Hợp đồng có  sự cố sảy ra thì phải dựa vào hệ thống pháp lí giải quyết và điều này tốn các chi phí liên quan.
 - Hợp đồng thông minh được tạo ra bởi hệ thống máy tínhbàng ngôn ngữ lập trình. Trong đó nêu rõ các điều khoản và hình phạt tương đương với các hợp đồng truyền thống đưa ra. Nhưng hợp đồng thông minh không cần sự can thiệp của con người, do đó đảm bảo việc thự thi hợp đồng được chính xác và công minh nhất. Toàn bộ đoàn mã của hợp đồng thông minh được thực hiện bởi hệ thống sổ cái phân tán chuỗi khối.

### Solidity
Solidity là một ngôn ngữ lập trình mới sử dụng để viết các chương trình được gọi là hợp đồng thông minh (smart contract), thứ mà sẽ được chạy trên EVM. Ngôn ngữ mới này là một sự pha trộn các công ước từ mạng, hợp ngữ (assembly language) và phát triển web. Solidity là một ngôn ngữ cấp cao có định hướng hợp đồng, có cú pháp tương tự như của JavaScript và nó được thiết kế để nhắm mục tiêu Ethereum Virtual Machine (EVM).  
Solidity là ngôn ngữ bậc cao được compile bằng bytecode và đươc upload lên Ethereum Chuỗi khốibằng cách dùng client app như Mist brower hoặc node. Solidity ngôn ngứ định kiểu mạnh, hỗ trợ thừa kế, thư viện và các loại người dùng xác định  và phức tạp giữa các tính năng khác.  
Solidity có khả năng thể hiện tất cả các nhiệm vụ có thể thực hiện được bằng máy tính, làm cho chúng về mặt lý thuyết là Turing hoàn chỉnh. Điều đó có nghĩa là toàn bộ mạng phân phối, mỗi node, thực hiện mọi chương trình được thực hiện trên nền tảng này. Khi một người dùng tải lên một hợp đồng thông minh thông qua node Ethereum của họ, nó được bao gồm trong khối mới nhất và được truyền bá xung quanh mạng, nơi nó được lưu trữ trên mọi nút khác trong mạng.
### Decenterlize App
Decenterlize App (DAPP) là ứng dụng mã nguồn mở hoàn chỉnh,hoạt động độc lập, không có entity nào kiểm soát phần lớn các tokens của ứng dụng này và dữ liệu và hồ sơ hoạt động của ứng dụng phải được lưu trữ dưới dạng mã hoá công khai, phân quyền chuỗi khối.
Ứng dụng này tạo các mã thông báo theo một thuật toán tiêu chuẩn hoặc bộ tiêu chuẩn và có thể phân phối một số hoặc tất cả các tokens của nó khi bắt đầu hoạt động. Các tokens này phải là cần thiết cho việc sử dụng ứng dụng và bất kỳ đóng góp nào từ người dùng sẽ được thưởng bằng các khoản thanh toán trong các tokens của ứng dụng.Ứng dụng có thể thích ứng các giao thức của nó để đáp ứng với những cải tiến đề xuất và phản hồi thị trường nhưng tất cả thay đổi phải được quyết định bởi sự đồng thuận của người sử dụng. DAPP có giá trị và có khả năng phá vỡ một số ngành công nghiệp.  
Phân loại DAPP:

 1. Các ứng dụng phân cấp có block chain riêng như bitcoin
 2. Giống như loại 1 nhưng có thêm token và các protocol cần thiết như omni protocol
 3. Giống như loại 2 nhưng có các mã thông báo cần thiết  

Lợi ích của DAPP:

 - The Safe Network có sự bảo mật lớn nhất
 - Factom đang đơn giản hóa quá trình tăng cường quá trình ghi lại quá trình quản lý dữ liệu lớn
 - BURST giải quyết các vấn đề đã làm lưu trữ đám mây đắt đỏ và không đáng tin cậy
 - Augur được biết đến như là một thị trường dự đoán phân quyền để thưởng cho người sử dụng về các sự kiện dự báo
 - BlockAuth cung cấp một hệ thống đa chữ ký để chia sẻ dữ liệu cá nhân với các bên thứ ba
### GHOST protocol (Greedy Heaviest Observed Subtree) 
"Grey Heaviest Observed Subtree" (GHOST) là một cải tiến được giới thiệu lần đầu tiên vào tháng 12 năm 2013. Động lực đằng sau GHOST ra đời đó là thời gian xác nhận các chuỗi khối nhanh chóng hiện đang phải chịu sự giảm an ninh do tỷ lệ lỗi cao - bởi vì các khối mất một thời gian nhất định để truyền thông qua mạng.  
Nếu thợ đào mỏ A khai thác một khối và sau đó thợ đào mỏ B tình cờ đào mỏ khác  trước khi khối của thợ mỏ A truyền cho B, khối thợ mỏ B đào sẽ kết thúc, bị lãng phí và không đóng góp cho an ninh mạng. Hơn nữa, có một vấn đề tập trung hóa: nếu thợ mỏ A là một mỏ khai thác với 30% hashpower (năng lượng) và B có 10% hashpower, A sẽ có nguy cơ tạo ra một khối cũ 70% thời gian (do đó 30% thời gian khác A sản xuất khối cuối cùng và vì vậy sẽ lấy được dữ liệu khai thác được ngay lập tức) trong khi B sẽ có nguy cơ sản xuất một khối thời gian 90% thời gian. Do đó, nếu khoảng thời gian là đủ ngắn cho tỷ lệ khối cũ để được cao, A sẽ được hiệu quả hơn rất nhiều chỉ đơn giản bởi hiệu quả của kích thước của nó.   
Với hai hiệu ứng kết hợp, các chuỗi khối sản xuất khối một cách nhanh chóng rất có thể dẫn đến một mở chứa có một tỷ lệ phần trăm đủ lớn của mạng lưới hashpower để kiểm soát quá trình khai thác trong thực tế. Như được mô tả, GHOST giải quyết vấn đề đầu tiên của mất mát an ninh mạng bằng cách bao gồm các khối cũ trong việc tính chuỗi nào là "dài nhất"; có nghĩa là không chỉ là cha mẹ và các tổ tiên khác của một khối, mà còn là hậu duệ cũ của tổ tiên của khối (trong thuật ngữ Ethereum, "Uncle") được thêm vào để tính khối mà có tổng số bằng chứng của sự hỗ trợ công việc lớn nhất.  
Để giải quyết vấn đề thứ hai về xu hướng tập trung, chúng ta vượt qua các giao thức được mô tả, và cũng cung cấp các phần thưởng block cho các stales: một khối cũ nhận được 87,5% phần thưởng cơ bản của nó, và cháu trai (nephew) có khối cũ nhận được 12,5% phần thưởng còn lại. Tuy nhiên, phí giao dịch không được thưởng cho chú bác (uncle).  
Phiên bản Ethereum của Ghost chỉ rơi vào bảy cấp độ - hoặc trở lại bảy cấp độ trong chiều cao của chuỗi khối:
 - Một khối phải chỉ định cha mẹ, và nó phải chỉ định 0 hoặc nhiều uncles
 - Đối với mỗi uncle U trong khối B, thợ mỏ B được cộng thêm 3,125% vào phần thưởng coinbase và người thợ mỏ của U được 93,75% của phần thưởng coinbase tiêu chuẩn.
 - Một uncle bao gồm trong khối B phải có các tính chất sau:
1. Nó phải là con trực tiếp của tổ tiên thế hệ k của B, trong đó 2 <= k <= 7
2. Nó không thể là tổ tiên của B
3. Một uncle phải có tiêu đề khối hợp lệ, nhưng trước đó không cần xác minh hay thậm chí là một khối hợp lệ
4. Một uncle phải khác mọi uncle khác bao gồm trong các khối trước và tất cả những uncle khác nằm trong cùng một khối (không bao gồm hai lần)
### Lạm phát đồng ether
Đồng ether không giới hạn nguồn cung, số lượng ether phụ thuộc vào số block được đào. Hiện nay trung bình là 5 ether trên một block. Việc trả công trên block này cũng sẽ tránh tình trạng một cá nhân hay tổ chức nào đó bơm tiền vào thị trường. Việc triển khai Proof of Stake sẽ làm nguồn cung Ether giảm đi nên sẽ làm giảm tỉ lệ lạm phát. Việc này sẽ hoàn toàn đảm bảo tính minh bạch, rằng không có một tổ chức hay cá nhân nào có thể tự bơm tiền vào thị trường. Bitcoin ngay từ lúc ra đời đã được các nhà phát triển giới hạn số tiền có thể khai thác là 21 triệu BTC. Cho đến khi được mọi người trong cộng đồng IT bỏ phiếu thay đổi mã nguồn và điều chỉnh số tiền được đưa vào hệ thống, thì độ lạm phát của Bitcoin là rất ổn định.  
Khác với Bitcoin, hệ thống tiền thưởng cho các thợ đào mỏ của ETH là vô hạn. Các nhà phát triển của ETH cho biết đây cũng là tính năng huy động vốn và tạo lợi nhuận cho nhà đầu tư, dĩ nhiên cũng sẽ cân bằng rủi ro là tính chất không ổn định.
Power of stake (PoS ) là cơ chế người giải mã sẽ được chỉ định dựa trên số ETH họ đánh cược, nếu giải mã sai hoặc cố tính làm ảnh hưởng đến hệ thống thì sẽ bị mất đi số tiền đặt cược đó. Cơ chế này đòi hỏi người tham gia có trách nhiệm hơn. Quan trọng hơn, PoS không tạo ra lượng tiền mới (không có thưởng khối mà chỉ trả chi phí giao dịch).  

### Whisper và Swarm 
Các ứng dụng máy chủ hiện đại làm tốt 3 việc: tính toán, chạy chương trình và ghi nhớ lưu trữ dữ liệu, tạo ra sự thuận lợi trong việc tương tác giữa người với người.  
Trong Ethereum, với EVM ta có thể tính toán nhưng không thể lưu trữ nhiều dữ liệu cũng không thể phục vụ như một người trung gian trong giao tiếp người với người. Vì vậy Whisper và Swarm ra đời.  

 - EVM: Decentralized state
 - Swarm: Decentralized storage
 - Whisper: Decentralized messaging
#### Whisper
Whisper là một hệ thống nhắn tin phân tán, là một phần của giao thức Ethereum và sẽ có sẵn cho các ứng dụng web sử dụng EVM phần back end.	Nói một cách ngắn gọn, Whisper là một giao thức truyền thông cho phép DApps giao tiếp được với nhau.  
#### SWARM
Swarm là một giao thức thanh toán được định rõ nội dung. Nó hoạt động với dữ liệu không thay đổi, phân mảnh nó và lưu trữ nó trên một mạng lưới được phân bố theo cách làm cho nó dễ dàng được gọi lại khi một ứng dụng cần. Mục tiêu của Swarm là để có thể tìm các phiên bản khác nhau của một tệp tin cùng một địa chỉ bộ nhớ, giống đường dẫn tên miền trong các URL hiện tại, với cấu trúc thư mục của chúng. Giao thức này chỉ đơn thuần phục vụ mục đích của một chỉ mục của nơi mà các k.hối dữ liệu được lưu t. Kịch bản lưu trữ này là một ứng dụng phổ biến cho các hệ thống phân quyền và Swarrm làm nó trở nên dễ dàng hơn, nhờ vào một số sáng kiến tiên phong của BitTorrent.  
## The Voting App

### Cách cài đặt

```bash
# client
cd client
npm install
npm run dev

# server
cd server
npm install
cp .env.example .env
npm run serve:dev

# local blockchain
npm install -g ethereumjs-testrpc
testrpc

# truffle
cd server/app/Truffle
truffle migrate
```
