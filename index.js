let store = {driver: []}

class Driver {
  constructor(name) {
    this.name = name

    store.drivers.push(this)
  }
}
