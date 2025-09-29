import type { Images } from "../../types/types";

type SearchSectionProps ={
    data:Images[]
}
const SearchSection = ({data}:SearchSectionProps)=>{
return(
    <div className="flex justify-center">
    {(data? data : []).map((e)=>{
        return(
            <div key={e.imageId}>
            {e.imageId}
            </div>
        )
    })}
    </div>
)
}

export default SearchSection;