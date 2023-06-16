import React from 'react'
import ContentLoader from "react-content-loader"

const SkeletonPizzaBlock = () => (
    <ContentLoader
        speed={2}
        width={260}
        height={466}
        viewBox="0 0 280 466"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <circle cx="130" cy="130" r="130" />
        <rect x="0" y="282" rx="3" ry="3" width="280" height="27" />
        <rect x="0" y="316" rx="0" ry="0" width="280" height="76" />
        <rect x="0" y="400" rx="0" ry="0" width="90" height="45" />
        <rect x="158" y="400" rx="0" ry="0" width="152" height="45" />
    </ContentLoader>
)

export default SkeletonPizzaBlock
