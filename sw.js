const state = {
    records: loadRecords(),
    editingId: null, // 小文字のlから大文字のIに修正
    search: '',
    person: '',
    type: '',
    sort: 'new'
};

const modal = document.getElementById('modal');

function render() {
    const filtered = filterRecords(state.records, state);
    renderStats(filtered);
    renderPersonFilter(state.records);
    renderRecords(filtered);
}

function openModal() {
    modal.classList.remove('hidden');
}

function closeModal() {
    modal.classList.add('hidden');
    state.editingId = null; // 修正
    clearForm();
}

function clearForm() {
    document.getElementById('formDate').value = new Date().toISOString().slice(0, 10);
    document.getElementById('formName').value = '';
    document.getElementById('formPlace').value = '';
    document.getElementById('formMemo').value = '';
    document.getElementById('formType').value = '1on1';
}

function saveRecord() {
    const date = document.getElementById('formDate').value;
    const name = document.getElementById('formName').value.trim();
    
    if (!date || !name) {
        alert('日付と名前を入力してください');
        return;
    }

    const record = {
        id: state.editingId || Date.now(), // 修正
        date: date,
        name: name,
        place: document.getElementById('formPlace').value,
        memo: document.getElementById('formMemo').value,
        type: document.getElementById('formType').value,
        updatedAt: new Date().toISOString()
    };

    if (state.editingId) { // 修正
        state.records = state.records.map(r => r.id === state.editingId ? record : r);
    } else {
        state.records.unshift(record);
    }

    saveRecords(state.records);
    render();
    closeModal();
}

function startEdit(id) {
    const record = state.records.find(r => r.id === id);
    if (!record) return;
    
    state.editingId = id; // 修正
    document.getElementById('formDate').value = record.date;
    document.getElementById('formName').value = record.name;
    document.getElementById('formPlace').value = record.place || '';
    document.getElementById('formMemo').value = record.memo || '';
    document.getElementById('formType').value = record.type || '1on1';
    openModal();
}

function removeRecord(id) {
    if (!confirm('削除しますか？')) return;
    state.records = state.records.filter(r => r.id !== id);
    saveRecords(state.records);
    render();
}

// イベントリスナー設定
document.getElementById('addBtn').addEventListener('click', openModal);
document.getElementById('cancelBtn').addEventListener('click', closeModal);
document.getElementById('saveBtn').addEventListener('click', saveRecord);

document.getElementById('searchInput').addEventListener('input', e => {
    state.search = e.target.value;
    render();
});

document.getElementById('personFilter').addEventListener('change', e => {
    state.person = e.target.value;
    render();
});

document.getElementById('typeFilter').addEventListener('change', e => {
    state.type = e.target.value;
    render();
});

document.getElementById('sortFilter').addEventListener('change', e => {
    state.sort = e.target.value;
    render();
});

// PWA Service Workerの登録
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(err => console.log(err));
}

// 初期化
clearForm();
render();
