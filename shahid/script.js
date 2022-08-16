function mycall(){
    const a = document.getElementById("num").value;
    const b = document.getElementById("num1").value;
    const c = document.getElementById("num2").value;
    const d = b;
    const e = c;
    var i;
    
    if(b<=100){
        if(c==1440){
            document.getElementById("numb").innerHTML = d;
            document.getElementById("numb2").innerHTML = e;
            
             for(i=0;i<b;i++){
                const k = 1300+300*i;
                document.getElementById("numb3").innerHTML = k;
             }
        }
        else if(c==2800)
        {
            document.getElementById("numb").innerHTML = d;
            document.getElementById("numb2").innerHTML = e;
            
            for(i=0;i<b;i++){
                const k = 1500+300*i;
                document.getElementById("numb3").innerHTML = k;
            }
        }
        else if(c==960){
            const f = b;
            const g = c;
            document.getElementById("numb4").innerHTML = f;
            document.getElementById("numb5").innerHTML = g;
            for(i=0;i<b;i++){
                const h = 3700+200*i;
                document.getElementById("numb6").innerHTML = h;
                const l = 3700+200*i;
                document.getElementById("numb7").innerHTML = l;

            }  

        }
        else{
            document.getElementById("numb3").innerHTML = "your enter value rate is not present";
        }
    }
    else{
        document.getElementById("numb3").innerHTML = "your enter value rate is not present";
    

    }
       

}