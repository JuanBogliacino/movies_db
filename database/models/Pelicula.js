module.exports = function(sequilize, datatypes) {
    let alias = "Pelicula";

    let cols = {
        id: {
            type: datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }, 
        title: {
            type: datatypes.STRING
        },
        awards: {
            type: datatypes.INTEGER
        },
        rating: {
            type: datatypes.INTEGER
        },
        length: {
            type: datatypes.DOUBLE
        },
        genre_id: {
            type: datatypes.INTEGER
        },
        release_date: {
            type: datatypes.DATE
        }
    }

    let config = {
        tableName: "movies",
        timestamps: false
    }

    let Pelicula = sequilize.define(alias, cols, config);

    Pelicula.associate = function(models) {
        Pelicula.belongsTo(models.Genero, {
            as: "genero",
            foreignKey: "genre_id"
        });

        Pelicula.belongsToMany(models.Actor, {
            as: "actores",
            through: "actor_movie",
            foreignKey: "movie_id",
            otherKey: "actor_id",
            timestamps: false
        });
    }

    return Pelicula;
}