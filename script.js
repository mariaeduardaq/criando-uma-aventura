const avance = document.querySelectorAll('.btn-proximo');

avanca.foreach(button => {
    button.addeventlistener('click', function(){
      const atual = document.querySelector('.ativo');
      const proximopasso = 'passo-' + this.getatrubute('data-proximo');
    
      atual.classList.remove('ativo');
      document.getElementById(proxiomopasso).classlist.add('ativo');
      })
})
