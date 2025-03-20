import React, {useState} from 'react'
import './index.css'

const Feedback = ({resources}) => {
  const {emojis, loveEmojiUrl} = resources
  const [isFeedbackGiven, setIsFeedbackGiven] = useState(false)

  const onFeedbackClick = () => {
    setIsFeedbackGiven(true)
  }

  return (
    <div className="feedback-app">
      {!isFeedbackGiven ? (
        <div className="feedback-question">
          <h1>How satisfied are you with our customer support performance</h1>
          <ul className="emoji-list">
            {emojis.map(emoji => (
              <li key={emoji.id}>
                <button
                  className="emoji-btn"
                  type="button"
                  onClick={onFeedbackClick}
                >
                  <img
                    src={emoji.imageUrl}
                    alt={emoji.name}
                    className="emoji"
                  />
                  <p>{emoji.name}</p>
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="thank-you-screen">
          <img
            src={loveEmojiUrl}
            alt="love emoji"
            className="thank-you-emoji"
          />
          <h1>Thank You!</h1>
          <p>We will use your feedback to improve our customer support.</p>
        </div>
      )}
    </div>
  )
}

export default Feedback
