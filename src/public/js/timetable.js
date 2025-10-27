// Fetch timetable data and render the table
async function loadTimetable() {
    try {
        const response = await fetch('/api/sv/tkb-data');
        const result = await response.json();
        
        if (result.success && result.data) {
            renderTimetable(result.data);
        } else {
            showError('Không có dữ liệu thời khóa biểu');
        }
    } catch (error) {
        console.error('Error loading timetable:', error);
        showError('Lỗi khi tải thời khóa biểu');
    }
}

function showError(message) {
    const tbody = document.getElementById('timetable-body');
    tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; padding: 20px; color: #888;">${message}</td></tr>`;
}

function renderTimetable(data) {
    const tbody = document.getElementById('timetable-body');
    tbody.innerHTML = ''; // Clear loading message
    
    // Days of the week in Vietnamese
    const days = ['', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật'];
    
    // Group data by day
    const dataByDay = {};
    data.forEach(item => {
        const day = item.thuTrongTuan;
        if (!dataByDay[day]) {
            dataByDay[day] = [];
        }
        dataByDay[day].push(item);
    });
    
    // Get current week dates (Monday to Sunday)
    const today = new Date();
    const monday = new Date(today);
    monday.setDate(today.getDate() - today.getDay() + 1);
    
    const weekDates = [];
    for (let i = 0; i < 7; i++) {
        const date = new Date(monday);
        date.setDate(monday.getDate() + i);
        weekDates.push(date.getDate() + '/' + (date.getMonth() + 1));
    }
    
    // Render rows for each day (Monday = 2 to Sunday = 7 in this system)
    for (let day = 2; day <= 8; day++) {
        const row = document.createElement('tr');
        const displayDay = day === 8 ? 1 : day; // Sunday is 1 or 8 depending on system
        
        // Day and date columns
        row.innerHTML = `
            <td>${days[displayDay]}</td>
            <td>${weekDates[displayDay - 2] || weekDates[5]}</td>
            <td id="morning-${day}"></td>
            <td id="afternoon-${day}"></td>
            <td id="evening-${day}"></td>
        `;
        tbody.appendChild(row);
        
        // Fill time slots if data exists for this day
        if (dataByDay[displayDay]) {
            dataByDay[displayDay].forEach(item => {
                const timeSlot = categorizeTimeSlot(item.tietHoc);
                const slotDiv = createSlotDiv(item);
                const slotId = timeSlot + '-' + day;
                const slotCell = document.getElementById(slotId);
                if (slotCell) {
                    slotCell.innerHTML = slotDiv.outerHTML;
                }
            });
        }
    }
}

function categorizeTimeSlot(tietHoc) {
    // Try to parse the time slot
    // Common formats: "Tiết 1-3", "1-3", "Sáng", "Chiều", "Tối"
    const tiet = tietHoc.toLowerCase();
    
    // Check for explicit time of day
    if (tiet.includes('sáng') || tiet.includes('morning')) return 'morning';
    if (tiet.includes('chiều') || tiet.includes('afternoon')) return 'afternoon';
    if (tiet.includes('tối') || tiet.includes('evening') || tiet.includes('night')) return 'evening';
    
    // Try to parse numeric slots
    const match = tiet.match(/\d+/);
    if (match) {
        const slotNum = parseInt(match[0]);
        if (slotNum >= 1 && slotNum <= 6) return 'morning';
        if (slotNum >= 7 && slotNum <= 12) return 'afternoon';
        if (slotNum >= 13) return 'evening';
    }
    
    // Default to morning if can't determine
    return 'morning';
}

function createSlotDiv(item) {
    const slot = document.createElement('div');
    slot.className = 'slot';
    slot.innerHTML = `
        <strong>${item.tenMonHoc}</strong>
        <span>${item.tenLop || ''}</span>
        <span>Phòng: ${item.phongHoc || 'N/A'}</span>
        <span>Tiết: ${item.tietHoc}</span>
    `;
    return slot;
}

// Load timetable when page loads
document.addEventListener('DOMContentLoaded', loadTimetable);

