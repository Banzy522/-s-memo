function filterRecords(records, state) {
    let list = [...records];
    
    if (state.search) {
        list = list.filter(r =>
            r.name.toLowerCase().includes(state.search.toLowerCase())
        );
    }
    if (state.person) {
        list = list.filter(r => r.name === state.person);
    }
    if (state.type) {
        list = list.filter(r => r.type === state.type);
    }
    
    if (state.sort === 'new') {
        list.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    if (state.sort === 'old') {
        list.sort((a, b) => new Date(a.date) - new Date(b.date));
    }
    if (state.sort === 'name') {
        list.sort((a, b) => a.name.localeCompare(b.name, 'ja'));
    }
    
    return list;
}