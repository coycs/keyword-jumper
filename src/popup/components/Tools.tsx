/**
 * @author coycs
 * @description: 关键词工具设置
 * @date 2024-04-27 16:45
 */

import React, { useEffect, useState } from 'react'
import { useStorage } from '@plasmohq/storage/hook'
// 图标
import AhrefsIcon from 'data-base64:assets/ahrefs.svg'
// 数据
import { AhrefsAreaList, AhrefsPlatformList, DefaultToolSetting, ToolSettingStorageKey } from '~data'
// 组件
import Accordion from '~components/Accordion'
import Switch from '~components/Switch'
import Select from '~components/Select'

/* 存储 */
// const storage = new Storage()
// storage.watch({
//   [ToolSettingStorageKey]: ({ newValue }) => {
//     // console.log(newValue)
//   },
// })

/* 工具配置 */
function AhrefsKeywordGeneratorContent({ setting, updater }) {
  return (
    <>
      <Select
        placeholder="Select Platform"
        options={AhrefsPlatformList}
        value={setting.platform}
        changeHandler={(value) => {
          updater('ahrefsKeywordGenerator', 'platform', value)
        }}
      />
      <Select
        placeholder="Select Area"
        options={AhrefsAreaList}
        value={setting.area}
        changeHandler={(value) => {
          updater('ahrefsKeywordGenerator', 'area', value)
        }}
      />
    </>
  )
}
function AhrefsKeywordDifficultyCheckerContent({ setting, updater }) {
  return (
    <>
      <Select
        placeholder="Select Area"
        options={AhrefsAreaList}
        value={setting.area}
        changeHandler={(value) => {
          updater('ahrefsKeywordDifficultyChecker', 'area', value)
        }}
      />
    </>
  )
}

/* 根组件 */
export default function Tools() {
  /* 存储 */
  const [toolSetting, setToolSetting] = useStorage(ToolSettingStorageKey, v => v === undefined ? DefaultToolSetting : v)
  // const [toolSetting, setToolSetting] = useStorage(ToolSettingStorageKey, v => DefaultToolSetting)
  // 更新开启状态
  function updateToolSettingEnable(key: string, enable: boolean) {
    setToolSetting({
      ...toolSetting,
      [key]: {
        ...toolSetting[key],
        enable,
      },
    })
  }
  // 更新下拉框选择
  function updateToolSettingSelect(toolKey: string, settingKey: string, settingValue: any) {
    setToolSetting({
      ...toolSetting,
      [toolKey]: {
        ...toolSetting[toolKey],
        setting: {
          ...toolSetting[toolKey].setting,
          [settingKey]: settingValue,
        },
      },
    })
  }

  /* 手风琴 */
  const itemList = [
    {
      key: 'ahrefsKeywordGenerator',
      icon: AhrefsIcon,
      title: 'Ahrefs Keyword Generator',
      content: <AhrefsKeywordGeneratorContent setting={toolSetting.ahrefsKeywordGenerator.setting} updater={updateToolSettingSelect} />,
    },
    {
      key: 'ahrefsKeywordDifficultyChecker',
      icon: AhrefsIcon,
      title: 'Ahrefs Keyword Difficulty Checker',
      content: <AhrefsKeywordDifficultyCheckerContent setting={toolSetting.ahrefsKeywordDifficultyChecker.setting} updater={updateToolSettingSelect} />,
    },
  ]
  const items = itemList.map((item) => {
    return {
      key: item.key,
      icon: item.icon,
      title: item.title,
      // 切换是否显示
      trigger: <Switch
        checked={toolSetting[item.key].enable}
        clickHandler={() => {
          updateToolSettingEnable(item.key, !toolSetting[item.key].enable)
        }}
               />,
      content: item.content,
    }
  })
  // 当前手风琴展开项
  const accordionValue = Object.keys(toolSetting).map(key => ({
    key,
    enable: toolSetting[key].enable,
  })).filter(item => item.enable).map(item => item.key)

  return (
    <Accordion items={items} value={accordionValue} />
  )
}
