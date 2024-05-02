/**
 * @author coycs
 * @description: popup页眉
 * @date 2024-04-27 16:43
 */

// 图片
import LogoImg from 'data-base64:assets/logo.png'
import GithubIcon from 'data-base64:assets/github.svg'
import RedditIcon from 'data-base64:assets/reddit.svg'

const websiteUrl = 'https://keywordjumper.coycs.com'
const githubUrl = 'https://github.com/coycs/keyword-jumper'
const redditUrl = 'https://www.reddit.com/r/keyword_jumper/'

export default function Header() {
  return (
    <div className="popup-header flex flex-row items-center justify-between px-2.5 py-2 bg-green-500">
      <div className="header-account flex flex-row items-center">
        <img src={LogoImg} className="w-11 h-11" />
        <a href={websiteUrl} target="_blank" className="text-base text-white font-bold cursor-pointer hover:underline">Keyword Jumper</a>
      </div>
      <div className="header-tools flex flex-row items-center gap-2">
        <a href={githubUrl} target="_blank" className="cursor-pointer">
          <img src={GithubIcon} className="w-6 h-6" />
        </a>
        <a href={redditUrl} target="_blank" className="cursor-pointer">
          <img src={RedditIcon} className="w-6 h-6" />
        </a>
      </div>
    </div>
  )
}
