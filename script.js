
'use strict';
class Keypad {
  constructor() {
    this.keys = {
      "1" : ['.',',','!','1'],
      "2" : ['a','b','c','2'],
      "3" : ['d','e','f','3'],
      "4" : ['g','h','i','4'],
      "5" : ['j','k','l','5'],
      "6" : ['m','n','o','6'],
      "7" : ['p','q','r','s','7'],
      "8" : ['t','u','v','8'],
      "9" : ['w','x','y','z','9'],
      "0" : ['0'],
      "*" : ['*'],
      "#" : ['#']
    };
  }

  getData(key_no) { 
     var result = document.getElementById("result"); 
     var time = document.getElementById("time");
     var currenttime =+new Date();
     var diff;
     var str = this.keys[key_no];
     var i=0;
     var text = result.value || ''
     
     if(time && time.value){
       diff = currenttime - time.value;
       time.value = currenttime;
     }else{
         time.value = currenttime;
         diff=0
     }
     if(diff && diff > 2000){
       var dd = text + str[i]
       result.value = dd;
     }
     
     if(key_no != '0' && key_no != '*' && key_no != '#') { //multi option keys
      if(!diff||diff<1000){
       if(text[text.length-1]==str[i]){
         text=text.split('');
         text.pop();
         var arr=text.join('');
         text=arr+str[i+1];  
       } else if(text[text.length-1]==str[i+1]) {
         text=text.split('');
         text.pop();
         var arr=text.join('');
         text=arr+str[i+2];  
       } else if(text[text.length-1]==str[i+2]) {
         text=text.split('');
         text.pop();
         var arr=text.join('');
         text=arr+str[i+3];  
       } else if(text[text.length-1]==str[i+2]&&str.length==4){
         text=text.split('');
         text.pop();
         var arr=text.join('');
         text= arr+str[i+3];  
       } else if(text[text.length-1]==str[i+3]&&str.length==5){
         text=text.split('');
         text.pop();
         var arr=text.join('');
         text= arr+str[i+4];  
       } else if(text[text.length-1]==str[i+2]||text[text.length-1]==str[i+3]||text[text.length-1]==str[i+4]) {
         text=text.split('');
         text.pop();
         var arr=text.join('');
         text=arr+str[i];
       }
       else
         text=text+str[i];
      } else{
        text=text+str[i];    
      } 
     } else { //Only one option keys
        text=text+str[i];
     }
     

     result.value = text
  }
}

var keyPad = new Keypad();
