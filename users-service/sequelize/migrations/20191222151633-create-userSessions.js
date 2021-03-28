module.exports.up = (queryInterface, DataTypes) => {
    return queryInterface.createTable("userSessions", {
        id: {
            allowNull: false,
            primarykey: true,
            type: DataTypes.UUID
        },
        userId: {
            allowNull: false,
            references: {
                key: "id",
                model: "users"
            },
            type: DataType.UUID
        },
        expiresAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        createAt: {
            allowNull: false,
            type: DataTypes.DATE
        }
    }, {
        charset: "utf8"
    })
}

module.exports.down = queryInterface => queryInterface.dropTable("users")
