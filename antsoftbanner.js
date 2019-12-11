//Descrição: Banner para exibição em outro site e parceiros da AntSoft
//Criação: 09/05/2018
//Atualização: 11/12/2019
//
//
//
//Versão: 
// » 0.1 - Apenas imagem
// » 0.2 - Inclusão do termo 'Developer by: AntSoft Systems On Demand'
// » 0.3 - Alinhamento centralizado
// » 0.4 - Correção do local da imagem - 09/05/2018
// » 0.5 - Inclusão da atribuição do Elemento pela classe para retornar a image - 28/01/2019
// » 0.6 - Substituição da tag <small> pela tag <p> e inclusão da class small no texto Developer....
// » 0.7 - Alteração da tag <center> pela style text-align:center no texto Developer....
// » 0.8 - Migração para GitHub, tornando código aberto
(function ($) {
    "use strict"; // Start of use strict
    $(document).ready(function () {
        document.getElementById("antsoft").innerHTML = "<p class='small' style='text-align:center'><a href='http://www.antsoft.com.br' target='_blank'><img src='http://www.antsoft.com.br/images/ant_soft_logomarca_small.png'/><br />Developer by: AntSoft Systems On Demand</small></a></p>";
        document.getElementsByClassName("antsoft").innerHTML = "<p class='small' style='text-align:center'><a href='http://www.antsoft.com.br' target='_blank'><img src='http://www.antsoft.com.br/images/ant_soft_logomarca_small.png'/><br />Developer by: AntSoft Systems On Demand</a></p>";
      
    });
})(jQuery); // End of use strict
