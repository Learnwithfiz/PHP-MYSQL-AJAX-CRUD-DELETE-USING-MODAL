window.addEventListener('load',function(){
    StudentDetailsDisplay()
})

//for insert code starts here
function AddStudentDetails(){
    var name = $("#name").val();
    var email = $("#email").val();
    var dept = $("#dept").val();
    
    $.ajax({
        url:"insert.php",
        method:"post",
        data:{
         StName:name,
          StEmail:email,
          StDept:dept  
        } ,
        success:function(data){
            StudentDetailsDisplay()
        }   
    });

}

//for insert code ends here

// for select
  function StudentDetailsDisplay(){
         $.ajax({
            url:"display.php",
            method:"post",
            success:function(data){
               $("#tbody").html(data)   ;      
            }
         });
  }

///for select ends here

//delete
  function StudentOnDelete(id){
   
    $.ajax({
        url:"delete.php",
        method:"get",
        data:{id:id},
        success:function(data){
            StudentDetailsDisplay()  
        }
     });
  }
//delete ends here

