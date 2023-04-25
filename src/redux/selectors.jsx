export const selectFilter = state => state.filter.value;
export const selectContacts = state => state.contacts.list;

export const selectVisibleContacts = (state) => {    
    const contacts = selectContacts(state)
    const filter = selectFilter(state)

    const filteredContacts = contacts.filter(contact =>
        { return contact.name.toLowerCase().includes(filter.toLowerCase().trim()) })

    return filteredContacts;
}