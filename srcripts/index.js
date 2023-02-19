

// 1
let number="100";
number2="2.5";
let isMale =false;
let greetings ="Hello, java script!";
console.log(number,number2,isMale,greetings);

// 2
let greeting="Hi, "
let userName = "Vasya"
console.log(greeting,userName,"!")

// 3
for(let i = 10;
    i <= 50; 
    i=i+5) {
       console.log(i)
    }
// 4
let monthnumber=prompt('what is the month number');
if(monthnumber<=2)
{console.log("winther");
} else if(monthnumber<=5)
{console.log("spring");
} else if(monthnumber<=8)
{console.log("summer");
} else if(monthnumber==12)
{console.log("winther");
}  else if(monthnumber<=11)
{console.log("autumn");
}  else 
{console.log("error");
}


// 5
val =1;
let result = 0;
while(val<=100){
    result=result+val;
    val=val+2; 
}
console.log(result);