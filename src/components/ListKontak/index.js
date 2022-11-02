import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getListKontak } from "../../actions/kontakAction"
import kontak from "../../reducers/kontak"
import Dashboard from "../Dashboard"

const ListKontak = () =>{
    const {getListKontakResult,getListKontakLoading,getListKontakError} = useSelector((state) => state.KontakReducer)

    const dispatch = useDispatch()

 
    useEffect(() =>{
        //panggil action getListKontak
        console.log("1. use effect component did mount");
        dispatch(getListKontak())

    },[dispatch])

    return(
        // <Dashboard/>

        <div style={{ padding:'50px' }}>
            <h2>List Contact</h2>
            <hr/>
            {getListKontakResult ? (
                getListKontakResult.map((kontak)=>{
                    return(
                        <p key={kontak.id}>{kontak.nama} - {kontak.nohp}</p>

                    )
                })
            ) : getListKontakLoading ? (
                <p>Loading</p>
            ) : (
                <p>{getListKontakError ? getListKontakError : "Data Kosong"}</p>
            )}
        
        </div>
    )
}

export default ListKontak