// Importando o modulo mongoose, e referenciando ele em uma variável
const mongoose = require("mongoose");

// Construção de um Schema de dados dos campos que serão cadastrados pelo usuário
const schema_user = new mongoose.Schema({
    fullname:{type:String , require:true},
    email:{type:String,require:true,unique:true},
    phone:{type:String},
    user:{type:String, require:true, unique:true},
    password:{type:String,require:true}
});

// Exportando modelo de dados do usuário para toda a aplicação
module.exports = mongoose.model("Users",schema_user);