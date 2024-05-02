import React, { useEffect, useState } from 'react'
import { useStorage } from '@plasmohq/storage/hook'
import { useMessage } from '@plasmohq/messaging/hook'
// 图标
import Logo from 'data-base64:assets/icon.png'
// 数据
import { DefaultToolSetting, ToolSettingStorageKey } from '~data'
// hooks
import { useTextSelection } from '~hooks/useTextSelection'
// 类型
import type { IDefaultToolSetting } from '~types'

// 获取打开的链接
function getLinks(setting: IDefaultToolSetting, text: string): string[] {
  if (!setting || !text)
    return []

  const links = []
  if (setting.ahrefsKeywordGenerator.enable)
    links.push(`https://ahrefs.com/${setting.ahrefsKeywordGenerator.setting.platform}/?country=${setting.ahrefsKeywordGenerator.setting.area}&input=${text}`)
  if (setting.ahrefsKeywordDifficultyChecker.enable)
    links.push(`https://ahrefs.com/keyword-difficulty/?country=${setting.ahrefsKeywordDifficultyChecker.setting.area}&input=${text}`)

  return links
}

export default function Jumper() {
  const [toolSetting, setToolSetting] = useStorage(ToolSettingStorageKey, v => v === undefined ? DefaultToolSetting : v)
  const [jumperPosition, setJumperPosition] = useState({ top: 0, left: 0 })
  const [show, setShow] = useState(false)
  const { text, rects } = useTextSelection()

  /* 打开链接 */
  const openLinks = () => {
    const links = getLinks(toolSetting, text)
    links.forEach((link) => {
      window.open(link)
    })
  }
  // 点击右键菜单/快捷键触发时
  useMessage<string, string>(async ({ name }, res) => {
    if (['contextMenus', 'commands'].includes(name))
      openLinks()
  })

  /* 图标展示 */
  // 位置
  useEffect(() => {
    if (!text)
      return
    const lastRect = rects[rects.length - 1]
    setJumperPosition({ top: lastRect.top, left: lastRect.right + 25 })
  }, [text, rects])
  // 是否显示
  useEffect(() => {
    // 无选中文字时
    if (!text) {
      setShow(false)
      return
    }
    // 有开启的工具时
    for (const key in toolSetting) {
      if (toolSetting[key].enable) {
        setShow(true)
        return
      }
    }
  }, [text, toolSetting])

  return (
    <img
      className="ease-linear duration-75 hover:scale-110 hover:transition-transform cursor-pointer"
      onClick={openLinks}
      src={Logo}
      alt="Jumper"
      style={{
        position: 'fixed',
        top: jumperPosition.top,
        left: jumperPosition.left,
        width: '24px',
        height: '24px',
        display: show ? 'block' : 'none',
      }}
    />
  )
}
