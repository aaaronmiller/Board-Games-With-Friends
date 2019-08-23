module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    // Giving the User model a name of type STRING
    userName: {
      unique: true,
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userImage: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    realName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    userGender: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    userIntro: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    favoriteGames: {
      type: DataTypes.STRING,
      allowNull: true,
    }
    });


    // Associating User with Posts
    // When an User is deleted, also delete any associated Posts
    // User.belongsToMany(models.Event, {
    //   through: "UserEvent",
    //   as: 'user',
    //   onDelete: "cascade"
    // });


  Users.associate = (models) => {
    Users.belongsToMany(models.Events, {
      through: 'JoinedEvents',
      as: 'events',
      foreignKey: 'usersId'
    });
  };

  

  return Users;
};
