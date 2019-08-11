module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
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
      type: DataTypes.DATE,
      allowNull: false,
      len: [1]
    },
    gpsLocation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    enrolledPlayers: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });


    // Event.belongsToMany(models.User, { through: "UserEvent" });


  return Event;
};
