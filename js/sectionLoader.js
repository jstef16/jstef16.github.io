function LoadHeader(){
  $("#header").load("../pages/header.html");
}

function LoadContent(content){
  $("#content").load("../pages/" + content + ".html");
  SetActiveTab(content);
}

function SetActiveTab(tabName){
  var tabsTable = document.getElementById("tabs");

  if(tabsTable){
      var tabs = tabsTable.rows[0].cells;
      for(var i = 0; i < tabs.length; i++){
          tabs[i].classList.remove("active");
      }
      tabs.namedItem(tabName).classList.add("active");
  }
}
