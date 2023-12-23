import { ref } from 'vue'
import { Notify } from 'quasar'

/**
 * @example
 * const {run, data, loading} = useAxios({ data: [] })
 *
 * // ... later
 *
 * run(() => axios.get(...))
 * // `loading` will be true until the request is resolved
 * // `data` will be populated with response data
 *
 */
export function useAxios(initialState = {}) {
  const data = ref(initialState.data || null)
  const error = ref(null)
  const loading = ref(initialState.loading || false)

  /**
   * Given an axios call and an optional config, this method is going to:
   * - Populate the data field with the successfull response
   * - Handle any network error
   *
   * @param {Promise} axiosCall axios return value
   * @param {{ notifyOnError: Boolean, blob: Boolean }} config optional
   */
  async function run(axiosCall, config = { notifyOnError: true, blob: false }) {
    loading.value = true

    // make sure the return of the function call is a promise
    // that we can await ont
    if (!axiosCall || !axiosCall.then) {
      throw new Error(`Only axios calls are allowed`)
    }

    // wait for the promise to resolve
    return axiosCall
      .then(async response => {
        let result = response.data

        if (config.blob) data.value = response.data
        else data.value = response.data.content

        return result
      })
      .catch(async e => {
        const err = e.response?.data
        let notificationBody = 'Error: '

        if (Array.isArray(err?.detail)) {
          for (const a of err.detail) {
            notificationBody += `${a.loc[1]}: ${a.msg}, `
          }
        } else {
          notificationBody += `${
            err?.message || 'Something went wrong'
          }`
        }

        if (config.notifyOnError !== false) {
          Notify.create({
            icon: 'cancel',
            textColor: 'negative',
            message: notificationBody,
          })
        }

        error.value = err
        return Promise.reject(e.response)
      })
      .finally(() => {
        loading.value = false
      })
  }

  return {
    run,
    data,
    error,
    loading,
  }
}
