import { StateTableRow, TableScopes } from "./tables";
import { SearchTransactionsRow } from "./transaction";

export interface SearchTransactionsResponse<T> {
    cursor?: string;
    transactions: Array<SearchTransactionsRow<T>>;
    forked_head_warning?: boolean;
}

export interface StateAbiResponse {
    block_num: string;
    account: string;
    abi: object;
}

export interface StateAbiBinToJsonResponse {
    block_num: string;
    account: string;
    table: string;
    abi: object;
}

export interface StatePermissionLinksResponse {
    up_to_block_id?: string;
    up_to_block_num?: number;
    last_irreversible_block_id?: string;
    last_irreversible_block_num?: number;
    linked_permissions: LinkedPermission[];
}

export interface LinkedPermission {
    contract: string;
    action: string;
    permission_name: string;
}

export interface StateResponse<T> {
    up_to_block_id?: string;
    up_to_block_num?: number;
    last_irreversible_block_id?: string;
    last_irreversible_block_num?: number;
    abi?: number;
    rows: Array<StateTableRow<T>>;
}

export interface MultiStateResponse<T> {
    up_to_block_id?: string;
    up_to_block_num?: number;
    last_irreversible_block_id?: string;
    last_irreversible_block_num?: number;
    abi?: object;
    tables: Array<TableScopes<T>>;
}
