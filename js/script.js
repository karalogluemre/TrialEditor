var content = "";
window.onload = function () {
  var html = "<option></option>";
  for (var i = 0; i < localStorage.length; i++) {
    html += "<option>" + localStorage.key(i) + "</option>";
  }
  document.getElementById("projects").innerHTML = html;
  window.onerror = function(hata, url, hataSatiri){
    alert(url + " adresinde " + hataSatiri + ". satırda hata oluştu. Hata: " + hata);
}
};
function run(){
  let htmlCode=document.querySelector(".editor #html").value;
  let cssCode="<style>"+document.querySelector(".editor #css").value+"</style>";
  let scriptCode=document.querySelector(".editor #js").value;
  let output =document.querySelector("#output");
  output.contentDocument.body.innerHTML=htmlCode+cssCode;
  output.contentWindow.eval(scriptCode);
}


function saveProject() {
  var projectName = document.getElementById("projectName").value;
  if (projectName.trim() == "" || projectName == null) {
    alert("Proje Adı Boş Bırakılamaz!");
    return;
  }
  var htmlContent = document.getElementById("html").value;
  var cssContent = document.getElementById("css").value;
  var jsContent = document.getElementById("js").value;

  var obj = {};
  obj.css = cssContent;
  obj.js = jsContent;
  obj.html = htmlContent;

  localStorage.setItem(projectName, JSON.stringify(obj));
  alert("Projeniz Başarıyla Kaydedildi!");
}
function populateEditor() {
  var projectName = document.getElementById("projects").value;
  debugger;
  var data = localStorage.getItem(projectName);
  var obj = JSON.parse(data);
  document.getElementById("html").value = obj.html;
  document.getElementById("css").value = obj.css;
  document.getElementById("js").value = obj.js;
}
