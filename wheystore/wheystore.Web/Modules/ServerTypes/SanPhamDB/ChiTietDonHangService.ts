import { DeleteRequest, DeleteResponse, ListRequest, ListResponse, RetrieveRequest, RetrieveResponse, SaveRequest, SaveResponse, ServiceOptions, serviceRequest } from "@serenity-is/corelib";
import { ChiTietDonHangRow } from "./ChiTietDonHangRow";

export namespace ChiTietDonHangService {
    export const baseUrl = 'SanPhamDB/ChiTietDonHang';

    export declare function Create(request: SaveRequest<ChiTietDonHangRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<ChiTietDonHangRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<ChiTietDonHangRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<ChiTietDonHangRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<ChiTietDonHangRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<ChiTietDonHangRow>>;

    export const Methods = {
        Create: "SanPhamDB/ChiTietDonHang/Create",
        Update: "SanPhamDB/ChiTietDonHang/Update",
        Delete: "SanPhamDB/ChiTietDonHang/Delete",
        Retrieve: "SanPhamDB/ChiTietDonHang/Retrieve",
        List: "SanPhamDB/ChiTietDonHang/List"
    } as const;

    [
        'Create',
        'Update',
        'Delete',
        'Retrieve',
        'List'
    ].forEach(x => {
        (<any>ChiTietDonHangService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}