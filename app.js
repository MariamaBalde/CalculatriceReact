class Calculatrice extends React.Component {
    constructor(props) {
        super(props);
        this.state = { display: '' }
        this.handleClick = this.handleClick.bind(this);
        this.handleCalculate=this.handleCalculate.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleResetzero = this.handleResetzero.bind(this);
    }

    handleClick(value) {
        this.setState(state => ({ display: state.display + value }))
    }


    handleCalculate() {
        if (this.state.display === '') {
            this.inputRef.current.focus();
            return;
        }

        try {
            this.setState((state) => ({
                display: eval(state.display).toString()
            }));
        } catch (e) {
            this.setState({ display: 'Error' });
        }
    }
    
    // // clear one by one
    handleClear(){
        this.setState((state) => ({ display:state.display.slice(0, -1)}))
    }

    // // clear all :réinitialise l'affichage principal à "0"
    handleResetzero(){
        this.setState(({ display: ""}))
    }

    render() {
        return <div className="container-fluid">
            <div className="row">
                <div className="col-lg-4 col-sm-12 m-auto">
                    <h2 className="text-center text-white mt-2 mb-4">Calculatrice</h2>
                    <div className="card bg-white border border-info-subtle border-5 rounded-3 p-0">
                        <div className="card-header bg-info-subtle">
                            <div className="form-group">
                                <input type="text" className="form-control border border-3" value={this.state.display} autofocus />
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="btn-group d-flex gap-2" role="group" >
                                <button className="btn btn-info text-center rounded-5" onClick={() => this.handleResetzero()}>AC</button>
                                <button className="btn btn-info text-center rounded-5 " onClick={() => this.handleClear()}><i class="fa-solid fa-delete-left"></i></button>
                                <button className="btn btn-info text-center rounded-5" onClick={() => this.handleClick('(')}>(</button>
                                <button className="btn btn-info text-center rounded-5" onClick={() => this.handleClick(')')}>)</button>
                            </div>
                            <div className="btn-group d-flex  gap-2" role="group" >
                                <button className="btn btn-secondary text-center text-dark rounded-5" onClick={() => this.handleClick('7')}>7</button>
                                <button className="btn btn-secondary text-center text-dark rounded-5 " onClick={() => this.handleClick('8')}>8</button>
                                <button className="btn btn-secondary text-center text-dark rounded-5" onClick={() => this.handleClick('9')}>9</button>
                                <button className="btn btn-info text-center rounded-5" onClick={() => this.handleClick('/')}>/</button>
                            </div>
                            <div className="btn-group d-flex  gap-2" role="group" >
                                <button className="btn btn-secondary text-center text-dark rounded-5" onClick={() => this.handleClick('4')}>4</button>
                                <button className="btn btn-secondary text-center text-dark rounded-5 " onClick={() => this.handleClick('5')}>5</button>
                                <button className="btn btn-secondary text-center text-dark rounded-5" onClick={() => this.handleClick('6')}>6</button>
                                <button className="btn btn-info text-center rounded-5" onClick={() => this.handleClick('*')}>x</button>
                            </div>
                            <div className="btn-group d-flex  gap-2" role="group" >
                                <button className="btn btn-secondary text-center text-dark rounded-5" onClick={() => this.handleClick('1')}>1</button>
                                <button className="btn btn-secondary text-center text-dark rounded-5 " onClick={() => this.handleClick('2')}>2</button>
                                <button className="btn btn-secondary text-center text-dark rounded-5" onClick={() => this.handleClick('3')}>3</button>
                                <button className="btn btn-info text-center rounded-5" onClick={() => this.handleClick('-')}>-</button>
                            </div>
                            <div className="btn-group d-flex  gap-2" role="group" >
                                <button className="btn btn-secondary text-center text-dark rounded-5" onClick={() => this.handleClick('0')}>0</button>
                                <button className="btn btn-secondary text-center text-dark rounded-5 " onClick={() => this.handleClick(',')}>,</button>
                                <button className="btn btn-info text-center rounded-5" onClick={() => this.handleCalculate()}>=</button>
                                <button className="btn btn-info text-center rounded-5" onClick={() => this.handleClick('+')}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
ReactDOM.render(<Calculatrice />, document.querySelector('#root'))