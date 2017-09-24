# I. Introduction(Giới thiệu)

  - Phaser là một HTML5 framework giúp developer phát triển game 1 cách mạnh mẽ, game HTML5 được chạy trên trình duyệt 1 cách nhanh chóng, có thể xây dựng game với mobile, nó được hỗ trợ bởi thẻ Canvas và Flixel.  
  
  - ### Yêu cầu: cần có kiến thức về cơ bản về JavaScript

      `var game = new Phaser.Game(800,600, Phaser.AUTO,"",{ preload: preload, create: create, update: update);`  
   
      *Khởi tạo 1 đối tượng của phaser, gán cho đối tượng Game vào 1 biến local là game*  
      *Hai thông số đầu tiên là thẻ width và height của Canvas sẽ được tạo ra*  
      *Thông số thứ ba có thể là Phaser.CANVAS, Phaser.WEBGL, Phaser.AUTO*  
    
   - Vẽ lại bối cảnh muốn sử dụng  
      <ul>
        <li>Khuyến cáo nên dùng Phaser.AUTO nó thường tự động sử dụng WEBGL nhưng nếu trình duyệt không hỗ trợ thì nó sẽ sử dụng CANVAS</li>  
        <li>Thông số thứ tư là 1 chuỗi trống là Id của DOM mà bạn muốn chèn phần tử Canvas mà Phaser tạo ra, khi để trống thì nó sẽ chèn vào body </li>  
        <li>Thông số cuối cùng là tham chiếu đến 4 function cần thiết của Phaser( không cần thiết vì Phaser hỗ trợ state giúp tạo nhiều đối tượng đơn hơn) nhưng dùng tham chiếu này sẽ nhanh hơn.</li>  
      </ul>   

# II. Loading Assets(tải tài nguyên)
  - Hãy nạp vào các assets( images,video...) cần cho game bằng cách gọi *game.load* trong function *preload()*  
  Phaser sẽ tự động tìm kiếm function này và tải nội dung trong nó:  
  
      `function preload() {
        game.load.image('sky', 'assets/sky.png');
      }`  
      
     chúng ta để ý tham số thứ nhất 'sky' nó chính là key( link mà chúng ta sẽ gọi đến khi tạo mới 1 sprites)  

  - **Tạo một sprite**  
  
    Để thêm 1 sprite vào game chúng ta dùng:
    
       `game.add.sprite(0, 0, 'star');`  
        
      với key 'star' đã được tạo trong function preload() 0 0 là tọa độ của image này;

# III. Xây dựng khung game

 - Tạo ra 1 đối tượng Sprite mới và thêm vào thế giới game mới, chứa tất cả đối tượng  
 
 - Khung này không có kích thước cố định mà mở rộng vô hạn theo mọi hướng  
 
 - Với tọa độ đầu (0,0) phaser có hỗ trợ camera đối tượng có thể di chuyển xung quanh nếu cần thiết.  
 
 - Trong khung này truy cập qua *game.world* đi kèm nhiều method giúp bạn phân phối vật thể bên trong khung game.  
 
    *Ví dụ:* `game.world.height`  

# IV. Nhóm(Groups)

  - Cho phép các đối tượng tương tự nhau và kiểm soát chúng như 1 đối tượng duy nhất  
  
  - Có thể kiểm tra va chạm giữa 2 nhóm khác nhau  
  
  - Trong game này sử dụng 2 nhóm  
  
  - Giống với sprite  
  
    `platforms = game.add.group();`  
    
  - Tạo mới 1 group  
    <ul>
      <li>Chỉ định group là 1 biến platforms</li>  
      <li>Sau khi tạo ta có thêm các đối tượng vào nó</li>  
      <li>Đầu tiên là mặt đất: sử dụng hình ảnh ground.png được scale vừa với width của khung game</li>  
      <li>Set immovable là true: nếu không set như vậy khi người chơi chạm với mặt đất thì mặt đất sẽ di chuyển(Phần Physics section)</li>         <li>Chúng ta tạo thêm 2 thanh đá giống với mặt đất</li>  
     </ul>
    
   - Player  
      <ul>
        <li>Ta thấy hình dude.png có tổng cộng 9 khung 4 để chạy trái 1 cho đối diện camera và 4 cho chạy phải</li>  
        <li>chúng ta định nghĩa 2 chuyển động gọi là trái phải. Hành động trái sử dụng khung 0,1,2,3 chạy trong 10s, khai báo true là chỉ hành động lặp lại</li>  
      </ul>
   
# V. Vận tốc và body là 1 thế giới của vật lý

  - Phaser hỗ trợ nhiều hệ thống vật lý khác nhau,đi kèm với arcade physics, ninja physics, full-body physics.  
  
  - Trong game này sử dụng arcade physics: đơn giản, nhẹ phù hợp trình duyệt mobile  
  
  - sprite là 1 đối tượng của physicArcade(body)  
  
  - Mô phỏng các lực:  
  
    `player.body.gravity.y = 300;`
      
     *là 1 giá trị túy ý, giá trị càng cao thì càng nặng => vật rơi xuống tốc độ nhanh hơn*  
    
  - **Tại sao player rơi xuống gặp ground mà ko dừng lại**: lý do là chưa xét sự va chạm giữa mặt đất và người chơi,ta đã set cho ground và platforms là bất động, nếu không làm vậy thì người chơi va chạm vào nó sẽ dừng 1 lát, vì ground, platforms là 1 vật thể di chuyển vật thể khi người chơi chạm vào  
  
  - Lực va chạm áp dụng cho mặt đất hai vật trao đổi vận tốc cho nhau mặt đất sẽ giảm vận tốc  
  
  - Để cho phép va chạm giữa player với ground ta cần set trong function update():  
  
    `var hitPlatform = game.physics.arcade.collide(player, platforms);`  
    
    *Hàm update này được gọi bởi vòng lặp trò chơi tương ứng với khung*  
  
  - Sử dụng function collide: kiểm tra va chạm và không cho phép  

# VI. Điều khiển player với keyboard

  - Phaser tích hợp keyboard và có các function cho việc sử dụng nó

# VII. StarShine

  - Tạo 1 đối tượng star
  
# VIII. Tham khảo

https://phaser.io/  

