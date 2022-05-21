import './index.css'

const TabsList = props => {
  const {eachTab, changeActiveTab, isActive} = props
  const activeClassName = isActive ? 'active' : ''
  const {displayText, tabId} = eachTab
  const onClickingTab = () => {
    changeActiveTab(tabId)
  }
  return (
    <li>
      <button
        type="button"
        className={`tab-button ${activeClassName}`}
        onClick={onClickingTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabsList
