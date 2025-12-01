import { DeleteRequest, DeleteResponse, ListRequest, ListResponse, RetrieveRequest, RetrieveResponse, SaveRequest, SaveResponse, ServiceOptions, serviceRequest } from "@serenity-is/corelib";
import { SanPhamChiTietRow } from "./SanPhamChiTietRow";

export namespace SanPhamChiTietService {
    export const baseUrl = 'SanPhamDB/SanPhamChiTiet';

    export declare function Create(request: SaveRequest<SanPhamChiTietRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<SanPhamChiTietRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<SanPhamChiTietRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<SanPhamChiTietRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<SanPhamChiTietRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<SanPhamChiTietRow>>;

    export const Methods = {
        Create: "SanPhamDB/SanPhamChiTiet/Create",
        Update: "SanPhamDB/SanPhamChiTiet/Update",
        Delete: "SanPhamDB/SanPhamChiTiet/Delete",
        Retrieve: "SanPhamDB/SanPhamChiTiet/Retrieve",
        List: "SanPhamDB/SanPhamChiTiet/List"
    } as const;

    [
        'Create',
        'Update',
        'Delete',
        'Retrieve',
        'List'
    ].forEach(x => {
        (<any>SanPhamChiTietService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}