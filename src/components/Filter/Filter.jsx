import "./Filter.css";
import { useData } from "../../context/data-context";


export const Filter=({closeFilter})=>{
    const {filterState,filterDispatch}= useData();
return (
    <div className="modal sort-modal flex-col">
        <header className="modal-header flex-row">
            <h4 className="modal-text sort-modal-heading">Sort By Date</h4>
            <span onClick={closeFilter} className="modal-text cross-icon"><i class="fas fa-times icon-md"></i></span>
        </header>
        <hr class="horizontal-line" />
        <section className="sort-types flex-col">
            <div className="sortBy flex-row">
                <input type="radio" name="sort" 
                checked={filterState.filter.sort==="latest"?true:false}
                onChange={()=>filterDispatch({type:"FILTER", payload:["sort","latest"]})}/>
                <p className="modal-text">Latest Note</p>
            </div>
            <div className="sortBy flex-row">
                <input type="radio" name="sort" 
                checked={filterState.filter.sort==="oldest"?true:false}
                onChange={()=>filterDispatch({type:"FILTER", payload:["sort","oldest"]})}/>
                <p className="modal-text">Oldest Note</p>
                <p className="modal-text clear" onClick={()=>filterDispatch({type:"CLEAR"})}>Clear</p>
            </div>
        </section>
    </div>
)
}

