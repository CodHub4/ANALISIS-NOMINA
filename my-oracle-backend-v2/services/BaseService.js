const oracledb = require('oracledb');
const dbConfig = require('../config/dbConfig');

class BaseService {
  constructor(tableName, idColumn) {
    this.tableName = tableName;
    this.idColumn = idColumn;
  }

  async getConnection() {
    return await oracledb.getConnection(dbConfig);
  }

  async executeQuery(sql, bindParams = {}, options = {}) {
    const conn = await this.getConnection();
    try {
      const result = await conn.execute(sql, bindParams, options);
      await conn.close();
      return result;
    } catch (error) {
      await conn.close();
      throw error;
    }
  }

  async findAll(whereClause = '', bindParams = {}) {
    const sql = `SELECT * FROM ${this.tableName} ${whereClause}`;
    const result = await this.executeQuery(sql, bindParams);
    return result.rows;
  }

  async findById(id) {
    const result = await this.executeQuery(
      `SELECT * FROM ${this.tableName} WHERE ${this.idColumn} = :id`,
      { id }
    );
    return result.rows[0];
  }

  async create(data, columns, returning = this.idColumn) {
    const colNames = columns.join(', ');
    const colValues = columns.map(c => `:${c}`).join(', ');
    const sql = `INSERT INTO ${this.tableName} (${colNames}) VALUES (${colValues}) RETURNING ${returning} INTO :outId`;

    const bindParams = { outId: { dir: oracledb.BIND_OUT, type: oracledb.NUMBER } };
    columns.forEach(c => bindParams[c] = data[c]);

    const result = await this.executeQuery(sql, bindParams, { autoCommit: true });
    return result.outBinds.outId[0];
  }

  async update(id, data, columns) {
    const sets = columns.map(c => `${c} = :${c}`).join(', ');
    const sql = `UPDATE ${this.tableName} SET ${sets} WHERE ${this.idColumn} = :id`;

    const bindParams = { id };
    columns.forEach(c => bindParams[c] = data[c]);

    await this.executeQuery(sql, bindParams, { autoCommit: true });
  }

  async delete(id) {
    await this.executeQuery(
      `DELETE FROM ${this.tableName} WHERE ${this.idColumn} = :id`,
      { id },
      { autoCommit: true }
    );
  }

  async executeCustomQuery(sql, bindParams = {}, options = {}) {
    return await this.executeQuery(sql, bindParams, options);
  }
}

module.exports = BaseService;
