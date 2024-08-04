import "./ratingProgressBar.css"
import ProgressBar from "../../../progressBar/ProgressBar"

export default function RatingProgressBar() {
    return (
        <div className="ratingProgressBar">
            <div className="bar">
                <span>5 Star </span>
                <ProgressBar progress={60} />
                <span> 60% </span>
            </div>
            <div className="bar"><span>4 Star </span><ProgressBar progress={40} /> <span> 40% </span></div>
            <div className="bar"><span>3 Star </span><ProgressBar progress={30} /> <span> 30% </span></div>
            <div className="bar"><span>2 Star </span><ProgressBar progress={20} /> <span> 20% </span></div>
            <div className="bar"><span>1 Star </span><ProgressBar progress={10} /> <span> 10% </span></div>
        </div>
    )
}
