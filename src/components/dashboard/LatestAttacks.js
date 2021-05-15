import PerfectScrollbar from 'react-perfect-scrollbar';
import {
    Box,
    Card,
    CardHeader,
    Chip,
    Dialog,
    Divider,
    Slide,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TablePagination,
} from '@material-ui/core';
import {forwardRef, useEffect, useState} from "react";
import AttackDetail from './AttackDetail';
import useLatestAttackAPI from "../../modules/useLatestAttackAPI";

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const LatestAttacks = (props) => {
    const [open, setOpen] = useState(false);
    const [attack, setAttack] = useState('');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [number, setNumber] = useState(0);
    const {list, err, loading} = useLatestAttackAPI();

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleClickOpen = (attack) => {
        setOpen(true);
        setAttack(attack);
    };
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(()=>{
        setNumber(list.length)
        props.srcIP(list.map((attack)=>attack.SrcIP))
        console.log(list.map((attack)=>attack.SrcIP))
    },[list])

    return (
        <Card>
            <CardHeader title="Attack Records" />
            <Divider />
            <PerfectScrollbar>
                <Box sx={{ minWidth: 800 }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    Timestamp
                                </TableCell>
                                <TableCell>
                                    Source IP
                                </TableCell>
                                <TableCell>
                                    Dest IP
                                </TableCell>
                                <TableCell>
                                    Tactics
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {list &&
                                list.map((attack) => (
                                <TableRow
                                    hover
                                    key={attack.timestamp}
                                    onClick={()=>{handleClickOpen(attack)}}
                                >
                                    <TableCell>
                                        {attack.timestamp}
                                    </TableCell>
                                    <TableCell>
                                        {attack.SrcIP}
                                    </TableCell>
                                    <TableCell>
                                        {attack.DestIP}
                                    </TableCell>
                                    <TableCell>
                                        <Chip
                                            color="primary"
                                            label={attack.Tactics}
                                            size="small"
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
            </PerfectScrollbar>
            <TablePagination
                component="div"
                count={number}
                page={page}
                onChangePage={handleChangePage}
                rowsPerPage={rowsPerPage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AttackDetail close={handleClose} attack={attack}/>
            </Dialog>

        </Card>
    );
}

export default LatestAttacks;
