import CardMovie from "./CardMovie"

const ListMovie=({movies,search,njoum})=>{
    var x =  movies.filter((el,i,t)=> el.title.toUpperCase().includes(search.toUpperCase()) && el.rating >= njoum)
    return(
        <div className="centerDiv">
            {
                x.length == 0 ? <h1>Not Found</h1> : x.map((el,i,t)=> <CardMovie el={el}/>) 
                // .map((el,i,t)=> <CardMovie el={el}/>)
            }
        </div>
    )
}

export default ListMovie