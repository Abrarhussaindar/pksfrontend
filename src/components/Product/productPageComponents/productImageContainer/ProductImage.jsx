import "./productImage.scss"

export default function ProductImage({image}) {
    
    return (
        <>
        
            <div className="otherImageContainer">
                <img src={image} className="active" alt="" />
                <img src={image} alt="" />
                <img src={image} alt="" />
                <img src={image} alt="" />
            </div>
            <div className="productImageContainer">
                <img src={image} alt="" />
            </div>
        </>
    )
}
