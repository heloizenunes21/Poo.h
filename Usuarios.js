//class
class Usuario {
    id;
    nome;
    senha;
    dataNascimento;
    genero;
    isAdmin;
    // metodo costrutor
    constructor(id, nome, senha, dataNascimento, genero, isAdmin) {
        this.id = id
        this.nome = nome
        this.senha = senha;
        this.dataNascimento = new Date(dataNascimento);
        this.genero = genero;
        this.isAdmin = false;
    }
    // métodos de classe -> função
    perfil() {
        return "Nome: " + this.nome + - 'Data de Nascimento:' + this.dataNascimento.toString();
    }

}
 const user1 = new Usuario(1, "Heloize vitoria", "123", "2009-06-T00:00:00", Genero.F);
  const user2 = new Usuario(2, "Victor miguel", "606", "2009-09-04-T00:00:00",Genero.M);
console.log(user1)
user1.nome = "Heloize vitoria";
console.log(user1)
console.log(user1. perfil())
console.log(user2.perfil())


   
