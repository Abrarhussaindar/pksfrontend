import "./ProductDetails.css"
import ProductRating from '../productRating/ProductRating'

export default function ProductDetails() {
    return (
        <div className="productDetailsSection">
            <h4>Product details</h4>
            <table>
                <tbody>
                    <tr>
                        <th>Product Dimensions<span className="tspan">:</span></th>
                        <td>25 x 20 x 4.5 cm; 500 Grams</td>
                    </tr>
                    <tr>
                        <th>Date First Available<span className="tspan">:</span></th>
                        <td>24 October 2018</td>
                    </tr>
                    <tr>
                        <th>Manufacturer<span className="tspan">:</span> </th>
                        <td>Swastik Creation</td>
                    </tr>
                    <tr>
                        <th>ASIN<span className="tspan">:</span> </th>
                        <td>B07H35HWDX</td>
                    </tr>
                    <tr>
                        <th>Item model number<span className="tspan">:</span></th>
                        <td>C301</td>
                    </tr>
                    <tr>
                        <th>Country of Origin<span className="tspan">:</span></th>
                        <td>India</td>
                    </tr>
                    <tr>
                        <th>Department<span className="tspan">:</span> </th>
                        <td>Men</td>
                    </tr>
                    <tr>
                        <th>Manufacturer<span className="tspan">:</span> </th><td>Swastik Creation, Swastik Creation -B-21, Bharat Ind. Estate, Sewree (w) ,Mumbai-15, Email - dennislingoshirts@gmail.com, Phone No. 022-22010742</td>
                    </tr>
                    <tr>
                        <th>Packer<span className="tspan">:</span> </th>
                        <td>Swastik Creation -B-21, Bharat Ind. Estate, Sewree (w) ,Mumbai-15, Email - dennislingoshirts@gmail.com, Phone No. 022-22010742</td>
                    </tr>
                    <tr>
                        <th>Item Weight<span className="tspan">:</span></th>
                        <td>500 g</td>
                    </tr>
                    <tr>
                        <th>Item Dimensions LxWxH<span className="tspan">:</span></th>
                        <td>25 x 20 x 4.5 Centimeters</td>
                    </tr>
                    <tr>
                        <th>Net Quantity<span className="tspan">:</span></th>
                        <td>1 count</td>
                    </tr>
                    <tr>
                        <th>Included Components<span className="tspan">:</span></th>
                        <td>Casual Shirt</td>
                    </tr>
                    <tr>
                        <th>Generic Name<span className="tspan">:</span></th>
                        <td>Casual Shirts</td>
                    </tr>
                    <tr>
                        <th>Best Sellers Rank<span className="tspan">:</span></th>
                        <td>#5 in Clothing & Accessories </td>
                    </tr>
                    <tr>
                        <th>Customer Reviews<span className="tspan">:</span></th>
                        <td>
                            <ProductRating />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
