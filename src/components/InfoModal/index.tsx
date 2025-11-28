import { Modal } from "antd"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import config from "../../config.json"
import { transformDate } from "../../utils/dataTransform"
import { SmallTitle } from "../Titles"
import { Text } from "../Text"
import * as routes from "../../routes"

const { isModalDisplayed, modalExpirationDate } = config

const MODAL_DATA = [
  {
    text: "Od 1.1.2026 aktualizujem svoj cenník.",
    link: routes.PRICE_LIST,
    linkText: "cenník",
  },
  {
    text: "Novinka v mojom salóne, kozmetika ESTHEMAX.",
    link: `${routes.SERVICES}#esthemax`,
    linkText: "ESTHEMAX",
  },
]

export const InfoModal: React.FC = () => {
  const [isModalOpened, setIsModalOpened] = useState(false)

  const handleOk = () => {
    setIsModalOpened(false)
  }

  const mappedModalData = MODAL_DATA.map((item, index) => {
    const { text, link, linkText } = item
    const splittedText = text.split(linkText)
    const [firstTextPart, secondTextPart] = splittedText
    return (
      <p key={`modal-paragraph-${index}`}>
        <Text>
          {firstTextPart}
          <NavLink to={link} onClick={handleOk}>
            {linkText}
          </NavLink>
          {secondTextPart}
        </Text>
      </p>
    )
  })

  useEffect(() => {
    const currentDate = new Date()
    const expirationDate = transformDate(modalExpirationDate)

    if (currentDate < expirationDate || isModalDisplayed) {
      setIsModalOpened(true)
    }
  }, [])

  return (
    <Modal
      title={<SmallTitle text="Novinky" />}
      open={isModalOpened}
      closable
      onCancel={handleOk}
      footer={null}
    >
      {mappedModalData}
    </Modal>
  )
}
