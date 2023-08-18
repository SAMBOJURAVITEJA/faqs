import './index.css'
import FaqItem from '../FaqItem'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="bg-container">
      <ul className="card-container">
        <h1>FAQs</h1>
        {faqsList.map(each => (
          <FaqItem key={each.id} each={each} />
        ))}
      </ul>
    </div>
  )
}
export default Faqs
