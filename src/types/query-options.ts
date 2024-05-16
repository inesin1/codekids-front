import { Ref } from 'vue'

export interface QueryOptions {
  page?: number
  limit?: number
  search?: Ref<string> | string
  with?: string[]
}
