module.exports = function(sequelize, DataTypes) {
  var Events = sequelize.define("Events", {
    eventTitle: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    gameName: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    maxPlayers: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [1]
    },
    dateTime: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    gpsLocation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    creatorName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    enrolledPlayers: {
      type: DataTypes.STRING,
      allowNull: true,
    }

    // enrolledPlayers: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // }
  });


    // We're saying that a Post should belong to an User
    // A Post can't be created without an User due to the foreign key constraint
    // Event.belongsToMany(models.Games, { through: "GamesEvent" });
    // Event.belongsToMany(models.User, { through: "UserEvent" });

  Events.associate = (models) => {
    Events.belongsToMany(models.Users, {
      through: 'JoinedEvents',
      as: 'users',
      foreignKey: 'eventsId'
    });
  };


  return Events;
};
