// 组件
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
// 样式
import '../style.css'

/* 根组件 */
export default function IndexPopup() {
  return (
    <div className="popup w-[400px] max-h-[500px] overflow-hidden flex flex-col">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}
