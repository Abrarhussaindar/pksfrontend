import "./productImage.css"

export default function ProductImage({image}) {
    console.log("img", image)
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
