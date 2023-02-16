module.exports = function(sequilize, datatypes) {
    let alias = "Actor";

    let cols = {
        id: {
            type: datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }, 
        first_name: {
            type: datatypes.STRING
        },
        last_name: {
            type: datatypes.STRING
        }
    }

    let config = {
        tableName: "actors",
        timestamps: false
    }

    let Actor = sequilize.define(alias, cols, config);

    Actor.associate = function(models) {
        Actor.belongsToMany(models.Pelicula, {
            as: "peliculas",
            through: "actor_movie",
            foreignKey: "actor_id",
            otherKey: "movie_id",
            timestamps: false
        });
    }

    return Actor;
}