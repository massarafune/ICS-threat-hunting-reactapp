import axios from "axios";
import {useEffect, useState} from "react";
import textFieldClasses from "@material-ui/core/TextField/textFieldClasses";
import {v4 as uuid} from "uuid";


const host = 'http://localhost:9200/';
const index = 'attack';

const attacks = [
    {
        id: uuid(),
        timestamp: '2021/05/01/10:00:000',
        SrcIP: '192.168.1.121',
        DestIP: '192.168.1.112',
        Tactics: 'Discovery',
        Technique: 'Remote System Discovery',
        log: '202105011000.pcap'
    },
    {
        id: uuid(),
        timestamp: '2021/05/02/10:00:000',
        SrcIP: '192.168.1.121',
        DestIP: '192.168.1.112',
        Tactics: 'Discovery',
        Technique: 'Remote System Discovery',
        log: '202105021000.pcap'
    },
    {
        id: uuid(),
        timestamp: '2021/05/03/10:00:000',
        SrcIP: '192.168.1.121',
        DestIP: '192.168.1.112',
        Tactics: 'Discovery',
        Technique: 'Remote System Information Discovery',
        log: '202105031000.pcap'
    },
    {
        id: uuid(),
        timestamp: '2021/05/04/10:00:000',
        SrcIP: '192.168.1.121',
        DestIP: '192.168.1.112',
        Tactics: 'Impair Process Control',
        Technique: 'Modify Parameter',
        log: '202105041000.pcap'
    }
];

const getLatestAttackAPI = () => {
    const url = `${host}${index}/_search`
    console.log(url)
    return axios.get(url).then((res) => {
        console.log(res);
        const attack = res.hits.hits
        console.log(attack);

        // return {
        //  'id': attack.id,
        //  'timestamp': res.data.timestamp,
        //  'SrcIP': res.data.srcIP,
        //  'DestIP': res.data.destIP,
        //  'Tactics': res.data.tactics,
        //  'Technique': res.data.technique,
        //  'log': res.data.filename
        // };
        return attack;
    })
    // return attacks;
}


export default function useLatestAttackAPI(){
    const [list, setList] = useState([]);
    const [err, setErr] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        setLoading(true);
        getLatestAttackAPI().then((list)=>{
            console.log(list)
            let result = JSON.parse(list.data);
            setList(result);
            setLoading(false);
        }).catch((e)=>setErr(e))
        // setLoading(false)
        // setList(getLatestAttackAPI());
    },[]);
    return {
        list,
        err,
        loading
    }
}