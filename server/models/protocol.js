export default function (sequelize, DataTypes) {

    const Protocol = sequelize.define('Protocol', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        numero: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        cpfConsumidor: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        codigoDoProduto: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        nomeConsumidor: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        versaoAtual: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        situacao: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        defeito: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        dataHora: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        avaliacao: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        observacoes: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    })

    return Protocol;
}