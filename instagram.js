const { Usuario, Comentario, Post, sequelize } = require ("./models");
const { Op } = require('sequelize');


/*Usuario.findAll({
    where: {
        //nome: {[Op.like]: '%a%'}
        nome: {[Op.notLike]: '%a%'}
    },
    
    //order: [
      //  ["nome", "ASC"]
    //],
    //limit: 2,
    //offset: 2
})
.then((resultado) => {
    console.log(resultado.map(user => user.toJSON()));
});*/

// Usuario.findByPk (1, {
//     include: [
//         {association:"posts"}
//     ]
// })
// .then((usuario) => {
//     console.table(usuario.posts.map((post) => post.toJSON()));
// })

Post.findByPk(1, {
    include: [
        {association:"comentarios"}
    ]
})
.then((post) => {
    console.table(post.comentarios.map((comentario) => comentario.toJSON()));
})
//jeito do Iago

// Usuario.findByPk(1, {include:['posts']}).then(
//     usuario => {
//         console.log(usuario.toJSON());
//         sequelize.close();
//     }
// )









// Usuario.findAll().then((usuarios)=> {
//     console.log(usuarios.map(usuario => usuario.toJSON()))
// })
/*Comentario.findAll({
    order: [
        ["id", "ASC"]
    ],
    limit: 2,
    //offset:2,
})
.then((resultado)=> {
    console.table(resultado.map(user => user.toJSON()))
}
);*/

/*Post.findAll( {
    where: {
        texto: {[Op.like]: '%oi%'}
    }
})*/
/*.then((resultado) => {
    console.log(resultado.map(user => user.toJSON()))*/
//});


/*Comentario.findByPk(1).then((resultado) => {
    console.log(resultado.toJSON());
})*/

//Usuario.findOne({
    //where: {
       // senha: "1234125412"
    //}
//}).then((resultado) => {
   // console.log(resultado.toJSON())
//});

// SEQUELIZE - CRUD
// adicione todos os integrantes do seu grupo como Usuarios utilizando o método create
// crie um post relacionado ao seu usuario
// atualize o email do usuario 'Sergio' para 'sergio@digitalhouse.com'
// apague o usuario 'Felipe Veronesi' filtrando pelo id






//desafio antes do almoço
// Usuario.create({
//     nome: 'Natalia',
//     email: 'nat@digitalhouse.com',
//     senha: 'maravilhosaaaa123'
// }).then((resultado) => {
//     console.log(resultado.toJSON());
// });
// Usuario.update({
//     senha: 'novasenha123'
// }, {
//     where: {
//         id: 8
//     }
// }).then((resultado) => {
//     console.log(resultado);
// })
