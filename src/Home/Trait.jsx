import chat from "../assets/images/icon-chat.png"
import money from "../assets/images/icon-money.png"
import security from "../assets/images/icon-security.png"
import Kakemono from './Kakemono';

function Trait() {
  const traits = [
    {
      "id": "0",
      "title": "You are our #1 priority",
      "icon": chat,
      "alt": "Chat icon with dots",
      "explanation": <> Need to talk to a representative? You can get in touch<br />through our 24/7 chat or through a phone call in less than 5<br />minutes. </>
    },
    {
      "id": "1",
      "title": "More savings means higher rates",
      "icon": money,
      "alt": "Bank note icon",
      "explanation": <>The more you save with us, the higher your interest rate will <br />be!</>
    },
    {
      "id": "2",
      "title": "Security you can trust",
      "icon": security,
      "alt": "Security icon represented with a badge",
      "explanation": <>We use top of the line encryption to make sure your data<br />and money is always safe. </>
    }
  ]
  return (
    <div className="traits">
      {traits.map((a) =>
        <div key={a.id} className="line-up">
          <Kakemono 
            title={a.title}
            icon={a.icon}
            alt={a.alt}
            explanation={a.explanation}
          />
        </div>)}
    </div>
  )
}

export default Trait