          console.log("hello");
          $(document).ready(function(){
            $("#name").focus(function(){
            let name=$("#name").val().trim();
            if(name==""){
               $("#span1").css({
                "display":"block",
               })
               $("#container1").css({
                "border":"3px solid red",
               })
            }
            $("#name").keyup(function(){
                 $("#span1").css({
                "display":"none",
               })
               $("#container1").css({
                "border":"3px solid black",
               })
            })
            })
            $("#name").blur(function(){
                   $("#span1").css({
                "display":"none",
               })
               $("#container1").css({
                "border":"3px solid black",
               })
            })
              $("#ROLL").focus(function(){
            let name=$("#ROLL").val().trim();
            if(name==""){
               $("#span2").css({
                "display":"block",
               })
            }
                 $("#name").keyup(function(){
                     $("#span2").css({
                "display":"none",
               })
                 })
            })
            $("#mobile").focus(function(){
            let name=$("#mobile").val().trim();
            if(name==""){
               $("#span4").css({
                "display":"block",
               })
               $("#container4").css({
                "border":"3px solid red",
               })
            }
            $("#mobile").keyup(function(){
                 $("#span4").css({
                "display":"none",
               })
               $("#container4").css({
                "border":"3px solid black",
               })
            })
            })
            $("#mobile").blur(function(){
                   $("#span4").css({
                "display":"none",
               })
               $("#container4").css({
                "border":"3px solid black",
               })
            })
               $("#domain").focus(function(){
            let name=$("#domain").val();
            if(name=="your answer"){
               $("#span6").css({
                "display":"block",
               })
               $("#container6").css({
                "border":"3px solid red",
               })
            }
            $("#domain").change(function(){
                 $("#span6").css({
                "display":"none",
               })
               $("#container6").css({
                "border":"3px solid black",
               })
            })
            })
            $("#domain").blur(function(){
                   $("#span6").css({
                "display":"none",
               })
               $("#container6").css({
                "border":"3px solid black",
               })
            })
               $("#domain1").focus(function(){
            let name=$("#domain1").val();
            if(name=="your answer"){
               $("#span7").css({
                "display":"block",
               })
               $("#container7").css({
                "border":"3px solid red",
               })
            }
            $("#domain1").change(function(){
                 $("#span7").css({
                "display":"none",
               })
               $("#container7").css({
                "border":"3px solid black",
               })
            })
            })
            $("#domain1").blur(function(){
                   $("#span7").css({
                "display":"none",
               })
               $("#container7").css({
                "border":"3px solid black",
               })
            })
            function submitForm(){
                let name=$("#name").val();
                let rollno=$("#ROLL").val();
                let year=$("#year").val();
                let mobile=$("#mobile").val();
                let preference1=$("#domain").val();
                let preference2=$("#domain1").val();
                let xhr=new XMLHttpRequest();
                xhr.open("POST","http://localhost:3000",true);
                xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
                xhr.onreadystatechange=function(){
                    if(xhr.readyState==4&&xhr.status==200){
                        $("#b1").html(xhr.responseText);
                    }
                }
                xhr.send(`name=${name}&rollno=${rollno}&year=${year}&mobile=${mobile}&preference1=${preference1}&preference2=${preference2}`);
                
            }
            $("#submit").click(function(e){
                e.preventDefault();
                submitForm();
            })
        })