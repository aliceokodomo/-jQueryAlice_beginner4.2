var label1="<label for='mark1'>Note1:</label>";
var input1="<input type='text' name='mark1' id='mark1' required><br>";
var label2="<label for='mark2'>Note2:</label>";
var input2="<input type='text' name='mark2' id='mark2' required><br>";
var label3="<label for='mark3'>Note3:</label>";
var input3="<input type='text' name='mark3' id='mark3' required><br>";
var label4="<label for='mark4'>Note4:</label>";
var input4="<input type='text' name='mark4' id='mark4' required><br>";
var label5="<label for='mark5'>Note5:</label>";
var input5="<input type='text' name='mark5' id='mark5' required><br>";
var input6="<input type='submit' id='submit' value='calculer la moyenne'>";
var note1=$("#mark1").val();
var note2=$("#mark2").val();
var note3=$("#mark3").val();
var note4=$("#mark4").val();
var note5=$("#mark5").val();
var regex1=/^(?:1?\d(?:\.\d{1,2})?|20(?:\.0?0?)?)$/;
var regex2=/^(?:1?\d(?:\.\d{1,2})?|20(?:\.0?0?)?)$/;
var regex3=/^(?:1?\d(?:\.\d{1,2})?|20(?:\.0?0?)?)$/;
var regex4=/^(?:1?\d(?:\.\d{1,2})?|20(?:\.0?0?)?)$/;
var regex5=/^(?:1?\d(?:\.\d{1,2})?|20(?:\.0?0?)?)$/;

$(document).ready(function(){
    $("body").prepend(label1,input1,label2,input2,label3,input3,label4,input4,label5,input5,input6);
    $("#mark2").css("margin-top","10px");
    $("#mark3").css("margin-top","10px");
    $("#mark4").css("margin-top","10px");
    $("#mark5").css("margin-top","10px");
    $("#submit").css("margin-top","10px");
    $("#submit").click(function(event){
        if(regex1.test($("#mark1").val())== false){
            event.preventDefault();
            alert("Veuillez entrer une note sur 20");
            $('#mark1').css("border","3px solid red");
           return true;
        }else{
            $('#mark1').css("border","");
        }
        if(regex2.test($("#mark2").val())== false){
            event.preventDefault();
            alert("Veuillez entrer une note sur 20");
            $('#mark2').css("border","3px solid red");
           return true;
        }else{
            $('#mark2').css("border","");
        }
        if(regex3.test($("#mark3").val())== false){
            event.preventDefault();
            alert("Veuillez entrer une note sur 20");
            $('#mark3').css("border","3px solid red");
           return true;
        }else{
            $('#mark3').css("border","");
        }
        if(regex4.test($("#mark4").val())== false){
            event.preventDefault();
            alert("Veuillez entrer une note sur 20");
            $('#mark4').css("border","3px solid red");
           return true;
        }else{
            $('#mark4').css("border","");
        }
        if(regex5.test($("#mark5").val())== false){
            event.preventDefault();
            alert("Veuillez entrer une note sur 20");
            $('#lmark5').css("border","3px solid red");
           return true;
        }else{
            $('#mark5').css("border","");
        }
        
 var i=0;
var somme=0;
var moyenne=0;

    notes = new Array(note1,note2,note3,note4,note5)
    note_i=$("#mark1").val();
    note1=parseInt(note_i);
    note_a=$("#mark2").val();
    note2=parseInt(note_a);
    note_c=$("#mark3").val();
    note3=parseInt(note_c);
    note_d=$("#mark4").val();
    note4=parseInt(note_d);
    note_e=$("#mark5").val();
    note5=parseInt(note_e);
    somme=note1+note2+note3+note4+note5;

moyenne=(somme/5);
alert("La moyenne des notes est : "+ moyenne +" sur 20");

    
    })
   
});
