module.exports = function(sequelize, DataTypes) {
    var joinedEvents = sequelize.define("JoinedEvents", {
      eventsId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Events',
          key: 'eventsId'
        }
      },
      userName:{
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'userName'
        }
      }

    });

    //    models.joinedEvent.hasMany(models.Event, {
      //       onDelete: "cascade"
      //   });
      //    models.joinedEvent.hasMany(models.User, {
        //       onDelete: "cascade"
        //   });

  
    // joinedEvent.associate = function(models) {
    //   // We're saying that a Post should belong to an User
    //   // A Post can't be created without an User due to the foreign key constraint
    //   joinedEvent.belongsToMany(models.Event, { through: "GamesEvent" });
    //   User.hasMany(Picture, { foreignKey: 'uid' })

    // };
  
    return joinedEvents;
  };