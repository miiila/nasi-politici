import { AppState } from 'store'
import { Result } from './types'

export const getSearchQuery = (store: AppState): string => store.search.query
export const getSearchResults = (store: AppState): Result[] => store.search.results
export const wasSearched = (store: AppState): boolean => store.search.wasSearched
