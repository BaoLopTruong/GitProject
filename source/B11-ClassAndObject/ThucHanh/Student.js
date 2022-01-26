class Student {
    // phương thức đặc biệt, chạy trong quá trình khởi tạo đối tượng
    constructor(name, email, sdt, address){
        //this- tro ve doi tuong hiện tại
        this.name = name;
        this.email = email;
        this.sdt = sdt;
        this.address = address;
    }

    getName(){
        return this.name;
    }
    getEmail(){
        return this.email;
    }

}