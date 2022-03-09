import { ImagePreview } from "vant"

export const showImg = (
  image: Array<string>,
  option: { startPosition: number }
) => {
 ImagePreview({
  images: image,
  startPosition: option ? option.startPosition || 0 : 0
 })
}
