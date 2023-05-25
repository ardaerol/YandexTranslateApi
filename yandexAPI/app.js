

addEventListener();

function addEventListener(){
    document.getElementById('translate-form').addEventListener("submit",translateWord);

    document.getElementById("language").onchange = function(){
        //Arayüz işlemleri
        ui.changeUI();
    }
}

const translate = new Translate(document.getElementById("word").value,document.getElementById("language").value);
const ui = new UI();

function translateWord(e){

    translate.changeParameters(document.getElementById("word").value,document.getElementById("lenguage").value);

    translate.translateWord(function(err,response){
        if(err) {
            //hata var
            console.log(err);
        }
        else{
            //hata yok
           ui.displayTranslate(response);
        }
    });
    e.preventDefault();
}