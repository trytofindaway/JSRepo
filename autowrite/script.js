const text = 'スマトラ島北端アチェ州に位置するGAYO　HIGHLANDSは東南アジア最大のアラビカコーヒー産地として知られています。'
let index = 0;

function writetext(){
    document.body.innerText = text.slice(0, index);

    index++;

    if(index > text.length - 1){
        index = 0;

    }
}

setInterval(writetext, 100);