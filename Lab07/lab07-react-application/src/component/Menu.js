import {
    withStyles,
    Typography,
    Divider,
    Grid,
    Button,
} from '@material-ui/core'

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import MenuItem from './MenuItem'

const styles = theme => ({
    title: {
        minHeight: 50,
    },
    menu: {
        height: '85vh',
    },
    button: {
        marginTop: theme.spacing(2),
    }
});

class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            itemAmount: {
                Burger: 0,
                Fries: 0,
                Nugget: 0,
                Cola: 0,
            }
        };
    }

    // TODO-1: set item amount
    handleSetAmount = (item, amount) => {
        this.setState(prevState => ({
            itemAmount: {
                ...prevState.itemAmount,
                [item]: amount
            }
        }));
    }
    

    // TODO-2: add to shopping cart, remember to set item amount into 0 after adding
    handleAddToCart = () => {
        const newCartItems = Object.entries(this.state.itemAmount)
            .filter(([item, amount]) => amount > 0)
            .map(([item, amount]) => ({ name: item, amount }));
    
        if (newCartItems.length > 0) {
            this.props.handleAddToCart(newCartItems);
            // Reset count
            this.setState({
                itemAmount: {
                    Burger: 0,
                    Fries: 0,
                    Nugget: 0,
                    Cola: 0
                }
            });
        }
    }
    

    render() {
        const { classes, itemPrice } = this.props;

        return (
            <div>
                <Typography className={classes.title} variant="h4">
                    {"Menu"}
                </Typography>
                <Divider />
                <Grid
                    className={classes.menu}
                    container
                    direction="column"
                    justifyContent="space-evenly"
                    alignItems="center">
                    {/* TODO-1: pass handler function to MenuItem */}

                    {/* hint: handleSetAmount */}
                    
                    <Grid item container justifyContent="space-evenly">
                        <MenuItem
                            item="Burger"
                            price={itemPrice.Burger}
                            amount={this.state.itemAmount.Burger}
                            setAmount={this.handleSetAmount}
                        />
                        <MenuItem
                            item="Fries"
                            price={itemPrice.Fries}
                            amount={this.state.itemAmount.Fries}
                            setAmount={this.handleSetAmount}
                        />
                            
                    </Grid>
                        {<Grid item container justifyContent="space-evenly">
                            <MenuItem
                            item="Nugget"
                            price={itemPrice.Nugget}
                            amount={this.state.itemAmount.Nugget}
                            setAmount={this.handleSetAmount}
                        />
                        <MenuItem
                            item="Cola"
                            price={itemPrice.Cola}
                            amount={this.state.itemAmount.Cola}
                            setAmount={this.handleSetAmount}
                        />
                    </Grid>}
                </Grid>
                <Divider />
                <Grid container justifyContent="flex-end">
                    {/* TODO-2: specify button event handler */}
                    {/* hint: handleAddToCart */}
                    <Button
                        className={classes.button}
                        startIcon={<AddShoppingCartIcon />}
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={this.handleAddToCart}  // 🔧 加上這行
                    >
                        {"Add To Cart"}
                    </Button>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(Menu);