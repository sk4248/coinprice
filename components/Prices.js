class Prices extends React.Component {
  state = {
    currency: 'USD'
  }

  render() {

    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item">Bitcoin rate for {this.props.bpi.bpi[this.state.currency].description} :  
          <strong>{this.props.bpi.bpi[this.state.currency].rate}</strong>
          <span className="badge badge-primary">{this.props.bpi.bpi[this.state.currency].code}</span>
        </li>
        </ul>
        <br/>
        <select onChange={e => this.setState({currency: e.target.value})} className="form-control">
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
    );
  }
}

export default Prices;