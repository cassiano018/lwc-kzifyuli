import { LightningElement } from "lwc";

export default class App extends LightningElement {

//nessa parte é possível criar as variáveis e atributos
nome = "Thiago Alves";
telefone = "(11) 1122-3344";
CPF = "111.222.333.-44";
Idade = 34;

//informações complementares
email = "t.Alves@com.br";
instagram = "https://www.instagram.com";
linkedin = "https://www.linkedin.com";

visible = true;


//uso de variável da classe dentro de método
// this.variavel
//trocar valaro da visible -> false

trocarDic(){
  // alterar valor de visible para false
  //Exemplo 1 =  negando o visible
  //this.visible = !this.visible;

  //Exemplo 2 = usando If
  if(this.visible == true){
      this.visible = false;
    }else{
      this.visible = true;
    }
}

/**
     * crie um método chamado alterarValores que mudem 
     * os valores de nome, telefone, cpf, idade, email
     * instagram, linkedin.
     * 
     * No html criar um novo botão chamado altera valor, 
     * que ative a função
     */
  trocarVar(){
        this.nome = "Raquel"
        this.telefone = "(xx) xxxx-xxxx"
        this.CPF = "123.456.789-00"
        this.Idade = 30
        this.email = "r@gmail.com"
        this.instagram = "https://www.r7.com/"
        this.linkedin = "https://g1.globo.com/"   

  }

}