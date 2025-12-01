import { DeleteRequest, DeleteResponse, ListRequest, ListResponse, RetrieveRequest, RetrieveResponse, SaveRequest, SaveResponse, ServiceOptions, serviceRequest } from "@serenity-is/corelib";
import { NhaCungCapRow } from "./NhaCungCapRow";

export namespace NhaCungCapService {
    export const baseUrl = 'SanPhamDB/NhaCungCap';

    export declare function Create(request: SaveRequest<NhaCungCapRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<NhaCungCapRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<NhaCungCapRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<NhaCungCapRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<NhaCungCapRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<NhaCungCapRow>>;

    export const Methods = {
        Create: "SanPhamDB/NhaCungCap/Create",
        Update: "SanPhamDB/NhaCungCap/Update",
        Delete: "SanPhamDB/NhaCungCap/Delete",
        Retrieve: "SanPhamDB/NhaCungCap/Retrieve",
        List: "SanPhamDB/NhaCungCap/List"
    } as const;

    [
        'Create',
        'Update',
        'Delete',
        'Retrieve',
        'List'
    ].forEach(x => {
        (<any>NhaCungCapService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}