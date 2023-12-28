<template>
    <div class="attendance-calendar">
        <el-calendar v-model="currentDate" :cell-renderer="renderCell"></el-calendar>
    </div>
</template>
  
<script lang="jsx">
import { ref } from 'vue';

export default {
    name: 'AttendanceCalendar',
    setup() {
        const currentDate = ref(new Date());

        // 示例考勤数据
        const attendanceData = {
            '2023-01-01': { status: '出勤', notes: '正常' },
            '2023-01-02': { status: '迟到', notes: '交通堵塞' },
            '2023-12-27': { status: '早退', notes: '私事' },
            // 更多考勤数据...
        };

        const renderCell = ({ date }) => {
            const formattedDate = formatDate(date);
            const attendance = attendanceData[formattedDate];

            return (
                <div class="cell-content">
                    <span>{date.getDate()}</span>
                    {attendance && (
                        <div class="attendance-info">
                            <span class={`status ${attendance.status}`}>{attendance.status}</span>
                            <span class="notes">{attendance.notes}</span>
                        </div>
                    )}
                </div>
            );
        };

        const formatDate = (date) => {
            const y = date.getFullYear();
            const m = date.getMonth() + 1;
            const d = date.getDate();
            return `${y}-${m.toString().padStart(2, '0')}-${d.toString().padStart(2, '0')}`;
        };

        return { currentDate, renderCell };
    }
};
</script>
  
<style scoped>
.attendance-calendar .cell-content {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.attendance-calendar .attendance-info {
    margin-top: 8px;
}

.attendance-calendar .status {
    font-weight: bold;
}

.attendance-calendar .status.出勤 {
    color: green;
}

.attendance-calendar .status.迟到,
.attendance-calendar .status.早退 {
    color: red;
}

.attendance-calendar .notes {
    font-size: 12px;
}
</style>
  