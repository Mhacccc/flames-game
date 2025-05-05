

function startFlames(){
    let name1 = document.getElementById("name1").value.toLowerCase().split("");
    let name2 = document.getElementById("name2").value.toLowerCase().split("");
    let result = document.getElementById("result");
    let flames = ["Friends","Lovers","Affection","Marriage","Enemy","Soulmate"]


    const letters = [];
    let result1 = []
    let result2 = []

        for(let i = 0;i<name1.length;i++){
            if(name2.includes(name1[i])){
                if(!letters.includes(name1[i])){
                letters.push(name1[i])
                }
            }
        }//same character

        for(let char of name1){
            if(!letters.includes(char)){
                result1.push(char)
            }
        }
        for(let char of name2){
            if(!letters.includes(char)){
                result2.push(char)
            }
        }


    console.log(result1.join(""));
    console.log(result2.join(""));

    let count = result1.length + result2.length;
    console.log(`counts: ${count}`)
    let index = 0

    while (flames.length > 1) {
        index = (index + count - 1) % flames.length;
        flames.splice(index, 1);
    }

    result.textContent = flames.join("");

        console.log(flames);
        console.log(letters);
        console.log(letters.length);
}
