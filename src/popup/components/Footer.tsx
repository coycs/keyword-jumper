/**
 * @author coycs
 * @description: popup页脚
 * @date 2024-04-27 16:43
 */

const authorUrl = 'https://twitter.com/icoycs'
const tutorialUrl = 'https://keywordjumper.coycs.com'

export default function Footer() {
  return (
    <div className="popup-footer flex flex-row items-center justify-between py-2 px-4">
      <span className="footer-left">
        <a href={authorUrl} target="_blank" className="font-medium text-gray-400 hover:text-green-600 hover:underline inline-block mr-2.5">Author</a>
        <a href={tutorialUrl} target="_blank" className="font-medium text-gray-400 hover:text-green-600 hover:underline inline-block mr-2.5">Tutorial</a>
      </span>
      <span className="footer-right">
        <span className="font-medium text-gray-400">V0.1.0</span>
      </span>
    </div>
  )
}
