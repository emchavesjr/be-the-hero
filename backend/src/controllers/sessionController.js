const connection = require('../database/connection');

module.exports = {
  create: async function(req, res, next) {
    const { id } = req.body;

    const ong = await connection('ongs')
      .where('id', id)
      .select('name')
      .first();

    if (!ong) {
      return res.status(400).json({ error: 'Failed to fetch ONG' });
    }

    return res.json(ong);
  },
};
