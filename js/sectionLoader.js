      function LoadHeader(){
        $("#header").load("../pages/header.html");
      }
      function LoadContent(content){
        $("#content").load("../pages/" + content + ".html");
        SetActiveTab("content");
      }
      function LoadAbout(){
        $("#content").load("../pages/about.html");
        SetActiveTab("about");
      }

      function LoadBlog(){
        $("#content").load("../pages/blog.html");
        SetActiveTab("blog");
      }

      function LoadContact(){
        $("#content").load("../pages/contact.html");
        SetActiveTab("contact");
      }

      function LoadProjects(){
        $("#content").load("../pages/projects.html");
        SetActiveTab("projects");
      }

      function LoadWorkExperience(){
        $("#content").load("../pages/workexperience.html");
        SetActiveTab("experience")
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
