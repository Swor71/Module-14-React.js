var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
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
    }
});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));