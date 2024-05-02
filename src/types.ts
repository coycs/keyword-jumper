// 默认工具设置
export interface IDefaultToolSetting {
  ahrefsKeywordGenerator: {
    enable: boolean
    setting: {
      platform: string
      area: string
    }
  }
  ahrefsKeywordDifficultyChecker: {
    enable: boolean
    setting: {
      area: string
    }
  }
}
