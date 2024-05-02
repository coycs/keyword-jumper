import { sendToContentScript } from '@plasmohq/messaging'

export {}

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    title: 'Keyword Jumper',
    contexts: ['selection'],
    id: 'keywordJumper',
  })
})
// 右键菜单
chrome.contextMenus.onClicked.addListener(async ({ menuItemId, selectionText }, tab) => {
  if (menuItemId !== 'keywordJumper' || !selectionText)
    return
  sendToContentScript({
    name: 'contextMenus',
  })
})
// 快捷键
chrome.commands.onCommand.addListener((command) => {
  if (command === 'keywordJumper') {
    sendToContentScript({
      name: 'commands',
    })
  }
})
