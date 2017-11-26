
## Nhóm BigChain

#### Thành viên trong nhóm
* Đỗ Văn Quang
* Nguyễn Ngọc Trung
* Nguyễn Bá Tú
* Phan Thế Thảo

### Mô tả đề tài của nhóm
Xây dựng công cụ quản lý và chia sẻ điểm an toàn dựa vào BigchainDB [1]

### Tóm tắt nội dung trình bày
  * Giới thiệu chung 
  * Giới thiệu các công nghệ và kiến thức liên quan
  * Giới thiệu về sản phảm 
  * Hướng dẫn cài đặt 
  * Kết luận

## I Giới thiệu chung
  Ngày nay đồng tiền ảo bitcoin [2] đang trở thành một đề tải nóng bỏng được bàn luận ở khắp mọi nơi. Vì vậy, sự chú ý của nhứng người am hiểu công nghệ đang đân chuyển sang nên tảng blockchain đứng đằng sau bitcoin, và nó đang làm thay đổi ngành công nghiệp của thế giới như thế nào. Đối với nhiều doanh nghiệp và tập đoàn lớn blockchain mở ra cơ hội to lớn cho họ đảm bảo việc hạn chế trung gian, phân phối sản phẩm một cách nhanh chóng và tin cậy tuyệt dối. Các ứng dụng sử dụng blockchain cho phép hệ thống hoạt động mà không cần một tổ chức đứng ra điều hành, chúng còn được gọi là dapps [3]. Trong đề tài này, nhóm tập trung vào tìm hiểu và khai thác BigchainDB, nó là một dapps cho phép nhà phát triển sử dụng block chain như một cở sở dữ liệu và có các thao tác cùng những đặc điểm khác so với cở sở dữ liệu truyển thống.

  Phần tiếp theo trong báo cáo sẽ tập trung trình bày từng khái niệm để giúp hiểu rõ về BigchainDB. 
 
## II Giới thiệu các công nghệ và kiến thức liên quan
  Đầu tiên để hiểu về BigchainDB ta cần tìm hiểu về công nghệ lõi blockchain.
### Giới thiệu về chuối khối 
 Chuỗi khối (blockchain hoặc block chain) là một cơ sở dữ liệu phân cấp lưu trữ thông tin trong các khối thông tin được liên kết với nhau bằng mã hóa và mở rộng theo thời gian. Mỗi khối thông tin đều chứa thông tin về thời gian khởi tạo và được liên kết tới khối trước đó, kèm một mã thời gian và dữ liệu giao dịch. Blockchain được thiết kế để chống lại việc thay đổi của dữ liệu: Một khi dữ liệu đã được mạng lưới chấp nhận thì sẽ không có cách nào thay đổi được nó.

Cấu trúc bockchain gồm các khối (block) liên kết với nhau như một danh sách liên kết, con trỏ trong blockchain có thể lưu thêm mảng băm (hash) của khối trước đó. Như vậy kẻ giả mạo muốn thay đổi giá trị của khối thứ k trong dãy sẽ phải thay đổi tất cả các khổi từ k+1 trở nên, điều này là gân như bất khả thi do việc tạo nhiều giá trị hash là cực kỳ tốn kém.

### Giới thiệu về mã hoá chữ ký số ed25519 và mã hoá dữ liệu AES
Để đảm bảo an toàn mỗi thao tác trong BigchainDB đều phải găn liền với chỹ ký số. Hiên tại ở phiên bản 1.0 BigchainDb hỗ trợ dạng mã hoá chữ ký là ed25519.

#### Chữ ký số ed25519
Ed25519 là một hệ thống chữ ký số khóa công khai với nhiều tính năng nổi trội:
* Kiểm tra chữ ký đơn nhanh
* Kiểm tra chữ ký nhanh trong cả trường hợp kiểm tra hàng loạt
* Việc ký được thực hiện rất nhanh
* Sinh khóa nhanh
* Mức độ an toàn cao
* Khóa phiên dễ dùng
* Chống xung đột
* Không dùng mảng chỉ số bí mật
* Không có các điều kiện bí mật nhánh
* Độ dài chữ ký nhỏ
* Độ dài khóa nhỏ

#### Mã hóa dữ liệu AES
 AES (Advanced Encryption Standard) là thuật toán được phát triển dựa trên bản thiết kế bởi 2 nhà mật mã học người bỉ là Joan Daemen và Vincent Rijmen. AES là một thuật toán mã hóa khối đối xứng với độ dài khóa là 128 bit, 192 bit và 256 bit tương ứng gọi là AES-128, AES-192 và AES-256. tùy vào độ dài của khoá khi sử dụng mà ta có số vòng lặp khác nhau AES-128 sử dụng 10 vòng (round), AES-192 sử dụng 12 vòng và AES-256 sử dụng 14 vòng.
Các thứ tự hàm AES sẽ thực hiện:

* Trộn từng byte (SubBytes): mỗi byte được thay thế với các byte khác.
* Trộn từng hàng (ShiftRows): Phép biến đổi dùng trong phép mã hóa áp dụng lên trạng thái bằng cách chuyển dịch vòng ba hàng cuối của trạng thái theo số lượng byte các offset khác nhau.
* Trộn từng cột (MixColumns): mỗi cột được chuyển đổi tuyến tính bằng cách nhân nó với một ma trận trong trường hữu hạn
* Mã hóa (AddRoundKey): mỗi byte trong bảng trạng thái được thực hiện phép XOR với một khoá vòng, quá trình xử lý AES thu được 11 khoá vòng từ các key mã hoá được phân phát cho kỹ thuật mã hoá.

### Giới thiệu về BigchainDB 
  BigchainDB là một cơ sở dữ liệu blockchain có thể mở rộng, phân cấp, không thể thay đổi được đối tượng và sở hữu cá nhân. BigchainDB cho phép triển khai các ứng dụng quy mô lớn trong nhiều trường hợp sử dụng và các ngành công nghiệp từ sở hữu trí tuệ, định danh đến các chuỗi cung ứng, IoT và trí tuệ nhân tạo. BigchainDB cung cấp giả pháp độc nhất cho các nhà phát triển, các dự án khởi nghiệp và các doanh nghiệp để xây dựng thành công các khái niệm, nền tảng và các ứng dụng mơ ước.

  Chúng ta có thể xây dựng một blockchain truyền thống như một cơ sở dữ liệu (DB), theo nghĩa nó cung cấp một cơ chế lưu trữ.
  Nếu chúng ta đo Bitcoin blockchain bằng các tiêu chí DB truyền thống:
  * thông lượng:  một vài giao dịch mỗi giây (tps),
  * độ trễ: trước khi một đơn xác nhận viết là 10 phút,
  * khả năng lưu trữ:  một vài chục GB. 
  Hơn nữa nó về cơ bản cũng không có khả năng truy vấn như một cơ sở dữ liệu NoQL.

  Ngược lại, một DB phân phối hiện đại:
  * thông lượng: vượt quá 1 triệu tps.
  * độ trễ: của một phần nhỏ của một giây.
  * khả năng lưu trữ: đạt hàng petabyte và nhiều hơn nữa.
  * thông lượng và khả năng lưu trữ tăng lên khi các nút được thêm vào.
  
  Cơ sở dữ liệu hiện đại cũng có khả thực hiện các truy vấn, và kiểm soát truy cập bằng SQL hoặc NoSQL,...
  
  Trên thực tế SQL là một tiêu chuẩn quốc tế ANSI và ISO.

  Các công nghệ phân tán với khả năng kết nối các hệ thống tài chính hiện đại, các chuỗi cung ứng, các ngành công nghiệp sáng tạo và ngay cả bản thân mạng Internet đòi hỏi các yêu cầu rất cao về thông lượng, độ trễ và khả năng lưu trữ và nó vượt quá khả năng của bitcoin

|| Blockchain truyển thống | CSDL phân tán truyền thống| BigchainDB |
| :-------: | :--: | :---: | :---: |
| Thông lượng lớn, tăng với số lượng nút | - | x | x | 
| Độ trễ thấp | - | x | x | 
| Khả năng lưu trữ lớn | - | x | x |
| Truy vấn đa dạng | - | x | x | 
| Permission đa dạng | - | x | x | 
| Điều khiển phân quyền | x | - | x | 
| Immutability | x | - | x | 
| Tạo và di chuyển tài sản điện tử | x | - | x |

### Kiến trúc của BigChainDB
![alt tag](https://zdnet2.cbsistatic.com/hub/i/r/2017/03/02/ab5ecffb-030c-4d4e-92c6-13db85a97d2e/resize/770xauto/d5e9a5a777c4f0e55ad4c62bb92bcccf/bigchainarchitecture.png)
Ảnh: BigchainDB hoạt động bằng cách xây dựng các tính năng của chuỗi khối trên tầng trên của một CSDL, thay vì sử dụng chuỗi khối như một CSDL.

*BigchainDB hoạt động bằng cách xây dựng các tính năng của chuỗi khối trên đầu của một CSDL, thay vì sử dụng chuỗi khối như một CSDL.

Ở tầng dưới, BigChainDB sử dụng hai cơ sở dữ liệu phân tán, S(bộ giao dịch) và C(chuỗi khối). Chúng được kết nối bằng thuật toán đồng thuận BigChainDB(BigchainDB Consensus Algorithm-BCA). Thuật toán BCA chạy trên mỗi nút đã được ký kết(signing node), cùng với các nút khác trở thành một mạng lưới. Những người dùng(client) không ký kết có thể kết nỗi với mạng lưới của BigChainDB và tùy quyền mà họ có thể đọc, phát hành tài sản(asset), chuyển tài sản và hơn thế nữa.
Với mỗi một cơ sở dữ liệu phân tán, S và C là một cơ sở dữ liệu "lớn" sẵn có(off-the-shell big data DB). BigChainDB không can thiệp vào hoạt động nội bộ của dữ liệu, vì vậy nó sẽ tận dụng các thuộc tính khả năng mở rộng của chúng, cũng như các tính năng như kiểm soát sửa đổi và lợi ích của chúng. Mỗi CSDL chạy thuật toán đồng thuận nội bộ riêng cho tính nhất quán.
Các tính năng của chuỗi khối được cho vào cơ sở dữ liệu này:
* Kiểm soát phi tập trung(Decentralized control): Không đối tượng nào sở hữu hay điều khiển mạng lưới.
* Tính không thay đổi (Immutability): Dữ liệu văn bản được chống giả mạo(vĩnh viễn).
* Khả năng tạo và chuyển các tài sản trong mạng lưới mà không phụ thuộc vào thực thể trung tâm.

## Mô hình dữ liệu
-BigchainDB cơ bản lưu trữ tất cả dữ liệu dưới hình thức các tài liệu JSON.</br>
Tồn tại dưới 3 dạng chính của nó là:
1. Các giao dịch(transactions), bao gồm tài sản(asset), các đầu vào, các đầu ra và các thuộc tính khác.
2. Các khối(blocks)
3. Các bình chọn(votes)
Dưới đây chúng ta sẽ lần lượt tìm hiểu về chúng.

### Mô hình của các giao dịch(transaction)
Một mô hình điển hình có cấu trúc như sau:
``` javascript
  {
    "id": "<ID of the transaction>",
    "version": "<Transaction schema version number>",
    "inputs": ["<List of inputs>"],
    "outputs": ["<List of outputs>"],
    "operation": "<String>",
    "asset": {"<Asset model; see below>"},
    "metadata": {"<Arbitrary transaction metadata>"}
  }
 ```
* id: Khóa chính của cơ sở dữ liệu, là định danh đồng thời cũng là mã băm của giao dịch.
* version: Phiên bản của giao dịch, với BigChainDB Server phiên bản 1.0.0 thì giá trị duy nhất được chấp nhận là "1.0".
* inputs: Danh sách các đầu vào, các đầu vào biến đổi/sử dụng các đầu ra của các giao dịch trước đó bằng cách đáp ứng các yêu cầu về bảo mật,..Khi tạo mới 1 giao dịch thì phải có ít nhất 1 đầu vào.
* outputs: Danh sách các đầu ra, mỗi đầu ra phải đáp ứng được các yêu cầu về mặt bảo mật nếu muốn sử dụng/chuyển đổi. Nó đồng thời cũng thể hiện phần tài sản(asset) gắn với đầu ra đó.</br>
#### *Cách tính toán ID*:
1. Xây dựng một từ điển python bao gồm các thuộc tính: *version, inputs, outputs, operation, asset, metadata* và giá trị của chúng.
2. Với mỗi đầu vào(input) thay thế toàn bộ chuỗi hoàn chỉnh(fulfillment) của nó với *null*.
3. Biểu diễn từ điển trên như một chuỗi bytes(serialize).
4. Mã hóa nó dùng thuật toán SHA3-256 ta có được ID.

#### *Về phần chữ ký xác thực(signing)*
Sau khi nhận được mô hình cho các khối(blocks) và các bình chọn(votes), ta thấy chúng có một chữ ký đi kèm từ nút tạo ra nó. Câu hỏi là tại sao ở lúc tạo giao dịch không có công đoạn ký xác thực? Câu trả lời là chúng đã được ký ẩn bên trong các chuỗi hoàn chỉnh(fulfillment) khi chúng được tạo ra.

### Mô hình tài sản(the asset model)
Để tránh việc dư thừa dữ liệu trong các giao dịch, mô hình tài sản sẽ khác nhau với các giao dịch tạo mới(create) và chuyển đổi(transfer): </br>
* Trong giao dịch tạo mới: tài sản bắt buộc phải có một cặp khóa-dữ liệu, khóa phải là "data" còn dữ liệu có thể là bất kỳ chuỗi JSON hợp lệ nào hoặc giá trị null. Ví dụ:

``` javascript
  {
    "data": {
      "desc": "Gold-inlay bookmark owned by Xavier Bellomat Dickens III",
      "xbd_collection_id": 1857
    }
  }
```
* Trong giao dịch chuyển đổi: tài sản bắt buộc phải có một cặp khóa-dữ liệu, khóa phải là "id" còn dữ liệu phải chứa ID của giao dịch. Ví dụ:

``` javascript
{
  "id": "38100137cea87fb9bd751e2372abb2c73e7d5bcf39d940a5516a324d9c7fb88d"
}
```
### Các đầu vào(inputs) và đầu ra(outputs)
BigchainDB được mô phỏng xung quanh các tài sản, các đầu vào, các đầu ra và chúng là cơ chế để kiểm soát tài sản hoặc cổ phần được chuyển giao. Lượng tài sản được mã hóa bên trong đầu ra của một giao dịch, mỗi đầu ra có thể được dùng một cách riêng biệt. Để sử dụng một đầu ra, các điều kiện của đầu ra phải được đáp ứng bởi một đầu vào có chuỗi hoàn chỉnh(fulfillment) tương ứng. Mỗi đầu ra có thể được sử dụng duy nhất một lần với 1 đầu vào duy nhất phù hợp.
##### Các đầu vào
Một đầu vào có cấu trúc như sau:
```javascript
{
  "owners_before": ["<The public_keys list in the output being spent>"],
  "fulfillment": "<String that fulfills the condition in the output being spent>",
  "fulfills": {
      "output_index": "<Index of the output being spent (an integer)>",
      "transaction_id": "<ID of the transaction containing the output being spent>"
  }
}
```
Có thể coi đối tượng *fulfills* như một con trỏ tới đầu ra của một giao dịch khác, đầu ra của đầu vào này là quá trình sử dụng/chuyển đổi. Một giao dịch tạo mới(create) bắt buộc phải có chính xác một đầu vào, đầu vào này có thể trước đây thuộc sở hữu của các đối tượng khác nhau, một chuỗi hoàn chỉnh(fulfillment) (với một chữ ký từ mỗi chủ sở hữu trước đây) và giá trị của fulfils nên là null. Giao dịch chuyển đổi (transfer) phải có ít nhất một đầu vào, và giá trị của fulfils không nên là null. Xem tài liệu tham khảo về đầu vào để biết thêm về ý nghĩa của mỗi trường.

#### *Tính toán chuỗi hoàn chỉnh (fulfilment)*
1. Xác định chuỗi theo "Crypto-Conditions spec (version 02)".
2. Mã hóa chuỗi sử dụng "ASN.1 Distinguished Encoding Rules (DER)".
3. Mã hóa chuỗi nhận được bên trên bằng base64url (không phải base64 thông thường) theo chuẩn "RFC 4648 (Section 5)".

Để thực hiện quá trình tính toán trên bạn có thể dùng một trong các  "BigchainDB drivers" hoặc "transaction-builders".
Ví dụ:
```javascript
"pGSAIDgbT-nnN57wgI4Cx17gFHv3UB_pIeAzwZCk10rAjs9bgUDxyNnXMl-5PFgSIOrN7br2Tz59MiWe2XY0zlC7LcN52PKhpmdRtcr7GR1PXuTfQ9dE3vGhv7LHn6QqDD6qYHYM"
```

#### Các đầu ra
Một đầu ra có cấu trúc như sau:
```javascript
{
  "condition": {"<Condition object>"},
  "public_keys": ["<List of all public keys associated with the condition object>"],
  "amount": "<Number of shares of the asset (an integer in a string)>"
}
```
* Phần giới thiệu về điều kiện sẽ giải thích rõ hơn về các nội dung tương ứng với khóa "condition".
* Danh sách các khóa công khai luôn là "chủ sở hữu" các tài sản khi giao dịch được hoàn tất.
* Lưu ý rằng, lượng tài sản giao dịch phải là một chuỗi (ví dụ "7"). Trong giao dịch chuyển đổi(transfer) tổng tài sản đầu ra phải bằng tổng lượng tài sản đầu vào.

### Các điều kiện
Ở một mức cao hơn, điều kiện giống như một khóa của đầu ra. Nếu bạn đáp ứng được các điều kiện, bạn có thể mở khóa tài sản và sử dụng nó. BigchainDB hỗ trợ một tập con các điều kiện của "ILP Crypto-Conditions".

Một đối tượng điều kiện có thể khá phức tạp với nhiều mức lồng nhau nhưng với các trường hợp đơn giản thì thực sự là khá dễ hiểu. Dưới đây là một ví dụ về chữ ký điều kiện:
```javascript
{
  "details": {
    "type": "ed25519-sha-256",
    "public_key": "HFp773FH21sPFrn4y8wX3Ddrkzhqy4La4cQLfePT2vz7"
  },
  "uri": "ni:///sha-256;at0MY6Ye8yvidsgL9FrnKmsVzX0XrNNXFmuAPF4bQeU?fpt=ed25519-sha-256&cost=131072"
}
```
Nếu muốn sử dụng một đầu ra với điều kiện đã có, thì ta cần phải tạo một giao dịch chuyển đổi(transfer) với đầu vào đáp ứng điều kiện kia. Và giao dịch kia cần phải ký với khóa bí mật tương ứng vơi khóa công khai  "HFp773..
#### Điệu kiện Crypto
BigchainDB Server V1.0 hỗ trợ:
1. Chữ ký ED25519-SHA-256.
2. Ngưỡng THRESHOLD-SHA-256.

Một điều kiện phức tạp hơn có thể được tạo ra với đầu vào là n chữ ký điều kiện khác nhau và m ngưỡng trong n chữ ký đó. Một cổng logic trả về kết quả. Ví dụ:
```javascript
{
  "details": {
      "type": "threshold-sha-256",
      "threshold": 2,
      "subconditions": [
          {
            "public_key": "5ycPMinRx7D7e6wYXLNLa3TCtQrMQfjkap4ih7JVJy3h",
            "type": "ed25519-sha-256"
          },
          {
            "public_key": "9RSas2uCxR5sx1rJoUgcd2PB3tBK7KXuCHbUMbnH3X1M",
            "type": "ed25519-sha-256"
           }
       ]
   },
   "uri": "ni:///sha-256;zr5oThl2kk6613WKGFDg-JGu00Fv88nXcDcp6Cyr0Vw?fpt=threshold-sha-256&cost=264192&subtypes=ed25519-sha-256"
}
```
![condition](https://docs.bigchaindb.com/projects/server/en/latest/_images/Conditions_Circuit_Diagram.png)
</br>
Khi tạo một điều kiện phải chú ý tính toán chi phí tài nguyên cần thiết để xác thực chúng.

### Mô hình khối(The Block Model)

Một khối có cấu trúc như sau:</br>
```javascript
{
  "id": "<hash of block>",
  "block": {
    "timestamp": "<block-creation timestamp>",
    "transactions": ["<list of transactions>"],
    "node_pubkey": "<public key of the node creating the block>",
    "voters": ["<list of public keys of all nodes in the cluster>"]
  },
  "signature": "<signature of block>"
}
```
* `id`: Mã băm của các chuỗi bytes bên trong khối(ví dụ: timestamp, transactions,..). Nó được sử dụng như khóa chính của cơ sở dữ liệu.
* `khối`:
  * `timestamp`: Thời gian khối được tạo ra.
  * `transactions`: Danh sách các giao dịch bên trong khối.
  * `node_pubkey`: Khóa công khai của nút tạo khối.
  * `votes`: Danh sách tất cả các khóa chính của các nút(các nút mà có thể tham gia vào việc bầu chọn trên khối này) tại thời điểm khối được tạo.
  * `signature`: Chữ ký Cryptographic của khối. Chữ ký này tạo bằng cách mã hóa chuỗi bytes bên trong khối bằng khóa bí mật của nút.

#### Làm việc với các khối
> Có một lớp `Block` hỗ trợ việc tạo và làm việc với các khối.

###   Mô hình bình chọn(The Vote Model)
Nó có cấu trúc như sau:
```javascript
{
    "node_pubkey": "<The public key of the voting node>",
    "vote": {
        "voting_for_block": "<ID of the block the node is voting on>",
        "previous_block": "<ID of the block previous to the block being voted on>",
        "is_block_valid": "<true OR false>",
        "invalid_reason": null,
        "timestamp": "<Unix time when the vote was generated, provided by the voting node>"
    },
    "signature": "<Cryptographic signature of vote>"
}
```
Lưu ý:
> * Votes không có `ID`
> * Hiện tại thì giá trị của trường "invalid_reason" luôn là null, nó có thể được dùng đến trong các phiên bản tiếp theo của BigchainDB.
> * `Timestamp` và `signature` thì vẫn có ý nghĩa như các phần trước đó. Bạn có thể đọc lại để biết thêm chi tiết.

## III Giới thiệu về sản phẩm

### Cơ chế của ứng dụng

Điểm (point) là đơn vị định lượng được gán với định danh của một người dùng. Một người A có thẻ tạo ra các point và chia sẻ cho người khác. Người B có thể chia sẻ point nhận từ A cho những người khác, tuy nhiên B không thể tạo ra được point có định danh giống của A. Như vậy mỗi người sẽ có thể tạo ra point của riêng mình, việc tạo và chia sẻ point có thể đại diện thay cho các giá trị khác như: tiền, điểm số v..v... Việc phân phói này là hoàn toàn đáng tin do được bảo vệ bởi cơ chế của blockchain, và không cần sự có mặt của quản trị viên.

### Các chức năng của mỗi người dùng
* Thêm điểm : Người dùng có thể tạo ra loại điểm của riêng mình.
* Chia điểm : Người dùng có thể chia sẻ điểm cho nhau.
* Láy danh sách người sở hữu điểm: Người dùng có thể tra cứu danh sách những người đang sở hữu loại point.

### Kiến trúc 

##### Thiết kế:
![Alt text](./assets/architecture.jpg?raw=true "architecture")


Tác dụng của từng thành phần:
* BigchainDB Server: Lưu trữ điểm, bảo đảm dữ liệu. Do bigchainDB có khả năng cũng cấp chức năng lưu trữ an toàn, chống giả mạo và gian lận vì vậy nó được sử dùng làm cơ sở dữ liệu chính lưu các điểm (point) của người dùng.
* MongoDB Server: Lưu trữ thông tin của người dùng, index dữ liệu hỗ trợ truy cập nhanh vào BigchainDB
* Node Server: Cung cấp API thao tác với database và giao diện, xử lý logic
* Angular Server: Cung cấp giao diện cho người dùng.

## IV Hướng dẫn cài đặt

### Server
### Cài đặt bigchaindb
  Yêu cầu:
  * python-pip
  * mongodb >=3.4
  Hướng dẫn sau đây là dành cho hệ điều hành ubuntu 16.04 64bit các hệ điều hành unix khác làm tương tự

#### Cài đặt python-pip
```
    $ sudo apt-get update
    $ sudo apt-get install libffi-dev libssl-dev
    $ sudo apt-get install python3-pip
    $ sudo pip3 install --upgrade pip setuptools
```
#### Cài đặt mongodb bản mới nhất
```
    $ sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
    $ echo "deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
    $ sudo apt-get update
    $ sudo apt-get install -y mongodb-org
```

#### Cài đặt bigchaindb
```
    $ sudo pip3 install bigchaindb
```

#### Chạy Bigchaindb
```
    $ sudo mongod --replSet=bigchain-rs
    $ bigchaindb -y configure mongodb
    $ bigchaindb start
```

mặc định bigchaindb chạy ở http://127.0.0.1:9984/

### Cài đặt server
 Yêu cầu:
 * Bigchaindb
 * Nodejs
 * Mongodb
#### Cài đặt nodejs
```
    $ curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
    $ sudo apt-get install -y nodejs
    $ sudo apt-get install -y build-essential
```

#### Cài đặt server
```
    $ git clone https://github.com/truonganhhoang/int3507-2017.git
    $ cd int3507-2017/bigchain/server
    $ npm install
```
Nếu sử dụng database đã cài đạt ở nơi khác cần sửa cấu hình trong config/config.js
#### Chạy server
```
    $ node app.js
     or
    $ npm start
```
 mặc định server chạy ở http://127.0.0.1:3000
### Client
 Yêu cầu: Nodejs

#### Cài đặt client
```
    $ cd int3507-2017/bigchain/client
    $ npm install
```
Cấu hình lại server tại proxy.conf.json 

#### Chạy client
```
    $ npm start
```

mặc định client chạy ở http://127.0.0.1:4200
### Hình ảnh demo

## V Kết luận

#### Ưu điểm
* Sử dụng blockchain cho phép ngăn chặn các hành vi thao tác trái phép vào trong database, dễ dàng mở rộng, phân tán mà không cần một server điểu khiển.
* Sử dụng thuật toán mã hoá AES giúp ngăn chặn đánh căp thông tin
#### Nhược điểm
* Việc mã hoá và giải mã làm hao tốn tài nguyên hơn các thao tác truy xuất database thông thường.
* Việc đồng bộ dữ liệu giữa các node có độ trễ.

Tài liệu tham khảo:

[1] BigchainDB, https://www.bigchaindb.com, 10/2017

[2] Bitcoin, https://vi.wikipedia.org/wiki/Bitcoin, 10/2017

[3] Blockchain, https://vi.wikipedia.org/wiki/Blockchain, 10/2017

[4] BigchainDB docs, https://docs.bigchaindb.com/en/latest, 10/2017

[5] BigchainDB whitepaper, https://www.bigchaindb.com/whitepaper, 10/2017

