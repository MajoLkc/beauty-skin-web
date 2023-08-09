import { DocumentHead } from "../../components/DocumentHead"
import { Title } from "../../components/Titles"

type Props = {
  nameOfPage: string
  isOpening?: true
}

export const PageName: React.FC<Props> = ({ nameOfPage, isOpening }) =>
  isOpening ? (
    <>
      <DocumentHead />
      <Title text={nameOfPage} />
    </>
  ) : (
    <>
      <DocumentHead page={nameOfPage} />
      <Title text={nameOfPage} />
    </>
  )
