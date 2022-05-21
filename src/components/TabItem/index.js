import './index.css'

const TabItem = props => {
  const {eachImg, onThumbnailPress} = props
  const {imageUrl} = eachImg
  const onClickingThumbnail = () => {
    onThumbnailPress(imageUrl)
  }
  return (
    <li>
      <button
        type="button"
        className="thumbnail-btn"
        onClick={onClickingThumbnail}
      >
        <img src={imageUrl} alt="thumbnail" className="thumbnail-img" />
      </button>
    </li>
  )
}

export default TabItem
