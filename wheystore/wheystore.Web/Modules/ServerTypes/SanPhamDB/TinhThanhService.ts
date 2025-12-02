import { DeleteRequest, DeleteResponse, ListRequest, ListResponse, RetrieveRequest, RetrieveResponse, SaveRequest, SaveResponse, ServiceOptions, serviceRequest } from "@serenity-is/corelib";
import { TinhThanhRow } from "./TinhThanhRow";

export namespace TinhThanhService {
    export const baseUrl = 'SanPhamDB/TinhThanh';

    export declare function Create(request: SaveRequest<TinhThanhRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<TinhThanhRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<TinhThanhRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<TinhThanhRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<TinhThanhRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<TinhThanhRow>>;

    export const Methods = {
        Create: "SanPhamDB/TinhThanh/Create",
        Update: "SanPhamDB/TinhThanh/Update",
        Delete: "SanPhamDB/TinhThanh/Delete",
        Retrieve: "SanPhamDB/TinhThanh/Retrieve",
        List: "SanPhamDB/TinhThanh/List"
    } as const;

    [
        'Create',
        'Update',
        'Delete',
        'Retrieve',
        'List'
    ].forEach(x => {
        (<any>TinhThanhService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}