import type { Images } from "../../types/types";

type SearchSectionProps ={
    data:Images[]
}
const SearchSection = ({data}:SearchSectionProps)=>{
return(
    <div className="flex justify-center">
    {(data? data : []).map((e)=>{
        return(
            <>
            {e}
            </>
        )
    })}
    </div>
)
}

export default SearchSection;