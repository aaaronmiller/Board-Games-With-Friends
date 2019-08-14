module.exports = function(sequelize, DataTypes) {
    var userEvent = sequelize.define("userEvent", {
        eventId: {
            unique: true,
            type: DataTypes.INTEGER,
            allowNull: false,
         },
        userId: {
            unique: true,
            type: DataTypes.INTEGER,
            allowNull: false,
         }


    });

    // Event.associate = function(models) {
    //     Event.hasMany(models.Games, { through: "GamesEvent" });
    //     User.hasMany(models.Games, { through: "GamesEvent" });    
    //   };
return userEvent;
}