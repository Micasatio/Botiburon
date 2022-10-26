import db from '../lib/database.js'
let handler = m => m
handler.before = async function (m, {conn, isAdmin, isBotAdmin} ) {
const fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net"
}
if (!m.isGroup) return !1
let chat = db.data.chats[m.chat]
if (isBotAdmin && chat.antifake) {
//if (!db.data.chats[m.chat].antifake && m.isGroup) throw 0
let texto = `${ag}este numero *@${m.sender.split`@`[0]}* no esta permitido en este grupo!!\n\nlo siento seras expulsado.. tu numero parece algo fake 😯`
	
if (m.sender.startsWith('91' || '91')) {
db.data.users[m.sender].banned = true
await conn.reply(m.chat, texto, fkontak,  m)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
		
if (m.sender.startsWith('92' || '92')) {
db.data.users[m.sender].banned = true
await conn.reply(m.chat, texto, fkontak,  m)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('222' || '222')) {
db.data.users[m.sender].banned = true
await conn.reply(m.chat, texto, fkontak,  m)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('93' || '93')) {
db.data.users[m.sender].banned = true
await conn.reply(m.chat, texto, fkontak,  m)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('93' || '93')) {
db.data.users[m.sender].banned = true
await conn.reply(m.chat, texto, fkontak,  m)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('963' || '963')) {
db.data.users[m.sender].banned = true
await conn.reply(m.chat, texto, fkontak,  m)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('93' || '93')) {
db.data.users[m.sender].banned = true
await conn.reply(m.chat, texto, fkontak,  m)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('966' || '966')) {
db.data.users[m.sender].banned = true
await conn.reply(m.chat, texto, fkontak,  m)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('967' || '967')) {
db.data.users[m.sender].banned = true
await conn.reply(m.chat, texto, fkontak,  m)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('234' || '234')) {
db.data.users[m.sender].banned = true
await conn.reply(m.chat, texto, fkontak,  m)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('212' || '212')) {
db.data.users[m.sender].banned = true
await conn.reply(m.chat, texto, fkontak,  m)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('210' || '210')) {
db.data.users[m.sender].banned = true
await conn.reply(m.chat, texto, fkontak,  m)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('61' || '61')) {
db.data.users[m.sender].banned = true
await conn.reply(m.chat, texto, fkontak,  m)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}

if (m.sender.startsWith('49' || '49')) {
db.data.users[m.sender].banned = true
await conn.reply(m.chat, texto, fkontak,  m)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
	
if (m.sender.startsWith('20' || '20')) {
db.data.users[m.sender].banned = true
await conn.reply(m.chat, texto, fkontak,  m)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
	
if (m.sender.startsWith('62' || '62')) {
db.data.users[m.sender].banned = true
await conn.reply(m.chat, texto, fkontak,  m)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
	
if (m.sender.startsWith('40' || '40')) {
db.data.users[m.sender].banned = true
await conn.reply(m.chat, texto, fkontak,  m)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
}
}
export default handler
