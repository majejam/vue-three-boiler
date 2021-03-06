class GUI {
  constructor() {
    this.dat = require('../../node_modules/dat.gui')

    this.gui = new this.dat.GUI()

    this.folders = {}

    this.datas = {}

    this.gui.hide()

    this.BlendFunction = {
      SKIP: 0,
      ADD: 1,
      ALPHA: 2,
      AVERAGE: 3,
      COLOR_BURN: 4,
      COLOR_DODGE: 5,
      DARKEN: 6,
      DIFFERENCE: 7,
      EXCLUSION: 8,
      LIGHTEN: 9,
      MULTIPLY: 10,
      DIVIDE: 11,
      NEGATION: 12,
      NORMAL: 13,
      OVERLAY: 14,
      REFLECT: 15,
      SCREEN: 16,
      SOFT_LIGHT: 17,
      SUBTRACT: 18,
    }
  }

  setFolder(name, parentFolder = null) {
    //this.gui.show()
    if (this.folders[name]) return this.warn(`The folder "${name}" already exist`)

    if (!parentFolder) this.folders[name] = this.gui.addFolder(name)
    else this.folders[name] = this.folders[parentFolder].addFolder(name)
    //adds key in datas object with folder name
    this.datas[name] = {}
  }

  getFolder(name) {
    return this.folders[name]
  }

  addValue(folderName, variableName, values, cb = () => {}) {
    if (!this.folders[folderName]) return this.warn(`The folder "${folderName}" doesn't exist`)
    if (this.datas[folderName][variableName]) return this.warn(`The variable "${variableName}" already exist`)

    this.datas[folderName][variableName] = values.default

    this.folders[folderName].add(this.datas[folderName], variableName, values.min, values.max, values.step).onChange(cb)

    return this.datas[folderName][variableName]
  }

  warn(msg) {
    console.warn(msg)
  }
}

let GUIInstance = new GUI()

export default GUIInstance
