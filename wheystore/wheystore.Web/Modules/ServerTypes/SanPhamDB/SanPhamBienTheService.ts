import { DeleteRequest, DeleteResponse, ListRequest, ListResponse, RetrieveRequest, RetrieveResponse, SaveRequest, SaveResponse, ServiceOptions, serviceRequest } from "@serenity-is/corelib";
import { SanPhamBienTheRow } from "./SanPhamBienTheRow";

export namespace SanPhamBienTheService {
    export const baseUrl = 'SanPhamDB/SanPhamBienThe';

    export declare function Create(request: SaveRequest<SanPhamBienTheRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<SanPhamBienTheRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<SanPhamBienTheRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<SanPhamBienTheRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<SanPhamBienTheRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<SanPhamBienTheRow>>;

    export const Methods = {
        Create: "SanPhamDB/SanPhamBienThe/Create",
        Update: "SanPhamDB/SanPhamBienThe/Update",
        Delete: "SanPhamDB/SanPhamBienThe/Delete",
        Retrieve: "SanPhamDB/SanPhamBienThe/Retrieve",
        List: "SanPhamDB/SanPhamBienThe/List"
    } as const;

    [
        'Create',
        'Update',
        'Delete',
        'Retrieve',
        'List'
    ].forEach(x => {
        (<any>SanPhamBienTheService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}