function UI(){

    this.outputImage = document.getElementById("outoutImage");
    this.outputLanguage = document.getElementById("outputLanguage");
    this.outputword = document.getElementById("outputWord");

    this.languageList = document.getElementById("language");
}

UI.prototype.changeUI = function(){
    //Arayüz değiştirme

    this.outputImage.src = `images/${this.languageList.value}.png`;

    this.outputLanguage.innerHTML = this.languageList.options[this.languageList.selectedIndex].textContent;

    


}

UI.prototype.displayTranslate = function(word){
    //Çevirilen kelimeyi yazdırma
    this.outputword.textContent = word;

}