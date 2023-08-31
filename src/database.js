import fs from 'node:fs/promises';

const databasePath = new URL('../db.json', import.meta.url);

export class Database {
  #database = {};

  constructor() {
    (async () => {
      try {
        const data = await fs.readFile(databasePath, 'utf-8');
        this.#database = JSON.parse(data);
      } catch (error) {
        this.#database = {};
      }
    })();
  }

  #persist() {
    fs.writeFile(databasePath, JSON.stringify(this.#database));
  }

  select(table, id) {
    if (id) 
      return this.#database[table].find((row) => row.id === id);

    return this.#database[table];
  }

  insert(table, data) {
    if (Array.isArray(this.#database[table]))
      this.#database[table].push(data);
    else
      this.#database[table] = [data];

    this.#persist();
    return data;
  }

  update(table, id, data) {
    const index = this.#database[table].findIndex((row) => row.id === id);
    if (index === -1) return false;

    this.#database[table][index] = {
      ...this.#database[table][index],
      ...data,
    };

    this.#persist();
    return this.#database[table][index];
  }

  delete(table, id) {
    const index = this.#database[table].findIndex((row) => row.id === id);
    if (index === -1) return false;

    this.#database[table].splice(index, 1);
    this.#persist();
    return true;
  }
}