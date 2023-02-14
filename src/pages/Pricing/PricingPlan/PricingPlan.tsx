import React from 'react'
import './PricingPlan.scss'

import TextBlock from '../../../components/TextBlock/TextBlock'
import PricingCard, { PricingCardProps, ArrayOfLinks } from '../../../components/PricingCard/PricingCard'

const ArrayLinks: ArrayOfLinks = [
    {
        name: 'All limited links',
        active: true,
    },
    {
        name: 'Own analytics platform',
        active: true,
    },
    {
        name: 'Chat support',
        active: true,
    },
    {
        name: 'Optimize hashtags'
    },
    {
        name: 'Unlimited users'
    },
]

const SecondArrayLinks: ArrayOfLinks = [
    {
        name: 'All limited links',
        active: true,
    },
    {
        name: 'Own analytics platform',
        active: true,
    },
    {
        name: 'Chat support',
        active: true,
    },
    {
        name: 'Optimize hashtags',
        active: true,
    },
    {
        name: 'Unlimited users',
        active: true,
    },
]

const ThirdArrayLinks: ArrayOfLinks = [
    {
        name: 'All limited links',
        active: true,
    },
    {
        name: 'Own analytics platform',
        active: true,
    },
    {
        name: 'Chat support',
        active: true,
    },
    {
        name: 'Optimize hashtags',
        active: true,
    },
    {
        name: 'Unlimited users',
        active: true,
    },
    {
        name: 'Assist and help',
        active: true,
    }
]

const ExamplePricingCard: PricingCardProps = {
    price: '$299',
    content: 'Per Design',
    backgroundColor: '#F4F6FC',
    productName: 'Landing Page',
    productDescription: 'When you’re ready to go beyond prototyping in Figma',
    ArrayOfLinks: ArrayLinks,
    buttonName: 'Get Started',
    buttonVariant: "secondary"
}

const SecondPricingCard: PricingCardProps = {
    price: '$399',
    content: 'Multi Design',
    backgroundColor: '#1C1E53',
    textColor: '#FFFFFF',
    productName: 'Website Page',
    productDescription: 'When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help.',
    ArrayOfLinks: SecondArrayLinks,
    buttonName: 'Get Started',
    buttonVariant: 'primary'
}

const ThirdPricingCard: PricingCardProps = {
    price: '$499 +',
    content: 'Per Design',
    backgroundColor: '#F4F6FC',
    productName: 'Complex Project',
    productDescription: 'When you’re ready to go beyond prototyping in Figma',
    ArrayOfLinks: ThirdArrayLinks,
    buttonName: 'Contact Us',
    buttonVariant: "secondary"
}



const pricingCards = [
    ExamplePricingCard,
    SecondPricingCard,
    ThirdPricingCard,
]

const PricingPlan: React.FC = () => {
    return (
        <div className="pricingplan">
            <TextBlock className="pricingplan-textblock" level='h2' headingText='Our Pricing Plans' description='When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life — without coding them.' />
            <div className="pricingplan-cards">
                {
                    pricingCards.map(pricingCard => {
                        return <PricingCard price={pricingCard.price} content={pricingCard.content} backgroundColor={pricingCard.backgroundColor} textColor={pricingCard.textColor} productName={pricingCard.productName} productDescription={pricingCard.productDescription} ArrayOfLinks={pricingCard.ArrayOfLinks} buttonName={pricingCard.buttonName} buttonVariant={pricingCard.buttonVariant
                        } />
                    })
                }
            </div>
        </div>
    )
}

export default PricingPlan