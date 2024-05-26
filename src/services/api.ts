import { QueryOptions } from '../types/query-options'
import { UseQueryReturnType, useQuery, useQueryClient } from 'vue-query'
import { isRef } from 'vue'
import { useAxiosInstance } from './instance'

type ApiType = 'lesson' | 'student' | 'teacher' | 'course' | 'user'

export const useApi = <EntityType = any>(type: ApiType) => {
  const { instance } = useAxiosInstance()
  const queryClient = useQueryClient()

  const getAll = async (options?: QueryOptions) => {
    const { data } = await instance.get<EntityType[]>(`${type}`, {
      params: {
        ...options,
        search: isRef(options?.search)
          ? options?.search?.value
          : options?.search,
      },
    })
    return data
  }

  const getAllReactive = (options?: QueryOptions) =>
    useQuery(
      [type, options],
      async () => {
        const { data } = await instance.get<EntityType[]>(`${type}`, {
          params: {
            ...options,
            search: isRef(options?.search)
              ? options?.search?.value
              : options?.search,
          },
        })
        return data
      },
      { initialData: [] as EntityType[] }
    )

  const getOne = async (id: number, options?: QueryOptions) => {
    const { data } = await instance.get<EntityType>(`${type}/${id}`, {
      params: options,
    })
    return data
  }

  const getOneReactive = (
    id: number,
    options?: QueryOptions
  ): UseQueryReturnType<EntityType, unknown> =>
    useQuery([type, id], async () => {
      const { data } = await instance.get<EntityType>(`${type}/${id}`, {
        params: options,
      })
      return data
    })

  const create = async (body: Partial<EntityType>) =>
    instance.post<EntityType>(`${type}`, body).then(async (res) => {
      await queryClient.invalidateQueries([type])
      return res.data
    })

  const update = async (id: number, body: Partial<EntityType>) =>
    instance.patch<EntityType>(`${type}/${id}`, body).then(async (res) => {
      await queryClient.invalidateQueries([type])
      return res.data
    })

  const updateArray = async (body: Partial<EntityType>[]) =>
    instance.patch<EntityType[]>(`${type}/array`, body).then(async (res) => {
      await queryClient.invalidateQueries([type])
      return res.data
    })

  const remove = async (id: number) =>
    instance
      .delete(`${type}/${id}`)
      .then(async () => await queryClient.invalidateQueries([type]))

  return {
    getAll,
    getAllReactive,
    getOne,
    getOneReactive,
    create,
    update,
    updateArray,
    remove,
  }
}
