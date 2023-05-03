module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
      userid: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
      },
      gender: {
        type: DataTypes.STRING,
      },
    });
  
    return User;
  };
