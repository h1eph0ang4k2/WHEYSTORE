import { DeleteRequest, DeleteResponse, ListRequest, ListResponse, RetrieveRequest, RetrieveResponse, SaveRequest, SaveResponse, ServiceOptions, serviceRequest } from "@serenity-is/corelib";
import { GioHangRow } from "./GioHangRow";

export namespace GioHangService {
    export const baseUrl = 'SanPhamDB/GioHang';

    export declare function Create(request: SaveRequest<GioHangRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<GioHangRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<GioHangRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<GioHangRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<GioHangRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<GioHangRow>>;

    export const Methods = {
        Create: "SanPhamDB/GioHang/Create",
        Update: "SanPhamDB/GioHang/Update",
        Delete: "SanPhamDB/GioHang/Delete",
        Retrieve: "SanPhamDB/GioHang/Retrieve",
        List: "SanPhamDB/GioHang/List"
    } as const;

    [
        'Create',
        'Update',
        'Delete',
        'Retrieve',
        'List'
    ].forEach(x => {
        (<any>GioHangService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}