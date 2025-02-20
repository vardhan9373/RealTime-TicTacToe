
let reset =document.getElementById("reset");
  logic();
    let player_turn= document.getElementById("turn");
    let allbutton=document.getElementsByTagName("button");
    let win_text= document.getElementById("win_text");
   
    let count=0;



function logic()
{
    let turn=true;
    let btn1= document.getElementById("button1");
    let btn2= document.getElementById("button2");
    let btn3= document.getElementById("button3");
    let btn4= document.getElementById("button4");
    let btn5= document.getElementById("button5");
    let btn6= document.getElementById("button6");
    let btn7= document.getElementById("button7");
    let btn8= document.getElementById("button8");
    let btn9= document.getElementById("button9");
    let arr_b=[0,0,0,0,0,0,0,0,0];

    let socket = new SockJS("http://localhost:8080/ws");
    let stompClient = Stomp.over(socket);
     
 stompClient.connect({}, function () {
     console.log("Connected to WebSocket");
 
     // Subscribe to /topic/messages to receive responses from the server
     stompClient.subscribe("/topic/messages", function (message) {
         let response = JSON.parse(message.body); // Convert JSON to object
        let buttonName=response.value1 
        let value=response.value2;

        if(buttonName=="btn1")
        {
            btn1.innerText=value;
            arr_b[0]=btn1.innerText;
            btn1.disabled=true;
        }
        else if(buttonName=="btn2")
        {
            btn2.innerText=value;
            arr_b[1]=btn2.innerText;
            btn2.disabled=true;
        }
        else if(buttonName=="btn3")
        {
            btn3.innerText=value;
            arr_b[2]=btn3.innerText;
            btn3.disabled=true;
            
        }
        else if(buttonName=="btn4")
        {
            btn4.innerText=value; 
            arr_b[3]=btn4.innerText;
            btn4.disabled=true;
        }
        else if(buttonName=="btn5")
        {
            btn5.innerText=value; 
            arr_b[4]=btn5.innerText;
            btn5.disabled=true;    
        }
        else if(buttonName=="btn6")
        {
            btn6.innerText=value; 
            arr_b[5]=btn6.innerText;
            btn6.disabled=true;          
        }
        else if(buttonName=="btn7")
        {
            btn7.innerText=value;  
            arr_b[6]=btn7.innerText;
            btn7.disabled=true;           
        }
        else if(buttonName=="btn8")
        {
            btn8.innerText=value;  
            arr_b[7]=btn8.innerText;
            btn8.disabled=true;               
        }
        else if(buttonName=="btn9")
        {
            btn9.innerText=value;   
            arr_b[8]=btn9.innerText;
            btn9.disabled=true;                 
        }
        else if(buttonName=="reset")
        {
            player_turn.innerText="Player1 turn";
            turn=true;
            count=0;
            arr_b=[0,0,0,0,0,0,0,0,0];
            win_text.innerText="";
            for (let i = 0; i < allbutton.length; i++) {
                if(allbutton[i].id!="reset")
                {
                    allbutton[i].disabled = false;
                    allbutton[i].innerText ="";
                    console.log("reset is clicked");
                }
               
            }
        }
       
        if(value=="O")
            {
                turn=false
                player_turn.innerText="Player2 turn";
            }
            else
            {
                turn=true;
                player_turn.innerText="Player1 turn";
            }
            if(checkwin())
                {
                    if(turn)
                    {
                        win_text.innerText="Player2 is Winner";
                    }
                    else
                    {
                        win_text.innerText="Player1 is Winner";
                   
                    }
                    player_turn.innerText="";
                        for (let i = 0; i < allbutton.length; i++) {
                            if(allbutton[i].id!="reset")
                            allbutton[i].disabled = true;
                        }
                }
        

     });
 });
 
    function Backend(btnname,value)
    {
        
        let messageObj = { value1:btnname, value2:value}; // Create JSON object
        stompClient.send("/app/sendMessage", {}, JSON.stringify(messageObj)); 
    }

    btn1.addEventListener("click",()=>
    {
    if(turn)
    {
    Backend("btn1","O")

    }
    else
    {
     Backend("btn1","X")
    
    }

   
    });
    btn2.addEventListener("click",()=>
    {
    if(turn)
    {
     Backend("btn2","O")
    }
    else
    {
     Backend("btn2","X")
    }
   
    
    });
    btn3.addEventListener("click",()=>
    {
    if(turn)
    {
    Backend("btn3","O")
    }
    else
    {
        Backend("btn3","X")
    }
    });
    btn4.addEventListener("click",()=>
    {
    if(turn)
    {
        Backend("btn4","O")
    }
    else
    {
    Backend("btn4","X")
    }
    });
    btn5.addEventListener("click",()=>
    {
    if(turn)
    {
        Backend("btn5","O")
    }
    else
    {
        Backend("btn5","X")
    }
    });
    btn6.addEventListener("click",()=>
    {
    if(turn)
    {
        Backend("btn6","O")
    }
    else
    {
        Backend("btn6","X")
    }
    });
    btn7.addEventListener("click",()=>
    {
    if(turn)
    {
        Backend("btn7","O")
    }
    else
    {
        Backend("btn7","X")
    }
    
    });
    btn8.addEventListener("click",()=>
    {
    if(turn)
    {
        Backend("btn8","O")
    }
    else
    {
        Backend("btn8","X")
    }
    });
    btn9.addEventListener("click",()=>
    {
    if(turn)
    {
        Backend("btn9","O")
    }
    else
    {
        Backend("btn9","X")
    }
    });
    reset.addEventListener("click",()=>
        {
            Backend("reset","reset")
        });
    function checkwin()
    {
        count++;
    if((arr_b[0]==arr_b[1]&&arr_b[0]==arr_b[2])&&arr_b[0]!=0)
    {
        return true;
    }
    else if((arr_b[0]==arr_b[3]&&arr_b[0]==arr_b[6])&&arr_b[0]!=0)
    {
        return true;
    }
    else if((arr_b[0]==arr_b[4]&&arr_b[0]==arr_b[8])&&arr_b[0]!=0)
    {
        return true;
    }
    else if((arr_b[1]==arr_b[4]&&arr_b[1]==arr_b[7])&&arr_b[1]!=0)
    {
        return true;

    }
    else if((arr_b[2]==arr_b[5]&&arr_b[2]==arr_b[8])&&arr_b[2]!=0)
    {
        return true;
    }
    else if((arr_b[2]==arr_b[4]&&arr_b[2]==arr_b[6])&&arr_b[2]!=0)
    {
        return true;
    }
    else if((arr_b[3]==arr_b[4]&&arr_b[3]==arr_b[5])&&arr_b[3]!=0)
    {
        return true;
    }
    else if((arr_b[6]==arr_b[7]&&arr_b[6]==arr_b[8])&&arr_b[6]!=0)
    {
        return true;
    }
    console.log(count);
    if(count==9)
    {
        win_text.innerText="Match is Draw";
        player_turn.innerText="";
    
    }
    }
}
