import "./productTable.css"

export default function ProductTable() {
    return (
        <div className="productTable">
            <table>
                <thead>
                    <tr>
                        <th>Brand</th>
                        <th>Color</th>
                        <th>Fit Type</th>
                        <th>Style</th>
                        <th>Neck Style</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Dennis Lingo</td>
                        <td>Dusty Green</td>
                        <td>Slim Fit</td>
                        <td>Shirt</td>
                        <td>Collared Neck</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
