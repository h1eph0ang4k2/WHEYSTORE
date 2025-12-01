import { DeleteRequest, DeleteResponse, ListRequest, ListResponse, RetrieveRequest, RetrieveResponse, SaveRequest, SaveResponse, ServiceOptions, serviceRequest } from "@serenity-is/corelib";
import { DanhMucSanPhamRow } from "./DanhMucSanPhamRow";

export namespace DanhMucSanPhamService {
    export const baseUrl = 'SanPhamDB/DanhMucSanPham';

    export declare function Create(request: SaveRequest<DanhMucSanPhamRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<DanhMucSanPhamRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<DanhMucSanPhamRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<DanhMucSanPhamRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<DanhMucSanPhamRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<DanhMucSanPhamRow>>;

    export const Methods = {
        Create: "SanPhamDB/DanhMucSanPham/Create",
        Update: "SanPhamDB/DanhMucSanPham/Update",
        Delete: "SanPhamDB/DanhMucSanPham/Delete",
        Retrieve: "SanPhamDB/DanhMucSanPham/Retrieve",
        List: "SanPhamDB/DanhMucSanPham/List"
    } as const;

    [
        'Create',
        'Update',
        'Delete',
        'Retrieve',
        'List'
    ].forEach(x => {
        (<any>DanhMucSanPhamService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}