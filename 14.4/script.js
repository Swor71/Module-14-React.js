var movies = [
    {   
        id: 1,
        title: 'Film Title',
        descr: 'Film Descr.',
        img: './test.jpg'
    },

    {   
        id: 2,
        title: 'Another Film Title',
        descr: 'Same here but descr.',
        img: './test.jpg'
    },

    {
        id: 3,
        title: 'Film Film Film Title',
        descr: 'Same here but descr.',
        img: './test.jpg'
    }
];

var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired
    },
    render: function () {
        return (
            React.createElement('li', {},
                React.createElement(MovieTitle, {
                    title: this.props.movie.title
                }),
                React.createElement(MovieDescr, {
                    descr: this.props.movie.descr
                }),
                React.createElement('img', {
                    src: this.props.movie.img
                })
            )            
        );
    }
});

var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired
    },
    render: function() {
        return (
            React.createElement('h2', {}, this.props.title)            
        );
    }
});

var MovieDescr = React.createClass({
    propTypes: {
        descr: React.PropTypes.string.isRequired
    },
    render: function() {
        return (
            React.createElement('p', {}, this.props.descr)
        );
    }
});

var MovieList = React.createClass({
    render: function() {
        return (
            React.createElement('ul', {}, movieElements)
        );
    }
});

var movieElements = movies.map(function(movie){
    return (
        React.createElement(Movie, {key: movie.id, movie: movie})
    )
});

var element = React.createElement('div', {},
    React.createElement('h1', {}, 'Film List'),
    React.createElement(MovieList, {})
    );

ReactDOM.render(element, document.getElementById('app'));