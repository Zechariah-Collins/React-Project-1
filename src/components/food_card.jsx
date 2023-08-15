
export default function Card(props) {
    return (
        <div className="card">
            <div className="food_item_container">
                <div className="food_name">{props.label} </div>
                <img 
                    className="food_image"
                    src={props.image} 
                    onClick={() => window.open(props.url)}
                    >    
                </img>
                <div className= "food_calories">
                    {props.totalTime ? `Total time: ${Math.floor(props.totalTime / 60)}
                     hours ${props.totalTime % 60} minutes` : `Total time: Unknown`}
                </div>
            </div>
        </div>
    )
}