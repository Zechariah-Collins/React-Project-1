
export default function Search () {
    return (
        <div className="search_container">
            <h3> Search for a Recipe!</h3>
            <input type="text" placeholder="Search" />
            <button>Search</button>
            <div className="food_item_container">
                <div className="food_name"> </div>
                <div className="food_image"> </div>
                <div className="food_calories"> </div>
            </div>
        </div>
)}