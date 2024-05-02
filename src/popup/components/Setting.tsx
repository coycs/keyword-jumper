/**
 * @author coycs
 * @description: 设置
 * @date 2024-04-27 16:45
 */

import { Storage } from '@plasmohq/storage'
// 组件

/* 存储 */
const storage = new Storage()
const StorageKey = 'KEYWORD_TOOL_JUMPER_RULES' // 存储key
storage.watch({
  [StorageKey]: ({ newValue }) => {
    console.log(newValue)
  },
})

export default function Setting() {
  return <div>Setting</div>
}
