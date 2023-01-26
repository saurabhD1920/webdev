
//initializated variables
var line1=0,line2=0,line3=0,line4=0,line5=0,line6=0,line7=0,line8=0,flag=1,btn_id=0,btnchk_1=0,btnchk_2=0,btnchk_3=0,b,btnchk_4=0,btnchk_5=0,btnchk_6=0,btnchk_7=0,btnchk_8=0,btnchk_9=0;
var init_array1=[0,0,0,0,0,0,0,0]; 
var upd_array1=[];
var init_array2=[0,0,0,0,0,0,0,0];
var upd_array2=[];

//btn functions
function btn_1(){
    btn_id=1;
    btnchk_1=1;
    document.querySelector("#audio").play();
    document.getElementById("btn1").disabled=true;
    player1(0,4);

}
function btn_2(){
    btn_id=2;
    btnchk_2=1;
    document.querySelector("#audio").play();
    document.getElementById("btn2").disabled=true;
    let d1=2,d2=4;
    player1(d1,d2);
}
function btn_3(){
    btn_id=3;
    btnchk_3=1;
    document.querySelector("#audio").play();
    document.getElementById("btn3").disabled=true;
    let d1=4,d2=4;
    player1(d1,d2);
}
function btn_4(){
    btn_id=4;
    btnchk_4=1;
    document.querySelector("#audio").play();
    document.getElementById("btn4").disabled=true;
    let d1=0,d2=2;
    player1(d1,d2);
}
function btn_5(){
    btn_id=5;
    btnchk_5=1;
    document.querySelector("#audio").play();
    document.getElementById("btn5").disabled=true;
    let d1=2,d2=2;
    player1(d1,d2);
}
function btn_6(){
    btn_id=6;
    btnchk_6=1;
    document.querySelector("#audio").play();
    document.getElementById("btn6").disabled=true;
    let d1=4,d2=2;
    player1(d1,d2);
}
function btn_7(){
    btn_id=7;
    btnchk_7=1;
    document.querySelector("#audio").play();
    document.getElementById("btn7").disabled=true;
    let d1=0,d2=0;
    player1(d1,d2);
}
function btn_8(){
    btn_id=8;
    btnchk_8=1;
    document.querySelector("#audio").play();
    document.getElementById("btn8").disabled=true;
    let d1=2,d2=0;
    player1(d1,d2);
}
function btn_9(){
    btn_id=9;
    btnchk_9=1;
    document.querySelector("#audio").play();
    document.getElementById("btn9").disabled=true;
    let d1=4,d2=0;
    player1(d1,d2);
}

//function player1() for both player 1 and player 2
function player1(d1,d2){

        if(d2==d1){ //y=x
            line1+=1;
        }
        if(d2==-d1+4){ //y=-x+4
            line2+=1;
        }
        if(d1==0){ //x=0
            line3+=1;
        }
        if(d1==4){ //x=4
            line4+=1;
        }
        if(d1==2){ //x=2
            line5+=1;
        }
        if(d2==4){ //y=4
            line6+=1;
        }
        if(d2==2){ //y=2
            line7+=1;
        }
        if(d2==0 ){ //y=0
            line8+=1;
        }


        //console checking 
        console.log(line1,line2,line3,line4,line5,line6,line7,line8);
        console.log((line1>=3 || line2>=3) || (line3>=3 || line4>=3))
        
        //player switching flag
         if(flag==1){
            document.getElementById("getpara").innerHTML="1"
            document.getElementById(`btn${btn_id}`).style.backgroundColor="green";
            document.getElementById("player").style.color="green";
           
            
         var arrayp1=[line1,line2,line3,line4,line5,line6,line7,line8];
         var array1=arrayp1;
         //update array function
         function uparray(arrayp1){
           
            for(var u=0;u<=7;u++){
                upd_array1[u]=init_array1[u]+arrayp1[u];
              }
              init_array1=upd_array1;
              return upd_array1;
           
         }
         uparray(array1);
         console.log("p1",flag);
         console.log(array1);
          line1=0,line2=0,line3=0,line4=0,line5=0,line6=0,line7=0,line8=0;
          for(var k=0;k<=7;++k){
            if(upd_array1[k]>2){
                console.log("Player 1 you won")
                document.getElementById("won").innerHTML="Player 1 won"
                //alert("Player 1 you won")
                function set_time(){
                location.reload();
                }
                setTimeout(set_time,2000);

            }
          }
          flag=0;
         }
         //player 2 switching
         else{
            document.getElementById("getpara").innerHTML="2"
           
            document.getElementById(`btn${btn_id}`).style.backgroundColor="red";
            document.getElementById("player").style.color="red";
          var arrayp2=[line1,line2,line3,line4,line5,line6,line7,line8];
          var array2=arrayp2;
          function uparray(arrayp2){
           
            for(var u=0;u<=7;u++){
                upd_array2[u]=init_array2[u]+arrayp2[u];
              }
              init_array2=upd_array2;
              return upd_array2;
           
         }
         uparray(array2);
          console.log("p2",flag);
          console.log(array2);
          line1=0,line2=0,line3=0,line4=0,line5=0,line6=0,line7=0,line8=0;
        
          for(var l=0;l<=7;++l){
            if(upd_array2[l]==3){
                console.log("Player 2 you won")
                document.getElementById("won").innerHTML="Player 2 won"
                //alert("Player 1 you won")
                function set_time(){
                location.reload();
                }
                setTimeout(set_time,2000);
            }
        }
        flag=1;
    }
    if(btnchk_1 && btnchk_2 && btnchk_3 &&btnchk_4 &&btnchk_5 &&btnchk_6 &&btnchk_7 &&btnchk_8 &&btnchk_9 ==1){
        function set_time(){
            location.reload();
            }
            setTimeout(set_time,2000);
    }

    
}