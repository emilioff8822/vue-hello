const {createApp}= Vue;

createApp ({

data (){

return {
messaggio: "primo vue",
imageUrl: ""

}  



},

mounted (){
  this.imageUrl = "immagini/pizza.jpg"
}

}).mount("#app")