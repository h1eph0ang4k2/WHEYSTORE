import { DeleteRequest, DeleteResponse, ListRequest, ListResponse, RetrieveRequest, RetrieveResponse, SaveRequest, SaveResponse, ServiceOptions, serviceRequest } from "@serenity-is/corelib";
import { SanPhamRow } from "./SanPhamRow";

export namespace SanPhamService {
    export const baseUrl = 'SanPhamDB/SanPham';

    export declare function Create(request: SaveRequest<SanPhamRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<SanPhamRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<SanPhamRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<SanPhamRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<SanPhamRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<SanPhamRow>>;

    export const Methods = {
        Create: "SanPhamDB/SanPham/Create",
        Update: "SanPhamDB/SanPham/Update",
        Delete: "SanPhamDB/SanPham/Delete",
        Retrieve: "SanPhamDB/SanPham/Retrieve",
        List: "SanPhamDB/SanPham/List"
    } as const;

    [
        'Create',
        'Update',
        'Delete',
        'Retrieve',
        'List'
    ].forEach(x => {
        (<any>SanPhamService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}