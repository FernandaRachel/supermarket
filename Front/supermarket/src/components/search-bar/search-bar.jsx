
const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
});

class SearchBar extends Component {
    constructor (props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <TextField
                required
                id="outlined-required"
                label="Required"
                type="search"
                defaultValue={this.props.searchText}
                placeholder="Ex: Farinha"
                className={classes.textField}
                margin="normal"
                variant="outlined"
            />);
    }
}
 
export
<TextField
    required
    id=
    "outlined-required"
    label="Required"
    defaultValue="Hello World"
    className={classes.textField}
    margin="normal"
    variant="outlined"
/>
default SearchBar;