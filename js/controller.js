function renderDssv(dssv){
  var contentHTML = "";
  for (var i = 0; i < dssv.length; i++) {
    var data = dssv[i];
    var contentTr = `<tr>    
                                <td>${data.id}</td>
                                <td>${data.name}</td>
                                <td>${data.email}</td>
                                <td>${data.dtb()}</td>
                                <td>
                                    <button class="btn btn-warning" onclick="suaSv('${data.id}')">Sửa</button>
                                    <button class="btn btn-danger" onclick="xoaSv('${data.id}')">Xoá</button>
                                </td>
                              
                        </tr>`;
    contentHTML = contentHTML + contentTr;
  }
  document.getElementById("tbodySinhVien").innerHTML = contentHTML;
}

function getInfo(){
  var _ma = document.getElementById('txtMaSV').value;
  var _name = document.getElementById('txtTenSV').value;
  var _email = document.getElementById('txtEmail').value;
  var _pass = document.getElementById('txtPass').value;
  var _toan = document.getElementById('txtDiemToan').value*1;
  var _ly = document.getElementById('txtDiemLy').value*1;
  var _hoa = document.getElementById('txtDiemHoa').value*1;
  return new SinhVien(_ma,_name,_email,_pass,_toan,_ly,_hoa);
}

function findIndex(id,dssv){
  return dssv.findIndex(function(sv){
    return sv.id == id;
  })
}


function showInfo(sv){
  document.getElementById('txtMaSV').value = sv.id;
  document.getElementById('txtTenSV').value = sv.name;
  document.getElementById('txtEmail').value = sv.email;
  document.getElementById('txtPass').value = sv.pass;
  document.getElementById('txtDiemToan').value = sv.toan;
  document.getElementById('txtDiemLy').value = sv.ly;
  document.getElementById('txtDiemLy').value = sv.hoa;
}