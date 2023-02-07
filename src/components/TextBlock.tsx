import React from 'react'

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    headingLevel: React.ElementType
}

const TsHeading: React.FC<HeadingProps> = ({
    headingLevel,
    children,
    className,
}) => {
    const Heading = headingLevel
    return <Heading className={className}>{children}</Heading>
}


const TextBlock: React.FC<{ headingText: string; description: string}> = ({
    headingText,
    description,
}) => (
    <div>
            <TsHeading headingLevel="h1"></TsHeading>
            <p>{description}</p>
    </div>
)

export default TextBlock