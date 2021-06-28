
window.onload = (function (){

    let btnBiggerDecoration = document.getElementById("btnBiggerDecoration");
    let textDecoration = document.getElementById("textDecoration");
    let count = 0;
    btnBiggerDecoration.onclick = (function ()
    {
        count = setInterval(setTwoLarger, 500)
    })

    let bling = document.getElementById("bling");
    bling.onchange = (function (){
        if (bling.checked == true) {
            textDecoration.style.fontWeight = "bold";
            textDecoration.style.color = "green";
            textDecoration.style.textDecoration = "underline";
            document.body.background = "Lab06-DecorateMyText/hundred-dollar-bill.jpg";
            }else{

            textDecoration.style.fontWeight = 'normal';
            textDecoration.style.textDecoration = 'none';
            textDecoration.style.color = 'black';
            document.body.background = 'white';


        }
    })
    function setTwoLarger(){
        let currentSize = window.getComputedStyle(textDecoration, null).getPropertyValue('font-size');
        let newTextDecorationSize = parseInt(currentSize) + 2;
        textDecoration.style.fontSize = newTextDecorationSize + "pt";
    }
    function transformWord(word) {
        let vowels = "aeoui";
        let result = word, firstLetter = word.charAt(0);
        if (vowels.indexOf(firstLetter) == -1) {
            result = result.substring(1, word.length) + firstLetter;
        }
        return result + '-ay';
    }

    let btnIgpay = document.getElementById('btnIgpay');
    btnIgpay.onclick = (function (){
        let textDecoration = document.getElementById("textDecoration");
        let results = textDecoration.value
            .split(" ")
            .map(word => transformWord(word))
            .join(" ");

        textDecoration.value = results;

    });
    function transformMalkovitch(word) {
        return word.length >= 5 ? "Malkovitch" : word;
    }
    let btnMalkovitch = document.getElementById('btnMalkovitch');
    btnMalkovitch.onclick = (function (){
        let textDecoration = document.getElementById("textDecoration");
        let results = textDecoration.value
            .split(" ")
            .map(word => transformMalkovitch(word))
            .join(" ");

        textDecoration.value = results;

    });;
})
