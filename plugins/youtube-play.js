import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `Que?\n\nEjemplo:\n${usedPrefix + command} Roki bulovic panteri`
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'No encuentro el video XD'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  await conn.sendHydrated(m.chat, `
📌 *Titulo:* ${title}
🔗 *Url:* ${url}
🖹 *Descripcion:* ${description}
⏲️ *Publicado:* ${publishedTime}
⌚ *Duracion:* ${durationH}
👁️ *Vistas:* ${viewH}
  `.trim(), author, thumbnail, url, '📺Ir a Youtube!', null, null, [
    ['Audio ', `${usedPrefix}yta ${url} yes`],
    ['Video ', `${usedPrefix}ytv ${url} yes`],
    ['Entrar a yt', `${usedPrefix}yts ${url}`]
  ], m)
}
handler.help = ['play', 'play2'].map(v => v + ' <Mensaje>')
handler.tags = ['downloader']
handler.command = /^play2?$/i

handler.exp = 0
handler.limit = false

export default handler

