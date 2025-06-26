import {
    withStyles,
    Typography,
    Divider,
    Paper,
    Button,
    Grid,
} from '@material-ui/core'

import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';

import CartItem from './CartItem';

const styles = theme => ({
    title: {
        minHeight: 50,
    },
    paper: {
        height: `calc(85vh - 210px)`,
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    button: {
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(2),
    },
    cartItemContainer: {
        height: `calc(85vh - 210px - 60px)`,
        overflowY: 'scroll',
    },
    totalText: {
        fontSize: 32,
        fontFamily: 'Roboto',
        margin: 'auto',
    },
    totalTextContainer: {
        minHeight: 60,
    }
});

class Cart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            total: 0,
        };
    }

    componentDidUpdate(prevProps) {
        // TODO-4: calculate total price
        if (prevProps.cartList !== this.props.cartList) {
            const total = this.props.cartList.reduce((sum, item) => {
                return sum + item.amount * this.props.itemPrice[item.name];
            }, 0);
    
            // 防止無限循環
            if (total !== this.state.total) {
                this.setState({ total });
            }
        }
        
    }

    // TODO-7: confirm pay money
    handleConfirm = () => {
        this.props.handleAdjustMoney(-this.state.total)
            .then(msg => {
                alert(msg);
                this.props.handleClearCart();
            })
            .catch(err => alert(err));
    }
    

    render() {
        const { classes, itemPrice, cartList } = this.props;

        return (
            <div>
                <Typography className={classes.title} variant="h4">
                    {"Shopping Cart"}
                </Typography>
                <Divider />
                <Paper className={classes.paper} elevation={3}>
                    <Grid className={classes.cartItemContainer}>
                        {/* TODO-3: use CartItem to show items in cart */}
                        {cartList.map((item, index) => (
                        <CartItem
                            key={index}
                            idx={index}
                            name={item.name}
                            amount={item.amount}
                            handleDeleteCartItem={this.props.handleDeleteCartItem}
                        />
                    ))}

                        {/* hint: map()... */}
                    </Grid>
                    <Divider />
                    <Grid className={classes.totalTextContainer} container>
                        <span className={classes.totalText}>{`Total: $${this.state.total}`}</span>
                    </Grid>
                </Paper>
                <Divider />
                <Grid container justifyContent="flex-end" wrap="nowrap">
                    {/* TODO-7: specify button event handler */}
                    {/* hint: handleConfirm */}
                   <Button
                        className={classes.button}
                        startIcon={<CheckIcon />}
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={this.handleConfirm}
                    >
                        {"Confirm"}
                    </Button>
                    {/* TODO-5: specify button event handler */}

                    {/* hint: handleClearCart */}
                    <Button
                        className={classes.button}
                        startIcon={<ClearIcon />}
                        variant="contained"
                        color="secondary"
                        size="large"
                        onClick={this.props.handleClearCart}  // ✅ 把 onClick 放到這裡才會作用
                    >
                        {"Clear"}
                    </Button>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(Cart);