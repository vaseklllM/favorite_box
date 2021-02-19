import classes from "./style.module.scss"
import { Span24, Span14 } from "../../Text"
import { BackTimer, Price } from "../PriceAndTimer"
import { IColors } from ".."
import venzel from "../assets/venzel.png"
import { IPrice } from "../../../interfaces/ISite"
import Inputs from "./Inputs"
import RemainingForThePromotionRow from "../RemainingForThePromotionRow"

interface ISectionBuyProps {
  colors: IColors
  price: IPrice
}

export default function SectionBuy(props: ISectionBuyProps) {
  const { colors, price } = props
  return (
    <section id='buy' className={classes.SectionBuy}>
      <Span24>
        Оставьте <b>заявку</b>
      </Span24>
      <Span14 className={classes.subtitle}>
        Наши менеджеры свяжутся с вами для консультации и помогут сделать заказ
      </Span14>
      <img className={classes.venzel} src={venzel} alt='' />

      <div className={classes.time_and_price}>
        <BackTimer greyColor={colors.grey1} greenColor={colors.green} />
        <div className={classes.hr} style={{ backgroundColor: colors.hr }} />
        <Price price={price} colors={colors} />
      </div>
      <Inputs />
      <RemainingForThePromotionRow colors={colors} />
      {/* <style global jsx>
        {`
          html {
            scroll-behavior: smooth;
          }
        `}
      </style> */}
    </section>
  )
}
