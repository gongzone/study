// const organization = { name: 'Acme Gooseberries', country: 'GB' };

// organization.name = 'Dream Coding';
// console.log(organization.name);
// console.log(organization.country);

/* Encapsulate Record */

class Organization {
  #name;
  #country;

  constructor(data) {
    this.#data = data;
    this.#name = data.name;
    this.#country = data.country;
  }

  get name() {
    return this.#name;
  }

  set name(value) {
    this.#name = value;
  }

  get country() {
    return this.#country;
  }

  set country(value) {
    this.#country = value;
  }

  get rawData() {
    return { ...this.#data }; // 얉은 복사, cloneDeep 사용해서 깊은 복사 가능(lodash)
  }
}

const organization = new Organization({ name: 'Acme Gooseberries', country: 'GB' });

organization.name = 'Dream Coding';
console.log(organization.name);
console.log(organization.country);
