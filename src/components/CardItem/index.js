import './index.css'

const TechnologyCard = props => {
  const {TechnologyData} = props
  const {title, description, imgUrl, className, id} = TechnologyData
  const image = `image image-${id}`
  return (
    <li className={className}>
      <h1 className="technology">{title}</h1>
      <p className="tech-Description">{description}</p>
      <img src={imgUrl} className={image} alt={title} />
    </li>
  )
}

export default TechnologyCard
