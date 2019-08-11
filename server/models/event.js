module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
    eventTitle: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
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
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [1]
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [1]
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      len: [1]
    },
    specificLocation: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    time: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [1]
    }
  });


    // Event.belongsToMany(models.User, { through: "UserEvent" });


  return Event;
};
