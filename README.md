WELCOME TO MY GITHUB - BAOLOPTRUONG

# Website trung tâm gia sư TBD

## Xây dựng website trung tâm gia sư TBD"
* Giới Thiệu đề tài: Hiện nay, xu hướng của công nghệ hóa. Trước tình hình dịch Covid đang hoành hành trên khắp thế giới, việc các rạp phim
  không thể mở cửa trở lại để đón khách thì nhu cầu xem phim của khách hàng ngày một tăng lên. Nắm bắt được xu hướng của thế giới, nhóm chúng em quyết định thực hiện nghiên cứu website trung tâm gia sư TBD.
* Mô tả bài toán: Website trung tâm gia sư TBD giúp người tìm kiếm được những gia sư phù hợp với từng người, ở mọi cấp độ, mọi lĩnh vực trên toàn quốc.
* Phân Công Công Việc:
  - Lê Thị Phương Thảo:(View) Front End
  - Lê Ngọc Bảo: (Model) MySQL
  - Cao Viết Đức: (Controler) Back End
  
* Chức năng:
  a. Học viên:
  + Có thể đăng kí gia sư trên website.
  + Tìm kiếm gia sư phù hợp với nhu cầu của khách hàng.
  + Đăng kí lớp học.
  + Đăng kí tìm gia sư.
  b. Gia sư:
  + Đăng kí làm gia sư.
  + Quản lý học viên.
  + Quản lý lớp học.
  c. Quản lý:
  + Quản lý các gia sư.
  + Quản lý các lớp học.
  + Quản lý các học viên.
* Công nghệ sử dụng
  - PHP
  - MySQL
  - HTML/CSS/Bootstrap

## Hướng dẫn cài đặt:
  - Download và cài đặt IDE git  tại đường dẫn sau: https://git-scm.com/download/win
  - Download và cài đặt Xampp phù hợp với máy tính theo đường dẫn sau: https://www.apachefriends.org/download.html
  - Download và cài đặt Visual Studio Code theo đường dẫn sau: https://code.visualstudio.com/download
  - Tại trang github chứa folder cần tải xuống, click theo thứ tự sau:
  ![cap2](https://user-images.githubusercontent.com/71202592/105790303-a44b0a80-5fb6-11eb-9a88-e735874bc25d.png)
  
  - Vào thư mục htdocs trong thư mục xampp và click chuột phải chọn Git Bash Here:
  ![cap1](https://user-images.githubusercontent.com/71202592/105789191-8ed4e100-5fb4-11eb-9f53-defba67ccd72.png)
  
  - Tại giao diện làm việc của GIT Bash Here, gõ dòng lệnh sau: "git clone " và click chuột phải và dán đường link github vào và nhấn enter:
  ![cap3](https://user-images.githubusercontent.com/71202592/105790778-7e723580-5fb7-11eb-8280-c539e88944e4.png)
  
  - Đợi một lúc để download folder về:
  ![cap4](https://user-images.githubusercontent.com/71202592/105792766-87183b00-5fba-11eb-8dbe-090f78452317.png)
  
  - Sau khi download về, folder sẽ được lưu ở htdocs trong thư mục xampp:
  ![cap5](https://user-images.githubusercontent.com/71202592/105792942-d5c5d500-5fba-11eb-8e67-4ca125344ca5.png)
  
  - Mở Xampp Control Panel và start 2 mục sau:
  ![cap9](https://user-images.githubusercontent.com/71202592/105795308-3525e400-5fbf-11eb-9a2b-7eba2688e7ca.png)
  
  - Mở trình quản lý cơ sở dữ liệu MySQL theo đường dẫn sau: http://localhost:/phpmyadmin/ và thực hiện các bước sau:
    + Bước 1: click vào New để tạo một database mới.
    + Bước 2: đặt tên cho database là quanlygiasu.
    + Bước 3: chọn uft8_unicode_ci làm font chữ mặc định.
    + Bước 4: click vào Create để tạo database.
   
   ![cap6](https://user-images.githubusercontent.com/71202592/105793845-71a41080-5fbc-11eb-9d44-107eb3b8fd9d.png)
   
  - Sau khi tạo được database quanlygiasu, thực hiện các bước sau:
    + Bước 1: click vào quanlygiasu.
    + Bước 2: click chọn Import.
    + Bước 3: click chọn choose file. Tìm file quanlygiasu.sql được lưu trong folder xampp\htdocs\Website-trung-tam-gia-su-TBD\TBD
    + Bước 4: click Go để import cơ sở dữ liệu.
    
   ![cap7](https://user-images.githubusercontent.com/71202592/105794654-fe030300-5fbd-11eb-8325-8da28e1f9087.png)
   
  - Cơ sở dữ liệu được import thành công:
  ![cap8](https://user-images.githubusercontent.com/71202592/105794830-6651e480-5fbe-11eb-8938-36f8a23b8b21.png)
  
  - Mở website với đường dẫn sau: http://localhost:/Website-trung-tam-gia-su-TBD/TBD/View/index.php và trải nghiệm đi nào ^^.
  
  ![cap10](https://user-images.githubusercontent.com/71202592/105795555-a06fb600-5fbf-11eb-899b-3120f38e4c99.png)