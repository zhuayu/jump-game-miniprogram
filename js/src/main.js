import * as THREE from '../libs/three.min.r96.js'
import Game from './game/game.js'

window.THREE = THREE

class Main {
  constructor() {

  }
  
  init() {
    Game.init()
  }
}

export default new Main()