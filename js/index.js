var dssv = [];
var jsonData = localStorage.getItem("DSSV");
if(jsonData != null){
  var list = JSON.parse(jsonData)
  dssv = list.map(function(item){
    return new SinhVien(item.id,item.name,item.email,item.pass,item.toan,item.ly,item.hoa)
  })
}
renderDssv(dssv);

function themSv(){
  var sv = getInfo()
  dssv.push(sv);
  var jsonData = JSON.stringify(dssv);
  localStorage.setItem("DSSV",jsonData);
  renderDssv(dssv);
}

function xoaSv(id){
  var index = findIndex(id,dssv)
  dssv.splice(index,1);
  var jsonData = JSON.stringify(dssv);
  localStorage.setItem("DSSV",jsonData);
  renderDssv(dssv);
}

function suaSv(id){
  var index = findIndex(id,dssv);
  var sv = dssv[index];
  showInfo(sv);
}

function updateSv(){
  var sv = getInfo()
  var index = findIndex(sv.id,dssv)
  dssv[index] = sv;
  renderDssv(dssv);
}
