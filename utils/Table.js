import axios from "axios";
import { useEffect, useState } from "react";
import Coins from "./Coins";
import Navbar from "./Navbar";
import {useRouter} from 'next/router'




function Table () {
    
    const [coins, setCoins] = useState ([])

    const url='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false&locale=en'

    useEffect(() => {
        axios.get(url).then((response) => {
            setCoins(response.data)
        }).catch((error) =>{
            console.log(error)
        })
    }, [])

    return(
        <>
        <Navbar/>
        <Coins coins={coins}/>
        </>
    )

}

export default Table;