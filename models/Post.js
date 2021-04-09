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

    return Post;
}