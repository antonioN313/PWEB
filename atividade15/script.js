var cursos = document.getElementById("cursos");

function carregaCurso(){
    var selecionado = cursos.value;

    if(selecionado != ""){
        var confirmacao = confirm("Deseja ver as informações do curso?");

        if(confirmacao){
            if(selecionado == "ads"){
                paginaCurso = window.open("http://www.fatecsorocaba.edu.br/curso_ads.asp", "ads", "width = 600, height = 300");
            }else if(selecionado == "ea"){
                paginaCurso = window.open("http://www.fatecsorocaba.edu.br/curso_ea.asp", "ea", "width = 600, height = 300");
            }else if(selecionado == "fm"){
                paginaCurso = window.open("http://www.fatecsorocaba.edu.br/curso_fm.asp", "fm", "width = 600, height = 300");
            }else if(selecionado == "gq"){
                paginaCurso = window.open("http://www.fatecsorocaba.edu.br/curso_gq.asp", "gq", "width = 600, height = 300");
            }else if(selecionado == "ma"){
                paginaCurso = window.open("http://www.fatecsorocaba.edu.br/curso_ma.asp", "ma", "width = 600, height = 300");
            }
            else if(selecionado == "ma"){
            paginaCurso = window.open("http://www.fatecsorocaba.edu.br/curso_ma.asp", "ma", "width = 600, height = 300");
            }
            else if(selecionado == "me"){
                paginaCurso = window.open("http://fatecsorocaba.edu.br/curso_pm.asp", "me", "width = 600, height = 300");
            }
            else{
                paginaCurso = window.open("http://fatecsorocaba.edu.br/curso_sb.asp", "sb", "width = 600, height = 300");
            }
        }
    }
}