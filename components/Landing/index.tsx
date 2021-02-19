// import { ILandingProps } from ".."
// import classes from "./style.module.scss"
// import Video from "./Video"
// import Description from "./Description"
// import Comparison from "./Comparison"
// import Instruction from "./Instruction"
// import ProductReviews from "./ProductReviews"
// import Order from "./Order"
import CompanyName from "./CompanyName"
import ProductImageBlock from "./ProductImageBlock"
import BackTimerFirstSection from "./BackTimerFirstSection"
import PhoneNumber from "./PhoneNumber"
// import SectionBuy from "./SectionBuy"
import classes from "./style.module.scss"
import data from "./data"
// import data from './eye'

// import { IPageData } from "../../interfaces/ISite"

export interface IColors {
  green: string
  grey: string
  grey1: string
  timerGray: string
  hr: string
  orange: string
  orange1: string
  textGreenColor: string
  blue: string
  starsColor: string
}

const colors: IColors = {
  green: "#58b958",
  grey: "#2f3339",
  grey1: "#f7f8f9",
  timerGray: "#EFF2F5",
  hr: "#DEDFE0",
  orange: "#FA9535",
  starsColor: "#FA9535",
  orange1: "#FF4E00",
  textGreenColor: "green",
  blue: "#36D0F8",
}

export default function Landing() {
  const {
    phoneNumber,
    companyName,
    names,
    mainImages,
    advantages,
    price,
    video,
    descriptionContainer,
    comparison,
    instruction,
    feedbacks,
    order,
  } = data

  function productImageBlock(nameId?: number, imgId?: number) {
    if (Array.isArray(mainImages) && Array.isArray(names)) {
      return (
        <ProductImageBlock
          name={names[nameId ?? 0]}
          img={mainImages[imgId ?? 0]}
          colors={colors}
        />
      )
    }
  }

  return (
    <div className={classes.main}>
      <PhoneNumber>{phoneNumber}</PhoneNumber>
      <CompanyName name={companyName} backgroundColor={colors.green} />
      {productImageBlock()}
      <BackTimerFirstSection colors={colors} price={price} advantages={advantages} />
      {/*<Video data={video} />
      <Description data={descriptionContainer} />
      <Comparison data={comparison} bacColor={colors.grey} buttonColor={colors.orange} />
      <Instruction data={instruction} />
      <ProductReviews
        data={feedbacks}
        green={colors.green}
        starsColor={colors.starsColor}
      />
      <Order data={order} bacColor={colors.grey} />
      <CompanyName name={companyName} backgroundColor={colors.green} />
      {productImageBlock(1)}
      <SectionBuy colors={colors} price={price} />
      <PhoneNumber>{phoneNumber}</PhoneNumber> */}
    </div>
  )
}

const last = <T,>(arr: T[]) => {
  return arr[arr.length - 1]
}

const l = last(["a", "b", "c"])
const l2 = last([1, "2", 3])
