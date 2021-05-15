import axios from "axios";
import {useEffect, useState} from "react";

const host = 'http://localhost:9200/';
const index = 'mitre';
const tactics = {
    'Initial Access': 'initial-access-ics',
    'Execution': 'execution-ics',
    'Persistence': 'persistence-ics',
    'Privilege Escalation': 'privilege-escalation-ics',
    'Evasion': 'evasion-ics',
    'Discovery': 'discovery-ics',
    'Lateral Movement': 'lateral-movement-ics',
    'Collection': 'collection-ics',
    'Inhibit Response Function': 'inhibit-response-function',
    'Impair Process Control': 'impair-process-control',
    'Impact': 'impact-ics'
}
const ModifyParameter = {
    "type": "attack-pattern",
    "name": "Modify Parameter",
    "description": "Adversaries may modify parameters used to instruct industrial control system devices. These devices operate via programs that dictate how and when to perform actions based on such parameters. Such parameters can determine the extent to which an action is performed and may specify additional options. For example, a program on a control system device dictating motor processes may take a parameter defining the total number of seconds to run that motor.    \n\nAn adversary can potentially modify these parameters to produce an outcome outside of what was intended by the operators. By modifying system and process critical parameters, the adversary may cause Impact to equipment and/or control processes. Modified parameters may be turned into dangerous, out-of-bounds, or unexpected values from typical operations. For example, specifying that a process run for more or less time than it should, or dictating an unusually high, low, or invalid value as a parameter. \n\nIn the Maroochy Attack, Vitek Boden gained remote computer access to the control system and altered data so that whatever function should have occurred at affected pumping stations did not occur or occurred in a different way. The software program installed in the laptop was one developed by Hunter Watertech for its use in changing configurations in the PDS computers. This ultimately led to 800,000 liters of raw sewage being spilled out into the community. (Citation: Maroochy - MITRE - 200808)",
    "kill_chain_phases": [
        {
            "kill_chain_name": "mitre-ics-attack",
            "phase_name": "impair-process-control"
        }
    ],
    "x_mitre_platforms": [
        "Control Server",
        "Field Controller/RTU/PLC/IED",
        "Safety Instrumented System/Protection Relay",
        "Human-Machine Interface"
    ],
    "external_references": [
        {
            "url": "https://collaborate.mitre.org/attackics/index.php/Technique/T0836",
            "source_name": "mitre-ics-attack",
            "external_id": "T0836"
        },
        {
            "description": "Marshall Abrams. (2008, July 23). Malicious Control System Cyber Security Attack Case Study\u2013 Maroochy Water Services, Australia. Retrieved March 27, 2018.",
            "source_name": "Maroochy - MITRE - 200808",
            "url": "https://www.mitre.org/sites/default/files/pdf/08%201145.pdf"
        }
    ],
    "object_marking_refs": [
        "marking-definition--fa42a846-8d90-4e51-bc29-71d5b4802168"
    ],
    "created": "2020-05-21T17:43:26.506Z",
    "created_by_ref": "identity--c78cb6e5-0c4b-4611-8297-d1b8b55e40b5",
    "x_mitre_data_sources": [
        "Sequential event recorder",
        "Network protocol analysis",
        "Packet capture",
        "Application logs"
    ],
    "modified": "2020-05-21T17:43:26.506Z",
    "id": "attack-pattern--097924ce-a9a9-4039-8591-e0deedfb8722"
}

const getElasticTTPsAPI = (tactics, technique) => {
    console.log(tactics)
    const tac = tactics[tactics] ? tactics[tactics] : 'err'
    const tech = technique.replace(/ /, '+')
    const url = `${host}${index}/_search?q=kill_chain_phases.phase_name:${tac}+AND+name:${tech}`
    console.log(url);
    if (tech === 'err') {
        throw new Error('Invalid Query Parameter')
    }
    else {
        return axios.get(url).then((res) => {
            console.log(res);
            return res.data.hits
        })
    }
    // else {
    //     console.log(ModifyParameter)
    //     return ModifyParameter
    // }
}

export default function useElasticTTPsAPI(tac, tech){
    const [list, setList] = useState([]);
    const [err, setErr] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        setLoading(true);
        getElasticTTPsAPI(tac,tech).then((list)=>{
            // let result = JSON.parse(list.data);
            console.log(list);
            setList(list);
            setLoading(false);
        }).catch((e)=>setErr(e))
        // setLoading(false)
        // setList(getElasticTTPsAPI(tac,tech));
    },[]);
    return {
        list,
        err,
        loading
    }
}