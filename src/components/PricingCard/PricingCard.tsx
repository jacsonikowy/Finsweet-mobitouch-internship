import React from 'react'
import './PricingCard.scss'

import TextBlock from '../../components/TextBlock/TextBlock'
import Button from '../../components/Button/Button'

import ActivePointer from '../../assets/icons/activePointer.svg'
import UnactivePointer from '../../assets/icons/unactivePointer.svg'

export interface LinksProps {
    name: string,
    active?: boolean
}

export type ArrayOfLinks = Array<LinksProps>

export interface PricingCardProps {
    price: string,
    content: string,
    backgroundColor: string,
    textColor?: string,
    productName: string,
    productDescription: string,
    ArrayOfLinks: ArrayOfLinks,
    buttonName: string,
    buttonVariant: "primary" | "secondary"
}


const PricingCard: React.FC<PricingCardProps> = ({price, content, backgroundColor, textColor, productName, productDescription, ArrayOfLinks, buttonName, buttonVariant}) => {
    return (
        <div style={{backgroundColor: backgroundColor, color: textColor}} className="pricingcard">
            <div className="pricingcard-title">
                <h3>{price}</h3>
                <p className='body1'>{content}</p>
            </div>
            <TextBlock className="" level='h6' headingText={productName} description={productDescription} />
            <div className='pricingcard-links'>
            {ArrayOfLinks.map((link: LinksProps) => {
                return (
                    <span>
                        {
                            link.active ? <><img src={ActivePointer} alt="active pointer"/><p>{link.name}</p></> : <><img className='unactive' src={UnactivePointer} alt="unactive pointer"/><p>{link.name}</p></>
                        }
                    </span>
                )
            })}
            </div>
            <div className="pricingcard-buttondiv">
                <Button text={buttonName} variant={buttonVariant}/>
            </div>
        </div>
    )
}

export default PricingCard