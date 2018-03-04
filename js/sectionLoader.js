      function LoadHeader(){
        $("#header").load("../pages/header.html");
      }

      function LoadAbout(){
        ("#content").load("../pages/about.html");
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
        var tabs = document.getElementsByClassName("tab");
        tabs.each($(this).removeClass("active"));
        document.getElementById(tabName).addClass("active");
      }
