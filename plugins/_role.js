import db from '../lib/database.js'
let handler = m => m

handler.before = function (m) {
   let user = db.data.users[m.sender]
        let role = (user.limit <= 0) ? 'Vagabundo ð« - Deudor.'
		  : ((user.limit >= 1) && (user.limit <= 180)) ? 'Vagabundo ð«'
		  : ((user.limit >= 180) && (user.limit <= 300)) ? 'Pobreza ð«'
          : ((user.limit >= 300) && (user.limit <= 500)) ? 'Clase Baja ð¶'
          : ((user.limit >= 500) && (user.limit <= 650)) ? 'Clase media baja ð¥ð¶'
          : ((user.limit >= 650) && (user.limit <= 1000)) ? 'Clase Media ð¥ð¶'
          : ((user.limit >= 1000) && (user.limit <= 2300)) ? 'Clase Media Alta ð¥ð¶'
          : ((user.limit >= 2300) && (user.limit <= 3400)) ? 'Clase alta ð¥ð¶'
          : ((user.limit >= 3400) && (user.limit <= 4600)) ? 'Clase media superior ðð¶'
          : ((user.limit >= 4600) && (user.limit <= 15000)) ? 'Clase superior ðï¸ð¶'
		  : ((user.limit >= 15000) && (user.limit <= 50000)) ? 'Familia real ðð¶'
		  : ((user.limit >= 50000) && (user.limit <= 90000)) ? 'Admin de GA'
          : 'Black_Botð'
  user.role = role
  return true
}

export default handler
