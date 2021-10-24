
const content = "Wecome to my page"
const text = document.querySelector(".index_text h1")
let index = 0;

// 한글자씩 텍스트 타이핑
function typing(){
    text.textContent += content[index++]
    if(index > content.length){
        text.textContent = ""
        index = 0;
    }
    if(index == content.length){
        clearInterval(stop);
    }
}
var stop = setInterval(typing, 200);

