var ContactList = React.createClass({
    propTypes: {
        items: React.PropTypes.array.isRequired
    },
    
    render: function() {
        var contactList = this.props.items.map(function(contact) {
            return <Contact item={contact} key={contact.id} />
        });

        return (
            <ul className={'contactList'}>
                {contactList}
            </ul>
        );
    }
});