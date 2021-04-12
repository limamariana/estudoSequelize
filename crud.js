const { Usuario, Comentario, Post, sequelize } = require ("./models");
const { Op } = require('sequelize');


// SEQUELIZE - CRUD
// adicione todos os integrantes do seu grupo como Usuarios utilizando o método create
// crie um post relacionado ao seu usuario
// atualize o email do usuario 'Sergio' para 'sergio@digitalhouse.com'
// apague o usuario 'Felipe Veronesi' filtrando pelo id

Usuario.create ({
    nome:"Mariana Lima",
    email:"mariana@gmail.com",
    senha:"mariana123"
}).then((resultado) => {
    console.log(resultado.toJSON());
}
);

Post.create ({
    texto:"Que bela manhã de segunda em Recife!",
    img:'',
    usuarios_id: 10,
    n_likes: 5,
}).then((resultado) => {
    console.table(resultado.toJSON());
})

Usuario.update({
    email:"sergio@digitalhouse.com"
}, {
    where: {
        id: 2
    }
}).then((resultado) => {
    console.log(resultado);
});

Usuario.destroy({
    where: {
        id: 3
    }
}).then((resultado) => {
    console.log(resultado);
})
// Post.destroy({
//     where: {
//         id: 5
//     }
// }).then((resultado)=> {
//     console.log(resultado);
// });