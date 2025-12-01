import { DeleteRequest, DeleteResponse, ListRequest, ListResponse, RetrieveRequest, RetrieveResponse, SaveRequest, SaveResponse, ServiceOptions, serviceRequest } from "@serenity-is/corelib";
import { KhachHangRow } from "./KhachHangRow";

export namespace KhachHangService {
    export const baseUrl = 'SanPhamDB/KhachHang';

    export declare function Create(request: SaveRequest<KhachHangRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<KhachHangRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<KhachHangRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<KhachHangRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<KhachHangRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<KhachHangRow>>;

    export const Methods = {
        Create: "SanPhamDB/KhachHang/Create",
        Update: "SanPhamDB/KhachHang/Update",
        Delete: "SanPhamDB/KhachHang/Delete",
        Retrieve: "SanPhamDB/KhachHang/Retrieve",
        List: "SanPhamDB/KhachHang/List"
    } as const;

    [
        'Create',
        'Update',
        'Delete',
        'Retrieve',
        'List'
    ].forEach(x => {
        (<any>KhachHangService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}