import './AboutCard.css'
export const AboutCard = ({img,desc}) => {
  return <div className='about__card'>
      <img src={img} alt=""/>
      <p className="about__card-desc">{desc}</p>
      <div></div>
  </div>
}