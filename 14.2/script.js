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

var element = 
    React.createElement('div', {}, 
        React.createElement('h1', {}, 'Film list'),
        React.createElement('ul', {}, movieElements)
    );

ReactDOM.render(element, document.getElementById('app'));