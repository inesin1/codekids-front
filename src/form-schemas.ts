// import { ActionTypes } from '@/types/action-types.enum'
// import { Constants, Managers } from '@/types/constants'
// import {
//   FormItemTypes,
//   FormSchema,
//   SelectOption,
//   SelectOptionGroup
// } from '@/types/form-schema.interface'
// import { ref } from 'vue'
// import _ from 'lodash'
// import { useAmoApi } from '@/services/amoApi'
// import { mapToOptions } from '@/plugins/map'
// import { CustomFieldsEntityTypes } from '@/types/amo-types'
// import { Rule } from '@/types/rule.interface'

// // TODO В зависимости от типа кастомного поля ставить разные инпуты
// // TODO Вывод правил в запустить правило и найти сделки

// export const useFormSchemas = () => {
//   const { getPipelines, getCustomFields, getCustomFieldGroups } = useAmoApi()

//   // Data
//   const managers: SelectOption[] = _.map(
//     APP.constant<Managers>(Constants.Managers),
//     manager => ({
//       value: manager.id,
//       label: manager.title
//     })
//   )
//   const pipelines = ref<SelectOptionGroup[]>(null)
//   const entities = _.map(['Сделка', 'Контакт', 'Компания'], e => ({
//     label: e,
//     value: e
//   }))
//   const taskTypes = [
//     { value: 1, label: 'Звонок' },
//     { value: 2, label: 'Встреча' }
//   ]
//   const customFieldsLeads = ref<SelectOptionGroup[]>(null)
//   const customFieldsContacts = ref<SelectOptionGroup[]>(null)
//   const customFieldsCompanies = ref<SelectOptionGroup[]>(null)
//   const rulesOptions = ref<SelectOption[]>(null)
//   const varHint = 'Вы можете использовать переменные: %name%, %age% и т.д.'

//   const formSchemas = ref<{ [key in ActionTypes]: FormSchema }>({
//     'Создать сделку': {
//       items: [
//         {
//           name: 'name',
//           type: FormItemTypes.Input,
//           label: 'Название',
//           hint: varHint,
//           rules: [
//             {
//               required: true,
//               message: 'Введите наименование!',
//               trigger: 'change'
//             }
//           ]
//         },
//         {
//           name: 'responsible_user_id',
//           type: FormItemTypes.Select,
//           label: 'Ответственный',
//           options: managers,
//           rules: [
//             {
//               required: true,
//               message: 'Выберите ответственного!',
//               trigger: 'change'
//             }
//           ]
//         },
//         {
//           name: 'status_id',
//           type: FormItemTypes.Select,
//           label: 'Статус',
//           optionGroups: pipelines
//         },
//         {
//           name: 'tags',
//           type: FormItemTypes.Tags,
//           label: 'Теги'
//         }
//       ],
//       custom_fields: customFieldsLeads
//     },
//     'Создать контакт': {
//       items: [
//         {
//           name: 'name',
//           type: FormItemTypes.Input,
//           label: 'Название',
//           hint: varHint,
//           rules: [
//             {
//               required: true,
//               message: 'Введите наименование!',
//               trigger: 'change'
//             }
//           ]
//         },
//         {
//           name: 'responsible_user_id',
//           type: FormItemTypes.Select,
//           label: 'Ответственный',
//           options: managers,
//           rules: [
//             {
//               required: true,
//               message: 'Выберите ответственного!',
//               trigger: 'change'
//             }
//           ]
//         },
//         {
//           name: 'tags',
//           type: FormItemTypes.Tags,
//           label: 'Теги'
//         }
//       ],
//       custom_fields: customFieldsContacts
//     },
//     'Создать компанию': {
//       items: [
//         {
//           name: 'name',
//           type: FormItemTypes.Input,
//           label: 'Название',
//           hint: varHint,
//           rules: [
//             {
//               required: true,
//               message: 'Введите наименование!',
//               trigger: 'change'
//             }
//           ]
//         },
//         {
//           name: 'responsible_user_id',
//           type: FormItemTypes.Select,
//           label: 'Ответственный',
//           options: managers,
//           rules: [
//             {
//               required: true,
//               message: 'Выберите ответственного!',
//               trigger: 'change'
//             }
//           ]
//         },
//         {
//           name: 'tags',
//           type: FormItemTypes.Tags,
//           label: 'Теги'
//         }
//       ],
//       custom_fields: customFieldsCompanies
//     },
//     'Создать задачу': {
//       items: [
//         {
//           name: 'entity_id',
//           type: FormItemTypes.Select,
//           label: 'Прикрепить к сущности',
//           options: entities
//         },
//         {
//           name: 'task_type_id',
//           type: FormItemTypes.Select,
//           label: 'Тип задачи',
//           options: taskTypes
//         },
//         {
//           name: 'responsible_user_id',
//           type: FormItemTypes.Select,
//           label: 'Ответственный',
//           options: managers
//         },
//         {
//           name: 'text',
//           type: FormItemTypes.TextArea,
//           label: 'Текст задачи',
//           rules: [
//             {
//               required: true,
//               message: 'Введите текст задачи!',
//               trigger: 'change'
//             }
//           ]
//         },
//         {
//           name: 'complete_till',
//           type: FormItemTypes.TimeInterval,
//           label: 'Дата завершения',
//           rules: [
//             {
//               required: true,
//               message: 'Введите дату завершения!',
//               trigger: 'change'
//             }
//           ]
//         }
//       ]
//     },
//     'Создать примечание': {
//       items: [
//         {
//           name: 'entity_id',
//           type: FormItemTypes.Select,
//           label: 'Прикрепить к сущности',
//           options: entities,
//           rules: [
//             {
//               required: true,
//               message: 'Выберите сущность!',
//               trigger: 'change'
//             }
//           ]
//         },
//         {
//           name: 'text',
//           type: FormItemTypes.TextArea,
//           label: 'Текст примечания',
//           hint: varHint,
//           rules: [
//             {
//               required: true,
//               message: 'Введите текст!',
//               trigger: 'change'
//             }
//           ]
//         }
//       ]
//     },
//     'Запустить правило': {
//       items: [
//         {
//           name: 'rule_id',
//           type: FormItemTypes.Select,
//           label: 'Правило',
//           options: rulesOptions,
//           rules: [
//             {
//               required: true,
//               message: 'Выберите правило!',
//               trigger: 'change'
//             }
//           ]
//         }
//       ]
//     },
//     'Найти сделки': {
//       items: [
//         {
//           name: 'entity_id',
//           type: FormItemTypes.Select,
//           label: 'Сущность',
//           options: _.filter(entities, e => e.label !== 'Сделка'),
//           rules: [
//             {
//               required: true,
//               message: 'Выберите сущность!',
//               trigger: 'change'
//             }
//           ]
//         },
//         {
//           name: 'status_ids',
//           type: FormItemTypes.Multiselect,
//           label: 'Статусы',
//           optionGroups: pipelines,
//           rules: [
//             {
//               required: true,
//               message: 'Выберите статусы!',
//               trigger: 'change'
//             }
//           ]
//         },
//         {
//           name: 'rule_id_find',
//           type: FormItemTypes.Select,
//           label: 'Правило, если сущность найдена',
//           options: rulesOptions
//         },
//         {
//           name: 'rule_id_not_find',
//           type: FormItemTypes.Select,
//           label: 'Правило, если сущность не найдена',
//           options: rulesOptions
//         }
//       ]
//     }
//   })

//   const executeAsync = async () => {
//     // get pipeline
//     const pipelineEntities = await getPipelines()
//     pipelines.value = _.map(pipelineEntities, pipeline => ({
//       label: pipeline.name,
//       options: mapToOptions(pipeline._embedded.statuses)
//     }))

//     // get custom fields
//     const getMappedCustomFields = async (
//       entityType: CustomFieldsEntityTypes
//     ): Promise<SelectOptionGroup[]> => {
//       const entities = await getCustomFields(entityType)
//       const groups = await getCustomFieldGroups(entityType)
//       return _.map(groups, group => ({
//         label: group.name,
//         options: mapToOptions(_.filter(entities, { group_id: group.id }))
//       }))
//     }

//     customFieldsLeads.value = await getMappedCustomFields('leads')
//     customFieldsContacts.value = await getMappedCustomFields('contacts')
//     customFieldsCompanies.value = await getMappedCustomFields('companies')
//   }
//   const loadRules = (rules: Rule[]) =>
//     (rulesOptions.value = mapToOptions(rules))

//   executeAsync()

//   return { formSchemas: formSchemas.value, loadRules }
// }
