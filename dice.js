// $('#roll').click(() => {
//     const num = Math.floor(Math.random() * 6) + 1;
//     let cls = 'odd-'
//     if (num % 2 === 0) {
//       cls = 'even-'
//     }
    
//     $('#die').empty();
//     for (let i = 1; i <= num; i++) {
//       $('#die').append(`<div class="dot ${cls}${i}"></div>`);
//     }
//   });
const die = document.getElementById('member-1');
const val = document.getElementById('value');
const die2 = document.getElementById('member-2');
const val2 = document.getElementById('value2');
const die3 = document.getElementById('member-3');
const val3 = document.getElementById('value3');
document.getElementById('roll')
        .addEventListener('click', () => {
            const num = Math.floor(Math.random() * 6) + 1;
            const cls = num % 2 === 0 ? 'even-' : 'odd-';
            val.innerText = "Got:"+num;
            die.innerHTML = '';
            for (let i = 1; i <= num; i++) {
                die.innerHTML += `<div class="dot ${cls}${i}"></div>`;
            }

            const num2 = Math.floor(Math.random() * 6) + 1;
            const cls2 = num2 % 2 === 0 ? 'even-' : 'odd-';
            val2.innerText = "Got:"+num2;
            die2.innerHTML = '';
            for (let j = 1; j <= num2; j++) {
                die2.innerHTML += `<div class="dot ${cls}${j}"></div>`;
            }

            const num3 = Math.floor(Math.random() * 6) + 1;
            const cls3 = num3 % 2 === 0 ? 'even-' : 'odd-';
            val3.innerText = "Got:"+num3;
            die3.innerHTML = '';
          
            for (let k = 1; k <= num3; k++) {
                die3.innerHTML += `<div class="dot ${cls}${k}"></div>`;
            }
            
            if(num>num2&&num3){
                document.getElementById("winner").innerText="The Winner is Die-1"
            }
            else if(num2>num&&num3){
                document.getElementById("winner").innerText="The Winner is Die-2"
            }
            else{
                document.getElementById("winner").innerText="The Winner is Die-3"
            }

           

            if(num>num2 && num>num3){
                die.style.backgroundColor="green"
            }
           
          
            else if(num>num2 && num<num3 || num>num3 && num<num2){
                die.style.backgroundColor="yellow"
            }
        
            else if(num<num2 && num<num3){
                die.style.backgroundColor="red"
            }
         
         
          
            else if(num===num3 || num3===num){
                die.style.backgroundColor="blue"
                die3.style.backgroundColor="blue"
            }
            else if(num===num2 || num2===num){
                die.style.backgroundColor="blue"
                die2.style.backgroundColor="blue"
            }
            
            else if(num===num2===num3){
                die.style.backgroundColor="blue"
                die3.style.backgroundColor="blue"
                die2.style.backgroundColor="blue"
            }


            if(num2>num3 && num2>num){
                die2.style.backgroundColor="green"
            }
            else if(num2>num3 && num2<num || num2>num && num2<num3){
                die2.style.backgroundColor="yellow"
            }
            else if(num2<num && num2<num3){
                die2.style.backgroundColor="red"
            }
            else if(num===num2 || num2===num){
                die.style.backgroundColor="blue"
                die2.style.backgroundColor="blue"
            }
            else if(num2===num3 || num3===num2){
                die2.style.backgroundColor="blue"
                die3.style.backgroundColor="blue"
            }
            else if(num===num2===num3){
                die.style.backgroundColor="blue"
                die3.style.backgroundColor="blue"
                die2.style.backgroundColor="blue"
            }

             if(num3>num2 && num3>num){
                die3.style.backgroundColor="green"
            }
               
            else if(num3>num2 && num3<num || num3>num && num3<num2){
                die3.style.backgroundColor="yellow"
            }
            else if(num3<num2 && num3<num){
                die3.style.backgroundColor="red"
            }
            
            else if(num===num3 || num3===num){
                die.style.backgroundColor="blue"
                die3.style.backgroundColor="blue"
            }
            else if(num3===num2 || num2===num3){
                die2.style.backgroundColor="blue"
                die3.style.backgroundColor="blue"
            }
            
            else if(num===num2===num3){
                die.style.backgroundColor="blue"
                die3.style.backgroundColor="blue"
                die2.style.backgroundColor="blue"
            }
            

        });