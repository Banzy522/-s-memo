function renderStats(records) {
    const unique = [...new Set(records.map(r => r.name))];
    document.getElementById('stats').innerHTML = `
        <div class="stat">件数: ${records.length}件</div>
        <div class="stat">人数: ${unique.length}人</div>
    `;
}

function renderPersonFilter(records) {
    const select = document.getElementById('personFilter');
    const currentSelection = select.value; // 現在の選択を維持
    const people = [...new Set(records.map(r => r.name))].sort((a, b) => a.localeCompare(b, 'ja'));
    
    select.innerHTML = `<option value="">全員</option>` + 
        people.map(p => `<option value="${p}">${p}</option>`).join('');
    
    select.value = currentSelection;
}

function renderRecords(records) {
    const root = document.getElementById('recordList');
    if (!records.length) {
        root.innerHTML = '<div class="card">記録がありません</div>';
        return;
    }
    
    root.innerHTML = records.map(r => `
        <article class="card">
            <div class="card-top">
                <div>
                    <div class="card-name">${r.name} <span style="font-size:12px; font-weight:normal; color:var(--sub);">[${r.type || '未設定'}]</span></div>
                    <div class="card-date">${r.date} ${r.place ? `@ ${r.place}` : ''}</div>
                </div>
                <div class="actions">
                    <button onclick="startEdit(${r.id})">✏️</button>
                    <button onclick="removeRecord(${r.id})">🗑️</button>
                </div>
            </div>
            <div class="card-memo">${r.memo || ''}</div>
        </article>
    `).join('');
}