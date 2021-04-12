module.exports = (sequelize, DataTypes) => {
    
    const Post = sequelize.define(
        'Post',  {
            texto: DataTypes.INTEGER(100),
            img:DataTypes.STRING(100),
            usuarios_id: DataTypes.INTEGER,
            n_likes: DataTypes.INTEGER
            
        }, {
            tableName: "posts",
            timestamps: false
        }
    );
        // Post.associate = (models) => {
        //     Post.belongsTo(models.Usuario, {as: "usuario", foreignKey:"usuarios_id"});
        // }
        Post.associate = (models) => {
            //relação 1:N
            Post.hasMany(models.Comentario,{as:"comentarios", foreignKey:"posts_id"})
        }
    
    
        return Post;
}