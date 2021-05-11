import { v4 as uuid } from 'uuid';
import moment from 'moment';
import {
    Box,
    Button,
    Card,
    CardHeader,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const products = [
    {
        id: 'T0846',
        name: 'Remote System Discovery',
        url: 'https://collaborate.mitre.org/attackics/index.php/Technique/T0846',
        tactics: 'Discovery'
    },
    {
        id: 'T0888',
        name: 'Remote System Information Discovery',
        url: 'https://collaborate.mitre.org/attackics/index.php/Technique/T0888',
        tactics: 'Discovery'
    },
    {
        id: 'T0836',
        name: 'Modify Parameter',
        url: 'https://collaborate.mitre.org/attackics/index.php/Technique/T0836',
        tactics: 'Impair Process Control'
    }
];

const ListofTTPs = (props) => (
    <Card {...props}>
        <CardHeader
            subtitle={`${products.length} in total`}
            title="MITRE ATT&CK for ICS TTPs"
        />
        <Divider />
        <List>
            {products.map((product, i) => (
                <ListItem
                    divider={i < products.length - 1}
                    key={product.id}
                    component='a'
                    href={product.url}
                    target='_blank'
                >
                    {/*<ListItemAvatar>*/}
                    {/*    <img*/}
                    {/*        alt={product.name}*/}
                    {/*        src={product.imageUrl}*/}
                    {/*        style={{*/}
                    {/*            height: 48,*/}
                    {/*            width: 48*/}
                    {/*        }}*/}
                    {/*    />*/}
                    {/*</ListItemAvatar>*/}
                    <ListItemText
                        primary={product.name}
                        secondary={product.tactics}
                    />
                    {/*<IconButton*/}
                    {/*    edge="end"*/}
                    {/*    size="small"*/}
                    {/*>*/}
                    {/*    <MoreVertIcon />*/}
                    {/*</IconButton>*/}
                </ListItem>
            ))}
        </List>
        <Divider />
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                p: 2
            }}
        >
            <Button
                color="primary"
                endIcon={<ArrowRightIcon />}
                size="small"
                variant="text"
            >
                View all
            </Button>
        </Box>
    </Card>
);

export default ListofTTPs;
