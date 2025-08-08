function selecionaQuiz(){
    let tipoQuiz = document.querySelector('input[name="tipo_de_quiz"]:checked').value;
            if(tipoQuiz == 'vampiros'){ 
                document.querySelector("#vampiros").style.display = 'flex'; 
                document.querySelector("#namorados").style.display = 'none';
                document.querySelector("#assaltos").style.display = 'none';
            }
            else if(tipoQuiz == 'namorados'){
                document.querySelector("#vampiros").style.display = 'none'; 
                document.querySelector("#namorados").style.display = 'flex';
                document.querySelector("#assaltos").style.display = 'none';
            }
            else{
                document.querySelector("#vampiros").style.display = 'none'; 
                document.querySelector("#namorados").style.display = 'none';
                document.querySelector("#assaltos").style.display = 'flex';
            }
}
