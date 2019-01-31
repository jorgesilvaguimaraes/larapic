

<template>

  <div>
    <h1 class="centralizado" v-text="titulo"></h1>

    <p v-show="mensagem" class="centralizado">{{ mensagem }}</p>
    <input type="search" class="filtro" @input="filtro = $event.target.value" placeholder="filtre por parte do título" >    

    <ul class="lista-fotos">        
      <li class="lista-fotos-item" v-for="foto of fotosComFiltro" :key="foto.titulo" >
        <meu-painel  :titulo="foto.titulo">
          <imagem-responsiva v-meu-transform:scale.animate.invers="1.2" :url="foto.url" :titulo="foto.titulo" />
          <meu-botao estilo="padrao" :confirmacao="false" tipo="button" rotulo="REMOVER" @botaoAtivado="remove(foto)"/>
        </meu-painel>              
      </li>      
    </ul>            
  </div>
</template>

<script>
import Painel from '../shared/painel/Painel.vue';
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue';
import Botao from '../shared/botao/Botao.vue';
import Transform from '../../directives/transform.js';
import FotoService from '../../domain/foto/FotoService.js';

export default {

  components : {
    'meu-painel' : Painel,
    'imagem-responsiva' : ImagemResponsiva,
    'meu-botao' : Botao
  },

  data(){
    return {
      titulo : 'Alurapic',
      fotos  : [],
      filtro : '',
      mensagem : ''  
    }    
  },

  computed : {
    fotosComFiltro() {
      if(this.filtro)
      {
        let exp = new RegExp(this.filtro.trim(), 'i');
        return this.fotos.filter(foto => exp.test(foto.titulo));
      }else{
        return this.fotos;
      }
    }
  },

  created(){
    this.service = new FotoService(this.$resource);

    this.service.lista()      
      .then(fotos => this.fotos = fotos, err => console.log(err));

    /*
    this.$http.get('v1/fotos')
      .then(res => res.json())
      .then(fotos => this.fotos = fotos, err => console.log(err));
      */
  },

  methods : {
    remove(foto) {  

        this.service.apaga(foto._id)        
          .then( () =>{ 
                  let indece = this.fotos.indexOf(foto);
                  this.fotos.splice(indece, 1);
                  this.mensagem = 'Foto removida com sucesso';                        
                    }, 
                  err => {
                    console.log(err);
                    this.mensagem = 'Não foi possivel remover a foto'; 
                    }
              );          
               
    }
  },

  directives :
  {
    'meu-transform' : Transform
  }
}
</script>

<style>
  
  .centralizado {
    text-align: center;
  }

  .lista-fotos {
    list-style: none;
  }

  .lista-fotos-item {
    display: inline-block;
  }

 

  .filtro {
    display: block;
    width: 100%;
  }

 
</style>
