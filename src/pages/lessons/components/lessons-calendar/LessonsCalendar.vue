<script lang="ts" setup>
import {
  CalendarOptions,
  DateSelectArg,
  EventClickArg,
} from '@fullcalendar/core/index.js';
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import ruLocale from '@fullcalendar/core/locales/ru';
import { LessonStatusTypes, Lesson } from '@/types/lesson';
import { computed } from 'vue';
import dayjs from 'dayjs';

const { lessons } = defineProps<{
  lessons: Lesson[];
}>();
const emit = defineEmits<{
  //   addTimeslot: [timeslot: Pick<Lesson, 'start' | 'end' | 'type'>]
  //   cancelTimeslot: [id: number]
  //   editTimeslot: [id: number, timeslot: Partial<Timeslot>]
}>();

const getCalendarOptions = (): CalendarOptions => ({
  height: 650,
  plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
  initialView: 'dayGridMonth',
  events: events.value,
  displayEventEnd: true,
  eventTimeFormat: {
    hour: '2-digit',
    minute: '2-digit',
  },
  headerToolbar: {
    left: 'today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay,prev,next',
  },
  locale: ruLocale,
  selectable: true,
  select: onSelect,
  eventClick: onEventClick,
});

const events = computed(() =>
  lessons.map((lesson) => ({
    title: lesson.student.name,
    start: lesson.datetime,
    end: dayjs(lesson.datetime).add(1, 'h').toDate(),
    display: 'block',
    textColor: 'black',
    ...getEventColor(lesson.status),
  })),
);

const getEventColor = (
  lessonStatusType: LessonStatusTypes,
): { backgroundColor: string; borderColor: string } => {
  const options = {
    [LessonStatusTypes.Assigned]: {
      backgroundColor: '#FFFFFF',
      borderColor: '#00FF00',
    },
    [LessonStatusTypes.Canceled]: {
      backgroundColor: '#cc3333',
      borderColor: '#cc3333',
    },
    [LessonStatusTypes.Completed]: {
      backgroundColor: '#00FF00',
      borderColor: '#00FF00',
    },
    [LessonStatusTypes.Rescheduled]: {
      backgroundColor: '#f7cd03',
      borderColor: '#f7cd03',
    },
  };

  return options[lessonStatusType];
};

const onSelect = ({ start }: DateSelectArg) => {
  //   addTimeslotModalVisible.value = true
  //   selectedDate.value = start
};

const onEventClick = ({ event }: EventClickArg) => {
  console.log(event);
};
</script>

<template>
  <full-calendar :options="getCalendarOptions()" />
</template>
