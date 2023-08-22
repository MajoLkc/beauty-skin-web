import { Carousel, Image } from "antd"
import styled from "styled-components"

type Props = {
  images: { alt: string; source: any }[]
  autoplay?: boolean
  dots: boolean
}

const StyledCarousel = styled(Carousel)`
  border-radius: 20px;
  max-width: 500px;
  height: 400px;
  .slick-list {
    border-radius: 20px;
  }
`

const StyledImage = styled(Image)`
  border-radius: 20px;
  width: 100%;
`

export const ImageSlider: React.FC<Props> = ({ images, autoplay, dots }) => (
  <StyledCarousel dots={dots} autoplay={autoplay} effect="fade">
    {images.map((image, index) => (
      <StyledImage
        preview={false}
        key={`image-${index}`}
        alt={image.alt}
        src={image.source}
      />
    ))}
  </StyledCarousel>
)
