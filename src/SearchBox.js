import react from 'react';


const SearchBox = ({onSearch})=>{
    return (
    <div> 
        <input className="pa3 ba b--green bg-lightest-blue" type= 'search' placeholder = 'search for a robot' onChange={onSearch}/>
    </div>
    );
}

export default SearchBox;