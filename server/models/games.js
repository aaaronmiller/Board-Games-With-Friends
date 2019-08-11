module.exports = function(sequelize, DataTypes) {
    var Games = sequelize.define("Games", {
      gameName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      gameDescript: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      },
      totalTimesPlayed: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      maxOfPlayers: {
        type: DataTypes.INTEGER,
        allowNull: false,
        len: [1]
      },
      picture: {
        type: DataTypes.STRING,
        allowNull: true,
        len: [1]
      }
    });

    return Games;
  };