import Combo from '../Combo.js'
import Straight from '../combos/Straight'

class StraightFlush extends Combo {
  static isAvailable(cards) {
    return Straight.isAvailable(cards) && Flush.isAvailable(cards)
  }
}
export default StraightFlush;