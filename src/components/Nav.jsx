export default function Nav() {
  return (
    <nav>
      <div className="container nav-inner">
        <a href="#top" className="brand">
          <span className="brand-monogram">DSX</span>
          <span className="brand-text">
            <span className="brand-name">Ding Shixian</span>
            <span className="brand-sub">AI Product · Journal</span>
          </span>
        </a>
        <ul className="nav-links">
          <li><a href="#top" data-idx="✦">关于我</a></li>
          <li><a href="#education" data-idx="01">教育背景</a></li>
          <li><a href="#internship" data-idx="02">实习经历</a></li>
          <li><a href="#projects" data-idx="03">研究项目</a></li>
          <li><a href="#contact" data-idx="✉">联系方式</a></li>
        </ul>
      </div>
    </nav>
  )
}
