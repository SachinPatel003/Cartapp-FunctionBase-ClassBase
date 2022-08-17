import React, { Component } from "react";

export default class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: "",
            productPrice: 0,
        };
    }
    render() {
        return (
            <form
                onSubmit={(e) => {e.preventDefault()
                    this.props.AddItem1(this.state.productName, this.state.productPrice);
                }}
                className="container col-8">
                <div className="my-1 row">
                    <label htmlFor="name" className="col-sm-2 col-form-label">
                        Name
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            onChange={(e) => {
                                this.setState({ productName: e.currentTarget.value });
                            }}
                            value={this.state.productName}
                        />
                    </div>
                </div>
                <div className="my-3 row">
                    <label htmlFor="price" className="col-sm-2 col-form-label">
                        Price
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="number"
                            className="form-control"
                            id="price"
                            onChange={(e) => {
                                this.setState({ productPrice: Number(e.currentTarget.value) });
                            }}
                            value={this.state.productPrice}
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">
                    Add
                </button>
            </form>
        )
    }
}
