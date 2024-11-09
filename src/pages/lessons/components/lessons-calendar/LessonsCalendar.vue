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
  'lesson-click': [lesson: Lesson];
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
  select: ({ start }: DateSelectArg) => {
    console.log('Date click', start);
  },
  eventClick: ({ event }: EventClickArg) =>
    emit(
      'lesson-click',
      lessons.find((l) => l.id === +event.id),
    ),
});

const events = computed(() =>
  lessons.map((lesson) => ({
    id: String(lesson.id),
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
</script>

<template>
  <full-calendar :options="getCalendarOptions()" />
</template>
