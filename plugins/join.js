import db from '../lib/database.js'

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i

let handler = async (m, { conn, text, isOwner }) => {
    let [_, code, expired] = text.match(linkRegex) || []
    if (!code) throw 'LINK INVALIDO!'
    let res = await conn.groupAcceptInvite(code)
    expired = Math.floor(Math.min(999, Math.max(1, isOwner ? isNumber(expired) ? parseInt(expired) : 0 : 3)))
    m.reply(`Black_Bot® |  *「 JOIN v2 」*\n\nEL BOT SE UNIO AL GRUPO! ${res}${expired ? ` Por ${expired} DIAS` : ''}`)
    let chats = db.data.chats[res]
    if (!chats) chats = db.data.chats[res] = {}
    if (expired) chats.expired = +new Date() + expired * 1000 * 60 * 60 * 24
}
handler.help = ['join <chat.whatsapp.com>']
handler.tags = ['HeadStaff']

handler.command = /^join$/i
handler.smods = true

export default handler

const isNumber = (x) => (x = parseInt(x), typeof x === 'number' && !isNaN(x))
