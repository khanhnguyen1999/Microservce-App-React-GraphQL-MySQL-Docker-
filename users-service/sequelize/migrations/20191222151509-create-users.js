module.exports.up = (queryInterface, DataTypes) => {
    return queryInterface.createTable("users", {
        id: {
            allowNull: false,
            primarykey: true,
            type: DataTypes.UUID
        },
        email: {
            allowNull: false,
            type: DataTypes.STRING,
            unique: true
        },
        passwordHash: {
            allowNull: false,
            type: DataTypes.CHAR(64)
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

module.exports.down = queryInterface => queryInterface.dropTable("userSessions")