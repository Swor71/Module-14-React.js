var Counter = React.createClass({

    getDefaultProps() {
        console.log('Gdy nie ustalimy żadnych propsów');
    },

    getInitialState: function() {
        return {
            counter: 0
        };
    },

    componentWillMount() {
        console.log('Przygotowanie do renderowania');
    },

    render: function() {
        return React.createElement('div', {className: 'container'},
            React.createElement('button', { onClick: this.decrement, className: 'btn-sub'}, '-'),
            React.createElement('div', {className: 'counter'}, 
                React.createElement('p', {className: 'counter-text'}, 'Counter: '),
                React.createElement('span', {className: 'counter-number'}, this.state.counter)
            ),
            React.createElement('button', { onClick: this.increment, className: 'btn-add' }, '+')
        );
    },

    componentDidMount() {
        console.log('Po zamontowaniu');
    },

    componentWillReceiveProps() {
        console.log('Gdy komponent otrzymuje nowe właściwości');
    },

    // Wywala błąd o boolean, dlatego w commencie
    //
    // shouldComponentUpdate() {
    //     console.log('boolean czy komponent powinien się przeładować na podstawie poprzedniej metody');
    // },

    componentWillUpdate() {
        console.log('przygotowanie do zmian');
    },

    componentDidUpdate() {
        console.log('po renderze i wprowadzeniu zmian');
    },

    componentWillUnmount() {
        console.log('koniec działania modułu');
    },

    increment: function () {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function () {
        this.setState({
            counter: this.state.counter - 1
        });
    }
});

var element = React.createElement('div', {},
    React.createElement(Counter),
    React.createElement(Counter),
    React.createElement(Counter)
);
ReactDOM.render(element, document.getElementById('app'));