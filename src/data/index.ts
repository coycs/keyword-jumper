/* 工具 */
// 工具存储key
export const ToolSettingStorageKey = 'KEYWORD_JUMPER_TOOL_SETTING'
// 默认工具配置
export const DefaultToolSetting = {
  ahrefsKeywordGenerator: {
    enable: true,
    setting: {
      platform: 'keyword-generator',
      area: 'us',
    },
  },
  ahrefsKeywordDifficultyChecker: {
    enable: true,
    setting: {
      area: 'us',
    },
  },
}

/* 数据 */
export { default as AhrefsAreaList } from './AhrefsAreaList'
export const AhrefsPlatformList = [
  {
    key: 'keyword-generator',
    name: 'Google',
  },
  {
    key: 'bing-keyword-tool',
    name: 'Bing',
  },
  {
    key: 'youtube-keyword-tool',
    name: 'YouTube',
  },
  {
    key: 'amazon-keyword-tool',
    name: 'Amazon',
  },
]
