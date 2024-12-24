import Rating from '@mui/material/Rating';
import Button from 'react-bootstrap/Button';
const FilterMovies=({setSearch,setNjoum,njoum,search})=>{
    const handleReset=()=>{
        setSearch('')
        setNjoum(0)
    }
    return(
        <div>
            <input value={search} type="texh" onChange={(e)=> setSearch(e.target.value)}/>
            <Rating style={{marginTop : "5px"}} value={njoum} onChange={(e)=> setNjoum(e.target.value)}/>  
            <Button variant='warning' onClick={handleReset}>reset</Button>
        </div>
    )
}

export default FilterMovies