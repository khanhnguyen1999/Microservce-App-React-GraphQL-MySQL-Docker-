module.exports.up = (queryInterface, DataTypes) => {
    return queryInterface.createTable("listings", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primarykey: true,
            type: DataTypes.INTEGER.UNSIGNED
        },
        title: {
            allowNull: false,
            type: DataTypes.STRING
        },
        description: {
            allowNull: false,
            type: DataTypes.TEXT
        },
        createAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updateAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        deleteAt: {
            allowNull: true,
            type: DataTypes.DATE
        }
    }, {
        charset: "utf8"
    })
}