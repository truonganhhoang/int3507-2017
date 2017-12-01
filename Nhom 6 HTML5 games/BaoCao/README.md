# I. Introduction (Giới thiệu)
Phaser là một game framework cho desktop và mobile. Nó thì nhanh, miễn phí và là mã nguồn mở. Phiên bản Phaser hiện tại là 2.6.2. Nó hỗ trợ cho cả WebGL và Canvas. Nó có một loạt các tính năng giúp bạn trong việc phát triển game. Nó cũng giống như game framework Flixer cho ActionScript 3.  
# II. Install (Cài đặt)
## 1. Cài đặt Web Server  
Sử dụng WAMP Server hoặc XAMPP và cả hai đều có hướng dẫn cài đặt dễ dàng. Đặc biệt WAMP cài đặt một biểu tượng vào khay hệ thống của bạn, từ đó bạn có thể dừng lại và khởi động lại các dịch vụ, cũng như sửa đổi cài đặt Apache chẳng hạn như tạo một bí danh thư mục mới cho một dự án.  
## 2. Cài đặt Editor  
Sử dụng SublimeText hoặc Editor bạn ưa thích.  
## 3. Tải thư viện Phaser
Tải thư viện Phaser từ trang chủ của phaser : https://phaser.io  
Giải nén file RAR download được sau đó coppy vào Project Game.  
# III. Prepare data  
## 1. Tạo thư mục trong Project  

<img src = "https://i.imgur.com/JFr1LBR.png">  

## 2. Assets  
Nơi lưu trữ các hình ảnh của Project, ví dụ : Background , button ,...  
## 3. Unit  
Danh sách hình ảnh về các chủ đề  

<img src = "https://i.imgur.com/aHkc1me.png">  

## 4. Img-for-sentences  
Danh sách các hình ảnh cho mỗi chủ đề  

<img src = "https://i.imgur.com/ddll5aK.png">  

Với chủ đề “Time”(hình ảnh “1” trong “unit” ) ta sẽ có hình ảnh s_1 (trong “img-for-sentences”) tương ứng. Trong s_1 lại là danh sách các hình ảnh liên quan đến các câu hỏi về thời gian.  

<img src = "https://i.imgur.com/hKSI1Vp.png">  

## 5. Atlasjson  
Như trình bày ở trên , ta có hình ảnh s_1 sẽ gồm danh sách các **frame** , ứng với mỗi **frame** là 1 câu hỏi trong chủ đề “Time”.  
Bây giờ ta sẽ cần dùng **Atlasjson** để lấy các **frame** trong “s_1”.  
### 5.1 Atlas là gì ?  
- Như ta đã biết trong địa lý : Atlat tiếng Hy Lạp cổ đại: Ἄτλας là thuật ngữ dùng để chỉ một tập bản đồ; điển hình là bản đồ trái đất hoặc một khu vực của trái đất.  
- Đối với Phaser , Atlas cũng đóng vai trò như một bản đồ đối với 1 hình ảnh nào đó:  

<img src = "https://i.imgur.com/5xZuY5o.png">  

- Trong đó:  
  <ul>
  <li>Key: Tên của Atlas.</li>  
  <li>TextureURL : URL hình ảnh cần chuyển về Atlas.</li>  
  <li>AtlasURL : URL AtlasJson.</li>  
  <li>AtlasData : Định dạng load Atlas.</li>  
  </ul>  
### 5.2 AtlasJson là gì ?  
Nếu Atlas giống như 1 tấm bản đồ thì ta có thể coi AtlasJson giống như 1 cuốn sổ ghi lại các địa chỉ của các nhà.  
Giả sử mỗi hình ảnh là một bản đồ thì tương ứng ta có các frame trên hình ảnh là các ngôi nhà trên bản đồ và AtlasJson chính là cuốn sổ địa chỉ mà ta cần phải có để xác định các frame:  

<img src = "https://i.imgur.com/zKNcIHy.png">  

<img src = "https://i.imgur.com/s48A99f.png">  

Xét Object thứ nhất (frame 1) ta có :  
	“**filename**” = “0” : tên File là “0”  
“**frame**” : {x = 1 , y = 1 , w = 164 , h: 163}  
			**X** là hoành độ góc trên cùng bên trái của frame.  
			**Y** là tung độ góc trên bên trái của frame.  
			**W** là width – độ rộng của frame.  
			**H** là height – chiều cao của frame.  
Như vậy khi ta có 1 hình ảnh gồm nhiều frame và 1 AtlasJson ta sẽ  lấy được 1 danh sách các frame trong hình ảnh đó.  
## 6. Sentences  
Gồm tập hợp các file Json , mỗi file Json là 1 chủ đề :  

<img src = "https://i.imgur.com/Bgrr4q0.png">  

Hình ảnh trên là file Json về chủ đề “Time” . File này là 1 mảng các Object.  
Mỗi object lại là một câu hỏi :  
- Line : Câu đầy đủ / chính xác .  
- Alt1 : Câu thứ nhất bị thiếu .  
- Alt2 : Câu thứ 2 bị thiếu . tương tự với alt3 và alt4.   
# IV. Build project game    
## 1. Tạo file index.html trong Project game  
## 2.	Import thư viện Phaser và các file Javascript trong index.html  

<img src = "https://i.imgur.com/oB0GEnf.png">  

- **Phaser.min.js : thư viện Phaser.**  
- **Boot.js**  
- **Preloader.js**    
- **Welcome.js**    
- **MainMenu.js**    
- **Play.js**   
## 3.	Constructor game  

<img src = "https://i.imgur.com/FxwmGGd.png">  

### 3.1 Phaser.Game  

<img src = "https://i.imgur.com/QpIhr9Z.png">  

| Tên | Kiểu | Mặc định | Mô tả |
|--------------|-------|------|-------|
| Width | Số / Chuỗi | 800 | Chiều rộng trò chơi ( pixel) |
| Height | Số / Chuỗi | 600 | Chiều cao trò chơi (pixel) |
| Renderer | Số | Phaser.AUTO | Trình renderer sử dụng |
| Parent | Chuỗi / HTML Element | ‘’ | Phần tử DOM trong frames của trò chơi |
| State | Object | NULL | Đối tượng trạng thái mặc định.  Đối tượng này bao gồm các chức năng Phaser.State(tải trước , tạo , cập nhật và hiển thị) hoặc có thể là NULL. |  |
| Transparent | Boolean | False | Sử dụng Background Canvas trong suốt hoặc  không | 
| Antialias | Boolean | True | Vẽ tất cả các kết cấu hình ảnh chống aliased hay không. Mặc định là cho kết cấu mịn, nhưng vô hiệu hóa nếu trò chơi của bạn có tính năng pixel. | 
| PhysicsConfig | Object | NULL | Một vật cấu hình đối tượng để đáp ứng mặt Vật lý thực tế |  

### 3.2	Phaser.State  

<img src = "https://i.imgur.com/0nVOl4c.png">  

**State** là một lớp cơ sở State mà có thể được mở rộng. Nó cung cấp truy cập nhanh đến các chức năng phổ biến như camera, bộ nhớ cache, đầu vào, kết hợp, âm thanh và nhiều hơn nữa.  
Về cơ bản , khi chúng ta chia một trò chơi thành “blocks” , ví dụ như màn hình menu , màn hình chơi game , màn hình config game , … thì mỗi “blocks” này có thể phát triển thành một state.s  
- **Game.state.add(keyState,gamePrototype)**  
States tuyên bố được thực hiện bởi **game.state.add**: đối số đầu tiên là tên của **state**, trong khi thứ hai là tên của hàm để gọi bên trong **state** đó.
- **Game.state.start(keyState)**  
Khởi chạy states có tên là **keyState**.  
Trong trường hợp này ta khởi chạy state **Boot** đầu tiên.  
## 4.Boot.js  

<img src = "https://i.imgur.com/bWjcU0K.png">  

**Boot** là 1 **state** đặc biệt : nó chỉ điều chỉnh giai đoạn và tỉ lệ.  
**Boot** gồm tính năng **preload** và tạo các **functions()**.  
- **Preload**: Tải hình ảnh thanh load **game**.  
- **This.state.start(‘Preloader’)**:Chuyển qua state **Preloader**  
## 5. Preload.js  

<img src = "https://i.imgur.com/XltMg2S.png">  

**Preloader**: Loader xử lý tải tất cả các nội dung bên ngoài như Hình ảnh, Âm thanh, Textures Atlases và các tệp dữ liệu. Trình tải sử dụng kết hợp tải trọng thẻ (ví dụ: các phần tử Hình ảnh) và XHR và cung cấp sự gọi lại tiến bộ và hoàn thành. Tải song song (xem enableParallel) được hỗ trợ và bật theo mặc định. Load-trước hành vi của các tài nguyên song song được kiểm soát bởi các điểm đồng bộ như đã thảo luận trong withSyncPoint.  
- **Game.load.script()**  

<img src= "https://i.imgur.com/r1N96Dj.png">  

Thêm tệp JavaScript ('script') vào **Loader**. Các JavaScript được nạp sẽ tự động chuyển thành một thẻ script và được thực hiện, vì vậy hãy cẩn thận những gì bạn tải! Một callback, sẽ được gọi như là thẻ script đã được tạo ra, cũng có thể được chỉ định. Việc gọi lại phải trả lại dữ liệu có liên quan.  

| Tên | Kiểu | Mô tả | 
|--------------|-------|------|
| Key | String | key của file Script | 
| URL | String | URL của file JavaScript  |
| Callback | Function | Gọi lại tùy chọn sẽ được gọi sau khi thẻ script đã tải, vì vậy có thể thực hiện xử lý bổ sung. |
| CallBackContext | Object | Bối cảnh theo đó gọi lại sẽ được áp dụng. Nếu không được chỉ định, nó sẽ sử dụng bản thân callback như là ngữ cảnh |  

- **Game.load.image()**  

<img src = "https://i.imgur.com/VRd8gCk.png">    

Thêm *hình ảnh* vào **Loader**  

| Tên | Kiểu | Mô tả | 
|--------------|-------|------|
| Key | String | key của ảnh trong game | 
| URL | String | URL của file ảnh  |
| Overwrite | boolean | Nếu một tập tin chưa tải với một phím kết hợp đã tồn tại trong hàng đợi, mục này sẽ ghi đè lên nó. |  

- **Game.load.atlas()**  

<img src = "https://i.imgur.com/0LNZP4I.png">  

Thêm một cấu trúc **Atlas** mới ('textureatlas') vào **Loader. Textures Atlases** có thể được tạo ra bằng các công cụ như Texture Packer và Shoebox.  

| Tên | Kiểu | Mô tả  | 
|--------------|-------|------|
| Key | String | key của file cấu trúc atlas | 
| URL | String | URL của file hình ảnh cấu trúc atlas|
| atlasURL | String | URL của tệp dữ liệu cấu trúc atlas(json/xml> |
| atlasData | Object | Đối tượng dữ liệu ( json hoặc xml) . Không cần nếu dữ liệu được nạp từ URL. |
| Format | Number | Giá trị mô tả định dạng dữ liệu. |  

- **Game.load.spritesheet()**  

<img src = "https://i.imgur.com/q1jbNs3.png">  

Thêm một **sprite sheet** mới ('**spritesheet**') vào bộ nạp.  
**Sprite** : là một thành phần không thể thiếu trong game, là một đối tượng đồ họa được vẽ lên màn hình(Screen). Có thể thao tác chúng và làm chúng di chuyển.  
**Sprite Sheet**: là tập hợp nhiều các **Sprite** . Giúp dễ dàng quản lý file hình ảnh , làm giảm kích thước tập tin tổng thể so với từng **Sprite** riêng rẽ.  

| Tên | Kiểu | Mô tả  | 
|--------------|-------|------|
| Key | String | Khóa chính của file Sheet | 
| URL | String | URL của file Sheet|
| frameWidth | Number | Chiều rộng mỗi một frame riêng lẻ |
| frameHeight | Number | Chiều cao mỗi một frame riêng lẻ |
| frameMax | Number | Số khung hình(frames) trong sprite sheet. Nếu giá trị là null , nó sẽ tự chia thành các khung(frame) |  
| Margin | Number | Nếu các frame đã được vẽ lề thì cần xác định giá trị  |
| spacing | Number | Giá trị khoảng cách giữa các frame trong sprite sheet  |  

Sau khi nạp xong các thành phần vào **Loader**. Hàm create sẽ chuyển state sang state **Welcome**  
## 6. Welcome.js  

<img src = "https://i.imgur.com/XoFeTN8.png">  

- Tạo hàm **createButton** để custom button, gồm các params :  
  <ul>
  <li>Game : Trò chơi được khởi tạo của chúng ta.</li>
  <li>String : Value của button.</li>
  <li>X : vị trí X.</li>
  <li>Y : vị trí Y.</li>
  <li>W : chiều rộng button.</li>
  <li>H : chiều cao button.</li>
  <li>Callback : hàm được gọi khi click vào button.</li>  
  </ul>  
- **Game.world** : Một trò chơi chỉ có một **world**. **World** là một nơi trừu tượng trong đó tất cả các đối tượng trò chơi sống. Nó không bị ràng buộc bởi các giới hạn **stage** và có thể được bất kỳ kích thước. Bạn nhìn vào **world** thông qua máy ảnh. Tất cả các đối tượng trò chơi sống trong thế giới ở các tọa độ trên **world**. Theo mặc định, **world** được tạo cùng kích thước với **Stage** của bạn.  
- **Game.world.centerX** :  
Lấy vị trí X tương ứng với điểm trung tâm của **world**.  
- **Game.world.centerY** :  
Lấy vị trí Y tương ứng với điểm trung tâm của **world**.  
- Khi tạo xong các button đã được custom cho trò chơi . Khi click vào button “**Play**” hàm callback sẽ được gọi và state chuyển thành **MainMenu**.  
## 7. Mainmenu.js  

<img src = "https://i.imgur.com/ZJVtM36.png">  

- Hàm **createButton** của **MainMenu.js** được custom thêm params “pictureName”  và loại bỏ text cho button. Button này đơn thuần chỉ là 1 hình ảnh.  
- Khi click button hàm **callback** được gọi và truyền giá trị cho biến “unitClick” . Ở đây “unitClick” sẽ nằm trong khoảng từ 0 đến 23 ,  tương ứng với số file sentencesJson . Và sau đó state sẽ chuyển sang Play state.  
## 8. Play.js  
- Khởi tạo các biến toàn cục:  

<img src = "https://i.imgur.com/3dEuzJb.png">  

- Khi bắt đầu chơi mới ta cần cài cho các giá trị trở thành 0:  

<img src = "https://i.imgur.com/YsGcPBP.png">  

- Tiếp theo  ta cần lấy URL của file sentences json tương ứng với “unitClick” được truyền từ bên MainMenu.js  
- Hàm **getAllSuportedItems** hỗ trợ đọc file sentences json (sử dụng jquery) và trả lại chuỗi Json được bắt lại sau khi đọc xong.  
- Thêm các element cần thiết cho game  

<img src = "https://i.imgur.com/C43cv1o.png">  

- Phân tích **JSON Sentences** , tạo các bộ câu trả lời . Ban đầu countSet  = 0 , tức là ta đang lấy câu đầu tiên trong bộ câu hỏi (sets).  

<img src = "https://i.imgur.com/mk4CeHL.png">  

<img src = "https://i.imgur.com/ehJ23CP.png">  

Ở đây **answerSet**(bộ câu trả lời) sẽ là 1 mảng 2 chiều , ta sẽ phân tích thành 1 ma trận :   

<img src = "https://i.imgur.com/hfx4cRQ.png">  

Với mỗi hàng ngang sẽ là 1 **answerSet** ( 1 bộ câu trả lời ) và ta có 4 bộ câu câu trả lời:  
Số bộ trả lời còn tùy thuộc vào số từ của câu trả lời đúng :  
Và code của trình tự này là :  

<img src = "https://i.imgur.com/f4L8d36.png">  

Và bây giờ ta chỉ cần thêm các bộ câu trả lời vào các button. Trước hết ta thêm bộ câu trả lời đầu tiên vào button ( **countAnswerSet** = 0 )  

<img src = "https://i.imgur.com/WD9eCl7.png">  

- **createButton()**  

<img src = "https://i.imgur.com/o2lD6Cr.png">  

Khi click vào button sẽ gọi đến hàm **checkAnswer** để kiếm tra đáp án trong button có đúng hay không .Ta cần truyển thêm tham số cho hàm **checkAnswer** , quan trọng nhất là **textClick** (text hiển thị trên button) và **answer**(câu trả lời chính xác).  
- **checkAnswer()**  

<img src = "https://i.imgur.com/DgsKdFn.png">  

Sau khi **callback** của button được gọi nó sẽ truyền param **textClick**(text-đáp án lựa chọn) và **answer**(text-đáp án chính xác). Ta sẽ kiểm tra đáp án lựa chọn có là chính xác không. 
Nếu sai ta sử dụng **graphic** ( đồ họa trong Phaser ) để hiển thị hiệu ứng chọn sai hủy button(đáp án) đó, tăng câu sai thêm 1 . 
Còn nếu đúng ta sử dụng graphic ( đồ họa trong Phaser ) để hiển thị hiệu ứng chính xác ,hủy groupButton ( danh sách các button đáp án ) , hủy text , tăng số đáp án chính xác lên 1 và quan trọng nhất là chạy hàm **nextAnswerSet**() .  
- **nextAnswerSet()**  

<img src = "https://i.imgur.com/Rf3JcrW.png">  

Sau khi trả lời đúng ta sẽ tăng biến đếm bộ câu trả lời thêm 1 . Nếu bộ câu trả lời chưa vượt quá , khi đó ta reset hình ảnh gợi ý mới , button được thêm bộ câu trả lời mới và vẫn có hàm **callback()** đến **checkAnswer** và nếu **checkAnswer** đúng sẽ lại chạy đến hàm **nextAnswerSet** (đệ quy) .   
Nó sẽ đệ quy như thế cho đến khi biến đếm bộ câu trả lời bị vượt quá số lượng. Khi này biến **countSet**(đếm câu hỏi) sẽ được tăng thêm 1 đơn vị. và nó sẽ nhảy sang câu hỏi tiếp theo với danh sách bộ câu trả lời mới.   
Trường hợp tiếp theo là khi biến **countSet** bị vượt quá ( số câu hỏi là có giới hạn ) khi đó ta sẽ hiển thị thông báo là Unit đã hoàn thành.     
# V.	REFERENCES
https://phaser.io/  
http://www.html5gamedevs.com/forum/14-phaser/  
https://gamedevelopment.tutsplus.com/articles/how-to-learn-the-phaser-html5-game-engine--gamedev-13643  
http://jquery.com/  
# VI. Demo
Link demo game : https://elearning-gamecom.000webhostapp.com




















