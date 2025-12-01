import { DeleteRequest, DeleteResponse, ListRequest, ListResponse, RetrieveRequest, RetrieveResponse, SaveRequest, SaveResponse, ServiceOptions, serviceRequest } from "@serenity-is/corelib";
import { ThuongHieuRow } from "./ThuongHieuRow";

export namespace ThuongHieuService {
    export const baseUrl = 'SanPhamDB/ThuongHieu';

    export declare function Create(request: SaveRequest<ThuongHieuRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<ThuongHieuRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<ThuongHieuRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<ThuongHieuRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<ThuongHieuRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<ThuongHieuRow>>;

    export const Methods = {
        Create: "SanPhamDB/ThuongHieu/Create",
        Update: "SanPhamDB/ThuongHieu/Update",
        Delete: "SanPhamDB/ThuongHieu/Delete",
        Retrieve: "SanPhamDB/ThuongHieu/Retrieve",
        List: "SanPhamDB/ThuongHieu/List"
    } as const;

    [
        'Create',
        'Update',
        'Delete',
        'Retrieve',
        'List'
    ].forEach(x => {
        (<any>ThuongHieuService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}