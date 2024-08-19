export interface Pagination<T> {
    content: T[]
    totalPages: any
    totalElements: any
    pageSize:any
    pageNumber: number
}
