import db from '../lib/database.js'

export function before(m) {
    let user = db.data.users[m.sender]
    if (user.afk > -1) {
        m.reply(`Black_Bot | π *γ AFK v2 γ*\n\n Dejaste de estar AFK! ${user.afkReason ? 'El Motivo era: ' + user.afkReason : ''}
  *Tiempo* ${(new Date - user.afk).toTimeString()}
  `.trim())
        user.afk = -1
        user.afkReason = ''
    }
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
        let user = db.data.users[jid]
        if (!user)
            continue
        let afkTime = user.afk
        if (!afkTime || afkTime < 0)
            continue
        let reason = user.afkReason || ''
        m.reply(`
Black_Bot | π *γ AFK v2 γ*
		
El usuario que intentaste tagear actualmente estΓ‘ ausente / ocupado


${reason ? 'Motivo: ' + reason : 'Sin razon notificada'}
Tiempo: ${(new Date - afkTime).toTimeString()}
  `.trim())
    }
    return true
}
