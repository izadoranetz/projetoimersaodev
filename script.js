//var escolhaAlternativa = parseInt(prompt("Escolha a opção que contém o/a artista que criou a obra abaixo: 1 - Picasso; 2 - Paul Klee; 3 - Arshile Gorky; 4 - Baya Mahieddine"))

//if (escolhaAlternativa == 1){
  //document.write("<h2> Este quadro <b>não</b> é do Picasso! </h2>")
//} else if (escolhaAlternativa == 2) {
  //document.write("<h2> <b>Siiim</b>, esta linda obra é do pintor alemão Paul Klee :D </h2>")
//} else if (escolhaAlternativa == 3){
  //document.write("<h2> Não, <b>não</b> foi o pintor surrealista Arshile Gorky quem pintou esta obra... </h2>")
//} else if (escolhaAlternativa == 4){
  //document.write("<h2> A artista argelina Baya Mahieddine influenciou diversos artistas, mas <b>não</b> foi ela quem pintou esta obra. </h2>")
//} else {
   //document.write("<h2>" + "Opção Inválida. Atualize a página e tente novamente!" + "</h2>")
//}
  
function display(){
  if(document.getElementById('1').checked) {
    document.getElementById('display').innerHTML = "<h2> Este quadro <b>não</b> é do Picasso! </h2>"
} else if(document.getElementById('2').checked) {
  document.getElementById('display').innerHTML =  "<h2> <b>Siiim</b>, esta linda obra é do pintor alemão Paul Klee :D </h2>"
} else if(document.getElementById('3').checked) {
   document.getElementById('display').innerHTML = "<h2> Não, <b>não</b> foi o pintor surrealista Arshile Gorky quem pintou esta obra... </h2>"
  } else if(document.getElementById('4').checked) {
  document.getElementById('display').innerHTML =  "<h2> A artista argelina Baya Mahieddine influenciou diversos outros pintores, mas <b>não</b> foi ela quem pintou esta obra. </h2>"
  }
  
}
