import "./Skeleton.css"

export interface skeletonProps {
    count: number
}

const Skeleton = (props: skeletonProps) => {
    const { count } = props
    return <div>
        {Array.from({ length: count || 1 }, (_, indx) =>
            (<div role="status" className="skeleton" key={"skeleton" + indx}></div>))}
    </div>
}

export default Skeleton