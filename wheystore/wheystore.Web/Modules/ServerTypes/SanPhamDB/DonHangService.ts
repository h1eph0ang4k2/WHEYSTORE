import { DeleteRequest, DeleteResponse, ListRequest, ListResponse, RetrieveRequest, RetrieveResponse, SaveRequest, SaveResponse, ServiceOptions, serviceRequest } from "@serenity-is/corelib";
import { DonHangRow } from "./DonHangRow";

export namespace DonHangService {
    export const baseUrl = 'SanPhamDB/DonHang';

    export declare function Create(request: SaveRequest<DonHangRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<DonHangRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<DonHangRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<DonHangRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<DonHangRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<DonHangRow>>;

    export const Methods = {
        Create: "SanPhamDB/DonHang/Create",
        Update: "SanPhamDB/DonHang/Update",
        Delete: "SanPhamDB/DonHang/Delete",
        Retrieve: "SanPhamDB/DonHang/Retrieve",
        List: "SanPhamDB/DonHang/List"
    } as const;

    [
        'Create',
        'Update',
        'Delete',
        'Retrieve',
        'List'
    ].forEach(x => {
        (<any>DonHangService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}