# The Voting App
## Mô tả
Đây là một ứng dụng rất đơn giản để giới thiệu về một trong các ứng dụng quan trọng của nền tảng Ethereum - ứng dụng phi tập trung (decenterlized app). 

Ứng dụng mô tả một cuộc bầu cử đơn giản, các thông tin về việc bầu cử đều được ẩn danh, mỗi lần bầu cử ứng với một giao dịch trên Ethereum, được lưu vào chuỗi khối và không thể bị thay đổi.

## Yêu cầu
Ứng dụng cho phép người dùng thông thường đăng ký một tài khoản Ethereum trên mạng thử nghiệm (ứng dụng này sử dụng mạng thử nghiệm của Ethereum có tên là Rinkeby *[1]*). 

Để có thể bầu chọn trong ứng dụng, người sử dụng sẽ cần có ether trong tài khoản bằng cách xin cấp miễn phí tại `https://faucet.rinkeby.io`. Khi đã có tài khoản của mình, người dùng có thể sử dụng chức năng bầu cử và chỉ được bầu cử một lần duy nhất với mỗi tài khoản Ethereum.

## Cài đặt môi trường

Phần hướng dẫn sau đây là dành cho môi trường phát triển trên Linux (cụ thể hơn là Ubuntu), các môi trường khác có thể thực hiện theo các bước tương tự với một số thay đổi. 

Để có thể triển khai ứng dụng, cần có một chương trình chạy trên máy chủ giao tiếp với mạng thử nghiệm Rinkeby có tên là Go Ethereum (Geth). 
Để cài đặt ta thực hiện:

    sudo add-apt-repository -y ppa:ethereum/ethereum
    sudo apt-get update
    sudo apt-get install ethereum

Sau khi cài đặt xong để chạy Geth ta sẽ dùng câu lệnh:

    geth --rinkeby --rpc --rpcapi db,eth,net,web3,personal

Ta sẽ thấy một số tham số, --rinkeby để chỉ định mạng thử nghiệm mà chúng ta sử dụng, --rpcapi chỉ định các giao diện lập trình ứng dụng mà ta có thể sử dụng để giao tiếp với chương trình Geth này. Sau khi thực hiện câu lệnh, bạn sẽ phải đợi một khoảng thời gian đáng kể để chương trình tải về chuỗi khối, bạn phải lưu ý rằng chương trình phải có chuỗi khối mới nhất thì mới có thể thực hiện giao dịch nhưng vẫn có thể nhận ether một cách bình thường. 

Vậy là ta đã có một nút trên mạng Ethereum và có thể sử dụng web3 *[2]* - một thư viện cung cấp các giao diện lập trình trên mạng Ethereum để thực hiện các yêu cầu theo mong muốn của ứng dụng bầu cử.

## Chạy chương trình

### Xây dựng hợp đồng thông minh
Hợp đồng thông minh của ứng dụng bầu cử này sẽ được viết bằng ngôn ngữ Solidity.  

Sau khi hoàn thành mã nguồn của hợp đồng thông minh, ta sẽ cần biên dịch mã nguồn đó trước khi có thể triển khai trên máy ảo Ethereum, mỗi lần thay đổi mã nguồn bạn sẽ phải làm lặp lại các bước trên khá là nhàm chán, nên ứng dụng này sẽ sử dụng khung làm việc Truffle để hoàn thành các công việc trên một cách tự động.

Một số điều cần lưu ý khi triển khai hợp đồng trên máy ảo Ethereum là bạn cần một tài khoản và ether để triển khai hợp đồng. Để thực hiện các giao dịch cũng như chi tiêu đồng ether này, bạn phải mở khóa tài khoản đó bằng cách chạy lại Geth và thêm tham số --unlock= cộng với giá trị theo sau là địa chỉ tài khoản của bạn.

**Ví dụ:** --unlock="0x176916e03344eef8B7c85e18D488d71437966333"

Sau đó chương trình sẽ yêu cầu bạn nhập mật khẩu để xác nhận lần cuối bạn sở hữu tài khoản đó. Tiếp theo ta cần chỉnh sửa tệp truffle.js để được như sau:

```javascript
module.exports = {
  networks: {
    rinkeby: {
      host: "localhost", // Connect to geth on the specified
      port: 8545,
      from: "0x176916e03344eef8B7c85e18D488d71437966333",
      network_id: 4,
      gas: 4000000 // Gas limit used for deploys
    }
  }
};
```

File gồm: 

- `host`: ip của nút Ethereum
- `port`: cổng của nút Ethereum
- `from`: địa chỉ sẽ chi ether để triển khai, 
- `network_id`: chỉ định mạng sẽ được triển khai (id của mạng Rinkeby là 4), 
- `gas`: chỉ mức bạn chi để triển khai hợp đồng (nếu quá nhỏ sẽ không thể triển khai).

Sau khi triển khai xong ta sẽ có tệp Voting.json, tệp này sẽ được chứa các cấu hình để có thể gọi các phương thức của hợp đồng.
  
### Phía backend
Phía backend sẽ được viết bằng nodejs để đảm bảo tương thích tốt nhất với web3 (đã có các bản phân phối cho các ngôn ngữ khác). Phiên bản web3 sử dụng trong ứng dụng này là phiên bản beta nhưng có nhiều tính năng mới và tương thích tôt hơn, tài liệu sử dụng cụ thể tại `https://web3js.readthedocs.io/en/1.0`. 

Việc tạo tài khoản khá đơn giản bằng việc gọi một phương thức của web3, ta chỉ cần chú ý rằng kết quả trả về sẽ gồm một khóa công khai (địa chỉ của tài khoản) và một khóa bí mật, muốn lưu lại khóa bí mật này ta cần mã hóa nó với mật khẩu do người dùng nhập vào, web3 cũng hỗ trợ việc này với phương thức mã hóa AES với độ dài khóa 128 bit.

Vì là ứng dụng thử nghiệm nên ta sẽ chỉ đơn giản định danh mỗi người dùng bởi một token (sẽ được tạo tự động trong lần đầu tiên truy cập), và mỗi tài khoản người dùng có thể tạo nhiều tài khoản Ethereum, mỗi tài khoản này sẽ có thể tải về khóa bí mật của họ (đã được mã hóa trước đó) để sử dụng lại về sau.

Vấn đề chính cần giải quyết là việc mở khóa tài khoản để có thể sử dụng ether trong quá trình bầu cử. Về mặt tài liệu, web3 đã cung cấp phương thức mở khóa tài khoản bằng địa chỉ và mật khẩu trong một khoảng thời gian nhất định. Nhưng chú ý rằng bạn không thể dùng phương thức đó nếu bạn không thực hiện bước lưu khóa bí mật đã mã hóa tại thư mục \$HOME/.ethereum/rinkeby/keystore. Thông thường khi bạn tạo tài khoản, tệp lưu khóa bí mật này sẽ được tạo tự động nhưng nếu tạo với web3 thì không, vì vậy bạn phải tạo thủ công. Hãy để thời gian mở khóa một cách hợp lý để cân bằng giữa tính tiện dụng và bảo mật cho ứng dụng.

Việc cần làm tiếp theo là việc chuyển các yêu cầu của người dùng thành các yêu cầu gửi tới hợp đồng để tác động lên chuỗi khối, chú ý rằng đây là mạng thử nghiệm nên nó khá chậm và sẽ mất một khoảng thời gian đáng kể cho mỗi giao dịch.
Để chạy chương tình phía backend bạn cần chạy câu lệnh

    npm run serve:dev

### Phía frontend
Phía frontend được viết bằng khung làm việc VueJS *[3]*, được sử dụng để xây dựng ứng dụng một trang (Single Page Application) một cách nhanh chóng.
Để chạy chương trình phía frontend bạn cần chạy câu lệnh

    npm run dev

## Tài liệu tham khảo
- [1] [https://www.rinkeby.io/](https://www.rinkeby.io/#stats)
- [2] [web3.js - Ethereum JavaScript API](https://web3js.readthedocs.io/en/1.0)
- [3] [https://vuejs.org/](https://vuejs.org/)