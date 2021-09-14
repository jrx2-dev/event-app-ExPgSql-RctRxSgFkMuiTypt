module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define('Event', {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      eventDate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
    return Book;
  };