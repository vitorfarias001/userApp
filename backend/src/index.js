const app = require('./App');
const {connect} = require('./database');

async function main(){
    
    //Conectando na db
    await connect();

    //Aplicando o Express
    await app.listen(4000);
    console.log('Servidor rodando na porta 4000: Conectado'); 
}

main();