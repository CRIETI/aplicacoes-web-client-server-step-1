const Sequelize = require("sequelize");
const sequelize = require("./sequelize.js");
const User = require("./user.js");
const usuarios = require("./usuarios.js");

(async () => {

    await User.sync({force:true});

    for ( let i= 0 ; i < usuarios.length; i++)
    {
        let usuario = usuarios[i];  
        await User.create(usuario);
    }

})();