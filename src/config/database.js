module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'go_stack_db',
  define: {
    timestamps: true,
    underscored: true,
    undescoredAll: true,
  },
};
