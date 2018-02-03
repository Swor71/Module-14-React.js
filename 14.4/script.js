var movie = [
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
    }
];

var movieElements = movie.map(function(movie){
    return React.createElement('li', {key: movie.id}, 
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.descr),
        React.createElement('img', {src: movie.img}, )
    );
});

var Movie = React.createClass({
    propTypes: {
        key: React.PropTypes.object.isRequired,
        title: React.PropTypes.object.isRequired,
        descr: React.PropTypes.object.isRequired,
        img: React.PropTypes.object.isRequired
    },
    
    render: function() {
        return (
            React.createElement('div', {},
                React.createElement('h1', {}, 'Film list'),
                React.createElement('ul', {}, movieElements)
            )
        );
    }
});

var element = React.createElement(Movie, {key: movie.id, title: movie.title, descr: movie.descr, img: movie.img});

ReactDOM.render(element, document.getElementById('app'));
