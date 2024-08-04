import "./brandSection.css"

export default function BrandSection() {
    // const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div className="brandSection">
            <div className="heading">
                <img src="/assets/images/products/brand.png" alt="" />
                <span>Dennis Lingo</span>
            </div>
            <div className="container">
                <div className="left">
                    <ul>
                        <li><span><img src="/assets/images/products/tick.png" alt="" /></span>84% positive ratings from 100K+ customers</li>
                        <li><span><img src="/assets/images/products/tick.png" alt="" /></span>100K+ recent orders from this brand</li>
                        <li><span><img src="/assets/images/products/tick.png" alt="" /></span>8+ years on Amazon</li>
                    </ul>
                </div>
                <div className="right">
                    <h4>Highly rated by customers for</h4>
                    <div className="rate">
                        <div className="inner">
                            <img src="/assets/images/products/thumb.png" alt="" />
                            <span>looks good</span>
                        </div>
                        <div className="inner">
                            <img src="/assets/images/products/thumb.png" alt="" />
                            <span>value for money</span>
                        </div>
                        <div className="inner">
                            <img src="/assets/images/products/thumb.png" alt="" />
                            <span>quality material</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
