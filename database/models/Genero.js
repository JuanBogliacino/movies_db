module.exports = function(sequilize, datatypes) {
    let alias = "Genero";

    let cols = {
        id: {
            type: datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }, 
        name: {
            type: datatypes.STRING
        }
    }

    let config = {
        tableName: "genres",
        timestamps: false
    }

    let Genero = sequilize.define(alias, cols, config);

    Genero.associate = function(models) {
        Genero.hasMany(models.Pelicula, {
            as: "peliculas",
            foreignKey: "genre_id"
        });
    }

    return Genero;
}