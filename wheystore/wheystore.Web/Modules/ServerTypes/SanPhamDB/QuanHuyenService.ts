import { DeleteRequest, DeleteResponse, ListRequest, ListResponse, RetrieveRequest, RetrieveResponse, SaveRequest, SaveResponse, ServiceOptions, serviceRequest } from "@serenity-is/corelib";
import { QuanHuyenRow } from "./QuanHuyenRow";

export namespace QuanHuyenService {
    export const baseUrl = 'SanPhamDB/QuanHuyen';

    export declare function Create(request: SaveRequest<QuanHuyenRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<QuanHuyenRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<QuanHuyenRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<QuanHuyenRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<QuanHuyenRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<QuanHuyenRow>>;

    export const Methods = {
        Create: "SanPhamDB/QuanHuyen/Create",
        Update: "SanPhamDB/QuanHuyen/Update",
        Delete: "SanPhamDB/QuanHuyen/Delete",
        Retrieve: "SanPhamDB/QuanHuyen/Retrieve",
        List: "SanPhamDB/QuanHuyen/List"
    } as const;

    [
        'Create',
        'Update',
        'Delete',
        'Retrieve',
        'List'
    ].forEach(x => {
        (<any>QuanHuyenService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}