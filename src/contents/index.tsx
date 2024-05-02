import type { PlasmoCSConfig } from 'plasmo'
// 样式
import cssText from 'data-text:~style.css'
// 组件
import Jumper from './components/Jumper'

export const config: PlasmoCSConfig = {
  matches: ['<all_urls>'],
  all_frames: true,
}

export function getStyle() {
  const style = document.createElement('style')
  style.textContent += cssText
  return style
}

/* 根组件 */
export default function Content() {
  return (
    <Jumper />
  )
}
