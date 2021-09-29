//Descrição: Banner para exibição em outro site e parceiros da AntSoft
//Criação: 09/05/2018
//Atualização: 29/09/2021
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
// » 0.8 - Inclusão da string http: nos endereços de URL permitindo o acesos através de https:; Atualização da descrição e inclusão do Histórico das Versões
// » 0.9 - Alteração do protocolo http: para  https:
// » 1.0 - Inclusão do atributo alt nas imagens

(function ($) {
    "use strict"; // Start of use strict
    $(document).ready(function () {
        document.getElementById("antsoft").innerHTML = "<p class='small' style='text-align:center'><a href='https://www.antsoft.com.br' target='_blank'><img src='https://www.antsoft.com.br/images/ant_soft_logomarca_small.png' alt='AntSoft Systems On Demand'/><br />Developer by: AntSoft Systems On Demand</small></a></p>";
        document.getElementsByClassName("antsoft").innerHTML = "<p class='small' style='text-align:center'><a href='https://www.antsoft.com.br' target='_blank'><img src='https://www.antsoft.com.br/images/ant_soft_logomarca_small.png' alt='AntSoft Systems On Demand'/><br />Developer by: AntSoft Systems On Demand</a></p>";
      
    });
})(jQuery); // End of use strict
