function SinhVien(_ma,_name,_email,_pass,_toan,_ly,_hoa){
    this.id = _ma;
    this.name = _name;
    this.email = _email;
    this.pass = _pass;
    this.toan = _toan;
    this.ly = _ly;
    this.hoa = _hoa;
    this.dtb = function(){
        return (this.toan + this.ly + this.hoa) / 3
    };
}