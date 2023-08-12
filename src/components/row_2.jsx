

export default function Search (props) {
    
    return (
        <div className="search_container">
            <h3 className="search_heading"> Search for a Recipe!</h3>
            <input className="search_box"
                type="text" 
                placeholder="Search"
                value={props.query}
                onChange={(e) => props.setQuery(e.target.value)}
             />
            
           
        </div>
)}