// Importando o modulo mongoose, e referenciando ele em uma variável
const mongoose = require("mongoose");


// Construção de um Schema de dados dos campos que serão cadastrados pela carteira e saldo
const schema_wallet = new mongoose.Schema({
    cardname:{type:String,require:true},
    balance:{type:Number,require:true},
    cardlimit:{type:Number,require:true},
    usebalance:{type:Number,require:true},
    iduser:{type:String,require:true}

});

// Exportando modelo de dados da carteira para toda a aplicação
module.exports = mongoose.model("Wallet",schema_wallet);