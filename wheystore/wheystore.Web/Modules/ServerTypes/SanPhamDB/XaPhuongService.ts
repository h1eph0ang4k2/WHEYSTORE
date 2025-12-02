import { DeleteRequest, DeleteResponse, ListRequest, ListResponse, RetrieveRequest, RetrieveResponse, SaveRequest, SaveResponse, ServiceOptions, serviceRequest } from "@serenity-is/corelib";
import { XaPhuongRow } from "./XaPhuongRow";

export namespace XaPhuongService {
    export const baseUrl = 'SanPhamDB/XaPhuong';

    export declare function Create(request: SaveRequest<XaPhuongRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<XaPhuongRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<XaPhuongRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<XaPhuongRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<XaPhuongRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<XaPhuongRow>>;

    export const Methods = {
        Create: "SanPhamDB/XaPhuong/Create",
        Update: "SanPhamDB/XaPhuong/Update",
        Delete: "SanPhamDB/XaPhuong/Delete",
        Retrieve: "SanPhamDB/XaPhuong/Retrieve",
        List: "SanPhamDB/XaPhuong/List"
    } as const;

    [
        'Create',
        'Update',
        'Delete',
        'Retrieve',
        'List'
    ].forEach(x => {
        (<any>XaPhuongService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}