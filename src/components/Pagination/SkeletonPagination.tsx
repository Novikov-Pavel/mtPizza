import React from 'react'
import ContentLoader from "react-content-loader"

const SkeletonPagination: React.FC = () => (
    <ContentLoader
        speed={2}
        width={260}
        height={40}
        viewBox="0 0 260 40"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="0" y="0" rx="3" ry="3" width="260" height="40" />
    </ContentLoader>
)

export default SkeletonPagination
